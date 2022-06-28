import { createGlobalStyle } from 'styled-components';
import { normalize } from '../normalize/normalize';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
  }

  html {
    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", Helvetica, Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    width: 100vw;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.font};
    background-color: ${({ theme }) => theme.colors.primary.one}
  }

  ${normalize}
`;
