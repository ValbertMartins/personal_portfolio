import styled from "styled-components"
import { ThemeProps } from "../../Interface/IThemeProps"
export const HomeContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }: { theme: ThemeProps }) => theme.colors.BACKGROUND_COLOR};
`
export const ContainerContent = styled.div`
  max-width: 1000px;
  margin: 0rem auto;
`

export const Navbar = styled.div`
  display: flex;
  justify-content: end;
  padding: 3rem 1rem;
`

export const NavbarItem = styled.a`
  color: ${({ theme }: { theme: ThemeProps }) => theme.colors.PRIMARY};
  font-weight: 1000;
  margin: 0 1rem;
  cursor: pointer;
`

export const PersonalInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5rem 0;
  align-items: center;
`

export const MyInfoContainer = styled.div``

export const Name = styled.h2`
  font-size: 3rem;
  color: ${({ theme }: { theme: ThemeProps }) => theme.colors.PRIMARY}; ;
`

export const Description = styled.h1`
  font-size: 2.3rem;
  color: ${({ theme }: { theme: ThemeProps }) => theme.colors.PRIMARY};
  margin: 0 0.5rem;
`

export const Abstract = styled.p`
  max-width: 25rem;
  font-size: 0.8rem;
  margin: 1rem 0.5rem;
`

export const PeopleIllustration = styled.img``

export const ButtonDownloadCurriculum = styled.button`
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
  :hover {
  }
`
