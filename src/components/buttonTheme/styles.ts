import { motion } from "framer-motion"
import styled from "styled-components"

export const Container = styled(motion.div)`
  width: 3.5rem;
  display: flex;
  padding: 5px;
  max-height: 1.7rem;
  align-items: center;
  border: 1px solid black;
  border-radius: 30px;
  opacity: 0;
  pointer-events: none;
`
export const Circle = styled(motion.div)`
  height: 1.3rem;
  width: 1.3rem;
  border: 1px solid black;
  border-radius: 50%;
`
