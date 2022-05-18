import React, { Component } from "react";
import "./App.css";
import Hangman from "./Hangman/Hangman";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hangman />
      </div>
    );
  }
}

export default App;
