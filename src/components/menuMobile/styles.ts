import { motion } from "framer-motion"
import styled from "styled-components"

export const ButtonHamburguer = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  outline: 2px solid transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: var(--primary-color);
  position: fixed;
  top: 1rem;
  right: 1rem;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms;

  ::after {
    content: "";
    height: 2px;
    display: inline-block;
    background-color: white;
    width: 60%;
    border-radius: 1px;
    box-shadow: 0px 6px 0px 0px white, 0px -6px 0px 0px white;
  }
  :hover {
    outline: 2px solid var(--secondary-color);
  }
`

export const ModalMobile = styled(motion.div)`
  position: fixed;
  background-color: #fff;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: end;
`
export const ContentModal = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 100%;
  border-top-left-radius: 5rem;
  border-top-right-radius: 5rem;
  background-color: var(--primary-color);
  font-size: 2rem;
  z-index: 5;

  a {
    font-weight: 100;
    border-bottom: 1px solid #d9d9d9;
    margin: 2rem 0;
  }
`

export const ButtonCloseModal = styled.button`
  margin-top: 1rem;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  outline: none;
  border: none;
  background-color: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ::before,
  ::after {
    content: "";
    background-color: var(--primary-color);
    width: 1.7rem;
    height: 0.2rem;
    position: absolute;
    margin-left: 1px;
  }

  ::before {
    transform: rotate(-45deg);
  }

  ::after {
    transform: rotate(45deg);
  }
`
