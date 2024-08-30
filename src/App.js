import logo from './logo.svg';
import './App.css';
// src/App.js
import React from "react";
import Login from "./login";
import DataList from "./datalist";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Firebase React Example</h1>
        <Login />
        <DataList />
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
