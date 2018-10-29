import React, { Component } from 'react';
import './App.css';
import Theme from './Theme';
import Greeting from './Greeting';

const colors = {
  green: '#16a085',
  blue: '#2980b9',
  red: '#c0392b'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Theme colors={colors}>
          <Greeting />
        </Theme>
      </div>
    );
  }
}

export default App;
