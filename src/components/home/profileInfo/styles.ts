import styled from "styled-components"
import { ThemeProps } from "../../../Interface/IThemeProps"

export const MyInfoContainer = styled.div`
  @media (max-width: 580px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  }
`

export const Name = styled.h2`
  font-size: 3rem;
  color: ${({ theme }: { theme: ThemeProps }) => theme.colors.PRIMARY};
  @media (max-width: 1025px) {
    font-size: 2rem;
  }
  @media (max-width: 710px) {
    font-size: 1.5rem;
  }
  @media (max-width: 580px) {
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

  @media (max-width: 710px) {
    font-size: 1.2rem;
  }
`

export const Abstract = styled.p`
  max-width: 25rem;
  font-size: 0.8rem;
  margin: 1rem 0.5rem;
  @media (max-width: 710px) {
    font-size: 0.7rem;
  }
  @media (max-width: 580px) {
    text-align: center;
    max-width: 20rem;
  }
`

export const ButtonDownloadCurriculum = styled.a`
  border: none;
  outline: none;
  background-color: ${({ theme }: { theme: ThemeProps }) => theme.colors.PRIMARY};
  width: 12rem;
  height: 3rem;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  margin: 1rem 0.5rem;
  font-size: 1.2rem;
  font-weight: bolder;
  display: flex;
  justify-content: space-around;
  padding: 0 1rem;
  align-items: center;
  transition: 300ms;
  text-decoration: none;
  :hover {
  }
  @media (max-width: 710px) {
    width: 8rem;
    height: 2.5rem;
    font-size: 0.7rem;

    svg {
      width: 20px;
    }
  }
`
