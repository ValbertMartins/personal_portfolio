import { SocialButton, ButtonsSocialContainer } from "./styles"
import { ReactComponent as GithubIcon } from "../../assets/svg/githubIcon.svg"
import { ReactComponent as LinkedinIcon } from "../../assets/svg/linkedin_icon.svg"
const SocialButtons = () => {
  return (
    <ButtonsSocialContainer>
      <SocialButton
        whileHover={{ scale: 1.1 }}
        href="https://github.com/ValbertMartins"
        color="#FFF"
        backgroundColor="#000"
        borderColor="#000"
      >
        Github
        <GithubIcon />
      </SocialButton>
      <SocialButton
        whileHover={{ scale: 1.1 }}
        href="https://www.linkedin.com/in/valbert-martins-a51049239/"
        color="#007EBB"
        backgroundColor="#FFF"
        borderColor="#007EBB"
      >
        Linkedin
        <LinkedinIcon />
      </SocialButton>
    </ButtonsSocialContainer>
  )
}

export default SocialButtons
