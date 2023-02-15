import Technologies from "../technologies"
import { AboutContent, Container, Description, LogoContainer, Title } from "./styles"
import LogoAboutMe from "../../assets/images/logo_aboutme.png"
import { useState } from "react"
const AboutMe = () => {
  const [itemId, setItemId] = useState<string | null>(null)
  return (
    <Container>
      <AboutContent
        animate={{ opacity: itemId ? 0 : 1 }}
        transition={{ delay: 0, duration: 0.2 }}
      >
        <LogoContainer
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={LogoAboutMe}
            alt=""
          />
        </LogoContainer>
        <Title
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </Title>
        <Description
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lore type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release of Letraset sheets containing Lorem
        </Description>
      </AboutContent>

      <Technologies
        itemId={itemId}
        setItemId={setItemId}
      />
    </Container>
  )
}

export default AboutMe
