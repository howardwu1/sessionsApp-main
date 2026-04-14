import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  Dimensions,
  Platform,
  StatusBar,
  Animated,
  NativeModules,
} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Login } from './Login';
import Register from './Register';
import { Hero } from './Hero';
import SearchBarProvider from './SearchBarProvider';
import SearchBar from './SearchBar';
import { withStore, useStore } from 'react-context-hook';

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT =
  Platform.OS === 'ios'
    ? 20
    : Platform.OS === 'android'
    ? StatusBarManager.HEIGHT
    : 0;

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export function Menu(props) {
  const [selectedtab, setSelectedTab] = useStore('selectedTab');
  const initialheight = () => {
    if (props.scrollable === true) {
      return (7 / 6) * Dimensions.get('window').width + 100 <
        Dimensions.get('window').height
        ? (7 / 3) * Dimensions.get('window').width + STATUSBAR_HEIGHT - 30
        : (7 / 3) * Dimensions.get('window').width;
    } else {
      return Dimensions.get('window').height;
    }
  };


  //task: need to keep tuning the constants here but it seems pretty good so far
  const initialLayout = {
    width: Dimensions.get('window').width,
    //height: Dimensions.get('window').height
    height:
      props.showMenu === true
        ? Dimensions.get('window').height - 45 - 0.90*STATUSBAR_HEIGHT
        : initialheight(),
  };

  const _handleIndexChange = (index) => {
    setSelectedTab(routes[index].key);
    setCurrentTab(routes[index].key);

    setIndex(index);
  };

  const focusedColor = (focused) => {
    if (focused === true) {
      return { color: 'black', margin: 8 };
    } else {
      return { color: 'gray', margin: 8 };
    }
  };

  const [currentTab, setCurrentTab] = useState('login');

  const _getLabelText = ({ route }) => route.title;

  const _renderHeader = (animation, canJumpToTab, showMenu) => (props2) => (
    <SearchBar
      showMenu={showMenu}
      animation={animation}
      changeInputFocus={(suggestionFocus) => this.setState({ suggestionFocus })}
      renderTabBar={() => (
        <TabBar
          onTabPress={({ route }) => {
            if (route.key != currentTab && canJumpToTab) {
              //need to scroll to the top on all tabs to prevent funky behavoir
  
              props.passedRef.current.scrollToOffset({y:0});
              props.passedRef2.current.scrollToOffset({y:0});
              animation.onTabPress(route);
              
            }
          }}
          renderLabel={({ route, focused }) => (
            <Text style={focusedColor(focused)}>{route.title}</Text>
          )}
          getLabelText={_getLabelText}
          indicatorStyle={styles.indicator}
          style={{
            backgroundColor: '#fff',
            elevation: 0,
          }}
          labelStyle={styles.label}
          {...props2}
        />
      )}
    />
  );

  /* This is just to do a check to see if you logged in yet -- since it seems like you cant do anything without logging in first, I think we should just force the log in immediately when you first enter the app! */

  // const loginCheck = (target) => {
  //   if (props.loggedInUser === null) {
  //     Alert.alert('To access your data, log in first! Redirecting...');
  //     props.navigate('Login');
  //   } else {
  //     props.navigate(target);
  //   }
  // };

  const [index, setIndex] = React.useState(0);
  const [routes, setRoutes] = useState([
    { key: 'login', title: 'SIGN IN' },
    { key: 'register', title: 'SIGN UP' },
  ]);

  const [suggestionFocus, setSuggestionFocus] = useState(null);

  const _renderScene = ({ route }) => {
    switch (route.key) {
      case 'login':
        return (
          <Login
            route={route}
            passedRef={props.passedRef}
            navigation={props.navigation}
            lambda = {props.lambda}
            setShowMenuBool = {props.setShowMenuBool}
            googleSignInTest = {props.googleSignInTest}
          />
        );
      case 'register':
        return ( 
          <Register 
            route={route} 
            passedRef={props.passedRef2} 
            lambda = {props.lambda}
            navigation={props.navigation} 
            setShowMenuBool = {props.setShowMenuBool}
            />
        );
      default:
        return null;
    }
  };

  const _renderSuggestion = (animation) => {
    let focus = suggestionFocus;
    if (focus) {
      let styleAnimation = animation.getStyleSuggestion();
      let Suggestion =
        focus == 'location' ? SearchBarLocationSuggestion : SearchBarSuggestion;

      return (
        <Animated.View
          style={[initialLayout, styles.suggestionWrap, styleAnimation]}>
          <Suggestion />
        </Animated.View>
      );
    }
  };

  return (
    <View style={initialLayout}>
      {props.showMenu === true ? (
        <>
          <Image
            style={{ height: height * 0.6, justifyContent: 'center' }}
            source={require('../img/workingtogether.jpg')}
          />

          <View style={styles.menu}>
            <TouchableOpacity
            
              style={styles.buttonStyles}
              onPress={() => props.navigation.navigate('NewSession', {lambda: props.lambda, googleSignInTest:  props.googleSignInTest,})}>
              
              <View style={styles.row}>
                <Image
                  style={styles.buttonIcon}
                  source={require('../img/img_528133.png')}
                />
                <Text style={styles.buttonText}>New Session</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonStyles}
              onPress={() => props.navigation.navigate('MySession', {lambda: props.lambda, googleSignInTest:  props.googleSignInTest,})}>
              <View style={styles.row}>
                <Image
                  style={styles.buttonIcon}
                  source={require('../img/396619-200.png')}
                />
                <Text style={styles.buttonText}>My Sessions</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonStyles}
              onPress={() => props.navigate('Dashboard')}>
              <View style={styles.row}>
                <Image
                  style={styles.buttonIcon}
                  source={require('../img/analytics.png')}
                />

                <Text style={styles.buttonText}>Dashboard</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonStyles}
              onPress={() => props.navigate('Profile')}>
              <View style={styles.row}>
                <Image
                  style={styles.buttonIcon}
                  source={require('../img/profile.png')}
                />
                <Text style={styles.buttonText}>Profile</Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <SearchBarProvider currentTab={currentTab}>
          {(animation, { canJumpToTab }) => (
            <View style={initialLayout}>
              {Platform.OS === 'android' && (
                <StatusBar translucent={true} backgroundColor="transparent" />
              )}
              <TabView
                navigationState={{ index, currentTab, routes }}
                renderScene={_renderScene}
                renderTabBar={_renderHeader(
                  animation,
                  canJumpToTab,
                  props.showMenu,
                  props.adjust
                  )}
                onIndexChange={_handleIndexChange}
                initialLayout={initialLayout}
                swipeEnabled={false} // TODO ...
                canJumpToTab={() => canJumpToTab}
                useNativeDriver
              />

              {_renderSuggestion(animation)}
            </View>
          )}
        </SearchBarProvider>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    alignItems: 'center',
  },
  buttonIcon: {
    width: 29,
    height: 32,
  },
  row: {
    flexDirection: 'row',
    paddingLeft: 15,
  },
  buttonStyles: {
    width: '95%',
    height: '24.25%',
    justifyContent: 'center',
    borderWidth: 0.6,
    borderColor: 'gray',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    marginTop: 1,
  },
  buttonText: {
    paddingLeft: 15,
    color: 'black',
    fontSize: 18,
    textAlign: 'left',
  },
  indicator: {
    backgroundColor: '#000',
    width: '30%',
    marginLeft: '10%',
    marginRight: '60%',
  },
  label: {
    color: '#45688e',
    margin: 0,
    marginTop: 6,
    marginBottom: 6,
    fontWeight: '400',
  },
  suggestionWrap: {
    position: 'absolute',
    backgroundColor: '#fff',
    zIndex: 3,
  },
});
