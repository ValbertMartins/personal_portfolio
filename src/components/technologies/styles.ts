import { motion } from "framer-motion"
import styled from "styled-components"
import { ThemeProps } from "../../Interface/IThemeProps"
import closeButtonIcon from "../../assets/images/icon_ButtonClose.png"

export const ContainerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 4rem 1rem;
  flex-wrap: wrap;
`

export const Title = styled.h1`
  text-align: center;
  opacity: 0;
  margin: 3rem 0;
  color: var(--primary-color);
  font-size: 2rem;
  font-weight: 900;
`

export const ItemContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Icon = styled.img`
  max-width: ${(props: { maxWidth: number }) => props.maxWidth}rem;
  @media (max-width: 710px) {
    max-width: ${(props: { maxWidth: number }) => props.maxWidth / 1.5}rem;
  }
`

export const Modal = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
`

export const ModalContent = styled(motion.div)`
  background-color: var(--bg-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  padding: 2%;
  position: relative;

  h2 {
    margin: 1rem 0;
    font-size: 5rem;
  }
  p {
    margin: 1rem 0;
    text-align: center;
    color: var(--text-color);
  }
`
export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const Name = styled.h1`
  font-size: 5rem;
  color: ${(props: { color: string }) => props.color};
  @media (max-width: 710px) {
    font-size: 4rem;
  }
`

export const ModalButton = styled(motion.button)`
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  outline: none;
  position: absolute;
  bottom: -5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 1.5rem;
  background: ${({ color }: { color: string }) => color} url(${closeButtonIcon}) no-repeat
    center center;
  background-size: 12px;
`
