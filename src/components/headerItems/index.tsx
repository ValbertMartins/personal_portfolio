import { NavbarItem } from "./styles"

const NavbarItems = ({ color }: { color: string }) => {
  return (
    <>
      <NavbarItem
        color={color}
        to="/"
      >
        Home
      </NavbarItem>
      <NavbarItem
        color={color}
        to="about"
      >
        About
      </NavbarItem>
      <NavbarItem
        color={color}
        to="projects"
      >
        Projects
      </NavbarItem>
      <NavbarItem
        color={color}
        to="contact"
      >
        Contact
      </NavbarItem>
    </>
  )
}

export default NavbarItems
