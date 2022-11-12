import React from "react";
import ReactDOM from "react-dom";
import './index.scss';

import { Button } from "./component/button";

function App() {
  return (
    <div className="container app">
      <Button />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);