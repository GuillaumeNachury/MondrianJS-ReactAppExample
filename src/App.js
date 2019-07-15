import React from 'react';
import logo from './logo.svg';
import './App.css';

import {mondrianReact} from 'mondrianjs-react';

import VoteHolder from './VoteHolder';

function App() {
  mondrianReact.init(
    {
      endpoints : [{name:'local', url:'http://127.0.0.1:2601'}],
      depsMap : {"react":React}
    }
    );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='App-votes'>
          <VoteHolder name="Guillaume"/>
          <VoteHolder name="John"/>
        </div>
      </header>
    </div>
  );
}

export default App;
