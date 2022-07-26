import React from 'react'
// import './StartScreen.css'
import { Subtitle, Title, Button, Wrapper } from './StylesComponents'

const StartScreen = ({ startGame }) => {
  return (
    <Wrapper>
      <Title>Secret Word</Title>
      <Subtitle>Clique no botão abaixo para começar a jogar</Subtitle>
      <Button onClick={startGame}>Começar o jogo</Button>
    </Wrapper>
  )
}

export default StartScreen
