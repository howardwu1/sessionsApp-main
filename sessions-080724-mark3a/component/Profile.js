import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  Clipboard,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NotificationSpacer } from './NotificationBarSpacer';
import { Input, CheckBox } from 'react-native-elements';
import { useStore } from 'react-context-hook';
import { Platform, NativeModules } from 'react-native';
import { MyDialog } from './MyDialog';
import { CustomButton } from './CustomButton';
import { MaterialIcons } from '@expo/vector-icons';

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = 20;
//const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
export function Profile(props) {
  const [firstName, setFirstName] = useState('undef');
  const [lastName, setLastName] = useState('undef');
  const [role, setRole] = useState('undef');
  const [editable, setEditable] = useState(true);
  const [unlockLabel, setUnlockLabel] = useState('CHANGE FIELDS');
  const [loggedInUser, setLoggedInUser] = useStore('loggedInUser');
  const [dialogMsg, setDialogMsg] = useState(null);
  const [inviteCode, setInviteCode] = useState('undef');
  //const useMountEffect = (fun) => useEffect(fun, [])

  //useMountEffect(() => getData());
  useEffect(() => {
    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
    if (loggedInUser !== 'test') {
      //make Go function for this
      var token = await AsyncStorage.getItem('token');
      //var sessions;

      
    const lambdaParams = {
                 FunctionName : 'my-function-go-dynamoGetUserInfo',
                 InvocationType : 'RequestResponse',
                 LogType : 'Tail',
                 Payload: '{"Headers":{"Authorization":"Bearer '+ token + '"}}'       
              } 
    

    props.navigation.state.params.lambda.invoke(lambdaParams).promise().then((response) => JSON.parse(JSON.parse(response.Payload).body)).then((jsonArr) => {
            setFirstName(jsonArr[0].FirstName);
            setLastName(jsonArr[0].LastName);
            setRole(jsonArr[0].Role);
            setInviteCode(jsonArr[0].InviteCode);
          }).catch((error) => {
      console.log('error is coming from Profile getting user details');
      console.log(error);
    });
//     // fetch("https://taco-loco.howardwu2.repl.co/allPublicUserDetails", {
//     // method: "GET",
//     // headers: {
//     //   'Authorization': 'Bearer ' + token
//     // }})
      // fetch(
      //   'https://taco-loco.howardwu2.repl.co/publicUserDetails/' + loggedInUser,
      //   {
      //     method: 'GET',
      //     headers: {
      //       Authorization: 'Bearer ' + token,
      //     },
      //   }
      // )
        // .then((response) => {
        //   response.json().then((json) => {
        //     setFirstName(json.firstName);
        //     setLastName(json.lastName);
        //     setRole(json.role);
        //   });
        // })
        // .done();
    } else {
      setFirstName('Test');
      setLastName('TestLast');
      setRole('Tester');
      setInviteCode('testinvitecode');
    }
  };

  const updateUser = async () => {
    if (loggedInUser !== 'test') {
      //convert this to Go eventaully
      var token = await AsyncStorage.getItem('token');

      fetch('https://taco-loco.howardwu2.repl.co/updateUser', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          username: loggedInUser,
          role: role,
        }),
      })
        .then((response) => {
          if (response.status === 422) {
            response
              .json()
              .then((json) =>
                setDialogMsg(
                  'User details update was rejected. Reason: ' + json.message
                )
              );
          } else {
            setDialogMsg('User details updated saved');
          }
        })
        .done();
    } else {
      console.log("can't edit a test profile");
    }
  };

  const toggleLabel = () => {
    unlockLabel == 'CHANGE FIELDS'
      ? setUnlockLabel('LOCK FIELDS')
      : (updateUser(), setUnlockLabel('CHANGE FIELDS'));
  };
  //todo: need to add useEffect block here to grab the information for your personal profile to fill in the inputs

  //todo: change css style info into a react context?

  if (firstName == 'undef' || lastName == 'undef' || role == 'undef') {
    return <Text> Loading...</Text>;
  } else {
    return (
      <View style={styles.totalContainer}>
        <MyDialog
          visible={dialogMsg !== null}
          hide={() => setDialogMsg(null)}
          title={dialogMsg}
        />
        <View style={styles.container}>
          <Text style={styles.aboutTitle}>Profile</Text>

          {/*disabled the inputs until the user clicks a button to enable all the input fields!
           */}
           
            <Input
            label="First Name"
            style={styles.textInput}
            onChangeText={(text) => setFirstName(text)}
             inputContainerStyle = {editable?{borderBottomWidth:0}:{}}
            disabledInputStyle ={{opacity:1}}
            value={firstName}
            disabled={editable}
          />

          <Input
            label="Last Name"
            style={styles.textInput}
            onChangeText={(text) => {
              setLastName(text);
            }}
            value={lastName}
             inputContainerStyle = {editable?{borderBottomWidth:0}:{}}
            disabledInputStyle ={{opacity:1}}
            disabled={editable}
          />

          <Input
            label="Role"
            style={styles.textInput}
            onChangeText={(text) => setRole(text)}
            value={role}
             inputContainerStyle = {editable?{borderBottomWidth:0}:{}}
            disabledInputStyle ={{opacity:1}}
            disabled={editable}
          />
          
            <Input
            rightIcon={  <MaterialIcons 
                         onPress={() => {Clipboard.setString(inviteCode)}}
                          activeOpacity={0.6}
                         size={32}
                          name='content-copy'
                        /> }
          label = "Invite Code"
          value={inviteCode}
          disabled={true}
          inputContainerStyle ={{borderWidth:2, borderRadius: 10}}
            disabledInputStyle ={{opacity:1}}
            />
       {/*
            <Input
          rightIcon={<TouchableOpacity onPress={() => {Clipboard.setString(inviteCode)}}>
                      <Image
                    style={styles.buttonIcon}
                    source={require('../img/copy.png')}
                  /> </TouchableOpacity> }
          label = "Invite Code"
          value={inviteCode}
          disabled={true}
          inputContainerStyle ={{borderWidth:2, borderRadius: 10}}
            disabledInputStyle ={{opacity:1}}
            />

              */}
  
          <CustomButton
            onPress={() => {
              toggleLabel(), setEditable(!editable);
            }}
            label={unlockLabel}
          />
          <CustomButton
            onPress={() => props.navigation.goBack()}
            label="GO BACK"
          />
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  totalContainer: {
    flex: 1,
    paddingTop: STATUSBAR_HEIGHT,
  },
  container: {
    flex: 16,
    alignItems: 'center',
  },
  aboutTitle: {
    paddingTop: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  textInput: {
    alignSelf: 'center',
    borderColor: 'black',
  },
  buttonIcon:{
    height:34,
    width:30,
  }
});

