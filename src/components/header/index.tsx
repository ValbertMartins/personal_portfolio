import React, { useEffect, useState } from "react"
import ButtonHamburguer from "../buttonHamburguer"
import HeaderItems from "../headerItems"
import { HeaderContainer, HeaderContent } from "./styles"
const Header = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    const resizeEvent = window.addEventListener("resize", (event: UIEvent) => {
      const target = event.target as Window
      setWindowSize(target.innerWidth)
    })
    return () => window.removeEventListener("resize", resizeEvent as any)
  }, [])
  return (
    <HeaderContainer>
      <HeaderContent>
        {windowSize <= 580 ? (
          <ButtonHamburguer>
            <HeaderItems />
          </ButtonHamburguer>
        ) : (
          <HeaderItems />
        )}
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
