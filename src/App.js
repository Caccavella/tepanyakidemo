import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Header from './components/header/header';
import Router from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Indie+Flower|Kaushan+Script|Shadows+Into+Light" rel="stylesheet"/>
        <div className="backgroundwrapper">
               <Header/>
            <div className="main">
              {Router}
              </div>
            <footer className="foot">
              <h4>COPYRIGHT © TEPANYAKI JAPANESE STEAKHOUSE 2008</h4>
            </footer>
        </div>
      </div>
    );
  }
}

export default App;
