import { motion } from "framer-motion"
import styled from "styled-components"

export const Container = styled.section`
  max-width: 1000px;
  margin: 0rem auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const AboutContent = styled(motion.div)`
  margin-top: 7rem;
  @media (max-width: 1025px) {
    max-width: 600px;
    img {
      max-width: 10rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.8rem;
      max-width: 80%;
      margin: 0 auto;
      color: var(--text-color);
    }
  }
`
export const LogoContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
`

export const Title = styled(motion.h2)`
  text-align: center;
  font-weight: 900;
  color: var(--primary-color);
  margin: 3rem 0rem;
  font-size: 2rem;
`

export const Description = styled(motion.p)`
  text-align: center;
  opacity: 0.8;
  color: var(--text-color);
`
