import {
  ContainerContent,
  HomeContainer,
  Navbar,
  PeopleIllustration,
  PersonalInfoContainer,
} from "./styles"
import PeopleIllustrationSvg from "../../assets/svg/peopleIlustration.svg"
import { motion } from "framer-motion"
import ProfileInfo from "./profileInfo"
import { useEffect, useRef, useState } from "react"
import ButtonHamburguer from "../buttonHamburguer"
import { NavbarItem } from "../navbarItems/styles"
import NavbarItems from "../navbarItems"
import { ReactComponent as ArrowDown } from "../../assets/svg/arrow-down.svg"

const Home = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [writeEffectLetters, setWriteEffectLetters] = useState("")
  useEffect(() => {
    const resizeEvent = window.addEventListener("resize", (event: UIEvent) => {
      const target = event.target as Window
      setWindowSize(target.innerWidth)
    })

    return () => window.removeEventListener("resize", resizeEvent as any)
  }, [])

  // useEffect(() => {
  //   let text = "Hello I'm Front-end Developer.".split("")
  //   let indexLetter = 0
  //   const writeEffect = setInterval(() => {
  //     if (indexLetter <= text.length - 2) {
  //       setWriteEffectLetters(prevLetters => prevLetters + text[indexLetter])
  //       indexLetter++
  //     }
  //   }, 1000)

  //   // if (indexLetter == text.length) return () => clearInterval(writeEffect)
  // }, [])

  return (
    <HomeContainer>
      <ContainerContent>
        <Navbar>
          {windowSize <= 580 ? (
            <ButtonHamburguer>
              <NavbarItems />
            </ButtonHamburguer>
          ) : (
            <NavbarItems />
          )}
        </Navbar>

        <PersonalInfoContainer>
          <ProfileInfo writeEffectLetters={writeEffectLetters} />

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
      {/* <ButtonScrollDown>
        <motion.div
          animate={{
            translateY: 20,
          }}
          transition={{ repeat: Infinity, duration: 1, repeatType: "mirror", delay: 2 }}
        >
          <ArrowDown />
        </motion.div>
      </ButtonScrollDown> */}
    </HomeContainer>
  )
}

export default Home
