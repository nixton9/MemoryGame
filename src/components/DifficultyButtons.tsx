import React, { useContext } from 'react'
import { MainContext } from '../utils/MainContext'
import { Difficulties } from '../utils/types'
import { Styled } from '../styles/DifficultyButtons.styles'

const buttons = [
  {
    label: 'Easy',
    val: Difficulties.EASY
  },
  {
    label: 'Medium',
    val: Difficulties.MEDIUM
  },
  {
    label: 'Hard',
    val: Difficulties.HARD
  }
]

export const DifficultyButtons: React.FC = () => {
  const { difficulty, setDifficulty } = useContext(MainContext)

  return (
    <Styled.Container>
      {buttons.map(btn => (
        <Styled.Button
          key={btn.label}
          isActive={difficulty === btn.val}
          onClick={() => setDifficulty(btn.val)}
        >
          {btn.label}
        </Styled.Button>
      ))}
    </Styled.Container>
  )
}
