import React from 'react';
import logo from './logo.svg';
import './App.css';

import _ from 'lodash';
import moment from 'moment'

import Button from '@material-ui/core/Button';

import MySlider from './MySlider'

function App() {
  const result = _.camelCase('__FOO_BAR__');
  const time = moment().format('MMMM Do YYYY, h:mm:ss a');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {result}
          {time}
        </a>
      </header>

      <Button variant="contained" color="primary">
      Hello World
    </Button>

    <MySlider/>
    </div>
  );
}

export default App;
