import React, { useState } from "react";
import ReactDOM from "react-dom";
import './index.scss';

import { Button } from "./component/button";

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="container app">
      <div className="counterValue">
        <h1 className="title">Counter</h1>
        <p className="value">{ value }</p>
      </div>
      <div className="buttonPanel">
        <Button type="red" text="Minus" onClick={() => setValue(value - 1)} />
        <Button type="green" text="Plus" onClick={() => setValue(value + 1)} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);