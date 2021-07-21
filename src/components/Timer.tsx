import React, { useState, useEffect, useRef, useContext } from 'react'
import { MainContext } from '../utils/MainContext'
import { Styled } from '../styles/Timer.styles'

export const Timer: React.FC = () => {
  const [time, setTime] = useState(0)

  const { hasGameEnded, difficulty, addNewScore } = useContext(MainContext)

  let stopWatch: any = useRef(null)

  useEffect(() => {
    stopWatch.current = setInterval(() => {
      setTime(time => time + 1)
    }, 1000)
    return () => {
      clearInterval(stopWatch.current)
    }
  }, [])

  useEffect(() => {
    if (hasGameEnded) {
      clearInterval(stopWatch.current)
      addNewScore(getFormatedTime(), difficulty)
    }
  }, [hasGameEnded])

  const getFormatedTime = () => {
    const getSeconds = `0${time % 60}`.slice(-2)
    const minutes = `${Math.floor(time / 60)}`
    // @ts-ignore
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  return (
    <Styled.Container>
      <Styled.Time>{getFormatedTime()}</Styled.Time>
    </Styled.Container>
  )
}
