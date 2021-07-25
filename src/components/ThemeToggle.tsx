import React from 'react'
import { Theme } from '../utils/types'
import { Styled } from '../styles/ThemeToggle.styles'

interface ThemeToggleProps {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  theme,
  setTheme
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTheme(e.target.checked ? Theme.DARK : Theme.LIGHT)

  return (
    <Styled.Container>
      <Styled.ThemeLabel>Light</Styled.ThemeLabel>
      <Styled.ToggleSwitch>
        <Styled.ToggleLabel>
          <Styled.Checkbox
            type="checkbox"
            onChange={handleChange}
            checked={theme === Theme.DARK}
          />
          <Styled.Slider></Styled.Slider>
        </Styled.ToggleLabel>
      </Styled.ToggleSwitch>
      <Styled.ThemeLabel>Dark</Styled.ThemeLabel>
    </Styled.Container>
  )
}
