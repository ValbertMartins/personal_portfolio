import { motion } from "framer-motion"
import styled from "styled-components"

export const ButtonsSocialContainer = styled.div`
  margin: 1rem 0rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`
interface ButtonRedirectProps {
  backgroundColor: string
  borderColor: string
  color: string
}

export const SocialButton = styled(motion.a)<ButtonRedirectProps>`
  border-radius: 5px;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2%;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  border: 3px solid ${props => props.borderColor};
  font-weight: bold;
  cursor: pointer;
  gap: 30px;
  font-size: 1.2rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`
