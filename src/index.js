import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
const myClass = "blue";
let title = <h3 className={myClass}>Hi react</h3>;
ReactDOM.render(
  <React.StrictMode>
    <h1>React Intro</h1>ss
    {title}
  </React.StrictMode>,
  document.getElementById("root")
);
