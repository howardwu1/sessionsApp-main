import React from 'react';
import { StyleSheet, ImageBackground, Text, View, Image, Dimensions} from 'react-native';

import Markdown from 'react-native-markdown-display';

const copy = `
Bacon ipsum dolor amet burgdoggen turducken ham strip steak pork shank meatball. Meatball tail pork rump sirloin porchetta prosciutto short loin tri-tip buffalo. Ball tip filet mignon short ribs boudin hamburger tail ham bacon prosciutto shoulder. 

1. 	Bacon ipsum dolor amet burgdoggen turducken ham strip steak pork shank meatball. 
2. 	Bacon ipsum dolor amet burgdoggen turducken ham strip steak pork shank meatball. 
3. 	Bacon ipsum dolor amet burgdoggen turducken ham strip steak pork shank meatball. 
`;

export function Hero(props) {
        const height= Dimensions.get('window').height
        return(
           <View >
            <Image source={ require('../img/workingtogether.jpg')} style={{resizeMode:'cover', height:height*0.59}} />   

            </View>
        ); 
    
}

const styles = StyleSheet.create({


});