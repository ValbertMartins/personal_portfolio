import styled from "styled-components"
import { ThemeProps } from "../../Interface/IThemeProps"

export const Container = styled.section`
  max-width: 1000px;
  margin: 10rem auto;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Title = styled.h2`
  text-align: center;
  font-weight: 900;
  color: ${(props: { theme: ThemeProps }) => props.theme.colors.PRIMARY};
  margin: 3rem 0rem;
  font-size: 2rem;
`

export const Description = styled.p`
  text-align: center;
  opacity: 0.8;
`
