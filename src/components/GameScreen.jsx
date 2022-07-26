import React from 'react'
import './StartScreen.css'
import { Button } from './StylesComponents'

const GameScreen = ({ verifyLetter }) => {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: 000</span>
      </p>
      <h1>Adivinha a Palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>Dica ...</span>
      </h3>
      <p>Você ainda tem XXX tentaticas </p>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterContainer">
        <p>tente adivinhar uma letra da palavra</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <Button>Jogar!</Button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas</p>
        <span>a,</span>
        <span>e,</span>
      </div>
    </div>
  )
}

export default GameScreen
