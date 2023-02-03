import { NavbarItem } from "./styles"
import { motion } from "framer-motion"
const NavbarItems = () => {
  return (
    <>
      <NavbarItem>Contact</NavbarItem>
      <NavbarItem href="#about">About</NavbarItem>
      <NavbarItem href="#stacks">Stacks</NavbarItem>
      <NavbarItem>Projects</NavbarItem>
    </>
  )
}

export default NavbarItems
