import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Company</h1>
          &nbsp;
          <h2 className="App-main-header">MAIN</h2>
          <h3 className="App-revenue-header">Company Revenue  &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; YEAR &emsp; MONTH &emsp; WEEK</h3>

        </header>
        <p>
        <p1 className="App-graph-color">&nbsp;</p1>
        </p>
      </div>

    );
  }
}


export default App;
