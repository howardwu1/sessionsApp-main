import React, {useEffect, useState} from 'react';
import { withStore, useStore } from 'react-context-hook';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TextInput,
  View,
  Picker,
  Modal,
  TouchableHighlight,
  Dimensions,
  KeyboardAvoidingView,
  Switch,
  CheckBox,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header } from './Header';
import {MyDialog} from './MyDialog';

//import CheckBox from '@react-native-community/checkbox';
import {Input} from 'react-native-elements';
import MultiSelect from 'react-native-multiple-select';
import Icon from 'react-native-vector-icons';
import {AddModal} from './AddModal';
import {NotificationSpacer} from './NotificationBarSpacer';
import {CustomButton} from './CustomButton';

//make the header be able to send you back home

import { Platform, NativeModules } from 'react-native';
import {getUsernamesOrUseCachedValues} from '../utils/userDataUtil.js';


const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : (Platform.OS === 'android' ? StatusBarManager.HEIGHT: 0);

export function NewSessionScreen(props) {

  const [items, setItems] = useState([]);
  const [teammates, setTeammates] = useState([]);
  const [needHelp, setNeedHelp] = useState(false);
  const [action, setAction] = useState("Debug code for");
  const [actionChoices, setActionChoices] = useState([]);
  const [newAction, setNewAction] = useState('');
  const [newSubjectMatter, setNewSubjectMatter] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [pickActions, setPickActions] = useState('');
  const [mentor, setMentor] = useState('');
  const [mentee, setMentee] = useState('');
  const [subjectMatter, setSubjectMatter] = useState("Java");
  const [subjectMatterChoices, setSubjectMatterChoices] = useState([]);
  const [pickSubjectMatter, setPickSubjectMatter] = useState('');
  const [modalVisible2, setModalVisible2] = useState(false);
  const [record, setRecord] = useState([]);
  const [sessionId, setSessionId] = useState(0);
  const [storyId, setStoryId] = useState('');
  const { navigate, push, state } = props.navigation;
  const [loggedInUser, setLoggedInUser] = useStore('loggedInUser');
  const [errorMsg,setErrorMsg] = useState('');
  const [hiddenSavedNewDialog,setHiddenSavedNewDialog] = useState(true);

  const refreshPickItems = (choicetype) => {
       var arr = [];
       choicetype.map(val => arr.push(<Picker.Item label={val} value={val}/>));
       return arr;
  }


  const onSelectedItemsChange = (selectItems) => {
      setTeammates(selectItems);
    };
 


 useEffect(() => {
   
//     const getUsernames= async() => {
//     var token = await AsyncStorage.getItem("token");  
// //note: we need to .then right after response.json() because it's a promise not the actual data right away -- we cannot close off the then function after .json().
  
//     const lambdaParams = {
//                  FunctionName : 'my-function-go-dynamoGetAllPublicDetails',
//                  InvocationType : 'RequestResponse',
//                  LogType : 'Tail',
//                  Payload: '{"Headers":{"Authorization":"Bearer '+ token + '"}}'       
//               } 
    
//     //note that you need to do a parens around the key, name json because it doesn't expect the braces to mean json natively without the parens or possibley another set of curly braces since you can use curly braces to also wrap code around
//     props.navigation.state.params.lambda.invoke(lambdaParams, function(err, data) {
 

//          if (err) {
//             //return err;
//             console.log(err)
//          } else {
//             //const results = JSON.parse(JSON.parse(data.Payload).body);
//             //console.log("results[0]", results[0]);
            
//          }

//       }).promise().then((response) => JSON.parse(JSON.parse(response.Payload).body)).then((jsonArr) => jsonArr.map(json => ({key: json.Username, name: json.Username}))).then(itemsArr => setItems(itemsArr)).done()

//     // fetch("https://taco-loco.howardwu2.repl.co/allPublicUserDetails", {
//     // method: "GET",
//     // headers: {
//     //   'Authorization': 'Bearer ' + token
//     // }})
//      //.then((response) => response.json().then((jsonArr) => jsonArr.map(json => {return {key: json.username, name: json.username};}))).then(itemsArr => setItems(itemsArr))
//     // .done();
     
//     }

    //let itemsArr = [];
    // AsyncStorage.getAllKeys((err, keys) => {
    //   keys.filter(key => key != 'newAction' && key !='userLoggedIn' && key !='record' && key !='subjectmatterchoices' && key !='rememberedUser' && key !='actionchoices').map(key => itemsArr.push({key: key, name: key}));
    //   setItems(itemsArr);
    // });

//lets me test either with a test signin user or a googlesignin without turning on golang server on lambda
  if( loggedInUser !== 'test' && props.navigation.state.params.googleSignInTest !== true){
    getUsernamesOrUseCachedValues(props.navigation.state.params.lambda, setItems);

  }
  else{
    setItems([{key: loggedInUser, name:loggedInUser},{key:'test2', name: 'test2'}, {key:'test3', name:'test3'}]);
  }

},[loggedInUser]);

 useEffect(() => {

    AsyncStorage.getItem('actionchoices').then((obj) =>
    { 
      if (obj != null){
        setActionChoices(obj.split(','));
        return (obj.split(','))
        
      }
      else {
        //treating this as a flag that asyncstorage completed --changed it from null -- so if it's null we still aren't good to render

        setPickActions([]);
        return([]);
      }
    }).then((arr) => {
      setPickActions(() =>  refreshPickItems(arr))
    });

   AsyncStorage.getItem('subjectmatterchoices').then((obj) =>
    { 
      if (obj != null){
        setSubjectMatterChoices(obj.split(','));
        return (obj.split(','))
        
      }
      else {
        //treating this as a flag that asyncstorage completed --changed it from null -- so if it's null we still aren't good to render

        setPickSubjectMatter([]);
        return([]);
      }
    }).then((arr) => {
      setPickSubjectMatter(() =>  refreshPickItems(arr))
    });

  
 
    // AsyncStorage.getItem('record').then((obj) => {
    //   if (obj != null) {
    //     setRecord(JSON.parse(obj));
    //     setSessionId(JSON.parse(obj).slice(-1)[0].id + 1);
    //   }
 },[]);


  const addNewAction = () => {
    if (newAction !== '' && newAction.trim() !== ""){
      actionChoices.push(newAction);
     AsyncStorage.setItem("actionchoices",actionChoices.toString(), (err, result) => {
      setPickActions(() => refreshPickItems(actionChoices.slice()));
      setAction(newAction);
      setNewAction('');
      setModalVisible(flase);
      });
    }
    else {
      setErrorMsg("Action cannot be blank!");
    }
     
  }

  const addSession= async() => {

    if(loggedInUser!=='test' && props.navigation.state.params.googleSignInTest !== true){
      var token = await AsyncStorage.getItem("token");

      //need to modify this with lambda and go rather than the old API!
      fetch("https://taco-loco.howardwu2.repl.co/addNewSession", {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: sessionId, time:new Date().toString(), sessionCreator:loggedInUser, sessionMentor: mentor, sessionMentee: mentee, sessionAction: action, sessionSubjectMatter: subjectMatter, sessionMentorRating: null, sessionMenteeRating: null, sessionMentorComments: null, sessionMenteeComments: null, sessionStoryId: storyId, teammates: teammates
      })
    }).then((response) => {
        if(response.status === 422){
          response.json().then((json) => setErrorMsg('Session was rejected. Reason: ' + json.message));
          
        }
        else
        {
          setHiddenSavedNewDialog(false);
        }
    }).catch((error) => {
      console.log(error);
    });

    }else{
        var recordGet = JSON.parse(await AsyncStorage.getItem("record"))
        
        if (recordGet === null){
          recordGet =[]
        }

console.log("first", recordGet);


       recordGet.push({id: sessionId, time:new Date().toString(), sessionCreator: loggedInUser, sessionMentor: mentor, sessionMentee: mentee, sessionAction: action, sessionSubjectMatter: subjectMatter, sessionMentorRating: null, sessionMenteeRating: null, sessionMentorComments: null, sessionMenteeComments: null, sessionStoryId: storyId});     
      
      console.log("second", recordGet);

      AsyncStorage.setItem("record", JSON.stringify(recordGet)).then(obj => {
         setHiddenSavedNewDialog(false);
      })
    
    }
  }

  const addNewSubjectMatter = () => {

        if (newSubjectMatter !== '' && newSubjectMatter.trim() !== ""){

          subjectMatterChoices.push(newSubjectMatter);
          
          AsyncStorage.setItem("subjectmatterchoices",subjectMatterChoices.toString(), (err, result) => {
            setPickSubjectMatter(() => refreshPickItems(subjectMatterChoices.slice()));
            setSubjectMatter(newSubjectMatter);
            setNewSubjectMatter('');
            setModalVisible2(false);
          });
        } 
        else {
          setErrorMsg("Subject Matter cannot be blank!");
        }
  }

  const createNewSession = () => {

    if (teammates.length === 0){
      setErrorMsg("No teammates selected!");
    }
    else if (storyId === ''){
      setErrorMsg("No story/task id entered!");
    }
    else if (loggedInUser === ''){
     setErrorMsg('Log in before creating a session!');
    }
    else if (mentor !== '' && mentor !== "" && !teammates.includes(mentor)){
      setErrorMsg('Mentor not found in list of teammates!');
    }
    else if (mentee !== '' && !teammates.includes(mentee)){
      setErrorMsg('Mentee not found in list of teammates!');
    }
    else if (mentor !== '' && mentee === mentor){
      setErrorMsg('Mentor cannot be the mentee!');
    }
    else {
      addSession();
    }
      
      
  // record.push({id: sessionId, time:new Date().toString(), sessionCreator: props.screenProps.loggedInUser, sessionMentor: mentor, sessionMentee: mentee, sessionAction: action, sessionSubjectMatter: subjectMatter, sessionMentorRating: null, sessionMenteeRating: null, sessionMentorComments: null, sessionMenteeComments: null, sessionStoryId: storyId});     
      
  //     AsyncStorage.setItem("record", JSON.stringify(record)).then(obj => {
  //       Alert.alert('New session saved');
        // props.navigation.goBack();
      // })
  //   }
 
  }

  const onChangeText= (text) => {setNewAction(text)};
  const onChangeTextSM = (text) => {setNewSubjectMatter(text)};
  
  const hideAddModals = () => {setModalVisible(false); setModalVisible2(false);}

  const [height, setHeight] = useState(Dimensions.get('window').height);
  //todo: figure out the best approach for checking values of pickactions and picksubjectmatter
  const changeLoggedInUserToNull = () => {
    //props.screenProps.loggedInUser = null;
    setLoggedInUser('');
  };
  if(items==='' || record=== [] || pickActions ==='' || pickSubjectMatter === ''){
    return <Text> Loading... </Text>
  } else{
 
  return (

  <KeyboardAvoidingView style={{ minHeight: height, flex: 1, flexDirection: 'column',justifyContent: 'center',paddingTop: STATUSBAR_HEIGHT,}} behavior="padding" enabled >
           
            <MyDialog
              visible = {modalVisible}
              onChangeTextState = {(text) => onChangeText(text)}
              value={newAction}
              input={true}
              onPressFunc = {() => addNewAction()}
              hide = {() => hideAddModals()} 
              title={"Add a new Action to list"}
              />

            <MyDialog
              visible = {modalVisible2}
              onChangeTextState = {(text) => onChangeTextSM(text)}
              value={newSubjectMatter}
              input = {true}
              onPressFunc = {() => addNewSubjectMatter()}
              hide = {() => hideAddModals()} 
              title={"Add a new Subject Matter to list"}
              />
           
            <MyDialog
              visible = {errorMsg !== ''}
              hide = {() => setErrorMsg('') } 
              title={errorMsg}
              />

          <MyDialog
            visible = {hiddenSavedNewDialog===false}
            title={`New session saved`}
            hide = {()=>{setHiddenSavedNewDialog(true);  props.navigation.goBack()}}
          />
      <Header
        currentPage={state.routeName}
        navigate={navigate}
        message="Login"
        loggedInUser={loggedInUser}
        setToNull={() => changeLoggedInUserToNull()}
      />
        <View style={styles.container}>
        <ScrollView>

        
          <Text style={styles.aboutTitle}>Enter Teammates</Text>
          <Text style={styles.aboutText}> Select the names of people in the session here (include yourself if you are in the session)
          </Text>


          <MultiSelect
            hidetags
            items={items}
            uniqueKey="key"
            //ref={component => {
            //  this.multiSelect = component;
            //}}
            onSelectedItemsChange={(selected) => onSelectedItemsChange(selected)}
            selectedItems={teammates}
            selectText="Pick People"
            searchInputPlaceholderText="Search People..."
            onChangeInput={(text) => console.log("change " + text)}
            tagRemoveIconColor="#CCC"
            tagBorderColor="#AAA"
            tagTextColor="#AAA"
            selectedItemTextColor="#CCC"
            selectedItemIconColor="#CCC"
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={styles.inputs}
            submitButtonColor="#CCC"
            submitButtonText="Submit"
          />

            <View style={styles.checkboxContainer}>

            { Platform.OS === 'android' || Platform.OS ==='web' 
                ? //if true
                <CheckBox style={styles.checkboxButton} onValueChange={() => setNeedHelp(!needHelp)} value={needHelp} />
                : //if false
                <Switch
                  style={styles.buttons}
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={needHelp ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => setNeedHelp(!needHelp)}
                  value={needHelp}
                
                />
                // or add null if you don't want to add another
            }
 
            <Text style={Platform.OS === 'android' ? styles.checkboxText: (Platform.OS === 'web'? styles.checkboxTextWeb :styles.checkboxTextIos)}>Looking for help! </Text>
            </View>
        
          <Text> {'\n'} </Text>
          <Input
              label = "(Optional) Who is the session Mentor?"
              style={styles.textInput} 
              onChangeText={(text) => setMentor(text)}
              value={mentor}/>

          <Input
              label = "(Optional) Who is the session Mentee?"
              style={styles.textInput} 
              onChangeText={(text) => setMentee(text)}
              value={mentee}/>
      
          <Text style={styles.aboutTitle}>What's the story/task id? </Text>
          <Text style={styles.aboutText}>
            Be descriptive such as the story id, or even a task id if available.
          </Text>

            <Input
              style={styles.textInput} 
              onChangeText={(text) => setStoryId(text)}
              value={storyId}/>

          
          <Text style={styles.aboutTitle}>What is the scope or goals of the session? </Text>
          <Text style={styles.aboutText}>Ex. "Debug code for React Native" / "Answer questions on Java Code" / "Review code for Javascript"</Text>


          <Picker 
            selectedValue={action}
            style={styles.aboutText}
            onValueChange={(itemValue, itemIndex) =>
            (itemValue != "Add new action...") ? setAction(itemValue) : setModalVisible(true)
          }>
            <Picker.Item label="Debug code for " value="Debug code for" />
            <Picker.Item label="Answer questions on " value="Answer questions on" />
            <Picker.Item label="Review code for " value="Review code for" />
            {pickActions}
            <Picker.Item label="Add new action..." value="Add new action..." />

          </Picker>
          
          <Text style={styles.plusStyle}> + </Text>

          <Picker 
            selectedValue={subjectMatter}
            style={styles.aboutText}
            onValueChange={(itemValue, itemIndex) =>
            (itemValue != "Add new subject matter...") ? setSubjectMatter(itemValue) : setModalVisible2(true)
          }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            {pickSubjectMatter}
            <Picker.Item label="Add new subject matter..." value="Add new subject matter..." />

          </Picker>

            <View style= {{alignItems: 'center'}}>
           
              <CustomButton
                onPress={() => createNewSession()}
                label = 'CREATE SESSION'
              />

              <CustomButton
                onPress={() => props.navigation.goBack()}
                label = 'GO BACK'
              />
            </View>
        </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 16,
    alignItems: 'center',
    //minwidth is needed because the form shrinks if there is text that isn't long enough to reach the full width of the screen, leading to unexpected shift when you assign mentor and mentee 
    minWidth: "100%"
    },
  aboutTitle: {
    paddingTop: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  plusStyle:{
    fontSize:30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  aboutText: {
    paddingBottom: 20,
    paddingLeft: 10,
  },
  inputs:{
    width: '70%',
    padding: 10,
    borderWidth: 1,
    marginRight: 10,
  },
  textInput:{
    alignSelf: 'center',
    borderColor: "black",
    minWidth: '80%',
  },
  checkboxContainer: {
    flexDirection: "row",
    paddingLeft: 15,
  },
  buttons:{
      marginTop: 15,
      fontSize: 16,
  },
  checkboxButton:{
      fontSize:16,
      marginTop:5,
  },
  checkboxText:{
      fontSize:16,
      paddingLeft:10,
      paddingTop:10,
  },
  checkboxTextIos:{
      fontSize:16,
      paddingLeft:10,
      paddingTop:15,
  },
  checkboxTextWeb:{
      fontSize:16,
      paddingLeft:10,
  }
});

