import React from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export class NotificationSpacer extends React.Component {
    constructor(props) {
        super(props); 
    }

    componentDidMount() {

    }


    render() {
        return (
            <View style={styles.headStyle}>
                
            </View>    
        );
    }
}


const styles = StyleSheet.create({

    headStyle: {
        backgroundColor: 'white',
        flex: 0.6,
        flexDirection: 'row',
        borderColor: '#000000',
        // overflow: 'hidden',
    },
});