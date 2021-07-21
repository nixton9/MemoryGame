import styled from 'styled-components/macro'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacingS};
`

const Button = styled.button``

export const Styled = {
  Container,
  Button
}
