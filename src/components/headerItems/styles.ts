import styled from "styled-components"
import { Link } from "react-router-dom"

export const NavbarItem = styled(Link)`
  color: var(--primary-color);
  font-weight: 1000;
  margin: 0 1rem;
  cursor: pointer;
  transition: 500ms;
  text-decoration: none;

  :hover {
    color: var(--secondary-color);
  }
`
