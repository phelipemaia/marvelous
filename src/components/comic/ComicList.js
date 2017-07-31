import React from 'react';
import { ScrollView, StyleSheet  } from 'react-native';
import axios from 'axios';
import ComicElement from './ComicElement';

export default class ComicList extends React.Component {
  state = { comics: [] };

  componentWillMount() {
    axios.get('https://gateway.marvel.com:443/v1/public/comics?apikey=18da4bb4057a8538e0cddd39633af3b7&hash=0ba2b6141949d9277554422a698c4549&ts=1501259144084')
      .then(response => this.setState({ comics: response.data.data.results }));
  }

  renderComics() {
    return this.state.comics.map(comic => <ComicElement key={comic.id} comic={comic}></ComicElement>);
  }

  render () {
    const { containerStyle } = styles;
    console.log(this.state)
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} showsVerticalScrollIndicator={true}
                  style={containerStyle}>
        {this.renderComics()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    horizontal: true
  }
});