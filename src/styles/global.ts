import styled, { createGlobalStyle } from "styled-components"
import { ThemeProps } from "../Interface/IThemeProps"

interface Props {
  theme: ThemeProps
}
export const GlobalStyles = createGlobalStyle`  
  :root {
    -webkit-tap-highlight-color:transparent;
    scroll-behavior: smooth;
    font-family: "roboto";
    --primary-color: ${(props: Props) => props.theme.colors.PRIMARY};
    --secondary-color: ${(props: Props) => props.theme.colors.SECONDARY};
    --bg-color: ${(props: Props) => props.theme.colors.BACKGROUND_COLOR};
    --text-color: ${(props: Props) => props.theme.colors.TEXT_COLOR};
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    
    
  }

  html,body {
    min-height: 100vh;
  }

  ::-webkit-scrollbar { 
      display: none;
    }
`
