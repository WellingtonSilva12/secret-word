import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10em;
  width: 100%;
  height: 100%;
`

export const Title = styled.h1`
  font-size: 3.5em;
`

export const Subtitle = styled.p`
  margin-bottom: 2em;
  color: yellow;
`

export const Button = styled.button`
  background-color: #1646a0;
  color: white;
  padding: 0 45px;
  border: 2px solid #fff;
  border-radius: 25px;
  height: 50px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2em;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: #0b1c81;
  }
`
