import { createGlobalStyle } from "styled-components";

export const customMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`;

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1000),
  phone: customMediaQuery(600),
};

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  h1, h2 {
    margin: 0;
  }

  html, body {
    height: 100%;
    font-family: 'Karla', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fff;
    color: #333333;
    font-size: 16px;
  }
`;

export default GlobalStyle;
