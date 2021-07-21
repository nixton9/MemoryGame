import React, { useContext } from 'react'
import { MainContext } from '../utils/MainContext'
import { Styled } from '../styles/ControlButtons.styles'

interface ControlButtonsProps {
  resetGame: () => void
}

export const ControlButtons: React.FC<ControlButtonsProps> = ({
  resetGame
}) => {
  const { hasGameStarted, setHasGameStarted } = useContext(MainContext)

  return (
    <Styled.Container>
      <Styled.Button
        onClick={() => setHasGameStarted(true)}
        disabled={hasGameStarted}
      >
        Start
      </Styled.Button>
      <Styled.Button onClick={resetGame} disabled={!hasGameStarted}>
        Reset
      </Styled.Button>
    </Styled.Container>
  )
}
