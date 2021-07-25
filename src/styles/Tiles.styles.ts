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

  @media only screen and (max-width: 750px) {
    font-size: 90%;
  }
  @media only screen and (max-width: 650px),
    only screen and (max-height: 1050px) {
    font-size: 75%;
  }
  @media only screen and (max-width: 550px) {
    font-size: 60%;
  }
  @media only screen and (max-width: 450px) {
    font-size: 45%;
  }
  @media only screen and (max-width: 315px) {
    font-size: 38%;
  }
`

const TilesBackground = styled.div<ContainerProps>`
  display: inline-block;
  position: relative;
  background: ${({ theme }) => theme.lightBackground};
  padding: ${({ theme }) => theme.spacingXS};
  border-radius: ${({ theme }) => theme.borderRadius};
  min-width: ${props =>
    props.numberOfTiles === 20
      ? '54em'
      : props.numberOfTiles === 30
      ? '67em'
      : '41em'};
  min-height: ${props =>
    props.numberOfTiles === 20
      ? '67em'
      : props.numberOfTiles === 30
      ? '80em'
      : '54em'};
`

const TilesContainer = styled.div<ContainerProps>`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: ${props =>
    props.numberOfTiles === 20
      ? '1fr 1fr 1fr 1fr'
      : props.numberOfTiles === 30
      ? '1fr 1fr 1fr 1fr 1fr'
      : '1fr 1fr 1fr'};
`

const TileContainer = styled.div`
  position: relative;
  width: 12em;
  height: 12em;
  border-radius: 4px;
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
    font-size: 5em;
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

  &:not(.active)  {
    cursor: pointer;
  }
`

const Front = styled.div`
  background: url('/tile.png');
  background-size: cover;
  background-position: center center;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 4px;
  box-shadow: 0 7px 11px rgba(0, 0, 0, 0.14);
`

const Back = styled.div<BackProps>`
  background: ${props => props.background};
  transform: rotateY(-180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 7px 11px rgba(0, 0, 0, 0.14);
`

const Message = styled.p`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  text-align: center;
  color: ${({ theme }) => theme.text};
  font-size: 1.9rem;
  line-height: 3.2rem;
  font-weight: ${({ theme }) => theme.fontThin};
  padding: 0 ${({ theme }) => theme.spacingXS};
`

export const Styled = {
  Container,
  TilesBackground,
  TilesContainer,
  TileContainer,
  Tile,
  Front,
  Back,
  Message
}
