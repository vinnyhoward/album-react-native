import React, { Component } from 'react';
import { Text, View, Image } from 'react-native'
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;
  const { headerContentStyle, thumbnailStyle, thumbnailContainerStyle, headerTextStyle, imageStyle } = styles;
    return (
      <Card>
        <CardSection>
          <View style={ thumbnailContainerStyle }>
            <Image source={{ uri: thumbnail_image }} style={ thumbnailStyle }/>
          </View>
          <View style={ headerContentStyle }>
        <Text style={headerTextStyle}> { title }</Text>
        <Text>{ artist }</Text>
         </View>
        
        </CardSection>
        <CardSection>
          <Image style={imageStyle} source={{ uri: image }} />
        </CardSection>
        
        <CardSection>
          <Button />
        </CardSection>
      </Card>
    )
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  }
}

export default AlbumDetail;