import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  Picker,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
  Linking,
  Button
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Input} from 'react-native-elements';
import moment from 'moment';
import Icon from 'react-native-vector-icons';
import { Header } from './Header';
import { withStore, useStore } from 'react-context-hook';
//import { NotificationSpacer } from './NotificationBarSpacer';
import * as DocumentPicker from 'expo-document-picker';
import {UploadToDrive} from './UploadToDrive';
import {CustomButton} from './CustomButton';
import { MyDialog } from './MyDialog';


//global.Buffer = Buffer; // very important ???
//todo: allow mentor/mentee to modified if it's not filled in even after saving
//todo: task/job posting board
//todo: have an upload section -- integrate with dropbox and googledocs -- otherwise tell them to provide a link (upload file outside of sessions app and copy the link)

import { Platform, NativeModules } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as GoogleSess from 'expo-auth-session/providers/google';



const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : (Platform.OS === 'android' ? StatusBarManager.HEIGHT: 0);

WebBrowser.maybeCompleteAuthSession();

export function MySessionScreen(props) {

  
    const [id, setId] = useState(null);
    const [storyId, setStoryId] = useState(null);
    const [sessionMentee, setSessionMentee] = useState(null);
    const [sessionMentor, setSessionMentor] = useState(null);
    const [sessionCreator, setSessionCreator] = useState(null);
    const [sessionAction, setSessionAction] = useState(null);
    const [sessionSubjectMatter, setSessionSubjectMatter] = useState(null);
    const [sessionInputs, setSessionInputs] = useState([]);
    const [sessionTime, setSessionTime] = useState(null);
    const [sessionMenteeRating, setSessionMenteeRating] = useState(null);
    const [sessionMentorRating, setSessionMentorRating] = useState(null);
    const [sessionMentorComments, setSessionMentorComments] = useState(null);
    const [sessionMenteeComments, setSessionMenteeComments] = useState(null);
    const [mentorMenteeCommentsRatingsFixed, setMentorMenteeCommentsRatingsFixed] = useState(null);
    const [mentorMenteeCommentsRatings, setMentorMenteeCommentsRatings]= useState(null);
    const [mentorMenteeInput, setMentorMenteeInput]= useState(null);
    const [teammates, setTeammates]= useState(null);
    const [session, setSession]= useState(null);
    const [mySessions, setMySessions]= useState(null);
    const [pickSession, setPickSession] = useState([<Picker.Item label="No sessions exist for this user" value="none" />]);
    const [visibilityStyle, setVisibilityStyle]= useState(styles.invisible);
    const [appID, setAppID] = useStore('appID');
    const [loggedInUser, setLoggedInUser] = useStore('loggedInUser');

  const [hiddenErrorModSessionDialog, setHiddenErrorModSessionDialog] = useState(true);
    const [hiddenSavedChangesDialog, setHiddenSavedChangesDialog] = useState(true);

const [gotAPIToken, setGotAPIToken] = useState(null);

    const [statusMsg,setStatusMsg] = useState(null);


  const [request, response, promptAsync] = GoogleSess.useAuthRequest({
    expoClientId: '222585927316-dp43c5ekqdkm8sbk2p4k33uqn3ug3l89.apps.googleusercontent.com',
    iosClientId: '222585927316-lsc2c15df09qpqtdr0cft0r2tat4bh3d.apps.googleusercontent.com',
    androidClientId: '222585927316-l7u0i85iuu3la1putev56uv5hs4mhikl.apps.googleusercontent.com',
    webClientId: '222585927316-pqvqfs0atns52apevh10lk3dhrgj7nm3.apps.googleusercontent.com',
    scopes: ['email', 'profile', 'openid', 'https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/drive.file'],
  });
  
   useEffect(() =>{
        if (response?.type === 'success') {
          
           const { authentication } = response;
          console.log("auth",authentication.accessToken);

          setApiToken(authentication.accessToken)

          setGotAPIToken(authentication.accessToken)

      }
  }, [response]);


  useEffect(() => {  

      const initRecord = async() => {
        
        if(loggedInUser!=='test' && props.navigation.state.params.googleSignInTest !== true){

          var token = await AsyncStorage.getItem("token");
          var sessions;
          fetch("https://taco-loco.howardwu2.repl.co/sessionFromUsername/" + loggedInUser, {
          method: "GET",
          headers: {
            'Authorization': 'Bearer ' + token
          }})
          .then((response) => {response.json().then(   
            (jsonArr) => {

              //note need to keep this code in the then clause because sessions may still be unassigned otherwise (i.e. undefined) due to the promise not being fullfilled yet
              sessions = jsonArr;
               
               if(mySessions === null){
                  setMySessions(sessions);
                }

                if (sessions.length !== 0){
                  setVisibilityStyle(styles.container);
                  setPickSession(refreshPickItemsSessions(sessions.slice()));
                } 
                else {
                  setVisibilityStyle(styles.invisible);
                }
              }
              );
          })
          .catch((error) => {
          console.log(error);
            });        
          } else{

          let sessions = [];

           AsyncStorage.getItem('record').then(obj => {
            if (obj != null) {

              JSON.parse(obj)
                .filter(x => x.sessionCreator === loggedInUser | x.sessionMentee === loggedInUser | x.sessionMentor === loggedInUser)
                .map(x => sessions.push(x));

              {/* need to sort the order of my sessions in reverse chronological order*/}
              sessions.sort((a,b) => {return moment(b.time) - moment(a.time);});
              
              if(mySessions === null){
                setMySessions(sessions);
              }

              if (sessions.length !== 0){
                
                setVisibilityStyle(styles.container);
                setPickSession(refreshPickItemsSessions(sessions.slice()));
              } 
              else {
                setVisibilityStyle(styles.invisible);
              }
            }
          });
        
        }
      }

    initRecord();

   }, [mySessions]);

const url = 'https://www.googleapis.com/drive/v3';
const uploadUrl = 'https://www.googleapis.com/upload/drive/v3';

const boundaryString = 'wu_bar_baz';

const [apiToken, setApiToken] = useStore('apiToken');

const parseAndHandleErrors = async (response) => {
  
    if (response.ok) {
      //console.log(await response.json());
    return response.json()
  }
  return response.json()
    .then((error) => {
      console.log("hmm:" + JSON.stringify(error));
      throw new Error(JSON.stringify(error))
    })
}

//am I even using this? consider to comment out
const downloadFile = (existingFileId) => {
  const options = {
          method: "GET",
          headers: {
            'Authorization': 'Bearer ' + apiToken
          }};
  if (!existingFileId) throw new Error('Didn\'t provide a valid file id.')
  return fetch(`${url}/files/${existingFileId}?alt=media`, options)
    .then(parseAndHandleErrors)
}


//need to update the name later in another call if possible 
//courtesy of postman -- apparently it's impossible to do multipart well there
const uploadFile = async (content, existingFileId, accessToken = null) => {
 
 let result = await fetch(content.uri);

 let blob = await result.blob();


// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === 4) {
//     console.log(this.responseText);
//   }
// });

// xhr.open("POST", "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart");
// xhr.setRequestHeader("authorization", "Bearer " + apiToken);
// xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
// xhr.setRequestHeader("cache-control", "no-cache");
// xhr.send(blob);

const options = {
          //method: !!existingFileId ? 'PATCH' : 'POST',
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + (apiToken? apiToken: accessToken),
            "content-type": "application/x-www-form-urlencoded"
          }
        };


//note -- for application/json bodies you need to have JSON.stringify don't just do something like body: {"name": "hmm.png"} for example
 return fetch(`${uploadUrl}/files${existingFileId ? `/${existingFileId}` : ''}?supportsAllDrives=true&uploadType=multipart`, {
    ...options,
    body: blob,
  })
    .then(parseAndHandleErrors).then(data => {
        console.log("first", data);
        return data;
    })
    .then(response => { return fetch(`https://www.googleapis.com/drive/v3/files/${response.id}?addParents=1s7wLzx3s4seEN40itttmZ_JWrhN_EOl5`, {method: 'PATCH', headers: {'Authorization': 'Bearer ' + (apiToken? apiToken: accessToken), 'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({name:content.name})})}).then(parseAndHandleErrors).then(data => {setStatusMsg("Successfully added file " + content.name); return data;})
    ;


//should be able to borrow the code in uploadfile2 to chain promises maybe even convert this xhr stuff to fetch 
//the try google api v3 worked see this:
// PATCH https://www.googleapis.com/drive/v3/files/1SvU5RHB-Dyo1xsJ-sgIrOtu0uglq9R8z?key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
// Content-Type: application/json

// {
//   "name": "howard.png"
// }
  
}

//old backup code that only transfers 64bit encoded strings (that aren't viewable )
const uploadFile2 = async (content, existingFileId) => {
  const body = await createMultipartBody(content, !!existingFileId);
  const options = {
          //method: !!existingFileId ? 'PATCH' : 'POST',
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + apiToken,
            //'Content-Type': 'image/jpeg'
            'Content-Type' : `multipart/related; boundary=` + boundaryString
            //'Content-Type' : `multipart/form-data; boundary=` + boundaryString
          }
        };

  console.log("body", body);
 
  // return fetch(`${uploadUrl}/files?uploadType=multipart`,{ 
  //   ...options,
  //   body,
  // }).then(parseAndHandleErrors);

  
  return fetch(`${uploadUrl}/files${existingFileId ? `/${existingFileId}` : ''}?supportsAllDrives=true&uploadType=multipart`, {
    ...options,
    body: body,
  })
    .then(parseAndHandleErrors).then(data => {
        console.log("first", data);
        return data;
    })
    //.then(response => { return fetch(`https://www.googleapis.com/drive/v3/files/${response.id}?addParents=1s7wLzx3s4seEN40itttmZ_JWrhN_EOl5`, {method: 'PATCH',headers: {'Authorization': 'Bearer ' + apiToken, 'Accept': 'application/json', 'Content-Type': 'application/json'}, data: {'name': 'hmm' + response.name},})}).then(parseAndHandleErrors).then(data => { console.log("second", data); return data;})
    //.then(()=> {return fetch(`https://www.googleapis.com/drive/v3/files`,
    //{method: 'GET', headers: {'Authorization': 'Bearer ' + apiToken, 'Accept': 'application/json'}})}).then(parseAndHandleErrors).then(data => {console.log("third", data); return data;});
    // data: {'name': 'hmm' + response.name},
}


const createMultipartBody = async (body, isUpdate = false) => {
  // https://developers.google.com/drive/v3/web/multipart-upload defines the structure
  let match = /\.(\w+)$/.exec(body.name);
  let type = match ? `image/${match[1]}` : `image`;

  // let imageData = await fetch(body.uri) // <-- This line crashes with the error  
  // console.log(imageData);
  // let blob = await imageData.blob();
  // console.log(blob);
 //const img_url= "https://picsum.photos/200/300.jpg";

 let result = await fetch(body.uri);

 let blob = await result.blob(); 


//note the field is "content-type", javascript needs object notation to access it
  const mime =  !!blob.type? blob.type: result.headers.map["content-type"];
  console.log(mime);

  const metaData = {
    name: body.name,
    description: 'Session Artifacts',
    mimeType: mime,
  };

  const blobToBase64 = blob => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      return new Promise(resolve => {
        reader.onloadend = () => {
          resolve(reader.result); 
        };
      });
    };


    //const formData = new FormData();
    
    let base64 = await blobToBase64(blob);

    base64 = base64.split(',')[1];
    console.log(base64);
    //base64 = `data:${mime};base64,`+ base64;
    //console.log(base64);
    //formData.append('file', base64);
    //formData.append('metadata', JSON.stringify(metaData)); 

    //return formData;
  // var payload = new FormData();
  // payload.append('metadata', new Blob([JSON.stringify(metaData)], {type: 'application/json'}));
  // payload.append('file', blob);



//  const boundary = boundaryString;
//   let data = "--" + boundary + "\r\n";
//   data += 'Content-Disposition: form-data; name="metadata"\r\n';
//   data += "Content-Type: application/json; charset=UTF-8\r\n\r\n";
//   data += JSON.stringify(metaData) + "\r\n";
//   data += "--" + boundary + "\r\n";
//   data += 'Content-Disposition: form-data; name="file"\r\n\r\n';


  // const payload = Buffer.concat([
  //   Buffer.from(data, "utf8"),
  //   Buffer.from(blob, "binary"),
  //   Buffer.from("\r\n--" + boundary + "--\r\n", "utf8"),
  // ]);


  //return payload;   
  //if it already exists, specifying parents again throws an error
  
  //this statement is responsible for saving it to app data folder!!
  //if (!isUpdate) metaData.parents = ['appDataFolder']

  //request body
  
  //multipartbody with boundary strings requires the blob be changed from binary to base 64 encoded -- see https://stackoverflow.com/questions/32714662/how-to-send-an-http-multipart-post-request-with-a-blob-in-it so to keep the file small need form-data 
  const multipartBody = `\r\n--${boundaryString}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n`
  + `${JSON.stringify(metaData)}\r\n`
  + `--${boundaryString}\r\nContent-Type: ${mime}\r\n`
  + `Content-Transfer-Encoding: base64 \r\n`
  + `\r\n${base64}\r\n`
  + `--${boundaryString}--`

//  + `--${boundaryString}\r\nContent-Type: ${mime}\r\n\r\n`
 // + `${JSON.stringify(blob)}\r\n`

  // console.log("hmm");

  return multipartBody;
}

const queryParams = () => {
  return encodeURIComponent("name = 'data.json' and 'appDataFolder' in parents")
}

const getFile = () => {
  const qParams = queryParams()
  const options = {
          method: "GET",
          headers: {
            'Authorization': 'Bearer ' + apiToken
          }};
  return fetch(`${url}/files?q=${qParams}&spaces=appDataFolder`, options)
    .then(parseAndHandleErrors)
    .then((body) => {
      if (body && body.files && body.files.length > 0) return body.files[0]
      return null
    })
}

// const dispatchGoogleDrive = apiToken => (dispatch) => {
//   dispatch({ type: ActionNames.dataRestoreStart })
//   setApiToken(apiToken)
//   return getWorkoutFile()
//     .then((file) => {
//       if (file) {
//         return downloadFile(file.id)
//       }
//       throw new Error('No existing backup file found.')
//     })
//     .then((data) => {
//       dispatch({
//         type: ActionNames.dataRestoreFinished,
//         payload: data,
//       })
//     })
//     .catch(err => dispatch({ type: ActionNames.dataRestoreError, payload: err }))
// }

  const getMentorMenteeInput = () => {
 
    if(session === null || (session.sessionMentor !== null && session.sessionMentor !== ""  && session.sessionMentee !== null && session.sessionMentee !== "")){
      return [];
    }  
    else{
         return [
          <Input
            label = "Session Mentor"
            style={styles.textInput} 
            onChangeText={(text) => setSessionMentor(text)}
            value={sessionMentor}/>,
          
          <Input
            label = "Session Mentee"
            style={styles.textInput} 
            onChangeText={(text) => setSessionMentee(text)}
            value={sessionMentee}/>
         ];
      }
    

  };

 const _pickDocument = async (accessToken = null) => {
    // Get the document from picker and upload with API
          //note that we need to check if we have the right apiToken first! and then upload the file 
      if (apiToken === undefined && accessToken === null){
          
          promptAsync();
      }else{
    let result = await DocumentPicker.getDocumentAsync({});
    if(result.type == 'success'){

      uploadFile(result, 0, accessToken);
    }
      }
  }

  const getMentorMenteeComments = () => {
        if (session !== null && (session.sessionMentor !== null && session.sessionMentor !== ""  && session.sessionMentee !== null && session.sessionMentee !== "")) {
      
        if (session.sessionMentor === loggedInUser){
          return [
            <Input
              label = "Session Mentee Rating"
              style={styles.textInput} 
              onChangeText={(text) =>setSessionMenteeRating(text)}
              value={sessionMenteeRating}/>,
            <Input
              label = "Session Comments about Mentee"
              style={styles.textInput} 
              onChangeText={(text) =>setSessionMenteeComments(text)}
              value={sessionMenteeComments}/> 
            ]
        
        }
        else if(session.sessionMentee === loggedInUser){
          return [<Input
            label = "Session Mentor Rating"
            style={styles.textInput} 
            onChangeText={(text) =>setSessionMentorRating(text)}
            value={sessionMentorRating}/>,
           <Input
            label = "Session Comments about Mentor"
            style={styles.textInput} 
            onChangeText={(text) =>setSessionMentorComments(text)}
            value={sessionMentorComments}/> 
            ]
        }
        else {
          return [];
        }
      }
      else {
            
          return [ <Text style={styles.aboutText}>{'\n'}{'\n'}To make comments and ratings about your teammate, you need to set the mentor and mentee fields above and save the changes to session. You are allowed to change these fields afterwards until you exit "My Sessions" </Text>]
      }
  }

  // const initRecord = async() => {
  //   var token = await AsyncStorage.getItem("token");
  //   var sessions;
  //   fetch("https://taco-loco.howardwu2.repl.co/sessionFromUsername/" + loggedInUser, {
  //   method: "GET",
  //   headers: {
  //     'Authorization': 'Bearer ' + token
  //   }})
  //   .then((response) => {response.json().then(   
  //     (jsonArr) => {

  //       //note need to keep this code in the then clause because sessions may still be unassigned otherwise (i.e. undefined) due to the promise not being fullfilled yet
  //       sessions = jsonArr;
  //            setMySessions(sessions);

  //         if (sessions.length !== 0){
  //           setVisibilityStyle(styles.container);
  //           setPickSession(refreshPickItemsSessions(mySessions.slice()));
  //         } 
  //         else {
  //           setVisibilityStyle(styles.invisible);
  //         }
  //       }
  //       );
  //   })
  //  .done();
         

  //    //let sessions = [];
  //     // AsyncStorage.getItem('record').then(obj => {
  //     //   if (obj != null) {
  //     //     JSON.parse(obj)
  //     //       .filter(x => x.sessionCreator === this.loggedInUser | x.sessionMentee === this.loggedInUser | x.sessionMentor === this.loggedInUser)
  //     //       .map(x => sessions.push(x));

  //     //     {/* need to sort the order of my sessions in reverse chronological order*/}
  //     //     sessions.sort((a,b) => {return moment(b.time) - moment(a.time);});

  //     //     this.setState({mySessions: sessions});

  //     //     if (sessions.length !== 0){
  //     //       this.setState({visibilityStyle: styles.container});
  //     //       this.setState({pickSession: this.refreshPickItemsSessions(mySessions.slice())});
  //     //     } 
  //     //     else {
  //     //       this.setState({visibilityStyle: styles.invisible});
  //     //     }
  //     //   }
  //     // });
    
  
  // }

  const saveChangesToSession = async() => {

    if(loggedInUser !== 'test' && props.navigation.state.params.googleSignInTest !== true){

    
      var token = await AsyncStorage.getItem("token");

      var sessionsToBeModified = mySessions.filter( x => x.sessionStoryId === storyId).map((x) => {
      x.sessionMentor = sessionMentor; 
      x.sessionMentee = sessionMentee; 
      x.sessionAction = sessionAction; 
      x.sessionSubjectMatter = sessionSubjectMatter; 
      x.sessionMentorRating = sessionMentorRating; 
      x.sessionMenteeRating = sessionMenteeRating;
      x.sessionMentorComments = sessionMentorComments;
      x.sessionMenteeComments = sessionMenteeComments;
      x.teammates = teammates.split(",");
      return x
      });

      fetch("https://taco-loco.howardwu2.repl.co/overwriteSession", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(
        sessionsToBeModified)
    }).then((response) => response.json())
    .then((responseData) => {
      //need to comma separate every statement here -- don't do curly braces with semi colons
      responseData.error ?  setHiddenErrorModSessionDialog(false) :
      (setHiddenSavedChangesDialog(false))});
    }else{
      let newObj = null;
       AsyncStorage.getItem('record').then(obj => {
          if (obj != null) {
            newObj = JSON.parse(obj).filter( x => x.sessionStoryId !== storyId)

            {/*
            note: remeinder that push function doesn't return a new obj! which is why you can't add it as part of the object assignment!
            note: you need a spread operator or else it creates another nested object*/}
            newObj.push(...JSON.parse(obj).filter( x => x.sessionStoryId === storyId).map(x => 
            { x.sessionMentor = sessionMentor; 
              x.sessionMentee = sessionMentee; 
              x.sessionAction = sessionAction; 
              x.sessionSubjectMatter = sessionSubjectMatter; 
              x.sessionMentorRating = sessionMentorRating; 
              x.sessionMenteeRating = sessionMenteeRating;
              x.sessionMentorComments = sessionMentorComments;
              x.sessionMenteeComments = sessionMenteeComments;
              x.teammates = teammates.split(",");

              return x;}));

          }
               
        AsyncStorage.setItem('record',JSON.stringify(newObj)).then(obj => {
        setHiddenSavedChangesDialog(false)})
          });  

    }
      
          
          
      };



  const fillSessionInfo = session => {

    setId(session.id);
    setStoryId(session.sessionStoryId); //set the default choice for the picker to the first item in the choices
    setSessionCreator( session.sessionCreator);
    setSessionMentor( session.sessionMentor);
    setSessionMentee( session.sessionMentee);
    setSessionAction( session.sessionAction);
    setSessionSubjectMatter( session.sessionSubjectMatter);
    setSessionTime( moment(new Date(session.time)).format('DD/MM/YYYY hh:mm A'));
    setSessionMenteeRating( session.sessionMenteeRating);
    setSessionMentorRating( session.sessionMentorRating);
    setSessionMentorComments(session.sessionMentorComments);
    setSessionMenteeComments(session.sessionMenteeComments);
    setTeammates((session.teammates)?session.teammates.join():"");

    //there is a race condition here with sessionMentor so I switched it to session.sessionMentor. Same with the other fields here!
    if (session.sessionMentor !== null && session.sessionMentor !== ""  && session.sessionMentee !== null && session.sessionMentee !== ""){

        setMentorMenteeCommentsRatingsFixed(`Session Mentor: ${session.sessionMentor} ${'\n'} ${'\n'} Session Mentee: ${session.sessionMentee} ${'\n'} ${'\n'}`);
        
        if (session.sessionMentor === loggedInUser){
          setMentorMenteeCommentsRatings(
            [<Input
              label = "Session Mentee Rating"
              style={styles.textInput} 
              onChangeText={(text) => setSessionMenteeRating(text)}
              value={sessionMenteeRating}/>,
            <Input
              label = "Session Comments about Mentee"
              style={styles.textInput} 
              onChangeText={(text) => setSessionMenteeComments(text)}
              value={sessionMenteeComments}/> 
            ]
          );

        }
        else if(session.sessionMentee === loggedInUser){
          setMentorMenteeCommentsRatings(
          [<Input
            label = "Session Mentor Rating"
            style={styles.textInput} 
            onChangeText={(text) => setSessionMentorRating(text)}
            value={sessionMentorRating}/>,
           <Input
            label = "Session Comments about Mentor"
            style={styles.textInput} 
            onChangeText={(text) => setSessionMentorComments(text)}
            value={sessionMentorComments}/> 
            ]
          )
        }
    }
    else {

      setMentorMenteeCommentsRatingsFixed( 
         `Logged In User: ${loggedInUser}  ${'\n'} ${'\n'} `  
           );

      setMentorMenteeCommentsRatings(
          [ <Text style={styles.aboutText}>{'\n'}{'\n'}To make comments and ratings about your teammate, you need to set the mentor and mentee fields above and save the changes to session. You are allowed to change these fields afterwards until you exit "My Sessions" </Text>]    
      );
    }
  }


  const refreshPickItemsSessions = choicetype => {
    let arr = [];
    setSession(choicetype[0]);
    fillSessionInfo(choicetype[0]);
    choicetype.map(val => arr.push(<Picker.Item label={val.sessionAction + " " + val.sessionSubjectMatter + " -- " + moment(new Date(val.time)).format('DD/MM/YYYY hh:mm A')} value={val} />));
    return arr;
  };

 
    const { navigate, push, state } = props.navigation;



    return (
      <KeyboardAvoidingView style= {{minHeight:Dimensions.get('window').height , flex: 1, flexDirection: 'column', justifyContent: 'center',paddingTop: STATUSBAR_HEIGHT}} behavior="padding" enabled >
        
        <MyDialog
            visible = {hiddenErrorModSessionDialog===false}
            title={`Error modifying session`}
            hide = {()=>{setHiddenErrorModSessionDialog(true)}}
          />
        
        <MyDialog
            visible = {hiddenSavedChangesDialog===false}
            title={`Session changes saved`}
            hide = {()=>{setHiddenSavedChangesDialog(true);  props.navigation.goBack()}}
          />
        
        <MyDialog
            visible = {gotAPIToken!==null}
            title={`Approved Google Drive API. Opening file...`}
            hide = {()=>{setGotAPIToken(null);_pickDocument(gotAPIToken);}}
      
          />
          
        <MyDialog
            visible = {statusMsg!==null}
            title={statusMsg}
            hide = {()=>{setStatusMsg(null); }}
          />
      <Header
        currentPage={state.routeName}
        navigate={navigate}
        message="Login"
      />
       <View style={styles.container}>

        <ScrollView>
        <Text style={styles.aboutTitle}> Select a session</Text>
        <Text style={styles.aboutText}>
          Choose a story that you are a part of.
        </Text>

        {/*note because I no longer do picker by storyId -- I changed the selectedValue to a new variable called session and it works!*/}
        <Picker
          selectedValue={session}
          style={styles.aboutText}
          onValueChange={(itemValue, itemIndex) =>
            {
              setSession(itemValue);
              fillSessionInfo(itemValue);
            }
          }
        >
          {pickSession}
        </Picker>      

        <View style = {styles.viewStyleForLine}></View>

        <View style={visibilityStyle}>

          <Text style={styles.aboutTitle}>
             StoryId: {storyId} 
              {'\n'}
              {'\n'}
             Session Creator: {sessionCreator}
              {'\n'}
              {'\n'} 
             Session Time: {sessionTime}
              {'\n'}
              {'\n'} 
             Session Action: {sessionAction}
              {'\n'}
              {'\n'} 
             Session Subject Matter: {sessionSubjectMatter}
              {'\n'}
              {'\n'}
              {mentorMenteeCommentsRatingsFixed}
          </Text>
          
          <View style = {styles.viewStyleForLine}></View>
          
          
  
          {getMentorMenteeInput()}

          <Input
            label = "Teammates"
            style={styles.textInput} 
            onChangeText={(text) => setTeammates(text)}
            value={teammates}/>
          
          <Input
            label = "Session Action"
            style={styles.textInput} 
            onChangeText={(text) =>setSessionAction(text)}
            value={sessionAction}/>
          
          <Input
            label = "Session Subject Matter"
            style={styles.textInput} 
            onChangeText={(text) =>setSessionSubjectMatter(text)}
            value={sessionSubjectMatter}/>
            
          {/*mentorMenteeCommentsRatings*/}
          {getMentorMenteeComments()}

            <CustomButton onPress={() => { _pickDocument() }}
              label = 'UPLOAD A FILE FROM THE SESSION' />
            <CustomButton onPress={() => {saveChangesToSession();}}
              label = 'SAVE CHANGES TO SESSION' />
            <CustomButton onPress={() => props.navigation.goBack()} 
              label = 'GO BACK' />
                  
        </View>
        </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 16,
    },
  aboutTitle: {
    paddingTop: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  aboutText: {
    paddingBottom: 20,
    paddingLeft: 10,
    textAlign: 'left',
  },
  viewStyleForLine: {
    borderBottomColor: "black", 
    borderBottomWidth: StyleSheet.hairlineWidth, 
    alignSelf:'stretch',
    width: "100%",
  },
  invisible: {
    display: 'none',
  }
});

