/*
import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,  
    TouchableHighlight, 
    Alert, 
    AsyncStorage } from 'react-native';
import { Input, CheckBox } from 'react-native-elements';
import {NotificationSpacer} from './NotificationBarSpacer';

export class Login extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            passwrd: '',
            rememberMe: false,
        };
    }

    cancelLogin = ()=>{
        Alert.alert('Login cancelled');
        this.props.navigation.navigate('Home');
    };

    registerUser = () => {
        this.props.navigation.navigate('Register');
    };

    loginUser = ()=>{
        
        if ( !this.state.username ){
            Alert.alert('Please enter a username')
        }
        else if ( !this.state.passwrd ){
            Alert.alert('Please enter a password')
        }
        else {
            if (this.props.screenProps.loggedInUser !==null){
                    Alert.alert('Someone already logged on');
                    this.props.navigation.push('Home'); 
                      //needed this command to fix bug of hitting a backbutton resetting the login/username text on the home screen
            }
            else{
                    
                    AsyncStorage.getItem(this.state.username, (err, result) => {

                        if (result!==null){

                            if(result!==this.state.passwrd) {
                                Alert.alert('Password incorrect')
                            }
                            else {
                                if(this.state.rememberMe === true){
                                  AsyncStorage.setItem("rememberedUser",this.state.username);
                                }
                                else{
                                  AsyncStorage.removeItem("rememberedUser");
                                }
                                this.props.screenProps.loggedInUser = this.state.username;
                                Alert.alert(`${this.state.username} Logged in`);
                                this.props.navigation.push('Home');
                            }


                        }
                        else{
                            Alert.alert(`No account for ${this.state.username}`);
                        }
                    })
                }
            }

                
        }

    render() {
      
        return (
            <View style={styles.container}>
                <NotificationSpacer />
                <Text style={styles.aboutTitle}>Login {'\n'}</Text>

                <Input 
                    style={styles.textInput} 
                    onChangeText={(text) => this.setState({username: text})}
                    value={this.state.username}
                />
                <Text style={styles.label}>Enter Username</Text>

                <Input 
                    style={styles.textInput} 
                    onChangeText={(text) => this.setState({passwrd: text})}
                    value={this.state.passwrd}
                    secureTextEntry={true}
                />
                <Text style={styles.label}>Enter Password</Text>

                <TouchableHighlight onPress={this.loginUser} underlayColor='#31e981'>
                    <Text style = {styles.buttons}>
                        Login
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.cancelLogin} underlayColor='#31e981'>
                    <Text style = {styles.buttons}>
                        Cancel
                    </Text>
                </TouchableHighlight>
      
                <TouchableHighlight onPress={this.registerUser} underlayColor='#31e981'>
                    <Text style = {styles.buttons}>
                        Register a New Account
                    </Text>
                </TouchableHighlight>   
*/
{/*note -- for onPress I was missing '() =>' and that was causing an 'invariant violation maximum update depth' error*/}

/*
                <CheckBox title='Remember me (not recommended on public devices)' onPress={() => this.setState({rememberMe: !this.state.rememberMe})} checked={this.state.rememberMe} />


          </View>
        );
    }

    
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%',
        paddingTop: '10%'
    },
    aboutTitle: {
      paddingTop: 10,
      fontSize: 20,
      textAlign: 'center',
    },
    textInput:{
      alignSelf: 'center',
      minWidth: '80%',
    },
    buttons:{
        marginTop: 15,
        fontSize: 16
    }
});
*/
 