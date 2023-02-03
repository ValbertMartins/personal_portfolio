import { motion } from "framer-motion"
import { ReactNode, useState } from "react"
import { ButtonMobileContainer, ContainerOptions } from "./styles"

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}
export const ButtonHamburguer = ({ children }: { children: ReactNode }) => {
  const [showContent, setShowContent] = useState(false)
  return (
    <ButtonMobileContainer onClick={() => setShowContent(!showContent)}>
      {showContent && (
        <motion.div
          animate={{ x: -290, y: 50 }}
          transition={{ delay: 0 }}
        >
          <ContainerOptions>{children}</ContainerOptions>
        </motion.div>
      )}
    </ButtonMobileContainer>
  )
}

export default ButtonHamburguer
