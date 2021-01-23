import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../utils/Colors'

const Button = ({
  label,
  onClick=() => {},
  background=""
}) => {
  return (
    <ButtonStyle onClick={onClick} background={background}>
      {label} <p style={{marginLeft: 10}}>&#8594;</p>
    </ButtonStyle>
  )
}

const ButtonStyle = styled.button`
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 10px 30px;
  color: white;
  background-color: ${({background}) => background ? background : Colors.buttonGreen};
  display: flex;
  align-items: center;
  height: 40px;
`

export default Button
