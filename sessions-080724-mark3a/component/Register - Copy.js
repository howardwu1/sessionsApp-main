import React, { useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Alert,
  KeyboardAvoidingView,
  Dimensions,
  Switch,
  CheckBox,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input } from 'react-native-elements';
import { NotificationSpacer } from './NotificationBarSpacer';
import { useStore } from 'react-context-hook';
import loginFunction from '../utils/loginUtil.js';
import { Platform, NativeModules } from 'react-native';
import GoogleSignInButton from './GoogleSignInButton';
import * as Google from 'expo-google-app-auth';
import Svg, { Circle, Line, Text as TextSvg, Style } from 'react-native-svg';
import onValueChange from '../utils/onValueUtil.js';

const { StatusBarManager } = NativeModules;
//todo when registering -- log in with new account
//todo fix this bug where it just shuts down 
export function Register(props) {

  const [username, setUsername] = useState(null);
  const [passwrd, setPasswrd] = useState(null);
  const [passwrdConfirm, setPasswrdConfirm] = useState(null);
  const [loggedInUser, setLoggedInUser] = useStore('loggedInUser');
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [role, setRole] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  const [appID, setAppID] = useStore('appID');
  const [apiToken, setApiToken] = useStore('apiToken');
  const IOS_CLIENT_ID =
    '222585927316-lsc2c15df09qpqtdr0cft0r2tat4bh3d.apps.googleusercontent.com';
  const ANDROID_CLIENT_ID =
    '222585927316-l7u0i85iuu3la1putev56uv5hs4mhikl.apps.googleusercontent.com';
  
  
  const signInWithGoogle = async (testbool) => {
    try {
      const result = await Google.logInAsync({
        iosClientId: IOS_CLIENT_ID,
        androidClientId: ANDROID_CLIENT_ID,
        scopes: ['profile', 'email', 'https://www.googleapis.com/auth/drive.file'],
        //scopes: ['profile', 'email', 'https://www.googleapis.com/auth/drive','https://www.googleapis.com/auth/drive.file','https://www.googleapis.com/auth/drive.metadata'],
      });

      if (result.type === 'success') {
        setApiToken(result.accessToken);
        //console.log(result.accessToken);
        if(testbool !==true){
          onSignIn(result);
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


  
  const onSignIn = (googleUser) => {
    var id_token = googleUser.idToken;
    setAppID(Platform.OS ==='ios'? IOS_CLIENT_ID: ANDROID_CLIENT_ID);

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
          ? Alert.alert(
              responseData.error + "Google couldn't authenticate token"
            )
          : (alert('Login Success!'),
            onValueChange.onChange('token', responseData.token),
            setLoggedInUser(googleUser.user.email),
            props.navigation.push('Home')); //after Google login redirect to Home)
      })
      .done();
  };

  // const registerAccount = () => {
  //   if (!username) {
  //     Alert.alert('Please enter a username');
  //   } else if (passwrd !== passwrdConfirm) {
  //     Alert.alert('Passwords do not match');
  //   } else if (!passwrd) { 
  //     Alert.alert('Please enter a password');
  //   } 
  //     else {
  //     AsyncStorage.getItem(username, (err, result) => {
  //       if (result !== null) {
  //         Alert.alert(`${username} already exists`);
  //       } else {
  //         AsyncStorage.setItem(username, passwrd).then(
  //           () => {
  //                 setLoggedInUser(username);
  //                 Alert.alert(`${username} account created`);
  //                 props.navigation.navigate('Home');
  //               }
  //             );
            
  //       }
  //     })}
  // };
    //  const onValueChange = async (item, selectedValue) => {
    //     try {
    //       await AsyncStorage.setItem(item, selectedValue);
    //     } catch (error) {
    //       console.log('AsyncStorage error: ' + error.message);
    //     }
    //  }


  const registerAccount = () => {
    if (!username) {
      Alert.alert('Please enter a username');
    } else if (passwrd !== passwrdConfirm) {
      Alert.alert('Passwords do not match');
    } else if (!passwrd) { 
      Alert.alert('Please enter a password');
    } 
    else {
      fetch("https://taco-loco.howardwu2.repl.co/register", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: passwrd,
        matchingPassword: passwrdConfirm,
        firstName: firstName,
        lastName: lastName,
        role: role
      })
    }).then((response) => {
      //need to comma separate every statement here -- don't do curly braces with semi colons
      response.status===422 ? Alert.alert('Username already exists') :
      loginFunction.loginFetch(username,passwrd,() => Alert.alert('Account registered successfully'),(name) => setLoggedInUser(name), props.navigation)
      
      // fetch("https://taco-loco.howardwu2.repl.co/authenticate", {
      //     method: "POST",
      //     headers: {
      //       'Accept': 'application/json',
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify({
      //       username: username,
      //       password: passwrd,
      //     })
      //   })
      //   .then((response) => response.json())
      //   .then((responseData) => {
      //     responseData.error ?
      //       Alert.alert('Password incorrect') : 
      //       (Alert.alert('Account registered successfully'),onValueChange("token", responseData.token),setLoggedInUser(username)
      //       )
      //   }).done();
      }
        
    ).done();
  
    }
  }
  const [height, setHeight] = useState(Dimensions.get('window').height);



/*the code below keeps the screen from shifting up when the soft keyboard comes up when you click on a text box -- basically minHeight set it to the height of the screen and do flex 1!*/
//need to fix minheight stuff to work with function components

     return (
    <View style={styles.container}>

      <GoogleSignInButton onPress={() => signInWithGoogle(false)} style={{marginTop:80}}>
        Sign-In with Google
      </GoogleSignInButton>

        <Svg height="100" width="100" >

      <Line x1="10" y1="50" x2="90" y2="50" style={{stroke:'#B2B2B2', strokeWidth:'3'}} />
       
          <Circle
            cx="50"
            cy="50"
            r="25"
            stroke="#B2B2B2"
            strokeWidth="0.4"
            fill="#B2B2B2"
          />

           <TextSvg
            fill="white"
            fontSize="16"
            fontWeight="bold"
            fontFamily="sans-serif"
            x="50"
            y="55"
            textAnchor="middle"
          >OR</TextSvg>
     </Svg>  
    
      <Input
        placeholder = {"Username/Email"}
        onChangeText={(text) => setUsername(text)}
        value={username}
        inputContainerStyle={{width:'85%', alignSelf:'center'}}
      />

      <Input
        placeholder = {"Password"}
        onChangeText={(text) => setPasswrd(text)}
        value={passwrd}
        secureTextEntry={true}
        inputContainerStyle={{width:'85%', alignSelf:'center'}}
      />

      <Input
        placeholder = {"Confirm Password"}
        onChangeText={(text) => setPasswrdConfirm(text)}
        value={passwrdConfirm}
        secureTextEntry={true}
        inputContainerStyle={{width:'85%', alignSelf:'center'}}
      />

   
      {/*
            okay needed to comment this out cause react native elements does not have working icons for snack anymore
            <SocialIcon
              title="Sign In With Google"
              button
              type="google"
              onPress = {() => signInWithGoogle()}
            />
            */}

        <TouchableHighlight onPress={() =>  registerAccount()} style={{width:'100%', backgroundColor:'#B2B2B2',paddingTop: 15, paddingBottom:15, marginTop:15, justifyContent: 'center'}} underlayColor="#31e981">
        <Text style={{fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>CREATE ACCOUNT</Text>
      </TouchableHighlight>
    <Input
            style={styles.inputs}
            onChangeText={(text) => setFirstName(text)}
            value={firstName}
          />
          <Text style={styles.label}>Enter First Name</Text>

        
           <Input
            style={styles.inputs}
            onChangeText={(text) => setLastName(text)}
            value={lastName}
          />
          <Text style={styles.label}>Enter Last Name</Text>


          <Input
            style={styles.inputs}
            onChangeText={(text) => setRole(text)}
            value={role}
          />
          <Text style={styles.label}>Enter Job Role</Text>

          <TouchableHighlight
            onPress={() => registerAccount()}
            underlayColor="#31e981">
            <Text style={styles.buttons}>Register</Text>
          </TouchableHighlight>


      
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    maxWidth: '90%',
    paddingBottom:15,
  },
  rememberText: {
    fontSize: 16,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight:10,
  },
  rememberTextWeb:{
    fontSize:16,
    paddingLeft:10,
    paddingTop: 10,
  },
  buttons: {
    marginTop: 15,
    fontSize: 16,
  },
});

  
