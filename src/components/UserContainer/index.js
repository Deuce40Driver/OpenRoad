import React, { Component } from "react";
import Button from "../Button";
import "./UserContainer.css";
import buttons from "../../buttons.json";

class UserContainer extends Component {
  state = {
    buttons: buttons
  };

  buttonClick = (number) => {
    console.log("Woohoo!!")
  };

  render() {
    return (
      <div>
        {this.state.buttons.map((button) => {
          return <Button key = {button.number} buttonClick = {this.buttonClick} number = {button.number} />
        })}
      </div>
    )
  };
};

export default UserContainer;