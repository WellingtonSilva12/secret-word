import React from 'react'
import { Button } from './StylesComponents'

const OverScreen = ({ retry, score }) => {
  return (
    <div>
      <h1>Fim de Jogo</h1>
      <h2>
        A sua pontuação foi: <span>{score}</span>
      </h2>
      <Button onClick={retry}>Resetar jogo</Button>
    </div>
  )
}

export default OverScreen
