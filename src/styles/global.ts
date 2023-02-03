import styled, { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    ::-webkit-scrollbar { 
      display: none;
    }
    -webkit-tap-highlight-color:transparent;

    scroll-behavior: smooth;

    font-family: "roboto";
  }

`
