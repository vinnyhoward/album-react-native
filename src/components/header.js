import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles

  return (
    <View style={viewStyle}>
  <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
}

const styles = {
  viewStyle: {
    backgroundColor: '#f08080',
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0.05},
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }
};


export default Header;