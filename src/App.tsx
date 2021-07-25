import React from 'react'
import { DifficultyButtons } from './components/DifficultyButtons'
import { GameTiles } from './components/GameTiles'
import { HighScores } from './components/HighScores'
import { ThemeToggle } from './components/ThemeToggle'
import { MainProvider } from './utils/MainContext'
import { useLocalStorage } from './utils/useLocalStorage'
import { Theme } from './utils/types'
import { GlobalStyles } from './styles/globalStyles'
import { lightTheme, darkTheme } from './styles/theme'
import { Styled } from './styles/App.styles'
import { ThemeProvider } from 'styled-components'

const App: React.FC = () => {
  const [theme, setTheme] = useLocalStorage('Theme', Theme.DARK)

  return (
    <ThemeProvider theme={theme === Theme.LIGHT ? lightTheme : darkTheme}>
      <GlobalStyles />

      <MainProvider>
        <Styled.Container>
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <Styled.MainTitle>Memory Game</Styled.MainTitle>
          <DifficultyButtons />
          <GameTiles />
          <HighScores />
        </Styled.Container>
      </MainProvider>
    </ThemeProvider>
  )
}

export default App
