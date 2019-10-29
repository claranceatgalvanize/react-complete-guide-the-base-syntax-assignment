import React, { Component } from "react";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

class App extends Component {
  state = {
    username: "Tom",
    modeSwitch: true
  };
  changeUsernameOnClick = newUsernameOnClick => {
    this.setState({
      username: newUsernameOnClick
    });
  };
  changeUsernameOnInput = e => {
    this.setState({
      username: e.target.value
    });
  };
  nightMode = () => {
    this.setState({
      modeSwitch: false
    });
  };
  dayMode = () => {
    this.setState({
      modeSwitch: true
    });
  };
  render() {
    const cart = {
      day: {
        background: "#ddd",
        width: "24em",
        margin: "10em auto",
        lineHeight: "1.5em",
        textAlign: "center",
        color: "#111",
        overflow: "hidden"
      },
      night: {
        background: "#111",
        width: "24em",
        margin: "10em auto",
        lineHeight: "1.5em",
        textAlign: "center",
        color: "#eee",
        overflow: "hidden"
      },
      titleDay: {
        background: "#eee",
        width: "100%",
        padding: "1em .5em",
        textAlign: "center",
        margin: "-.1em"
      },
      titleNight: {
        background: "#222",
        width: "100%",
        padding: "1em .5em",
        textAlign: "center",
        margin: "-.1em"
      },
      btn: {
        padding: "1em",
        width: "50%",
        fontSize: "1em",
        border: "none",
        background: "#eee"
      }
    };
    return (
      <div style={this.state.modeSwitch === true ? cart.day : cart.night}>
        <h2
          style={
            this.state.modeSwitch === true ? cart.titleDay : cart.titleNight
          }
        >
          Reat Base Syntax
        </h2>
        <UserInput
          modeSwitch={this.state.modeSwitch}
          username={this.state.username}
          changeOnEvent={this.changeUsernameOnInput}
        />
        <UserOutput
          changeOnClick={this.changeUsernameOnClick.bind(this, "Simi")}
          username={this.state.username}
        />
        <div>
          <button style={cart.btn} onClick={this.dayMode}>
            Day
          </button>
          <button style={cart.btn} onClick={this.nightMode}>
            Night
          </button>
        </div>
      </div>
    );
  }
}

export default App;
