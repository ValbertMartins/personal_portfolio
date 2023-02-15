import { motion } from "framer-motion"
import styled from "styled-components"
import { ThemeProps } from "../../Interface/IThemeProps"

export const ContainerContent = styled.div``

export const Title = styled.h1`
  text-align: center;
  margin: 3rem 0;
  color: ${({ theme }: { theme: ThemeProps }) => theme.colors.PRIMARY};
  font-size: 2rem;
  font-weight: 900;
`
export const Grid = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
`

export const ItemContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Icon = styled.img`
  max-width: ${(props: { maxWidth: number }) => props.maxWidth}rem;
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
`

export const ModalContent = styled(motion.div)`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  padding: 2%;
  position: relative;
  z-index: 1000;

  h2 {
    margin: 1rem 0;
    font-size: 5rem;
  }
`
export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const Name = styled.h1`
  font-size: 7rem;

  color: ${(props: { color: string }) => props.color};
`

export const ModalButton = styled(motion.button)`
  width: 2rem;
  height: 2rem;
  border: none;
  outline: none;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
