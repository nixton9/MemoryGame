import styled from 'styled-components/macro'

const Container = styled.aside`
  position: absolute;
  top: ${({ theme }) => theme.spacingS};
  right: ${({ theme }) => theme.spacingXS};

  @media only screen and (max-width: 900px) {
    position: unset;
    text-align: center;
    margin-top: ${({ theme }) => theme.spacingM};

    li {
      text-align: center;
    }
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
  text-align: right;
  font-size: 1.3rem;
  font-weight: 200;
  padding: ${({ theme }) => theme.spacingXXS};
`

export const Styled = {
  Container,
  Title,
  List,
  ListItem
}
