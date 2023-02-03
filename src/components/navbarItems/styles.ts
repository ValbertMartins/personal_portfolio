import styled, { keyframes } from "styled-components"
import { ThemeProps } from "../../Interface/IThemeProps"

export const NavbarItem = styled.a`
  color: ${({ theme }: { theme: ThemeProps }) => theme.colors.PRIMARY};
  font-weight: 1000;
  margin: 0 1rem;
  cursor: pointer;
  transition: 500ms;
  text-decoration: none;

  :hover {
    color: ${({ theme }: { theme: ThemeProps }) => theme.colors.SECONDARY};
  }
`
