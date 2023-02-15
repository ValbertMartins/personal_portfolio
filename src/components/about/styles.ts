import { motion } from "framer-motion"
import styled from "styled-components"
import { ThemeProps } from "../../Interface/IThemeProps"

export const Container = styled.section`
  max-width: 1000px;
  margin: 10rem auto;
`
export const AboutContent = styled(motion.div)`
  @media (max-width: 1025px) {
    max-width: 600px;
    margin: 0 auto;
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
  color: ${(props: { theme: ThemeProps }) => props.theme.colors.PRIMARY};
  margin: 3rem 0rem;
  font-size: 2rem;
`

export const Description = styled(motion.p)`
  text-align: center;
  opacity: 0.8;
`
