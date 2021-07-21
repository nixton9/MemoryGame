import styled from 'styled-components/macro'

const Container = styled.div`
  padding: ${({ theme }) => theme.spacingS};
`

const MainTitle = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.title};
  text-align: center;
`

const Message = styled.div`
  font-size: 1.5rem;
`

export const Styled = {
  Container,
  MainTitle,
  Message
}
