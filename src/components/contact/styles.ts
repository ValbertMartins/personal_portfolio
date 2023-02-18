import styled from "styled-components"
import circleBackground from "../../assets/images/circle_contact_background.png"

export const Container = styled.section`
  background: var(--bg-color) url(${circleBackground}) no-repeat left bottom;
  background-size: 300px;
`
export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
`
export const ContainerLogoContact = styled.div`
  display: flex;
  justify-content: center;
`
