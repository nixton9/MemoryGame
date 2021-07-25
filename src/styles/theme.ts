import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string
    spacingXXS: string
    spacingXS: string
    spacingS: string
    spacingM: string
    spacingL: string
    spacingXL: string
    accent: string
    background?: string
    lightBackground?: string
    text?: string
    lightText?: string
    buttonText?: string
    fontThin: number
    fontRegular: number
    fontMedium: number
    fontBold: number
    fontBlack: number
    borderRadius: string
    gameColors: {}[]
  }
}

export const theme: DefaultTheme = {
  fontFamily: "'Noto Sans KR', sans-serif;",
  spacingXXS: '1rem',
  spacingXS: '1.5rem',
  spacingS: '3rem',
  spacingM: '6rem',
  spacingL: '9rem',
  spacingXL: '12rem',
  accent: '#18BEBE',
  fontThin: 100,
  fontRegular: 400,
  fontMedium: 500,
  fontBold: 700,
  fontBlack: 900,
  borderRadius: '4px',
  gameColors: [
    { red: '#F44336' },
    { pink: '#E91E63' },
    { purple: '#9C27B0' },
    { deepPurple: '#673AB7' },
    { indigo: '#3F51B5' },
    { blue: '#2196F3' },
    { cyan: '#00BCD4' },
    { teal: '#009688' },
    { green: '#4CAF50' },
    { yellow: '#FFEB3B' },
    { orange: '#FF9800' },
    { brown: '#795548' },
    { grey: '#9E9E9E' },
    { blueGrey: '#607D8B' },
    { black: '#000000' }
  ]
}

export const lightTheme: DefaultTheme = {
  ...theme,
  background: '#F7F7F7',
  lightBackground: '#FFFFFF',
  text: '#484848',
  lightText: '#5C5C5C',
  buttonText: '#FFFFFF'
}

export const darkTheme: DefaultTheme = {
  ...theme,
  background: '#262626',
  lightBackground: '#363636',
  text: '#FFFFFF',
  lightText: '#F7F7F7',
  buttonText: '#262626'
}
