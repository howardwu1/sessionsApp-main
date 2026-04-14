import React from 'react';
import { Text, StyleSheet, TouchableOpacity, } from 'react-native';

export function CustomButton(props){
  return (
           <TouchableOpacity style={styles.buttonStyles} onPress={props.onPress}>
              <Text style={styles.button}>{props.label}</Text>
            </TouchableOpacity>
        );
    
}


const styles = StyleSheet.create({
  button: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  buttonStyles: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#2558ad', 
    width: '70%',
    borderRadius: 10,
    alignSelf:'center',
  },
});