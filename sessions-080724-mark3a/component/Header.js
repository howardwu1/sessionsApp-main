import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useStore } from 'react-context-hook';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MyDialog } from './MyDialog';

export function Header(props){

  const [loggedInUser, setLoggedInUser] = useStore('loggedInUser');
  const [loggedOutUser, setLoggedOutUser] = useState(null);



const display = () => {return (loggedInUser !== null) ? "Logout | " + loggedInUser : props.message;}

  return (
            <>
    
          <MyDialog
            visible = {loggedOutUser!== null}
            title={`${loggedOutUser} logged out`}
            hide = {()=>{setLoggedOutUser(null)}}
          />
          

            <View style={styles.headStyle}>
            
            <TouchableOpacity style={{alignSelf: 'center'}} onPress={()=>props.navigate("Home")} disabled={props.currentPage!=="Home"?false:true} >
                <Image 
                  source={require('../img/session.png')}
                  style={styles.logoStyle}            
                />
            </TouchableOpacity>

                { props.signedIn === true ?
                  (<Text
                    style={styles.headText} 
                    onPress={() => {props.toggleUser(setLoggedOutUser), props.setShowMenuBool(false)}} >

                    {display()}
                  </Text>) : null
                  }
              
            </View>
            </>    
        );
    
}


const styles = StyleSheet.create({
    headText: {
        textAlign: 'right',
        color: '#000000',
        fontSize: 14,
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'center'
    },
    headStyle: {
        paddingRight: '2%',
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#000000',
        overflow: 'hidden',
    },
    logoStyle:{
        //resizeMode: 'stretch',
        //flexDirection: 'column',
        //alignSelf: 'flex-end'
    },
});