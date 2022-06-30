import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Users from "./Users";

const App = () => (
  <div className="container">
    <div>Name: users</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Users />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
