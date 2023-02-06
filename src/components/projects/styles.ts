import styled from "styled-components"
import { ThemeProps } from "../../Interface/IThemeProps"

export const Container = styled.section`
  margin: 3rem auto;
  padding-top: 5rem;
  max-width: 1000px;
  @media (max-width: 1025px) {
    max-width: 800px;
    font-size: 1rem;
  }
`
export const ProjectContainer = styled.article`
  display: flex;
  gap: 2rem;
  margin: 2rem auto;
  @media (max-width: 710px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 0rem;
    margin: 3rem auto;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  @media (max-width: 710px) {
    max-width: 75%;
    width: 75%;
    flex-shrink: 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`
export const Title = styled.h1`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: ${({ theme }: { theme: ThemeProps }) => theme.colors.PRIMARY};
  @media (max-width: 710px) {
    margin-bottom: 0;
    font-size: 1.3rem;
  }
`
export const Description = styled.p`
  @media (max-width: 710px) {
    display: none;
  }
`

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
  @media (max-width: 710px) {
    width: 2rem;
    height: 2rem;
  }
`
