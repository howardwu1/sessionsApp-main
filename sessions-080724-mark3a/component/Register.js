import React, { useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  KeyboardAvoidingView,
  Dimensions,
  Switch,
  CheckBox,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input } from 'react-native-elements';
import { NotificationSpacer } from './NotificationBarSpacer';
import { useStore } from 'react-context-hook';
import {loginFetch, signInWithGoogle, onSignIn} from '../utils/loginUtil.js';
import { Platform, NativeModules } from 'react-native';
import {GoogleSignInButton} from './GoogleSignInButton';
import * as Google from 'expo-google-app-auth';
import Svg, { Circle, Line, Text as TextSvg, Style } from 'react-native-svg';
import onValueChange from '../utils/onValueUtil.js';
import FlatList from './FlatList';
import {MyDialog} from './MyDialog';


const { StatusBarManager } = NativeModules;
//todo when registering -- log in with new account
//todo fix this bug where it just shuts down 
export default function Register (props) {
 const [username, setUsername] = useState('');
  const [passwrd, setPasswrd] = useState('');
  const [passwrdConfirm, setPasswrdConfirm] = useState('');
  const [loggedInUser, setLoggedInUser] = useStore('loggedInUser');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [appID, setAppID] = useState('appID');
  const [apiToken, setApiToken] = useState('apiToken');
  const IOS_CLIENT_ID =
    '222585927316-lsc2c15df09qpqtdr0cft0r2tat4bh3d.apps.googleusercontent.com';
  const ANDROID_CLIENT_ID =
    '222585927316-l7u0i85iuu3la1putev56uv5hs4mhikl.apps.googleusercontent.com';
  
    const [errorMsg,setErrorMsg] = useState('');
    const [statusMsg,setStatusMsg] = useState('');

      const dataSource = [
       <View id ={0} style={styles.container}>

      <GoogleSignInButton  style={{marginTop: 30}} setLoggedInUser = {setLoggedInUser} updateErrModalFunc = {setErrorMsg} updateSuccessFunc = {setStatusMsg} lambda = {props.lambda} navigation= {props.navigation} setShowMenuBool= {props.setShowMenuBool} >
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
        autoCapitalize = "none"
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


       <TouchableHighlight onPress={() =>  registerAccount()} style={{width:'100%', backgroundColor:'#B2B2B2',paddingTop: 15, paddingBottom:15, marginTop:15, justifyContent: 'center'}} underlayColor="#31e981">
        <Text style={{fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>CREATE ACCOUNT</Text>
      </TouchableHighlight>
      
    </View>
      
      ]
      
     const registerAccount = () => {
    if (!username) {
      setErrorMsg('Please enter a username');
    } else if (passwrd !== passwrdConfirm) {
      setErrorMsg('Passwords do not match');
    } else if (!passwrd) { 
      setErrorMsg('Please enter a password');
    } 
    else {
      //need to navigate to my screen 
      props.navigation.navigate('ProfileCreation', {lambda: props.lambda, googleSignInTest:  props.googleSignInTest, username: username, passwrd: passwrd, setShowMenuBool: props.setShowMenuBool})

   /*       const lambdaParams = {
                 FunctionName : 'my-function-go-dynamoreg-basic',
                 InvocationType : 'RequestResponse',
                 LogType : 'Tail',
                 Payload:`{"Body": "{\\"login\\":\\"${username}\\", \\"Password\\": \\"${passwrd}\\"}"}`,
                
              }; 

        //need to modify this logic to do the things the commented code below does   
        //promise is needed to make the invoke return the promise (so I can use "then" in the login code)
    props.lambda.invoke(lambdaParams, function(err, data) {
         if (err) {
            console.log("error with register", err);
            //return err;
         } else {
            const results = JSON.parse(data.Payload);
            console.log("results", results);
            //return results;
         }
      }).promise().then((response) => {

      // fetch("https://taco-loco.howardwu2.repl.co/register", {
      // method: "POST",
      // headers: {
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/json'
      // },
      // body: JSON.stringify({
      //   username: username,
      //   password: passwrd,
      //   matchingPassword: passwrdConfirm,
      //   firstName: firstName,
      //   lastName: lastName,
      //   role: role
      // })
    //}).then((response) => {
      //need to comma separate every statement here -- don't do curly braces with semi colons
      //() => Alert.alert('Account registered successfully')
      JSON.parse(response.Payload).statusCode === 403? setErrorMsg('Username already exists') :
      (setStatusMsg("Account registered successfully"), loginFetch(username,passwrd,(name) => setLoggedInUser(name), props.navigation, false, props.lambda).then(data => {
        //this code should never be reached if the registration went okay 
          if (JSON.parse(data.Payload).statusCode === 403){
            setErrorMsg(`Username and/or password incorrect!`)
          }
      
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
        
    ).done())
  
    }).done();
*/
  }


     }
    return (
      <>
      <MyDialog
        visible = {errorMsg !== ''}
        hide = {() => setErrorMsg('') } 
        title={errorMsg}
        />

        <MyDialog
            visible = {statusMsg!==''}
            title={statusMsg}
            hide = {()=>{setStatusMsg('');  props.setShowMenuBool(true)}}
          />
      <FlatList
        passedRef={props.passedRef}
        style={styles.wrapper}
        data={dataSource}
        keyExtractor={(item) => item.props.id.toString()}
        tabRoute={props.route.key}
        renderItem={({item}) => (     
           item
        )}
      />
      </>
    );
  
}

const styles = StyleSheet.create({
  wrapper: {

  },
    container: {
    alignItems: 'center',
  }
})
