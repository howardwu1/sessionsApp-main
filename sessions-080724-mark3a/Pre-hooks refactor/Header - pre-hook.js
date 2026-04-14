import React from 'react';
import { View, Text, AsyncStorage, Alert, StyleSheet, Image } from 'react-native';

export class Header extends React.Component {
    constructor(props) {
        super(props); 
    }


    toggleUser = ()=>{
        if (this.props.loggedInUser !== null) {
              this.props.setToNull();
              Alert.alert('User logged out');        
        }
        else {
            this.props.navigate('Login');
        }
    }

    componentDidMount() {

    }


    render() {
        let display = (this.props.loggedInUser !== null) ? "Logout | " + this.props.loggedInUser : this.props.message;
        return (
            <View style={styles.headStyle}>
                <Image 
                    style={styles.logoStyle} 
                    source={ require('../img/session.png')} 
                />
                  <Text
                    style={styles.headText} 
                    onPress={this.toggleUser}>{display}
                  </Text>
                
            </View>    
        );
    }
}


const styles = StyleSheet.create({
    headText: {
        textAlign: 'right',
        color: '#000000',
        fontSize: 14,
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'center'
    },
    headStyle: {
        paddingRight: '2%',
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#000000',
        overflow: 'hidden',
    },
    logoStyle:{
        resizeMode: 'stretch',
        // width: undefined,
        // height:undefined,
        flexDirection: 'column',
        alignSelf: 'flex-end'
    },
});