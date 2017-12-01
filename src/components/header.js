import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { textStyle, viewStyle } = styles
  return (
    <View style={viewStyle}>
  <Text style={textStyle}>Albums</Text>
    </View>
  );
}

const styles = {
  viewStyle: {
    backgroundColor: '#551a8b',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }
};


export default Header;