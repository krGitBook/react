import React, { Component } from 'react';
import Hooks from './Hooks';
import logo from './logo.svg';
import './app.css';
import Context from './Context';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Hooks />
          <p>
            -----------------
          </p>
          <Context/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
