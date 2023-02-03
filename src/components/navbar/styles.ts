import styled from "styled-components"
import { ThemeProps } from "../../Interface/IThemeProps"

export const NavbarContainer = styled.div`
  background-color: ${({ theme }: { theme: ThemeProps }) => theme.colors.BACKGROUND_COLOR};
  position: fixed;
  width: 100%;
  top: 0rem;
  z-index: 10;

  @media (max-width: 580px) {
    background-color: transparent;
  }
`
export const NavbarContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: end;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  @media (max-width: 1025px) {
    max-width: 700px;
    font-size: 1rem;
  }
  @media (max-width: 710px) {
    max-width: 580px;
  }
`