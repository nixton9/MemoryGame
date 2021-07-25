import styled from 'styled-components/macro'

interface ButtonProps {
  isActive: boolean
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacingS};
`

const Button = styled.button<ButtonProps>`
  background-color: ${props =>
    props.isActive ? props.theme.accent : props.theme.text};
`

export const Styled = {
  Container,
  Button
}
