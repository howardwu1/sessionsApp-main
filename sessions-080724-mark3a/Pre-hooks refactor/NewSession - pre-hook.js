/*
import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TextInput,
  AsyncStorage,
  View,
  Picker,
  Alert,
  Modal,
  TouchableHighlight
} from 'react-native';
import {Input, CheckBox} from 'react-native-elements';
import MultiSelect from 'react-native-multiple-select';
import Icon from 'react-native-vector-icons';
import {AddModal} from './AddModal';
import {NotificationSpacer} from './NotificationBarSpacer';

//todo: selected items form teh multiselect should be black not grey
//todo: keep the screen from shifting up when soft keyboard comes up using the same solution from register screen!
export class NewSessionScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
   constructor(props) {
        super(props);
        this.state = {
          items: [],
          selectedItems: [],
          needHelp: false,
          action: "Debug code for",
          actionChoices: [],
          newAction: null,
          newSubjectMatter: null,
          modalVisible: false,
          pickActions: [],
          mentor: null,
          mentee: null,
          subjectMatter: "Java",
          subjectMatterChoices: [],
          pickSubjectMatter: [],
          modalVisible2: false,
          record: [],
          sessionId: 0,
          storyId: null,
        };
    }
  

 
  refreshPickItems = (choicetype) => {
       var arr = [];
       choicetype.map(val => arr.push(<Picker.Item label={val} value={val}/>));
       return arr;
  }

  onSelectedItemsChange = (selectItems) => {
      this.setState({ selectedItems: selectItems });
    };

  UNSAFE_componentWillMount(){
    let items = []

    AsyncStorage.getAllKeys((err, keys) => {
      keys.filter(key => key != 'newAction' && key !='userLoggedIn' && key !='record' && key !='subjectmatterchoices' && key !='rememberedUser' && key !='actionchoices').map(key => items.push({key: key, name: key}));
      this.setState({items: items});
    });

    AsyncStorage.getItem('actionchoices').then((obj) =>
    { 
      if (obj != null){
        this.setState({actionChoices:obj.split(',')});
        this.setState({pickActions: this.refreshPickItems(this.state.actionChoices.slice())});
      }
    });

    AsyncStorage.getItem('subjectmatterchoices').then((obj) =>
    { 
      if (obj != null){
        this.setState({subjectMatterChoices:obj.split(',')});
        this.setState({pickSubjectMatter: this.refreshPickItems(this.state.subjectMatterChoices.slice())});
      }
    });
 
    AsyncStorage.getItem('record').then((obj) => {
      if (obj != null) {
        this.setState({record: JSON.parse(obj)});
        this.setState({sessionId: JSON.parse(obj).slice(-1)[0].id + 1})
      }
    })

  }


  addNewAction = () => {
    if (this.state.newAction !== null && this.state.newAction.trim() !== ""){
      this.state.actionChoices.push(this.state.newAction);
     AsyncStorage.setItem("actionchoices",this.state.actionChoices.toString(), (err, result) => {
      this.setState({pickActions: this.refreshPickItems(this.state.actionChoices.slice())});
      this.setState({action: this.state.newAction});
      this.setState({newAction: null});
      this.setState({modalVisible: false});
                    });
    }
    else {
      Alert.alert("Action cannot be blank!");
    }
     
  }

  addNewSubjectMatter = () => {

        if (this.state.newSubjectMatter !== null && this.state.newSubjectMatter.trim() !== ""){

          this.state.subjectMatterChoices.push(this.state.newSubjectMatter);
          
          AsyncStorage.setItem("subjectmatterchoices",this.state.subjectMatterChoices.toString(), (err, result) => {
            this.setState({pickSubjectMatter: this.refreshPickItems(this.state.subjectMatterChoices.slice())});
            this.setState({subjectMatter: this.state.newSubjectMatter});
            this.setState({newSubjectMatter: null});
            this.setState({modalVisible2: false});
          });
        } 
        else {
          Alert.alert("Subject Matter cannot be blank!");
        }
  }

  createNewSession = () => {
    if (this.state.selectedItems.length === 0){
      Alert.alert("No teammates selected!");
    }
    else if (this.state.storyId === null){
      Alert.alert("No story id entered!");
    }
    else if (this.props.screenProps.loggedInUser === null){
      Alert.alert('Log in before creating a session!');
    }
    else if (this.state.mentor !== null && this.state.mentor !== "" && !this.state.selectedItems.includes(this.state.mentor)){
      console.log("mentor is ", this.state.mentor);
      Alert.alert('Mentor not found in list of teammates!');
    }
    else if (this.state.mentee !== null && !this.state.selectedItems.includes(this.state.mentee)){
      Alert.alert('Mentee not found in list of teammates!');
    }
    else if (this.state.mentor !== null && this.state.mentee === this.state.mentor){
      Alert.alert('Mentor cannot be the mentee!');
    }
    else {
      
      this.state.record.push({id: this.state.sessionId, time:new Date().toString(), sessionCreator: this.props.screenProps.loggedInUser, sessionMentor: this.state.mentor, sessionMentee: this.state.mentee, sessionAction: this.state.action, sessionSubjectMatter: this.state.subjectMatter, sessionMentorRating: null, sessionMenteeRating: null, sessionMentorComments: null, sessionMenteeComments: null, sessionStoryId: this.state.storyId});     
 
      AsyncStorage.setItem("record", JSON.stringify(this.state.record)).then(obj => {
        Alert.alert('New session saved');
        this.props.navigation.goBack();
      })
      
    }
  }

  onChangeText= (text) => {this.setState({newAction: text})};
  onChangeTextSM = (text) => {this.setState({newSubjectMatter: text})};
  
  hideAddModals = () => {this.setState({modalVisible: false}); this.setState({modalVisible2: false});}
  render() {
    return (
      <View style={styles.totalContainer}>
      <NotificationSpacer />
      <View style={styles.container}>
      <ScrollView >
        <AddModal
          visible={this.state.modalVisible}
          type="Action"
          onChangeTextState = {this.onChangeText}
          value={this.state.newAction}
          onPressFunc = {this.addNewAction}
          hide = {this.hideAddModals} />
          
        <AddModal
          visible={this.state.modalVisible2}
          type="SubjectMatter"
          onChangeTextState = {this.onChangeTextSM}
          value={this.state.newSubjectMatter}
          onPressFunc = {this.addNewSubjectMatter}
          hide = {this.hideAddModals} />

        <Text style={styles.aboutTitle}>Enter Teammates</Text>
        <Text style={styles.aboutText}> Type in the names of people in the session here (include yourself if you are in the session). Also click the check box if you are still looking for someone to join your session and we&quot;ll post it for you! 
        </Text>

        <MultiSelect
          hidetags
          items={this.state.items}
          uniqueKey="key"
          ref={component => {
            this.multiSelect = component;
          }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
          selectText="Pick People"
          searchInputPlaceholderText="Search People..."
          onChangeInput={text => console.log("change " + text)}
          altFontFamily="ProximaNova-Light"
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

        <CheckBox title='Looking for help!' onPress={() => this.setState({needHelp: !this.state.needHelp})} checked={this.state.needHelp} />

     
        <Input
            label = "(Optional) Who is the session Mentor?"
            style={styles.textInput} 
            onChangeText={(text) => this.setState({mentor: text})}
            value={this.state.mentor}/>

        <Input
            label = "(Optional) Who is the session Mentee?"
            style={styles.textInput} 
            onChangeText={(text) => this.setState({mentee: text})}
            value={this.state.mentee}/>
     
        <Text style={styles.aboutTitle}>What's the task? </Text>
        <Text style={styles.aboutText}>
          Be descriptive such as the story id, or even a task id if available.
        </Text>

          <TextInput
            style={styles.textInput} 
            onChangeText={(text) => this.setState({storyId: text})}
            value={this.state.storyId}/>

        
        <Text style={styles.aboutTitle}>What is the scope or goals of the session? </Text>
        <Text style={styles.aboutText}>Ex. "Debug code for React Native" / "Answer questions on Java Code" / "Review code for Javascript"</Text>


        <Picker 
          selectedValue={this.state.action}
          style={styles.aboutText}
          onValueChange={(itemValue, itemIndex) =>
          (itemValue != "Add new action...") ? this.setState({action: itemValue}) : this.setState({modalVisible: true})
        }>
          <Picker.Item label="Debug code for " value="Debug code for" />
          <Picker.Item label="Answer questions on " value="Answer questions on" />
          <Picker.Item label="Review code for " value="Review code for" />
          {this.state.pickActions}
          <Picker.Item label="Add new action..." value="Add new action..." />

        </Picker>
        
        <Text style={styles.aboutTitle}> + </Text>

        <Picker 
          selectedValue={this.state.subjectMatter}
          style={styles.aboutText}
          onValueChange={(itemValue, itemIndex) =>
          (itemValue != "Add new subject matter...") ? this.setState({subjectMatter: itemValue}) : this.setState({modalVisible2: true})
        }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          {this.state.pickSubjectMatter}
          <Picker.Item label="Add new subject matter..." value="Add new subject matter..." />

        </Picker>

        <Text
          onPress={() => this.createNewSession()}
          style={styles.backButton}>
          CREATE SESSION
        </Text>

        <Text
          onPress={() => this.props.navigation.goBack()}
          style={styles.backButton}>
          GO BACK
        </Text>
      </ScrollView>
      </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  totalContainer:{
    flex:1
  },
  container: {
    flex: 14,
    alignItems: 'center',
  },
  aboutTitle: {
    paddingTop: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  aboutText: {
    paddingBottom: 20,
    paddingLeft: 10,
  },
  backButton: {
    paddingBottom: 50,
    textAlign: 'center',
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
    borderBottomWidth: 1,
    minWidth: '80%',
  },
});
*/
