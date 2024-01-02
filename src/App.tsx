import React from 'react';
import logo from './logo.svg';
import './App.css';

//最初にディレクトリに移動し、yarn startでサーバ起動

let your_name: string = "flyingobject";
var count: number = 0;

function MyButton(){
  function handleClick(){
    count += 1;
  }
  return (
    <button onClick={handleClick}>
      I'm a button
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>name: {your_name}</p>
      <p>count: {count}</p>
      <MyButton />
    </div>
  );
}

export default App;
