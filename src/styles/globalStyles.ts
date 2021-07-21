import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        font-size: 62.5%;

      /*   @media only screen and (max-width: 750px) {
            font-size: 54.5%;
        }

        @media only screen and (max-width: 630px) {
            font-size: 54.5%;
        } */

    body {
        font-family: ${({ theme }) => theme.fontFamily};
    }

    button {
        border: none;
        box-shadow: none;
        padding: ${({ theme }) => theme.spacingXXS} ${({ theme }) =>
  theme.spacingXS};
        margin: .5rem;
        border-radius: ${({ theme }) => theme.borderRadius};
        background: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.white};
        font-size: 1.5rem;
        font-weight: 600;
        cursor: pointer;

        &:disabled {
            cursor:not-allowed;
            opacity: .75;
        }
    }
`
