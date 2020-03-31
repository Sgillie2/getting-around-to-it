import React, { Component } from 'react';

import Goal from "./components/goal";
import Group from "./components/group";

class App extends Component {

  render() {
    return (
      <div>
        <h1 text-allign="center">Getting Around To It</h1>
        <Goal text-allign="center"/>
        <br/>
        <Group/>
      </div>

    );
  }
}

export default App;