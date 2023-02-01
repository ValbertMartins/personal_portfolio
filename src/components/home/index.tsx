import {
  ButtonScrollDown,
  ContainerContent,
  HomeContainer,
  Navbar,
  NavbarItem,
  PeopleIllustration,
  PersonalInfoContainer,
} from "./styles"
import PeopleIllustrationSvg from "../../assets/svg/peopleIlustration.svg"
import { motion } from "framer-motion"
import ProfileInfo from "./profileInfo"

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
          <ProfileInfo />

          <motion.div
            animate={{
              translateY: -30,
            }}
            transition={{ repeat: Infinity, duration: 2, repeatType: "mirror" }}
          >
            <PeopleIllustration
              src={PeopleIllustrationSvg}
              alt="people Ilustration"
            />
          </motion.div>
        </PersonalInfoContainer>

        {/* <div>
          <ButtonScrollDown>X</ButtonScrollDown>
        </div> */}
      </ContainerContent>
    </HomeContainer>
  )
}

export default Home
