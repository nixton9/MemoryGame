import React, { useContext } from 'react'
import { DifficultyButtons } from './components/DifficultyButtons'
import { GameTiles } from './components/GameTiles'
import { HighScores } from './components/HighScores'
import { MainContext } from './utils/MainContext'
import { GlobalStyles } from './styles/globalStyles'
import { theme } from './styles/theme'
import { Styled } from './styles/App.styles'
import { ThemeProvider } from 'styled-components'

const App: React.FC = () => {
  const { hasGameEnded } = useContext(MainContext)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Styled.Container>
        <Styled.MainTitle>Memory Game</Styled.MainTitle>
        <DifficultyButtons />
        <GameTiles />
        {hasGameEnded && <Styled.Message>You've won the game!</Styled.Message>}
        <HighScores />
      </Styled.Container>
    </ThemeProvider>
  )
}

export default App
