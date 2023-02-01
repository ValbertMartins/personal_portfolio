import styled, { keyframes } from "styled-components"
import { ThemeProps } from "../../Interface/IThemeProps"
import circle_background from "../../assets/images/circle_background.png"
import circle_background_one from "../../assets/images/circle_background_one.png"

const AnimateCircles = keyframes`
  50% {
    background-size: 10%, 10%;
  }
  100% {
    background-size: 15%, 15%;
  }

`
export const HomeContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }: { theme: ThemeProps }) => theme.colors.BACKGROUND_COLOR};
  background-image: url(${circle_background}), url(${circle_background_one});
  background-repeat: no-repeat;
  background-position: bottom right, left bottom;
  /* animation: ${AnimateCircles} linear infinite; */
  background-size: 10%, 10%;
  animation-duration: 5s;
`
export const ContainerContent = styled.div`
  max-width: 1000px;
  margin: 0rem auto;
  @media (max-width: 1025px) {
    max-width: 700px;
  }
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
  @media (max-width: 1025px) {
    justify-content: center;
  }
`

export const PeopleIllustration = styled.img`
  @media (max-width: 1025px) {
    width: 70%;
    display: block;
    margin: 0 auto;
  }
`

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

export const ButtonScrollDown = styled.button``
