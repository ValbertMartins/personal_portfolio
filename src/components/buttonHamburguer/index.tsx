import { ReactNode, useState } from "react"
import { ButtonMobileContainer, ContainerOptions } from "./styles"

export const ButtonHamburguer = ({ children }: { children: ReactNode }) => {
  const [showContent, setShowContent] = useState(false)
  return (
    <ButtonMobileContainer onClick={() => setShowContent(!showContent)}>
      {showContent && <ContainerOptions>{children}</ContainerOptions>}
    </ButtonMobileContainer>
  )
}

export default ButtonHamburguer
