import React from "react";
import "./index.scss";

export function Button(props) {
  return (
    <div className={`button ${props.type}`} onClick={props.onClick}>
      <div className="backSide">
        <div className="frontSide">
          {props.text}
        </div>
      </div>
    </div>
  )
}