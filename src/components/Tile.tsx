import React from 'react'
import { TileProps } from '../utils/types'
import { Styled } from '../styles/Tiles.styles'

export const Tile: React.FC<TileProps> = ({
  id,
  background,
  isTurned,
  isDone,
  handleTileClick,
  showTiles
}) => {
  return (
    <Styled.TileContainer
      onClick={() => handleTileClick && showTiles && handleTileClick(id)}
      className={isDone ? 'done' : ''}
    >
      <Styled.Tile className={isTurned || isDone ? 'active' : ''}>
        <Styled.Front></Styled.Front>
        <Styled.Back background={background}></Styled.Back>
      </Styled.Tile>
    </Styled.TileContainer>
  )
}
