import { motion } from "framer-motion"
import styled from "styled-components"

export const Title = styled.h1`
  font-size: 2rem;
  color: var(--primary-color);
  font-weight: 900;
`
export const ContactForm = styled(motion.form)`
  * {
    width: 100%;
    max-width: 420px;
  }

  input,
  textarea {
    resize: none;
    outline: none;
    border: 2px solid var(--primary-color);
    border-radius: 5px;
    margin: 0.5rem 0rem;
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
export const SubjectInput = styled.input``
export const MessageInput = styled.textarea`
  display: block;

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

export const EmailWrapper = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;

  input {
    flex-grow: 1;
  }
`
export const SubmitedMessage = styled.p`
  font-size: 1.2rem;
  color: #009900;
  margin: 0.5rem 0.2rem;
  font-weight: bolder;
`
