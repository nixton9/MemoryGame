import React, { useContext } from 'react'
import { MainContext } from '../utils/MainContext'
import { getDifficultyLabel } from '../utils/helpers'
import { Styled } from '../styles/HighScores.styles'

export const HighScores: React.FC = () => {
  const { highScores } = useContext(MainContext)

  return Boolean(highScores.length) ? (
    <Styled.Container>
      <Styled.Title>Your best scores</Styled.Title>
      <Styled.List>
        {highScores.map((score: any, i: any) => (
          <Styled.ListItem key={i}>
            {score.time} <span>({getDifficultyLabel(score.difficulty)})</span>
          </Styled.ListItem>
        ))}
      </Styled.List>
    </Styled.Container>
  ) : null
}
