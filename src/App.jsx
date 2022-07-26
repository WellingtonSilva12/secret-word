import './App.css'

import { useState, useCallback, useEffect } from 'react'

import { wordsList } from './data/words'

import StartScreen from './components/StartScreen'
import GameScreen from './components/GameScreen'
import OverScreen from './components/OverScreen'

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' }
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const [guessedLetter, setGuessedLetters] = useState([])
  const [wrongLetter, setWrongLetter] = useState([])
  const [guesses, setGuesses] = useState(5)
  const [score, setScore] = useState(0)

  // Pick a random category
  const pickWordAndCategory = () => {
    const categories = Object.keys(words)
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)]

    // Pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)]

    // return word and category in object
    return { word, category }
  }

  // Start Game
  const startGame = () => {
    // Pick a word, category random in object destruct
    const { word, category } = pickWordAndCategory()

    // create an array of letters
    let wordLetters = word.split('')

    wordLetters = wordLetters.map(e => e.toLowerCase())

    console.log(word, category)
    console.log(wordLetters)

    // Fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(letters)

    setGameStage(stages[1].name)
  }

  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && (
        <GameScreen
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetter={guessedLetter}
          wrongLetter={wrongLetter}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === 'end' && <OverScreen retry={retry} />}
    </div>
  )
}

export default App
