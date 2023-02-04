import styled from "styled-components"
import { ThemeProps } from "../../Interface/IThemeProps"

export const Container = styled.section`
  margin: 3rem auto;
  padding-top: 5rem;
  max-width: 1000px;
`
export const ProjectContainer = styled.article`
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
`
export const Preview = styled.div`
  width: 500px;
  height: 300px;
  border-radius: 5px;
  background-color: #d9d9d9;
  max-width: 50%;
`

export const Details = styled.div`
  max-width: 50%;
`
export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }: { theme: ThemeProps }) => theme.colors.PRIMARY};
`
export const Description = styled.p``
