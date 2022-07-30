import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//VERSION 1
//  const p1 = React.createElement("p", null, "This is paragraph 1");
//  const p2 = React.createElement("p", null, "This is paragraph 2");
//  const button = React.createElement("button",{class: "myButton"} , "this is the button");
//
//  const myList = React.createElement( "ul", null, [
//      React.createElement("li", null, "first"),
//      React.createElement("li", null, "second"),
//      React.createElement("li", null, "third")
//  ]);
//
//  const myDiv = React.createElement("div", null, [p1,p2,button, myList]);
//
//  ReactDOM.render(myDiv, document.getElementById("root"));

//VERSION 2
const p1 = <p>this is paragraph 1</p>;
const p2 = <p>this is paragraph 2</p>;
const button = <button className={"myFirstButton"}>this is the button</button>;
const myList = <ul><li>first</li><li>second</li><li>third</li></ul>;

const myDiv = <div>{p1}{p2}{button}{myList}</div>;

ReactDOM.render(myDiv, document.getElementById("root"));

//ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
