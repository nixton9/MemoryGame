import React, { useState, useEffect, useRef, useContext } from 'react'
import { MainContext } from '../utils/MainContext'
import { Styled } from '../styles/Timer.styles'

export const Timer: React.FC = () => {
  const [time, setTime] = useState(0)

  const { hasGameEnded, difficulty, addNewScore } = useContext(MainContext)

  let stopWatch = useRef<any>(null)

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
      addNewScore(getFormatedTime(true), difficulty)
    }
  }, [hasGameEnded])

  const getFormatedTime = (withoutHours?: boolean) => {
    const getSeconds = `0${time % 60}`.slice(-2)
    const minutes = `${Math.floor(time / 60)}`
    // @ts-ignore
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2)
    console.log(getHours)
    return withoutHours
      ? `${getMinutes} : ${getSeconds}`
      : `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  return (
    <Styled.Container>
      <Styled.Time>{getFormatedTime()}</Styled.Time>
    </Styled.Container>
  )
}
