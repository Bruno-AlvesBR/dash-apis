import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Barlow', sans-serif;
    scroll-behavior: smooth;
  }

  body {
    max-width: 100vw;
    position: relative;
    font-size: 92.5%;
    background: #aaaaaa30!important;
    overflow-x: hidden;
  }

  .body-no-wrap {
    display: flex;
    flex-direction: row;
  }
`;
