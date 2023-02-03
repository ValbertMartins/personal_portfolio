import {
  ContainerContent,
  HomeContainer,
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
      </ContainerContent>
    </HomeContainer>
  )
}

export default Home
