import styled from 'styled-components/macro'

const Container = styled.div`
  padding: ${({ theme }) => theme.spacingM} ${({ theme }) => theme.spacingS};
`

const MainTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: ${({ theme }) => theme.fontBlack};
  text-align: center;
`

export const Styled = {
  Container,
  MainTitle
}
