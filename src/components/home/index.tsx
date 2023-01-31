import {
  Abstract,
  ButtonDownloadCurriculum,
  ContainerContent,
  Description,
  HomeContainer,
  MyInfoContainer,
  Name,
  Navbar,
  NavbarItem,
  PeopleIllustration,
  PersonalInfoContainer,
} from "./styles"
import PeopleIllustrationSvg from "../../assets/svg/peopleIlustration.svg"
import { ReactComponent as DownloadIcon } from "../../assets/svg/downloadIcon.svg"

const Home = () => {
  return (
    <HomeContainer>
      <ContainerContent>
        <Navbar>
          <NavbarItem>Contact</NavbarItem>
          <NavbarItem>About</NavbarItem>
          <NavbarItem>Stacks</NavbarItem>
          <NavbarItem>Projects</NavbarItem>
        </Navbar>

        <PersonalInfoContainer>
          <MyInfoContainer>
            <Name>Valbert Martins</Name>
            <Description>Hello, I'm Front-end Developer</Description>
            <Abstract>
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem
            </Abstract>
            <ButtonDownloadCurriculum>
              Download CV
              <DownloadIcon />
            </ButtonDownloadCurriculum>
          </MyInfoContainer>
          <PeopleIllustration
            src={PeopleIllustrationSvg}
            alt="people Ilustration"
          />
        </PersonalInfoContainer>
      </ContainerContent>
    </HomeContainer>
  )
}

export default Home
