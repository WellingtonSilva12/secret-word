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

const guessesQty = 5

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const [guessedLetter, setGuessedLetters] = useState([])
  const [wrongLetter, setWrongLetter] = useState([])
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(0)

  // Pick a random category
  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words)
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)]

    // Pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)]

    // return word and category in object
    return { word, category }
  }, [words])

  // Start Game
  const startGame = useCallback(() => {
    // clear all letter

    clearLetterStates()
    // Pick a word, category random in object destruct

    const { word, category } = pickWordAndCategory()

    console.log(word)

    // create an array of letters
    let wordLetters = word.split('')

    wordLetters = wordLetters.map(e => e.toLowerCase())

    // Fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }, [pickWordAndCategory])

  // Input Letter random
  const verifyLetter = letter => {
    const normalizedLetter = letter.toLowerCase()

    // check Letter
    if (
      guessedLetter.includes(normalizedLetter) ||
      wrongLetter.includes(normalizedLetter)
    ) {
      return
    }

    // push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters(actualGuessedLetters => [
        ...actualGuessedLetters,
        normalizedLetter
      ])
    } else {
      setWrongLetter(actualWrongLetters => [
        ...actualWrongLetters,
        normalizedLetter
      ])
      setGuesses(actualGuesses => actualGuesses - 1)
    }
  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetter([])
  }

  const retry = () => {
    setScore(0)
    setGuesses(guessesQty)

    setGameStage(stages[0].name)
  }
  // check los
  useEffect(() => {
    if (guesses <= 0) {
      // Reset game

      clearLetterStates()

      setGameStage(stages[2].name)
    }
  }, [guesses])

  // check win
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]

    //win condition
    if (guessedLetter.length === uniqueLetters.length) {
      setScore(actualScore => (actualScore += 100))

      startGame()
    }
  }, [guessedLetter, letters, startGame])

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
      {gameStage === 'end' && <OverScreen retry={retry} score={score} />}
    </div>
  )
}

export default App
