import React from 'react';
import {
  Modal,
  View,
  Styles,
  StyleSheet,
  TouchableHighlight,
  Text,
  TextInput,
} from 'react-native';
//import {Modal as WebModal} from 'modal-react-native-web';
import {Platform} from 'react-native';

export class AddModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View>
              <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.visible}>
                <View style={styles.container}>

                  <Text style={styles.aboutTitle}>
                    Add a new {this.props.type} to the list
                  </Text>

                  <TextInput
                        style = {styles.addInput}
                        onChangeText={this.props.onChangeTextState}
                        value={this.props.value}
                  />

                  <TouchableHighlight onPress={this.props.onPressFunc} underlayColor='#31e981'>
                    <Text style = {styles.buttons}>
                      SAVE NEW {this.props.type.toUpperCase()}
                    </Text>
                  </TouchableHighlight>

                  <TouchableHighlight onPress={this.props.hide} underlayColor='#31e981'>
                    <Text style = {styles.buttons}>
                      CANCEL
                    </Text>
                  </TouchableHighlight>
                </View>
              </Modal>
              
            </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: '45%',
  },
  aboutTitle: {
    paddingTop: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  addInput:{
    width: '90%',
    borderColor: "black",
    borderBottomWidth: 1,
  },
  buttons:{
    marginTop: 15,
    fontSize: 16,
  },
});