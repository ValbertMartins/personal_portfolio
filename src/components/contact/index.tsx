import {
  ButtonRedirect,
  ButtonsRedirectContainer,
  ButtonSubmit,
  ContactForm,
  Container,
  ContainerLogoContact,
  ContentContainer,
  EmailWrapper,
  MessageInput,
  SubjectInput,
  SubmitedMessage,
  Title,
} from "./styles"
import LogoContact from "../../assets/images/logoContactMe.png"
import { ReactComponent as SendIcon } from "../../assets/svg/send_icon.svg"
import { submitForm } from "../../api/form"
import { FormEvent, useState } from "react"

const Contact = () => {
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
    <Container>
      <ContentContainer>
        <ContactForm onSubmit={handleSubmit}>
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
          <ButtonsRedirectContainer>
            <ButtonRedirect
              href="https://github.com/ValbertMartins"
              color="#FFF"
              backgroundColor="#000"
              borderColor="#000"
            >
              Github
            </ButtonRedirect>
            <ButtonRedirect
              href="https://www.linkedin.com/in/valbert-martins-a51049239/"
              color="#007EBB"
              backgroundColor="#FFF"
              borderColor="#007EBB"
            >
              Linkedin
            </ButtonRedirect>
          </ButtonsRedirectContainer>
        </ContactForm>

        <ContainerLogoContact>
          <img src={LogoContact} />
        </ContainerLogoContact>
      </ContentContainer>
    </Container>
  )
}

export default Contact
