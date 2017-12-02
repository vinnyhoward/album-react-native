import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

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
  return this.state.albums.map(album => 
  <AlbumDetail key={album.title} album={album} />)
}
  
  render() {
    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    )
  }
}



export default AlbumList;