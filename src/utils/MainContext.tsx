import React, { useState, createContext } from 'react'
import { Difficulties, HighScoresProps } from './types'
import { useLocalStorage } from './useLocalStorage'

interface MainContextState {
  hasGameStarted: boolean
  hasGameEnded: boolean
  setHasGameStarted: React.Dispatch<React.SetStateAction<boolean>>
  setHasGameEnded: React.Dispatch<React.SetStateAction<boolean>>
  highScores: HighScoresProps[]
  addNewScore: (time: string, difficulty: Difficulties) => void
  difficulty: Difficulties
  setDifficulty: React.Dispatch<React.SetStateAction<Difficulties>>
}

export const MainContext = createContext<MainContextState>(
  {} as MainContextState
)

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [hasGameStarted, setHasGameStarted] = useState<boolean>(false)
  const [hasGameEnded, setHasGameEnded] = useState<boolean>(false)

  const [highScores, setHighScores] = useLocalStorage('HighScores', [])
  const [difficulty, setDifficulty] = useLocalStorage(
    'Difficulty',
    Difficulties.EASY
  )

  const addNewScore = (time: string, difficulty: Difficulties) => {
    let scores = highScores
    scores.push({ time, difficulty })
    scores.sort((a: HighScoresProps, b: HighScoresProps) =>
      a.time.localeCompare(b.time)
    )
    if (scores.length >= 10) {
      scores.splice(10, scores.length - 1)
    }
    setHighScores(scores)
  }

  return (
    <MainContext.Provider
      value={{
        hasGameStarted,
        hasGameEnded,
        setHasGameStarted,
        setHasGameEnded,
        highScores,
        addNewScore,
        difficulty,
        setDifficulty
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
