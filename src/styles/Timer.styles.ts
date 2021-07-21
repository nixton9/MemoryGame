import styled from 'styled-components/macro'

const Container = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacingS};
`
const Time = styled.h2`
  font-size: 4rem;
  font-weight: 200;
  color: ${({ theme }) => theme.title};
`

export const Styled = {
  Container,
  Time
}
