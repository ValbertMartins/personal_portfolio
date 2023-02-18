import { FormEvent, useState } from "react"
import { submitForm } from "../../../api/form"
import { ReactComponent as SendIcon } from "../../../assets/svg/send_icon.svg"
import SocialButtons from "../../socialButtons"

import {
  ButtonSubmit,
  ContactForm,
  EmailWrapper,
  MessageInput,
  SubjectInput,
  SubmitedMessage,
  Title,
} from "./styles"

const FormContact = () => {
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [submited, setSubmited] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await submitForm(email, subject, message)
    setSubmited(true)
  }

  return (
    <ContactForm
      onSubmit={handleSubmit}
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <Title>Contact Me</Title>

      {!submited && (
        <>
          <EmailWrapper>
            <input
              type="email"
              name="email"
              placeholder="Type your email..."
              required
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />

            <ButtonSubmit>
              <SendIcon />
            </ButtonSubmit>
          </EmailWrapper>

          <SubjectInput
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
        </>
      )}
      {submited && <SubmitedMessage>Submited successful,thank you! ✔️</SubmitedMessage>}
      <SocialButtons />
    </ContactForm>
  )
}

export default FormContact
