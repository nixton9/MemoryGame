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
    title: string
    text: string
    white: string
    lightGrey: string
    borderRadius: string
    gameColors: {}[]
  }
}

export const theme: DefaultTheme = {
  fontFamily: 'sans-serif',
  spacingXXS: '1rem',
  spacingXS: '1.5rem',
  spacingS: '3rem',
  spacingM: '6rem',
  spacingL: '9rem',
  spacingXL: '12rem',
  accent: '#18BEBE',
  title: '#121212',
  text: '#444444',
  white: '#ffffff',
  lightGrey: '#eaeaea',
  borderRadius: '8px',
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
