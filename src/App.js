import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  
  const contentStyle = {
    width: "100%";
    minWidth: "300px";
    maxWidth: "400px";
    margin: "2% auto";
    background: "#fff";
    padding: "2%";
    boxShadow: "1px 1px 6px -2px rgba(0, 0, 0, .3)";
    textAlign: "center";
  }
  
  const msgStyle = {
    padding: "10px";
    margin: "10px";
    backgroundColor: "#f4f4f4";
    border: 1px solid "#ccc";
  
  }
  

  render() {

    return (
      <div>
        <div style = {contentStyle}>
        <h1> Simple Hash Change</h1>
          <h3>Direct links</h3>
        <ul>
          <li><a href="#1">Click here for 1</a></li>
          <li><a href="#2">Click here for 2</a></li>
          <li><a href="#3">Click here for 3</a></li>
        </ul>
        <h3>OnClick</h3>
        <button id="js-button" data-test="4">Click here for 4</button>
        <div style={msgStyle} id="js-msg"></div>
      </div>
      </div>    
    ); 
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

exports default App;
