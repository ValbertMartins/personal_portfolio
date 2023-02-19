import styled from "styled-components"
import circleBackground from "../../assets/images/circle_contact_background.png"

export const Container = styled.section`
  background: var(--bg-color) url(${circleBackground}) no-repeat left bottom;
  background-size: 300px;
`
export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1025px;
  margin: 0 auto;
  gap: 3rem;
  height: 100vh;
  @media (max-width: 1025px) {
    max-width: 820px;
  }
  @media (max-width: 830px) {
    grid-template-columns: 1fr;
  }
`
export const ContainerLogoContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 22rem;
  }
`
