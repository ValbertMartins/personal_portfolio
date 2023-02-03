import styled, { keyframes } from "styled-components"
import { ThemeProps } from "../../Interface/IThemeProps"
import circle_background from "../../assets/images/circle_background.png"
import circle_background_one from "../../assets/images/circle_background_one.png"
import circle_background_mobile from "../../assets/images/circle_background_mobile.png"

export const HomeContainer = styled.section`
  width: 100vw;
  min-height: 100vh;

  background-color: ${({ theme }: { theme: ThemeProps }) => theme.colors.BACKGROUND_COLOR};
  background-image: url(${circle_background}), url(${circle_background_one});
  background-repeat: no-repeat;
  background-position: bottom right, left bottom;
  background-size: 220px, 190px;
  animation-duration: 5s;
  @media (max-width: 580px) {
    background-image: url(${circle_background_mobile});
    background-position: left top;
    background-size: inherit;
  }
`
export const ContainerContent = styled.div`
  max-width: 1000px;
  margin: 0rem auto;

  @media (max-width: 1025px) {
    max-width: 900px;
  }
  @media (max-width: 710px) {
    max-width: 580px;
  }
`

export const Navbar = styled.div`
  display: flex;
  justify-content: end;
  padding: 3rem 1rem;
`

export const PersonalInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5rem 0;
  align-items: center;

  @media (max-width: 1025px) {
    justify-content: center;
  }
  @media (max-width: 580px) {
    flex-direction: column-reverse;
    margin: 0;
  }
`

export const PeopleIllustration = styled.img`
  pointer-events: none;
  @media (max-width: 1025px) {
    max-width: 70%;
    display: block;
    margin: 0 auto;
  }
  @media (max-width: 580px) {
    width: 40%;
  }
`

// export const ButtonScrollDown = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 2rem 0;
//   svg {
//     width: 50px;
//     height: 50px;
//   }
// `
