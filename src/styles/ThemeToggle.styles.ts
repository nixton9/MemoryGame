import styled from 'styled-components/macro'

const Container = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacingS};
  left: ${({ theme }) => theme.spacingS};
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 900px) {
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
  }
`

const ThemeLabel = styled.h5`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fontRegular};
  color: ${({ theme }) => theme.text};
  letter-spacing: 0.04rem;
`

const ToggleSwitch = styled.div`
  margin: 0 ${({ theme }) => theme.spacingXS};

  input:checked + span:before {
    transform: translateX(2.8rem);
  }
`

const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 5.5rem;
  height: 2.4rem;
`

const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`
const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 34px;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: '';
    height: 1.4rem;
    width: 1.4rem;
    left: 0.5rem;
    bottom: 0.3rem;
    background-color: ${({ theme }) => theme.text};
    border-radius: 50%;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`

export const Styled = {
  Container,
  ThemeLabel,
  ToggleSwitch,
  ToggleLabel,
  Checkbox,
  Slider
}
