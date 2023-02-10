import { motion } from "framer-motion"
import styled from "styled-components"
import circle_background_rest from "../../assets/images/circle_background_rest.png"
import { ThemeProps } from "../../Interface/IThemeProps"

export const Container = styled.section`
  min-height: 100vh;
  background-image: url(${circle_background_rest});
  background-position: top right;
  background-repeat: no-repeat;
  background-size: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContainerContent = styled.div`
  max-width: 1000px;
`
export const Title = styled.h1`
  color: ${({ theme }: { theme: ThemeProps }) => theme.colors.PRIMARY};
  font-size: 2rem;
`
export const Grid = styled.div`
  margin-top: 2rem;
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr 1fr 1fr;
`

export const ItemContainer = styled(motion.div)`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95px;
  border-radius: 0.2rem;
  border: 1px solid ${(props: { borderColor: string }) => props.borderColor};
`

export const Icon = styled.img`
  width: 100%;
  height: 100%;
  max-width: 5rem;
  max-height: 5rem;
`

export const Modal = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: black;
`

export const ModalContent = styled(motion.div)`
  background-color: white;
  width: 400px;
  height: 200px;
`
