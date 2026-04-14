//  Created by Artem Bogoslavskiy on 7/5/18.

import React, { Component } from 'react';
import { ifIphoneX, ifAndroid } from '../utils';
import {
  View,
  StyleSheet,
  TextInput,
  Animated,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import { ImageBackground, Text} from 'react-native';

import Markdown from 'react-native-markdown-display';

const copy = `
Bacon ipsum dolor amet burgdoggen turducken ham strip steak pork shank meatball. Meatball tail pork rump sirloin porchetta prosciutto short loin tri-tip buffalo. Ball tip filet mignon short ribs boudin hamburger tail ham bacon prosciutto shoulder. 

1. 	Bacon ipsum dolor amet burgdoggen turducken ham strip steak pork shank meatball. 
2. 	Bacon ipsum dolor amet burgdoggen turducken ham strip steak pork shank meatball. 
3. 	Bacon ipsum dolor amet burgdoggen turducken ham strip steak pork shank meatball. 
`;

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class SearchBar extends Component {


  blurInputs() {
    this.inputSearch.blur();
    this.inputLocation.blur();
    this.props.changeInputFocus(false);
  }

  render() {
    const { animation, changeInputFocus, renderTabBar } = this.props;

    const transformWrapper = animation.getTransformWrapper();
    const transformSearchBar = animation.getTransformSearchBar();
    const opacitySearchBar = animation.getOpacitySearchBar();
    const opacityLocationInput = animation.getOpacityLocationInput();
    const arrowMinimizeStyle = animation.getArrowMinimizeStyle();


    return (
      <Animated.View style={[styles.wrapper, transformWrapper]}>
        <Animated.View style={opacitySearchBar}>

         <ImageBackground
            style = {{height: width-30,
        justifyContent: "center" }}
                source={ require('../img/workingtogether.jpg')} 
            >
           
            {this.props.showMenu === false ? 
            (
              <Markdown style={{
                body: {color: 'white', fontSize: 14, paddingLeft:20, paddingRight:20, backgroundColor:'#444444a0'},
              }}>
                {copy}
              </Markdown>
              
            ) : (<></>) }
              
            </ImageBackground>

           
     
        </Animated.View>
        {renderTabBar()}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({

    heroImage: {
        height: width-30,
        justifyContent: "center"
    },
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: '#fff',
  },
 
});