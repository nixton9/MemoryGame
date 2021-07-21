import React, { useState, useEffect, useContext } from 'react'
import { Tile } from './Tile'
import { ControlButtons } from './ControlButtons'
import { Timer } from './Timer'
import { MainContext } from '../utils/MainContext'
import { Difficulties, TileProps } from '../utils/types'
import { createTiles } from '../utils/helpers'
import { Styled } from '../styles/Tiles.styles'

export const GameTiles: React.FC = () => {
  const [tilesNumber, setTilesNumber] = useState<number>(Difficulties.EASY)
  const [tiles, setTiles] = useState<TileProps[]>([])
  const [activeTiles, setActiveTiles] = useState<number[]>([])
  const [showTiles, setShowTiles] = useState<boolean>(false)

  const { difficulty, hasGameStarted, setHasGameStarted, setHasGameEnded } =
    useContext(MainContext)

  const handleTileClick = (tileId: number) => {
    if (activeTiles.length < 2 && hasGameStarted) {
      setActiveTiles([...activeTiles, tileId])
    }
  }

  const endGame = () => {
    setHasGameStarted(false)
    setHasGameEnded(false)
    setShowTiles(false)
    setTiles([])
  }

  const resetGame = () => {
    endGame()
    setTimeout(() => setHasGameStarted(true), 200)
  }

  // The 'difficulty' represents the number of tiles we want, so we'll store that on a useState hook
  useEffect(() => {
    setTilesNumber(difficulty)
    endGame()
  }, [difficulty])

  // Generate the tiles, based on the number of tiles we want
  useEffect(() => {
    if (hasGameStarted) {
      setTiles(createTiles(tilesNumber))
    }
  }, [tilesNumber, hasGameStarted])

  // Using setTimeout we create a timer to initially show all the tiles and then hide them
  useEffect(() => {
    let timer = setTimeout(() => {
      if (tiles.length && !showTiles) {
        const newTiles = tiles.map(tile => ({ ...tile, isTurned: false }))
        setTiles(newTiles)
        setShowTiles(true)
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [tiles, showTiles])

  // When one of the tiles is clicked this useEffect will be triggered and we will show that tile
  // If two tiles are clicked, we check to see if their colors match. If they do match, we'll mark them
  // as 'done' and leave them turned up, otherwise we will turned them back down
  useEffect(() => {
    if (activeTiles.length) {
      const newTiles = tiles.map(tile =>
        activeTiles.includes(tile.id) ? { ...tile, isTurned: true } : tile
      )
      setTiles(newTiles)
    }

    if (activeTiles.length === 2) {
      const tile1 = tiles.find(tile => tile.id === activeTiles[0])
      const tile2 = tiles.find(tile => tile.id === activeTiles[1])

      if (tile1?.background === tile2?.background && tile1?.id !== tile2?.id) {
        const newTiles = tiles.map(tile =>
          activeTiles.includes(tile.id) ? { ...tile, isDone: true } : tile
        )
        setTiles(newTiles)
        setActiveTiles([])
      } else {
        let timer = setTimeout(() => {
          const newTiles = tiles.map(tile => ({ ...tile, isTurned: false }))
          setTiles(newTiles)
          setActiveTiles([])
        }, 1000)
        return () => clearTimeout(timer)
      }
    }
  }, [activeTiles])

  // If all tiles are marked as 'done' we'll finish the game
  useEffect(() => {
    if (tiles.length && tiles.every(tile => tile.isDone)) {
      setHasGameEnded(true)
    }
  }, [tiles])

  return (
    <Styled.Container>
      <Styled.TilesBackground numberOfTiles={tilesNumber}>
        {Boolean(tiles.length) && (
          <Styled.TilesContainer numberOfTiles={tilesNumber}>
            {tiles.map(tile => (
              <Tile
                key={tile.id}
                id={tile.id}
                background={tile.background}
                isTurned={tile.isTurned}
                isDone={tile.isDone}
                handleTileClick={handleTileClick}
                showTiles={showTiles}
              />
            ))}
          </Styled.TilesContainer>
        )}
      </Styled.TilesBackground>

      {Boolean(tiles.length) && hasGameStarted && <Timer />}

      <ControlButtons resetGame={resetGame} />
    </Styled.Container>
  )
}
