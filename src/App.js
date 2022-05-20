import React, { Component } from "react";
import "./App.css";
import Hangman from "./Hangman/Hangman";
import Navbar from "./Navigation/Navbar.js";
import "./index.css";


class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Hangman />
      </>
    );
  }
}

export default App;
