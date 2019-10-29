import React, { Component } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

class App extends Component {
  state = {
    username: "Tom"
  };
  render() {
    return (
      <div className="App">
        <h2>Reat Base Syntax</h2>
        <UserInput />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
