import React from 'react'
import { Button } from './StylesComponents'

const OverScreen = ({ retry }) => {
  return (
    <div>
      <h1>Game Over</h1>
      <Button onClick={retry}>Resetar jogo</Button>
    </div>
  )
}

export default OverScreen
