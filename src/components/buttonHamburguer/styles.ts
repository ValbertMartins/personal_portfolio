import styled from "styled-components"
import { ThemeProps } from "../../Interface/IThemeProps"

export const ButtonMobileContainer = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  outline: 2px solid transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ theme }: { theme: ThemeProps }) => theme.colors.PRIMARY};
  position: fixed;
  top: 1rem;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms;

  ::after {
    content: "";
    height: 2px;
    display: inline-block;
    background-color: white;
    width: 60%;
    border-radius: 1px;
    box-shadow: 0px 6px 0px 0px white, 0px -6px 0px 0px white;
  }
  :hover {
    outline: 2px solid ${({ theme }: { theme: ThemeProps }) => theme.colors.SECONDARY};
  }
`

export const ContainerOptions = styled.div`
  display: flex;
  position: absolute;
  bottom: 0rem;
  left: 0;
  font-size: 1rem;
  z-index: 5;
`
