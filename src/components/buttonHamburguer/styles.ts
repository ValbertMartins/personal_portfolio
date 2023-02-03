import styled from "styled-components"
import { ThemeProps } from "../../Interface/IThemeProps"

export const ButtonMobileContainer = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ theme }: { theme: ThemeProps }) => theme.colors.PRIMARY};
  margin: 0 2rem;
  position: relative;
  user-select: none;
`

export const ContainerOptions = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  gap: 1rem;
  bottom: -8rem;
  left: -1.5rem;
  font-size: 1rem;
  z-index: 5;
`
