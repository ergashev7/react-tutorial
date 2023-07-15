import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Navbar from "./1";
import database from "./database";
import List from "./list";
const myClass = "blue";
let title = <h3 className={myClass}>Hi react</h3>;
ReactDOM.render(
  <React.StrictMode>
    {/* <h1>React Intro</h1>
    {title} */}
    {/* <Navbar data={{ name: "Diyorbek", surName: "Ergashev" }} /> */}
    <Navbar data={["Home", "About", "Gallery", "Contact", "Service"]}></Navbar>
    <List data={database} />
  </React.StrictMode>,
  document.getElementById("root")
);
