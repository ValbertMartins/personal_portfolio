import styled from "styled-components"
import { ThemeProps } from "../../Interface/IThemeProps"

export const HeaderContainer = styled.div`
  background-color: ${({ theme }: { theme: ThemeProps }) => theme.colors.BACKGROUND_COLOR};
  position: fixed;
  width: 100%;
  top: 0rem;
  z-index: 10;
  border-bottom: 1px solid ${({ theme }: { theme: ThemeProps }) => theme.colors.PRIMARY};
  /* box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2); */

  @media (max-width: 580px) {
    background-color: transparent;
    border-bottom: none;
    box-shadow: none;
  }
`
export const HeaderContent = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: end;
  padding: 2rem 1rem;
  font-size: 1rem;
  @media (max-width: 1025px) {
    max-width: 700px;
    font-size: 1rem;
  }
  @media (max-width: 710px) {
    max-width: 580px;
  }
`
