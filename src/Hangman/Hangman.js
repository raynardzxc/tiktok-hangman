import React, { Component } from "react";
import { randomWord } from './wordList';

import "./Hangman.css";

import img0 from "../Assets/Artboard 1-0.jpg";
import img1 from "../Assets/Artboard 1-1.jpg";
import img2 from "../Assets/Artboard 1-2.jpg";
import img3 from "../Assets/Artboard 1-3.jpg";
import img4 from "../Assets/Artboard 1-4.jpg";
import img5 from "../Assets/Artboard 1-5.jpg";
import img6 from "../Assets/Artboard 1-6.jpg";

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);

    this.state = { 
      nWrong: 0, 
      guessed: new Set(), 
      answer: randomWord() 
    };

    this.handleGuess = this.handleGuess.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }


  resetGame() {
    this.setState({
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord()
    });
  }


  guessedWord() {
    // deconstructor
    const { answer, guessed } = this.state;

    return answer
      .split("")
      .map(ltr => (guessed.has(ltr) ? ltr : "_"));
  }



  handleGuess(event) {
    let letter = event.target.value;

    this.setState(state => ({
      guessed: state.guessed.add(letter),
      nWrong: state.nWrong + (state.answer.includes(letter) ? 0 : 1)
    }));
  }


  generateButtons() {
    const  { handleGuess } = this;
    const { guessed } = this.state;

    return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr, index) => (
      <button
        key={index}
        value={ltr}
        onClick={handleGuess}
        disabled={guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  /** render: render game */
  render() {
    const { nWrong, answer} = this.state;
    const { images, maxWrong } = this.props;

    let alternateText = `${this.state.nWrong} wrong guesses`;

    return (
      <div className='Hangman'>
        <h1>Start guessing! 🤔💭 </h1>
        <h2> Enter a letter now! </h2>
      
        <img src={images[nWrong]} alt={alternateText} class="center"/>
        <p>Wrong Guesses: {nWrong}</p>

        
        { answer === this.guessedWord().join("") ? <p>You WIN!</p> :

          (nWrong === maxWrong ?
        <div>
          <p>Game Over</p>
          <p>The correct word is: {answer}</p>
        </div>
        :
        <div>
        <p className='Hangman-word'>{this.guessedWord()}</p>
        <p className='Hangman-btns'>{this.generateButtons()}</p>
      </div>)
      }

      <button id='reset' onClick={this.resetGame}>Reset Game</button>
      </div>
    );
  }
}

export default Hangman;