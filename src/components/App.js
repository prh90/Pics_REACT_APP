import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
require('dotenv').config();


class App extends React.Component {
  onSearchSubmit(term){
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID '+ process.env.REACT_APP_PICS_API
      }
    });
  }


  render(){
    return <div className="ui container" style={{marginTop: '15px'}}> <SearchBar onSubmit={this.onSearchSubmit}/> </div>;
  }
}

export default App;
