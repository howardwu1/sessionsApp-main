import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  KeyboardAvoidingView,
  Dimensions,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NotificationSpacer } from './NotificationBarSpacer';
import { Input, CheckBox } from 'react-native-elements';
import { useStore } from 'react-context-hook';
import { Platform, NativeModules } from 'react-native';
import { MyDialog } from './MyDialog';
import { CustomButton } from './CustomButton';
import { Header } from './Header';
import onValueChange from '../utils/onValueUtil.js';
import { loginFetch, signInWithGoogle, onSignIn } from '../utils/loginUtil.js';

const { StatusBarManager } = NativeModules;
//const STATUSBAR_HEIGHT = 20;

const STATUSBAR_HEIGHT =
  Platform.OS === 'ios'
    ? 20
    : Platform.OS === 'android'
    ? StatusBarManager.HEIGHT
    : 0;
export function ProfileCreation(props) {
  const [firstName, setFirstName] = useState('undef');
  const [lastName, setLastName] = useState('undef');
  const [role, setRole] = useState('undef');
  const [editable, setEditable] = useState(true);
  const [loggedInUser, setLoggedInUser] = useStore('loggedInUser');
  const [dialogMsg, setDialogMsg] = useState(null);
  const [inviteCode, setInviteCode] = useState('undef');

  const [errorMsg, setErrorMsg] = useState(null);
  const [statusMsg, setStatusMsg] = useState(null);
  const [hiddenSavedNewDialog, setHiddenSavedNewDialog] = useState(true);
  const { navigate, push, state } = props.navigation;

  const [adminCheck, setAdminCheck] = useState(false);

  const[username,setUsername] = useState(props.navigation.state.params.username);
  //const useMountEffect = (fun) => useEffect(fun, [])

  //useMountEffect(() => getData());
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeLoggedInUserToNull = () => {
    //props.screenProps.loggedInUser = null;
    setLoggedInUser(null);
  };

  const registerUser = async (admin = null) => {
    if (firstName === 'undef') {
      setErrorMsg('Please enter your first name');
    } else if (lastName === 'undef') {
      setErrorMsg('Please enter your last name');
    } else if (role === 'undef') {
      setErrorMsg('Please enter your last name');
    } else if (inviteCode ==='undef' && admin === null){
        setAdminCheck(true);
      } else {
  
      const lambdaParams = {
        FunctionName: 'my-function-go-dynamoreg-basic',
        InvocationType: 'RequestResponse',
        LogType: 'Tail',
        Payload: `{"Body": "{\\"login\\":\\"${username}\\", \\"Password\\": \\"${props.navigation.state.params.passwrd}\\", \\"firstName\\" : \\"${firstName}\\", \\"lastName\\" : \\"${lastName}\\", \\"inviteCode\\" : \\"${inviteCode}\\", \\"role\\":\\"${role}\\", \\"admin\\": \\"${admin||""}\\"}"}`,
      };
   
      //need to modify this logic to do the things the commented code below does
      //promise is needed to make the invoke return the promise (so I can use "then" in the login code)

      props.navigation.state.params.lambda.invoke(
        lambdaParams).promise().then( (data) => {
  

            JSON.parse(data.Payload).statusCode === 403
              ? setErrorMsg('Username already exists.')
              : (JSON.parse(data.Payload).statusCode === 500 ? setErrorMsg('There was an error on our end. Please try again later') : loginFetch(
                 username,
                  props.navigation.state.params.passwrd,
                  (name) => {
                    setLoggedInUser(name);
                    setStatusMsg('Account registered successfully');
                  },
                  setErrorMsg,
                  false,
                  props.navigation.state.params.lambda
                ))
            //   const results = JSON.parse(data.Payload);
            //   console.log('results1', results);
          }
        
      ).catch((error) => {
        console.log(error);
      });
    }
  };

  //todo: need to add useEffect block here to grab the information for your personal profile to fill in the inputs

  //todo: change css style info into a react context?

  return (
    <View
      style={{
        minHeight: Dimensions.get('window').height,
        flex: 1,
        paddingTop: STATUSBAR_HEIGHT,
      }}>

      <MyDialog
        visible={statusMsg !== null}
        hide={() => {
          setStatusMsg(null);
          props.navigation.state.params.setShowMenuBool(true);
          props.navigation.goBack();
        }}
        title={statusMsg}
      />

      <MyDialog
        visible={errorMsg !== null}
        hide={() => setErrorMsg(null)}
        title={errorMsg}
      />

      <MyDialog
        visible={adminCheck !== false}
        hide={() => {setAdminCheck(false);registerUser(false)}}
        onPressFunc={() => {setAdminCheck(false); registerUser(true)}}
        title={"We noticed you didn't have an invite code. Are you starting up a new account as an admin of the organization?"}
        yesNo= {true}
      />
      <Header
        currentPage={state.routeName}
        navigate={navigate}
        message="Login"
        loggedInUser={loggedInUser}
        setToNull={() => changeLoggedInUserToNull()}
      />

      <View style={styles.container}>
        <KeyboardAvoidingView enabled>
          <Text style={styles.aboutTitle}>Tell Us About Yourself</Text>

          <Input
            label="Username"
            style={styles.textInput}
            onChangeText={(text) => setUsername(text)}
            value={username}
          />

          <Input
            label="First Name"
            style={styles.textInput}
            onChangeText={(text) => setFirstName(text)}
            //value={firstName}
          />

          <Input
            label="Last Name"
            style={styles.textInput}
            onChangeText={(text) => {
              setLastName(text);
            }}
            //value={lastName}
          />

          <Input
            label="Role"
            style={styles.textInput}
            onChangeText={(text) => setRole(text)}
            //value={role}
          />

          <Input
            label="Invite Join Code (Optional)"
            style={styles.textInput}
            onChangeText={(text) => setInviteCode(text)}
          />
        </KeyboardAvoidingView>

        <TouchableHighlight
          onPress={() => registerUser()}
          style={{
            width: '100%',
            backgroundColor: '#B2B2B2',
            paddingTop: 15,
            paddingBottom: 15,
            marginTop: 'auto',
          }}
          underlayColor="#31e981">
          <Text
            style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>
            NEXT
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 16,
    //alignItems: 'center',
    //minwidth is needed because the form shrinks if there is text that isn't long enough to reach the full width of the screen, leading to unexpected shift when you assign mentor and mentee
    minWidth: '100%',
  },
  aboutTitle: {
    paddingTop: 10,
    fontSize: 20,
    paddingLeft: '5%',
    paddingBottom: 20,
  },
  textInput: {
    alignSelf: 'center',
    borderColor: 'black',
    minWidth: '80%',
    paddingBottom: 5,
  },
});

