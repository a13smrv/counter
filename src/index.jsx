import React from "react";
import ReactDOM from "react-dom";
import './index.scss';

import { Button } from "./component/button";

function App() {
  return (
    <div className="container app">
      <div className="counterValue">
        <h1 className="title">Counter</h1>
        <p className="value">1</p>
      </div>
      <div className="buttonPanel">
        <Button type="red" text="Minus" />
        <Button type="green" text="Plus" />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);