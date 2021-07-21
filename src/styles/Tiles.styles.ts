import styled from 'styled-components/macro'

interface ContainerProps {
  numberOfTiles: number
}

interface BackProps {
  background: string
}

const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacingM};
  text-align: center;
`

const TilesBackground = styled.div<ContainerProps>`
  display: inline-block;
  background: ${({ theme }) => theme.lightGrey};
  padding: ${({ theme }) => theme.spacingXS};
  min-width: ${props =>
    props.numberOfTiles === 20
      ? '54rem'
      : props.numberOfTiles === 30
      ? '67rem'
      : '41rem'};
  min-height: ${props =>
    props.numberOfTiles === 20
      ? '67rem'
      : props.numberOfTiles === 30
      ? '80rem'
      : '54rem'};
`

const TilesContainer = styled.div<ContainerProps>`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: ${props =>
    props.numberOfTiles === 20
      ? '1fr 1fr 1fr 1fr'
      : props.numberOfTiles === 30
      ? '1fr 1fr 1fr 1fr 1fr'
      : '1fr 1fr 1fr'};
`

const TileContainer = styled.div`
  position: relative;
  width: 12rem;
  height: 12rem;
  border-radius: 4px;
  background: red;
  perspective: 900px;
  background-color: transparent;

  &.done:after {
    content: '✔';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.15);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
  }
`

const Tile = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.7s;
  transform-style: preserve-3d;

  &.active {
    transform: rotateY(-180deg);
  }
`

const Front = styled.div`
  background: red;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 4px;
`

const Back = styled.div<BackProps>`
  background: ${props => props.background};
  transform: rotateY(-180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 4px;
`

export const Styled = {
  Container,
  TilesBackground,
  TilesContainer,
  TileContainer,
  Tile,
  Front,
  Back
}
