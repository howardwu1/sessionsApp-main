/*
import React from 'react';
import {
  Button,
  Text,
  AsyncStorage,
  Alert,
  StyleSheet,
  Image,
  View
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Hero } from './component/Hero';
import { Header } from './component/Header';
import { Menu } from './component/Menu';
import { NewSessionScreen } from './component/NewSession';
import { Login } from './component/Login';
import { Register } from './component/Register';
import { MySessionScreen } from './component/MySession';
import { NotificationSpacer } from './component/NotficationBarSpacer';
import { ScreenOrientation } from 'expo';
import { Dashboard } from './component/Dashboard';
import { Profile } from './component/Profile.js';

//original class-based pre-hook version of my app.js file
class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    
    this.state = {
      loggedInUser: this.props.screenProps.loggedInUser,
    }
  }

  componentDidMount(){
    //locking the screen in portrait since it looks bad when in landscape
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }

  changeLoggedInUserToNull = () => {this.props.screenProps.loggedInUser = null; this.setState({loggedInUser: null});}

  render() {
    const { navigate, push } = this.props.navigation;
    return (
      <View style={styles.container}>
        <NotificationSpacer />
       <Header navigate={navigate} message="Login" loggedInUser={this.state.loggedInUser} setToNull= {this.changeLoggedInUserToNull} /> 
        <Hero />
        <Menu navigate={navigate} loggedInUser={this.state.loggedInUser} push = {push} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1
  },
});

const RootStack = createStackNavigator(
  {
    NewSession: NewSessionScreen,
    Home: HomeScreen,
    Login: Login,
    Register: Register,
    MySessions: MySessionScreen,
    Dashboard: Dashboard,
    Profile: Profile
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer screenProps={{loggedInUser: null }} />;
  }
}
*/
