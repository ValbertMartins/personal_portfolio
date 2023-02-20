import styled from "styled-components"
import { Link } from "react-router-dom"

interface NavbarItemProps {
  color: string
}

export const NavbarItem = styled(Link)<NavbarItemProps>`
  margin: 0 1rem;
  cursor: pointer;
  text-decoration: none;
  font-weight: 1000;
  color: ${props => {
    console.log(props.color)
    return props.color
  }};

  :hover {
    color: var(--secondary-color);
  }
`
