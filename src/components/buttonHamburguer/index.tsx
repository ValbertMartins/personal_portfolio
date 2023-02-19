import { motion } from "framer-motion"
import { ReactNode, useState } from "react"
import { ButtonMobileContainer, ContainerOptions } from "./styles"

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
