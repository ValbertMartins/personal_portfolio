import { motion } from "framer-motion"
import styled from "styled-components"

export const ContactForm = styled(motion.form)`
  input,
  textarea {
    resize: none;
    outline: none;
    border: 2px solid var(--primary-color);
    border-radius: 5px;
    margin: 0.5rem auto;
    width: 100%;
    padding: 10px;
    min-height: 3rem;
    font-family: var(--default-font);
    transition: 300ms;

    :hover {
      box-shadow: 0px 0px 5px 1px var(--secondary-color);
    }
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--secondary-color);
    opacity: 0.6;
  }
`
export const MessageInput = styled.textarea`
  height: 10rem;
`

export const ButtonSubmit = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  background-color: var(--primary-color);
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 300ms;
  :hover {
    background-color: var(--secondary-color);
  }
`
export const EmailWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  input {
    flex-grow: 1;
  }
`

export const Spinner = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
