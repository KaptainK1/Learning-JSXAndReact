import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  //What to show
  <div>
    <h1>My Pets!</h1>
    <ul>
      <li>Ares</li>
      <li>Daisy</li>
      <li>Lily</li>
    </ul>
  </div>,
  //where to show it
  document.getElementById("root")
);
