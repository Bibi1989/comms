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
      {label}
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
`

export default Button
