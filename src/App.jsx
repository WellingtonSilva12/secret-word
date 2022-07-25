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

  console.log(words)

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen />}
      {gameStage === 'game' && <GameScreen />}
      {gameStage === 'end' && <OverScreen />}
    </div>
  )
}

export default App
