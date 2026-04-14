// import React, {useEffect, useState} from 'react'
// import {View, Text, StyleSheet, Platform, Button, Image} from 'react-native'
// //import * as ImagePicker from 'expo-image-picker';
// //import axios from 'axios';
// import { withStore, useStore } from 'react-context-hook';

// export const UploadToDrive = (props) => {

//   const [image, setImage] = useState(null);
//   const [uploadPercent, setUploadPercent] = useState(0);
//   const [mimeType, setMimeType] = useState('');
//   const [apiToken, setApiToken] = useStore('apiToken');

//   useEffect(() => {
//     (async () => {
//       if (Platform.OS !== 'web') {
//         const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
//         if (status !== 'granted') {
//           alert('Sorry, we need camera roll permissions to make this work!');
//         }
//       }
//     })();
//   }, []);

//   // pick the media file to upload
//    const pickImage = async () => {
//     console.log("hmm2");
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });


//     console.log(result);
//     // ensure that all needed parameters/fields are present
//     if (!!result && !result.cancelled) {
     
//       console.log(result.uri);
//       //const uri =  "file:///" + result.uri.split("file:/").join("");
//       setImage(result.uri);
      

//       const file = result

//       let filename = result.uri.split('/').pop();
//       let match = /\.(\w+)$/.exec(filename);
//       let type = match ? `image/${match[1]}` : `image`;

//       file.name = filename;
//       file.title = filename;
//       file.type = type
//       file.uri = result.uri
//       setMimeType(file.type)

//       // update the metadata
//       const uploadURL = `https://www.googleapis.com/upload/drive/v2/files?uploadType=multipart&fields=id`;

//       let contentType = file.type || 'application/octet-stream';
//       let metadata = {
//         name: file.name, 
//         mimeType: contentType,
//       };

//       let form = new FormData();
//       // construct the file metadata for the upload
//       form.append(
//         "metadata",
//         new Blob([JSON.stringify(metadata)], { type: "application/json" }),
//       );
//       // append the file
//       form.append('file', file);

//       const {data: upload_res} = await axios(uploadURL, {
//         method: "POST",
//         headers: { 
//           'Content-Type': 'application/json; charset=UTF-8',
//           'Authorization': "Bearer " + apiToken 
//         },
//         data: form,
//         onUploadProgress: (p) => {
//           setUploadPercent((p.loaded / p.total) * 100)
//         },
//       })
//       // .then(res => res.json())
//       // .then(res => {return res})
//       .catch(err => console.log(err))

//       // update the file metadata
//       const fileUploadData = await updateFileMetadata(apiToken, upload_res.id, '1s7wLzx3s4seEN40itttmZ_JWrhN_EOl5', metadata)
//       console.log(fileUploadData)

//     } else {
//       throw new Error('You do not have all the right variables to make an upload')
//     }
//   };

//  /**
//   * @param {String} token access token gotten from the server
//   * @param {String} fileId id of the already uploaded file
//   * @param {String} parents a comma delimited list of parents e.g. p1,p2,p3
//   * @param {Object} metadata file metadata
//   */
//   const updateFileMetadata = async (token, fileId, parents, metadata) => {
//      // Update the uploaded file by pointing it to a new parent
//       const update_URL = `https://www.googleapis.com/upload/drive/v2/files/${fileId}?uploadType=multipart&addParents=${parents}`;

//      // construct the metadata using multipart/related content type [RFC 2387]
//       const boundary = '-------314159265358979323846';
//       const delimiter = "\r\n--" + boundary + "\r\n";
//       const close_delim = "\r\n--" + boundary + "--";

//       const multipartRequestBody =
//           delimiter +
//           'Content-Type: application/json\r\n\r\n' +
//           JSON.stringify(metadata) +
//           close_delim;

//       // update the metadata of the uploaded file    
//       return await fetch(update_URL, {
//         method: "PUT",
//         headers: { 
//           'Content-Type': 'multipart/related; boundary=' + boundary + '',
//           'Authorization': "Bearer " + token 
//         },
//         body: multipartRequestBody,
//       })
//       .then(res => res.json())
//       .then(res => res)
//       .catch(err => console.log("grrr", {err}))
//   }

//   return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

//         {!!uploadPercent && <Text style={styles.uploadPercent}>Upload Percent: {`${uploadPercent.toFixed(2)}%`}</Text>}

//         <Button style={styles.button} title="Pick a file" onPress={pickImage} />
//         {image && mimeType.includes('image') && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop: 20 }} />}
//     </View>
//   )
// }


// const styles = StyleSheet.create({
//   button: {
//     position: 'absolute',
//     top: '10%'
//   },
//   uploadPercent: {
//     color: 'tomato',
//     fontSize: 15,
//     fontWeight: 'bold',
//     marginBottom: 20
//   }
// })
