import * as React from 'react';
import { View, TextInput, StyleSheet} from 'react-native';
import { Button, Paragraph, Dialog, Portal , Provider} from 'react-native-paper';

export function MyDialog(props){

  return (
    <View>

      <Portal>
        <Dialog style ={{backgroundColor: '#555'}} visible={props.visible} onDismiss={props.hide}>
          <Dialog.Title 
            style = {styles.aboutTitle}          
          >{props.title}</Dialog.Title>



          <Dialog.Content>
          {props.input === true ?
            <TextInput
              style = {styles.addInput}
              onChangeText={props.onChangeTextState}
              value={props.value}
            />: null}
          </Dialog.Content>
          <Dialog.Actions>
          {props.input===true?
            <>
            <Button onPress={props.hide}> Cancel </Button>
            <Button onPress={props.onPressFunc}> Done </Button>
           </>
           : 
            <Button onPress={props.hide}> OK </Button>
          }
          </Dialog.Actions>
          
        </Dialog>
      </Portal>
    </View>
  );
}
const styles = StyleSheet.create({

  aboutTitle: {
    paddingTop: 10,
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  addInput:{
    width: '90%',
    alignSelf: 'center',
    borderColor: 'white',
    borderBottomWidth: 1,
    color: 'white'
  },
});