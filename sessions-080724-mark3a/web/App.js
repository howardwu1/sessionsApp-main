import React, { useEffect, useState, useRef } from 'react';
import {
  Button,
  Text,
  StyleSheet,
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ScreenOrientation from 'expo-screen-orientation';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Hero} from './component/Hero';
import { Header } from './component/Header';
import { Menu } from './component/Menu';
import { ProfileCreation } from './component/ProfileCreation';
import { NewSessionScreen } from './component/NewSession';
import {Login} from './component/Login';
import Register from './component/Register';
import { MySessionScreen } from './component/MySession';
import { NotificationSpacer } from './component/NotificationBarSpacer';
import { Dashboard } from './component/Dashboard';
import { Profile } from './component/Profile.js';
import { withStore, useStore } from 'react-context-hook';
import { Platform, NativeModules } from 'react-native';
import { MyDialog } from './component/MyDialog';
import AWS from 'aws-sdk';
import { Provider} from 'react-native-paper';

AWS.config = new AWS.Config();
AWS.config['region'] = 'us-east-1';
AWS.config['accessKeyId'] = 'test';
AWS.config['secretAccessKey'] = 'test';

var ep = new AWS.Endpoint('http://192.168.1.7:4566');
//this doesn't work since dns doesn't work with my android phone
//var ep = new AWS.Endpoint('LAPTOP-89T4LUMU:4566');

const lambda = new AWS.Lambda({endpoint:ep});


const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : (Platform.OS === 'android' ? StatusBarManager.HEIGHT: 0);


export function HomeScreen(props) {
   const flatlistRef = useRef(); //login flatlist
  const flatlistRegRef = useRef(); //register flatlist
  const [showMenuBool, setShowMenuBool] = useState(false);
  const [loggedInUser, setLoggedInUser] = useStore('loggedInUser');
  
   const [height, setHeight] = useState(Dimensions.get('window').height);
   const [apiToken, setApiToken] = useStore('apiToken');
   
   const [selectedtab] = useStore('selectedTab', 'login');

   const [hiddenModal, setHiddenModal] = useState(false);

   const [googleSignInTest] = useState(false);
  //  const lambdaParams = {
  //                FunctionName : 'my-function-go-jwt',
  //                InvocationType : 'RequestResponse',
  //                LogType : 'Tail',
  //                Payload:`{"Body": "{\\"login\\":\\"test2\\", \\"Password\\": \\"meh\\"}"}`,
                
  //             }; 


   useEffect(() => {
    //locking the screen in portrait since it looks bad when in landscape
    if(Platform.OS !=='web'){
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }

    // lambda.invoke(lambdaParams, function(err, data) {
    //      if (err) {
    //        console.log("fug")
    //         console.log("error",err);
    //      } else {
    //         console.log("we made it?")
    //         let results = JSON.parse(data.Payload);
    //         console.log(results)
    //      }
    //   });


  });

  const lambdaParams = {
                 FunctionName : 'my-function-go-jwt',
                 InvocationType : 'RequestResponse',
                 LogType : 'Tail',
                 Payload:'{"Body": "{\\"login\\":\\"test2\\", \\"Password\\": \\"meh\\"}"}',
              };
              
  const { navigate, state } = props.navigation;


const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) =>{
   return layoutMeasurement.height + contentOffset.y >= contentSize.height - 1;
}



const isCloseToTop = ({layoutMeasurement, contentOffset, contentSize}) =>{
   return contentOffset.y < 50 && contentOffset.y>=0;
}
    const toggleUser = (setLoggedOutUser)=>{
        
              //need to implement the logout from google id and usestore to see if you are logged on in google Id
              AsyncStorage.removeItem("rememberedUser")
              setLoggedOutUser(loggedInUser);
              setLoggedInUser(null);
              setHiddenModal(false);
    }
    

  return (
    <KeyboardAvoidingView style={{ minHeight: height, flex: 1, flexDirection: 'column',justifyContent: 'center',paddingTop: STATUSBAR_HEIGHT,}} behavior="padding" enabled >

      {/*  <MyDialog
            visible = {loggedInUser!== null && hiddenModal ===false && props.screenProps.remembered === false}
            title={`${loggedInUser} logged in`}
            hide = {()=>{setHiddenModal(true)}}
          />
  */}
        <Header
        currentPage={state.routeName}
        navigate={navigate}
        signedIn = {loggedInUser!==null}
        loggedInUser={loggedInUser}
        toggleUser = {toggleUser}
        setShowMenuBool = {setShowMenuBool}
      />
      <View style={styles.container}>
    

   <ScrollView
      onScroll={({nativeEvent})=>{
      
        if(!(loggedInUser!==null)){      
          if(isCloseToTop(nativeEvent)){
            flatlistRef.current.scrollToOffset({ animating: true, y: 0 });
            flatlistRegRef.current.scrollToOffset({ animating: true, y: 0 });
            
          }
          if(isCloseToBottom(nativeEvent)){ 
             if(selectedtab ==='register'){
               flatlistRegRef.current.scrollToEnd({animating: true});  
              //flatlistRef.current.scrollToOffset({ y: 0 }); 
             }
             else if (selectedtab ==='login'){
                 flatlistRef.current.scrollToEnd({animating: true});   
                 //flatlistRegRef.current.scrollToOffset({ animating: true, y: 0 });   
             }
          }
        }
      }
      }
    >

      <Menu navigate={navigate} navigation={props.navigation} loggedInUser={loggedInUser} showMenu={showMenuBool} setShowMenuBool = {setShowMenuBool} scrollable={true} passedRef={flatlistRef} passedRef2 = {flatlistRegRef} lambda = {lambda} googleSignInTest = {googleSignInTest}/>
  
      </ScrollView>
   {/*

      <Menu navigate={navigate} loggedInUser={loggedInUser} push={push} remembered={props.screenProps.remembered} scrollable={false} />
     */}  
    </View>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
 container: {
    flex:16,
    
  },
});

const RootStack = createStackNavigator(
  {
    NewSession: NewSessionScreen,
    Home: HomeScreen,
    Login: Login,
    Register: Register,
    MySession: MySessionScreen,
    Dashboard: Dashboard,
    Profile: Profile,
    ProfileCreation: ProfileCreation,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(RootStack);


function App() {
  //"undef" is used to wait to until asyncstorage getItem operation completes
  const [loggedInUser, setLoggedInUser, deleteLoggedInUser] = useStore('loggedInUser', "undef");
  const [remembered, setRemembered] = useState(false);

  useEffect(() => {
    //checking to see if there is a user that wanted to be remembered -- i.e. auto logged in
     
      AsyncStorage.getItem('rememberedUser').then((obj) => {
  
        if (obj != null) {
          
          setLoggedInUser(obj);
          setRemembered(true);
        }else{
          if (loggedInUser ==="undef"){
            setLoggedInUser(null);
          }
        }
      });
    

    // eslint-disable-next-line react-hooks/exhaustive-deps

  },);

//screenProps={{ loggedInUser: loggedInUser }}
  if (loggedInUser === 'undef' || remembered === undefined) {
  
    return (
      <View>
        <Text style={styles.aboutTitle}>
          {'\n'}
          {`\n`}
          Loading...
        </Text>
      </View>
    );
  } else {
    
    return (
      <Provider>
      <AppContainer screenProps = {{ remembered: remembered}}/>
      </Provider>
    );
  }
}

export default withStore(App);
