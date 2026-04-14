import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class GoogleSignInButton extends React.PureComponent {
  static defaultProps = {
    onPress() {},
  };
  render() {
    const { children, style, ...props } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={StyleSheet.flatten([styles.touchable, style])}
        {...props}
      >
        <View style={styles.content}>
          <Image source={require('../img/38b17fe41693e46f53cc48bf97806181_small-symbol-google-logo-png_1024-1024.png')} style={styles.icon} />
          <Text style={styles.text}>{children}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  touchable: {
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    shadowOffset: { width: 0, height: 1 },
    overflow: 'visible',
    shadowColor: 'black',
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
  },
  content: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: { 
    width: 30,
    height: 30,
  },
  text: { color: 'black', marginLeft: 12, fontSize: 16, fontWeight: '600' },
});
