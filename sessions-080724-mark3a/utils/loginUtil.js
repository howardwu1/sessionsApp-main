import {
  //Alert,
  Platform,
} from 'react-native';
import { useStore } from 'react-context-hook';
import * as Google from 'expo-google-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import onValueChange from './onValueUtil.js';
import {
  getUsernames,
  getUsernamesOrUseCachedValues,
} from '../utils/userDataUtil.js';

const IOS_CLIENT_ID =
  '222585927316-lsc2c15df09qpqtdr0cft0r2tat4bh3d.apps.googleusercontent.com';
const ANDROID_CLIENT_ID =
  '222585927316-l7u0i85iuu3la1putev56uv5hs4mhikl.apps.googleusercontent.com';

const loginFetch = async (
  username,
  passwrd,
  setLoggedInUser,
  setErrorMsg,
  rememberMe,
  lambda
) => {
  //test account login should be "test2"
  //test account password should be "meh"

  const lambdaParams = {
    FunctionName: 'my-function-go-jwt',
    InvocationType: 'RequestResponse',
    LogType: 'Tail',
    Payload: `{"Body": "{\\"login\\":\\"${username}\\", \\"Password\\": \\"${passwrd}\\"}"}`,
  };

  //need to modify this logic to do the things the commented code below does
  //promise is needed to make the invoke return the promise (so I can use "then" in the login code)
  return lambda
    .invoke(lambdaParams).promise().then((data) => {
      
        const results = JSON.parse(data.Payload);
        // console.log("results", results);

        if (results.statusCode === 200) {
          setLoggedInUser(username);
          onValueChange.onChange('token', results.body);
          if (rememberMe) {
            AsyncStorage.setItem('rememberedUser', username);
          }
        }

        if (results.statusCode === 403){
           setErrorMsg(`Username and/or password incorrect!`)
        }
          
          getUsernames(lambda)


      
    }).catch((error) => {
      console.log(error);
    });

    //.promise();

  // fetch("https://taco-loco.howardwu2.repl.co/authenticate", {
  //                   method: "POST",
  //                   headers: {
  //                     'Accept': 'application/json',
  //                     'Content-Type': 'application/json'
  //                   },
  //                   body: JSON.stringify({
  //                     username: username,
  //                     password: passwrd,
  //                   })
  //                 })

  //                   .then((response) => response.json())
  //                   .then((responseData) => {
  //                     responseData.error ?
  //                       Alert.alert('Password incorrect') :
  //                       (alert(), onValueChange.onChange("token", responseData.token), rememberMe ? AsyncStorage.setItem("rememberedUser", username): null,  setLoggedInUser(username), navigation.push('Home'))
  //                   })
  //                   .done()
};

const signInWithGoogle = async (
  testbool,
  setApiToken,
  onSignIn,
  setAppID,
  setLoggedInUser,
  updateErrModalFunc,
  updateSuccessFunc,
  lambda,
  navigation = null,
  setShowMenuBool = null
) => {
  try {
    const result = await Google.logInAsync({
      iosClientId: IOS_CLIENT_ID,
      androidClientId: ANDROID_CLIENT_ID,
      scopes: [
        'profile',
        'email',
        'https://www.googleapis.com/auth/drive.file',
      ],
      //scopes: ['profile', 'email', 'https://www.googleapis.com/auth/drive','https://www.googleapis.com/auth/drive.file','https://www.googleapis.com/auth/drive.metadata'],
    });

    if (result.type === 'success') {
      setApiToken(result.accessToken);
      if (testbool !== true) {
        onSignIn(
          result.idToken,
          result.user.email,
          setAppID,
          setLoggedInUser,
          updateErrModalFunc,
          lambda,
          navigation,
          setShowMenuBool
        );
      } else {
        updateSuccessFunc('Login Success!');
        setLoggedInUser(result.user.email);
      }
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    console.log('Error with login', e);
    return { error: true };
  }
};

const onSignIn = (
  id_token,
  email,
  setAppID,
  setLoggedInUser,
  updateErrModalFunc,
  lambda,
  navigation = null,
  setShowMenuBool = null
) => {
  //is this even used? test and comment it out
  setAppID(Platform.OS === 'ios' ? IOS_CLIENT_ID : ANDROID_CLIENT_ID);

  const lambdaParams = {
    FunctionName: 'my-function-go-dynamoGoogleToken',
    InvocationType: 'RequestResponse',
    LogType: 'Tail',
    Payload: `{"Headers":{"Authorization":"Bearer ${id_token}"}}`,
  };

  lambda
    .invoke(lambdaParams).promise().then((data) => JSON.parse(data.Payload))
       .then((responseData) => {

            responseData.statusCode === 403 ? navigation.navigate('ProfileCreation', {lambda: lambda, username: email, passwrd: "", setShowMenuBool: setShowMenuBool}) : 
        (onValueChange.onChange('token', responseData.body),
          setLoggedInUser(email),
          getUsernames(lambda));
    })
    .catch((error) => {
      console.log(error);
    });

  //need to swap this out with a go function that takes google token sign in -- then returns my own jwt token
  /*
    fetch('https://taco-loco.howardwu2.repl.co/tokensignin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'idTokenString=' + id_token,
    })
      .then((response) => response.json())
      .then((responseData) => {
        responseData.error && responseData.error === 'Unprocessable Entity'
          ? updateErrModalFunc(
              responseData.error + "Google couldn't authenticate token"
            )
          : (updateSuccessFunc('Login Success!'),
            onValueChange.onChange('token', responseData.token),
            onValueChange.onChange('googletoken', id_token),
            setLoggedInUser(googleUser.user.email))
      })
      .done();
      */
};

export { loginFetch, signInWithGoogle, onSignIn };

