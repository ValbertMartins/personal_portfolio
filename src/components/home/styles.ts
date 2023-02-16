import styled, { keyframes } from "styled-components"
import { ThemeProps } from "../../Interface/IThemeProps"
import circle_background from "../../assets/images/circle_background.png"
import circle_background_one from "../../assets/images/circle_background_one.png"
import circle_background_mobile from "../../assets/images/circle_background_mobile.png"

export const HomeContainer = styled.section`
  height: 100vh;
  background-color: var(--bg-color);
  background-image: url(${circle_background}), url(${circle_background_one});
  background-repeat: no-repeat;
  background-position: bottom right, left bottom;
  background-size: 200px, 170px;

  @media (max-width: 1025px) {
    background-size: 154px, 110px;
  }

  @media (max-width: 580px) {
    background-image: url(${circle_background_mobile});
    background-position: left top;
    background-size: 60px;
  }
`
export const ContainerContent = styled.div`
  max-width: 1025px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin: 0rem auto;
  @media (max-width: 1025px) {
    max-width: 900px;
  }
  @media (max-width: 710px) {
    max-width: 580px;
  }
`

export const PersonalInfoContainer = styled.div`
  margin: 0 auto;
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
