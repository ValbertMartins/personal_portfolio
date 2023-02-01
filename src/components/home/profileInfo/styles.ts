import styled from "styled-components"
import { ThemeProps } from "../../../Interface/IThemeProps"

export const MyInfoContainer = styled.div``

export const Name = styled.h2`
  font-size: 3rem;
  color: ${({ theme }: { theme: ThemeProps }) => theme.colors.PRIMARY};
  @media (max-width: 1025px) {
    font-size: 2rem;
  }
`

export const Description = styled.h1`
  font-size: 2.3rem;
  color: ${({ theme }: { theme: ThemeProps }) => theme.colors.PRIMARY};
  margin: 0 0.5rem;
  @media (max-width: 1025px) {
    font-size: 1.5rem;
  }
`

export const Abstract = styled.p`
  max-width: 25rem;
  font-size: 0.8rem;
  margin: 1rem 0.5rem;
`
