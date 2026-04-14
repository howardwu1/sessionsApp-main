import React, { useState, useEffect, useReducer } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
  Switch,
  CheckBox,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
//import Checkbox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import CheckBox from '@react-native-community/checkbox';
import { Input } from 'react-native-elements';
import { NotificationSpacer } from './NotificationBarSpacer';
import { useStore } from 'react-context-hook';
import {loginFetch, signInWithGoogle, onSignIn} from '../utils/loginUtil.js';
import {getUsernames, getUsernamesOrUseCachedValues} from '../utils/userDataUtil.js';
import * as Google from 'expo-google-app-auth';
import {GoogleSignInButton} from './GoogleSignInButton';
import onValueChange from '../utils/onValueUtil.js';
import { Platform, NativeModules } from 'react-native';
import Svg, { Circle, Line, Text as TextSvg, Style } from 'react-native-svg';
import FlatList from './FlatList';
import * as WebBrowser from 'expo-web-browser';
import * as GoogleSess from 'expo-auth-session/providers/google';
import { MyDialog } from './MyDialog';
import jwt_decode from 'jwt-decode'; 
import moment from 'moment';

//todo: change out the google logo because react-native-elements doesn't work anymore
//todo: get remember me function to work again -- store the token and reauthenticate -- I think I already store the token. I just changed the code, need to functionally test
//WebBrowser.maybeCompleteAuthSession();

const { StatusBarManager } = NativeModules;


export function Login (props) {
 const [header, setHeader] = useState(null);
  const [username, setUsername] = useState('');
  const [passwrd, setPasswrd] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loggedInUser, setLoggedInUser] = useStore('loggedInUser');
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);
  const [user, setUser] = useState(null);
  const [errorMsg,setErrorMsg] = useState("");
  const [statusMsg,setStatusMsg] = useState("");

  const IOS_CLIENT_ID =
    '222585927316-lsc2c15df09qpqtdr0cft0r2tat4bh3d.apps.googleusercontent.com';
  const ANDROID_CLIENT_ID =
    '222585927316-l7u0i85iuu3la1putev56uv5hs4mhikl.apps.googleusercontent.com';

  const [apiToken, setApiToken] = useStore('apiToken');
  //I don't think I use this reducer code anyway?
  //const [test, setTest] = useReducer((state)=> {return state}, false);
  const [appID, setAppID] = useStore('appID');
  
  const [passwrdConfirm,setPasswrdConfirm] = useStore('');
  
  //  const [request, response, promptAsync] = GoogleSess.useAuthRequest({
  //   responseType: 'id_token',
  //   expoClientId: '222585927316-dp43c5ekqdkm8sbk2p4k33uqn3ug3l89.apps.googleusercontent.com',
  //   iosClientId: '222585927316-lsc2c15df09qpqtdr0cft0r2tat4bh3d.apps.googleusercontent.com',
  //   androidClientId: '222585927316-l7u0i85iuu3la1putev56uv5hs4mhikl.apps.googleusercontent.com',
  //   webClientId: '222585927316-pqvqfs0atns52apevh10lk3dhrgj7nm3.apps.googleusercontent.com',
  // });

      const dataSource = [
       <View id={0} style={styles.container}>

 {/*onPress={()=>hybridGoogleSignIn()}>
 */}
      <GoogleSignInButton  style={{marginTop: 30}} 
      setLoggedInUser = {setLoggedInUser} updateErrModalFunc = {setErrorMsg} updateSuccessFunc = {setStatusMsg} lambda = {props.lambda} navigation= {props.navigation} setShowMenuBool= {props.setShowMenuBool} googleSignInTest = {props.googleSignInTest}>
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
        inputContainerStyle={{width:'85%', alignSelf:'center'}}
        onChangeText={value => setUsername(value)}
        autoCapitalize = "none"
      />

      <Input
        placeholder = {"Password"}
        secureTextEntry={true}
        inputContainerStyle={{width:'85%', alignSelf:'center'}}
        onChangeText={value => setPasswrd(value)}
      />

      <View style={styles.checkboxContainer}>
        {
          Platform.OS === 'android' || Platform.OS ==='web' ? (
            //if true
            
            <CheckBox
              value={rememberMe}
              style={{marginTop:15}}
              onValueChange={()=> setRememberMe(!rememberMe)}
            />
            
          ) : (
            
            <Switch
              style={styles.buttons}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={rememberMe ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setRememberMe(!rememberMe)}
              value={rememberMe}
            />
          )}
   <Text style={styles.rememberText}>
          Remember me (not recommended on public devices){' '}
        </Text>
      </View>
            <TouchableHighlight
        onPress={() => loginUserTest()}
        underlayColor="#31e981"
        >
        <Text style={styles.buttons}>Test Login</Text>
      </TouchableHighlight>
        <TouchableHighlight 
        onPress={() => loginUser()} style={{width:'100%', backgroundColor:'#B2B2B2',paddingTop: 15, paddingBottom:15, marginTop:15, justifyContent: 'center'}} underlayColor="#31e981">
        <Text style={{fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>GO</Text>
      </TouchableHighlight>
        </View>
      ]

// useEffect(() => {


//     if (response?.type === 'success') {
      
//      const { params } = response;
//             console.log("idToken: ",params.id_token);
            
//             var decoded = jwt_decode(params.id_token);

//             console.log("decoded ", decoded);

//             onSignIn(params.id_token, decoded.email, setAppID,((user) => {setStatusMsg(`${user} logged in`); setLoggedInUser(user); }) , updateErrModalFunc, props.lambda, props.navigation, props.setShowMenuBool)

//       }
//   }, [response]);
      
    // const updateErrModalFunc = (message) =>{     
    //   setErrorMsg(message);
    // }

    // const updateSuccessFunc = (message) => {
    //   setStatusMsg(message);
    // }

      // const hybridGoogleSignIn = async() =>{
        
      //   if (Platform.OS ===('web')){
      //     promptAsync()
      //    }
      //    else{
      //    signInWithGoogle(props.googleSignInTest, setApiToken, onSignIn, setAppID, ((user) => {setStatusMsg(`${user} logged in`); setLoggedInUser(user); }), updateErrModalFunc, updateSuccessFunc, props.lambda, props.navigation, props.setShowMenuBool);
      //    }
      // }

  
  // const cancelLogin = () => {
  //   Alert.alert('Login cancelled');
  //   props.navigation.navigate('Home');
  // };

  const registerUser = () => {
    props.navigation.navigate('Register');
  };

  const loginUserTest = () => {
    //setTest(false);
    setLoggedInUser('test');

    setStatusMsg("test logged in");
    
  };

  const loginUser = async() => {

    if (username.trim() === '') {
      setErrorMsg('Please enter a username');
      //Alert.alert('Please enter a username');
    } else if (passwrd === '') {
      setErrorMsg('Please enter a password');
    } else {

      // if (loggedInUser !== null) {
      //   Alert.alert('Someone already logged on');

      //   props.navigation.navigate('Home');
      // } else {
        //NOTE: I will need to test when I connect this to the Go backend for sure
       loginFetch(
          username.trim(),
          passwrd,
          (user) => {setLoggedInUser(user); setStatusMsg(`${user} logged in`);},
          setErrorMsg,
          rememberMe,
          props.lambda
        );
        
        // fetch("https://taco-loco.howardwu2.repl.co/authenticate", {
        //   method: "POST",
        //   headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({
        //     username: username,
        //     password: passwrd,
        //   })
        // })
        // .then((response) => response.json())
        // .then((responseData) => {
        //   responseData.error ?
        //     (Alert.alert('Password incorrect')) :
        //     (Alert.alert(
        //     "Login Success!"),onValueChange("token", responseData.token),                              setLoggedInUser(username), props.navigation.push('Home')
        //     )
        // })
        // .done();
      //}
      // AsyncStorage.getItem(username, (err, result) => {

      //     if (result !== null){

      //         if(result !== passwrd) {
      //             Alert.alert('Password incorrect')
      //         }
      //         else {
      //             if(rememberMe === true){
      //               AsyncStorage.setItem("rememberedUser", username);
      //             }
      //             else{
      //               AsyncStorage.removeItem("rememberedUser");
      //             }
      //             setLoggedInUser(username);
      //             Alert.alert(`${username} Logged in`);
      //             props.navigation.push('Home');
      //         }

      //     }
      //     else{
      //         Alert.alert(`No account for ${username}`);
      //     }
      // })
    }
  };

    return (
      <>
      
            <MyDialog
              visible = {errorMsg !== ""}
              hide = {() => setErrorMsg("") } 
              title={errorMsg}
              />

          <MyDialog
            visible = {statusMsg!==""}
            title={statusMsg}
            hide = {()=>{setStatusMsg("");  props.setShowMenuBool(true)}}
          />


      <FlatList
        passedRef={props.passedRef}
        style={styles.wrapper}
        data={dataSource}
        scrollEnabled = {false}
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
  item: {
    height: 150,
    shadowColor: 'rgb(75, 89, 101)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1
  },
    container: {
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    maxWidth: '95%',
    paddingBottom:15,
    paddingLeft:10,
    paddingRight:10   
  },
  rememberText: {
    fontSize: 16,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight:10,
  },
  buttons: {
    marginTop: 15,
    fontSize: 16,
  },
})
