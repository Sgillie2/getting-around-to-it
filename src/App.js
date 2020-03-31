// src/App.js

import React, { Component } from 'react';
import Goal from "./components/goal";
import Month from "./components/month";

class App extends Component {

  render() {
    return (
      <div>
        <h1 text-allign="center">Getting Around To It</h1>
        <Goal text-allign="center"/>
        <br/>
        <Month/>
      </div>

    );
  }
}

export default App;