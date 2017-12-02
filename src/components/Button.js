import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
    return (
      <TouchableOpacity onPress={ onPress } style={buttonStyle}>
      <Text style={textStyle}>
      {children}
      </Text>
      </TouchableOpacity>
    )
}

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 3,
    borderWidth: 2.5,
    borderColor: '#f08080',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#f08080',
    fontSize: 16,
    fontWeight: '700',
    paddingTop: 10,
    paddingBottom: 10,
  }
}


export default Button;