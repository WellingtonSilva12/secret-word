import { useState, useRef } from 'react'
import './StartScreen.css'
import { Button, Wrapper } from './StylesComponents'

const GameScreen = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetter,
  wrongLetter,
  guesses,
  score
}) => {
  const [letter, setLetter] = useState('')

  const letterInputRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()

    verifyLetter(letter)
    setLetter('')

    letterInputRef.current.focus()
  }

  return (
    <Wrapper>
      <div className="game">
        <p className="points">
          <span>Pontuação: {score}</span>
        </p>
        <h1>Adivinha a Palavra:</h1>
        <h3 className="tip">
          Dica sobre a palavra: <span>{pickedCategory}</span>
        </h3>
        <p>Você ainda tem {guesses} tentaticas </p>
        <div className="wordContainer">
          {letters.map((letter, i) =>
            guessedLetter.includes(letter) ? (
              <span className="letter" key={i}>
                {letter}
              </span>
            ) : (
              <span key={i} className="blankSquare"></span>
            )
          )}
        </div>
        <div className="letterContainer">
          <p>tente adivinhar uma letra da palavra</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="letter"
              maxLength="1"
              required
              onChange={e => setLetter(e.target.value)}
              value={letter}
              ref={letterInputRef}
            />
            <Button>Jogar!</Button>
          </form>
        </div>
        <div className="wrongLettersContainer">
          <p>Letras já utilizadas</p>
          {wrongLetter.map((letter, i) => (
            <span key={i}> {letter}, </span>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

export default GameScreen
