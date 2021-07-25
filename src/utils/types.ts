export enum Difficulties {
  EASY = 12,
  MEDIUM = 20,
  HARD = 30
}

export enum Theme {
  LIGHT = 'LIGHT',
  DARK = 'DARK'
}
export interface TileProps {
  id: number
  background: string
  isTurned: boolean
  isDone: boolean
  handleTileClick?: (id: number) => void
  showTiles?: boolean
}

export interface HighScoresProps {
  time: string
  difficulty: Difficulties
}
