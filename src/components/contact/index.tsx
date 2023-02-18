import { Container, ContainerLogoContact, ContentContainer } from "./styles"
import LogoContact from "../../assets/images/logoContactMe.png"
import FormContact from "./form"

const Contact = () => {
  return (
    <Container>
      <ContentContainer>
        <FormContact />
        <ContainerLogoContact>
          <img src={LogoContact} />
        </ContainerLogoContact>
      </ContentContainer>
    </Container>
  )
}

export default Contact
