import React from "react";
import "./Button.css";

const Button = (props) => (
  <div 
    onClick = {() => props.buttonClick(props.number)} 
    key = {props.number} 
    className = "button"
  >
    {props.number}
  </div>
);

export default Button;