import { theme } from '../styles/theme'
import { Difficulties } from './types'

export const createTiles = (tilesNumber: number) => {
  const tiles = []
  const colors = generateTilesColors(tilesNumber)

  for (var i = 1; i <= tilesNumber; i++) {
    tiles.push({
      id: i,
      background:
        i > tilesNumber / 2 ? colors[i - tilesNumber / 2 - 1] : colors[i - 1],
      isTurned: true,
      isDone: false
    })
  }

  return shuffleArray(tiles)
}

export const generateTilesColors = (tilesNumber: number) => {
  return shuffleArray(theme.gameColors)
    .slice(0, tilesNumber / 2)
    .map(color => {
      let hex
      for (var key in color) {
        if (color.hasOwnProperty(key)) {
          hex = color[key]
        }
      }
      return hex
    })
}

const shuffleArray = (arr: any[]) => {
  return arr
    .map(a => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
}

export const getDifficultyLabel = (difficulty: Difficulties) => {
  switch (difficulty) {
    case Difficulties.MEDIUM:
      return 'Medium'
    case Difficulties.HARD:
      return 'Hard'
    default:
      return 'Easy'
  }
}
