import styled from "styled-components"
import circleBackground from "../../assets/images/circle_contact_background.png"

export const Container = styled.section`
  background: var(--bg-color) url(${circleBackground}) no-repeat left bottom;
  background-size: 300px;

  @media (max-width: 830px) {
    background-image: none;
  }
`
export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1025px;
  margin: 0 auto;
  gap: 3rem;
  min-height: 100vh;
  @media (max-width: 1025px) {
    max-width: 820px;
  }
  @media (max-width: 830px) {
    grid-template-columns: 1fr;
  }
`
export const ContainerContact = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  * {
    width: 100%;
    max-width: 420px;
  }

  @media (max-width: 430px) {
    * {
      max-width: 290px;
    }
  }
`
export const Title = styled.h1`
  font-size: 2rem;
  color: var(--primary-color);
  font-weight: 900;
`
export const SubmitedMessage = styled.p`
  font-size: 1.2rem;
  color: #009900;
  margin: 0.5rem 0.2rem;
  font-weight: bolder;
`

export const ContainerLogoContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 22rem;
  }
  @media (max-width: 830px) {
    display: none;
  }
`
