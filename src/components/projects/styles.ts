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

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
`
export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }: { theme: ThemeProps }) => theme.colors.PRIMARY};
`
export const Description = styled.p``

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`

interface ButtonProps {
  disabled?: boolean
  theme: ThemeProps
}
export const Button = styled.a<ButtonProps>`
  background-color: ${(props: { theme: ThemeProps; disabled?: boolean }) =>
    props.disabled ? props.theme.colors.SECONDARY : props.theme.colors.PRIMARY};
  outline: 2px solid transparent;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 5px;
  margin: 1rem 0.2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 300ms;
  pointer-events: ${props => (props.disabled ? "none" : "auto")};

  :hover {
    background-color: ${({ theme }: { theme: ThemeProps }) => theme.colors.SECONDARY};
  }
`
