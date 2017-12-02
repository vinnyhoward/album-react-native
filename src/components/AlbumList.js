import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  constructor() {
    super()
    this.state = { 
      albums: [] 
    }
  }

componentWillMount(){
  return axios.get('https://rallycoding.herokuapp.com/api/music_albums').then( response => {
    var albumData = response.data
    console.log('Hello', albumData);
    this.setState({
      albums: albumData
    })
  }).catch( (err) => {
    console.log(err);
} );
}

renderAlbums() {
  return this.state.albums.map( (album) =>  <Text key={album.id}>{album.title}</Text> )
}
  
  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    )
  }
}

export default AlbumList;