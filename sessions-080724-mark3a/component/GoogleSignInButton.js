import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View,  Platform, NativeModules } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as GoogleSess from 'expo-auth-session/providers/google';
import {loginFetch, signInWithGoogle, onSignIn} from '../utils/loginUtil.js';
import { useStore } from 'react-context-hook';
import jwt_decode from 'jwt-decode'; 

WebBrowser.maybeCompleteAuthSession();

export function GoogleSignInButton(props) {
  const [appID, setAppID] = useStore('appID');
const [apiToken, setApiToken] = useStore('apiToken');

   const [request, response, promptAsync] = GoogleSess.useAuthRequest({
    responseType: 'id_token',
    expoClientId: '222585927316-dp43c5ekqdkm8sbk2p4k33uqn3ug3l89.apps.googleusercontent.com',
    iosClientId: '222585927316-lsc2c15df09qpqtdr0cft0r2tat4bh3d.apps.googleusercontent.com',
    androidClientId: '222585927316-l7u0i85iuu3la1putev56uv5hs4mhikl.apps.googleusercontent.com',
    webClientId: '222585927316-pqvqfs0atns52apevh10lk3dhrgj7nm3.apps.googleusercontent.com',
  });

  useEffect(() =>{
        if (response?.type === 'success') {
      
     const { params } = response;
            console.log("idToken: ",params.id_token);
            
            var decoded = jwt_decode(params.id_token);

            console.log("decoded ", decoded);

            if(props.googleSignInTest === true){
                props.updateSuccessFunc('Login Success!');
                props.setLoggedInUser(decoded.email);

            }else{
            onSignIn(params.id_token, decoded.email, setAppID,((user) => {props.updateSuccessFunc(`${user} logged in`); props.setLoggedInUser(user); }) , props.updateErrModalFunc, props.lambda, props.navigation, props.setShowMenuBool)
            }
      }
  }, [response]);

  const hybridGoogleSignIn = async () => {
    if (Platform.OS === 'web') {
      promptAsync();
    } else {
      signInWithGoogle(
        props.googleSignInTest,
        setApiToken,
        onSignIn,
        setAppID,
        (user) => {
          props.updateSuccessFunc(`${user} logged in`);
          props.setLoggedInUser(user);
        },
        props.updateErrModalFunc,
        props.updateSuccessFunc,
        props.lambda,
        props.navigation,
        props.setShowMenuBool
      );
    }

  };
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => hybridGoogleSignIn()}
      {...props}
      style={StyleSheet.flatten([styles.touchable, props.style])}>
      <View style={styles.content}>
        <Image
          source={require('../img/38b17fe41693e46f53cc48bf97806181_small-symbol-google-logo-png_1024-1024.png')}
          style={styles.icon}
        />
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    shadowOffset: { width: 0, height: 1 },
    overflow: 'visible',
    shadowColor: 'black',
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
  },
  content: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 30,
    height: 30,
  },
  text: { color: 'black', marginLeft: 12, fontSize: 16, fontWeight: '600' },
});
