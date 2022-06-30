import React from "react";
import ReactDOM from "react-dom";
import About from "./About";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: about</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <br />
    <br />
    <About />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
