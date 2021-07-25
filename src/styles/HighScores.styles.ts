import styled from 'styled-components/macro'

const Container = styled.aside`
  position: absolute;
  top: 7rem;
  right: ${({ theme }) => theme.spacingM};

  @media only screen and (max-width: 900px) {
    position: unset;
    text-align: center;
    margin-top: ${({ theme }) => theme.spacingM};
  }
`

const Title = styled.h4`
  font-size: 1.6rem;
`

const List = styled.ul`
  list-style-type: none;
  margin-top: ${({ theme }) => theme.spacingXS};
`
const ListItem = styled.li`
  font-size: 1.3rem;
  font-weight: 200;
  background-color: ${({ theme }) => theme.lightBackground};
  padding: ${({ theme }) => theme.spacingXXS} ${({ theme }) => theme.spacingXS};
  margin: ${({ theme }) => theme.spacingXS} 0;
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius};
`

export const Styled = {
  Container,
  Title,
  List,
  ListItem
}
