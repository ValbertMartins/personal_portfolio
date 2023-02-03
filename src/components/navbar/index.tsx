import React, { useEffect, useState } from "react"
import ButtonHamburguer from "../buttonHamburguer"
import NavbarItems from "../navbarItems"
import { NavbarContainer, NavbarContent } from "./styles"
const Navbar = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    const resizeEvent = window.addEventListener("resize", (event: UIEvent) => {
      const target = event.target as Window
      setWindowSize(target.innerWidth)
    })
    return () => window.removeEventListener("resize", resizeEvent as any)
  }, [])
  return (
    <NavbarContainer>
      <NavbarContent>
        {windowSize <= 580 ? (
          <ButtonHamburguer>
            <NavbarItems />
          </ButtonHamburguer>
        ) : (
          <NavbarItems />
        )}
      </NavbarContent>
    </NavbarContainer>
  )
}

export default Navbar
