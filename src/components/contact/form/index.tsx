import { AnimatePresence } from "framer-motion"
import { Dispatch, FormEvent, SetStateAction, useState } from "react"
import { submitForm } from "../../../api/form"
import { ReactComponent as SendIcon } from "../../../assets/svg/send_icon.svg"

import { ButtonSubmit, ContactForm, EmailWrapper, MessageInput, Spinner } from "./styles"

interface FormProps {
  setSubmited: Dispatch<SetStateAction<boolean>>
  submited: boolean
}
const Form = ({ setSubmited, submited }: FormProps) => {
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [submitLoading, setSubmitLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitLoading(true)
    await submitForm(email, subject, message)
    setSubmited(true)
    setSubmitLoading(false)
  }

  return (
    <AnimatePresence mode="popLayout">
      {!submited && (
        <ContactForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ scale: 0.2, y: -100, opacity: 0 }}
        >
          <EmailWrapper>
            <input
              type="email"
              name="email"
              placeholder="Type your email..."
              required
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />

            <ButtonSubmit>{submitLoading ? <Spinner /> : <SendIcon />}</ButtonSubmit>
          </EmailWrapper>

          <input
            type="text"
            name="subject"
            placeholder="Subject..."
            required
            value={subject}
            onChange={({ target }) => setSubject(target.value)}
          />

          <MessageInput
            placeholder="Message..."
            required
            value={message}
            onChange={({ target }) => setMessage(target.value)}
          />
        </ContactForm>
      )}
    </AnimatePresence>
  )
}

export default Form
