import {
  Container,
  ContainerContact,
  ContainerLogoContact,
  ContentContainer,
  SubmitedMessage,
  Title,
} from "./styles"
import LogoContact from "../../assets/images/logoContactMe.png"
import Form from "./form"
import SocialButtons from "../socialButtons"
import { useState } from "react"

const Contact = () => {
  const [submited, setSubmited] = useState(false)

  return (
    <Container>
      <ContentContainer>
        <ContainerContact>
          <Title>Contact Me</Title>
          <Form
            setSubmited={setSubmited}
            submited={submited}
          />
          {submited && <SubmitedMessage>Submited successful,thank you! ✔️</SubmitedMessage>}
          <SocialButtons />
        </ContainerContact>
        <ContainerLogoContact>
          <img src={LogoContact} />
        </ContainerLogoContact>
      </ContentContainer>
    </Container>
  )
}

export default Contact
