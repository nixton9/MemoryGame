import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        font-size: 62.5%;

        @media only screen and (max-width: 375px) {
            font-size: 53.5%;
        }
    }

    body {
        font-family: ${({ theme }) => theme.fontFamily};
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
    }

    button {
        border: none;
        box-shadow: none;
        padding: ${({ theme }) => theme.spacingXS};
        min-width: 11rem;
        margin: .5rem ${({ theme }) => theme.spacingXS};
        border-radius: ${({ theme }) => theme.borderRadius};
        background: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.buttonText};
        font-size: 1.6rem;
        font-weight: ${({ theme }) => theme.fontMedium};
        letter-spacing: .06rem;
        cursor: pointer;
        transition: all .25s ease;

        &:disabled {
            cursor:not-allowed;
            opacity: .75;
        }

        &:not(:disabled):hover {
            background-color: ${({ theme }) => theme.accent};
        }
    }
`
