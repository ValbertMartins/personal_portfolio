import styled from "styled-components"

export const ButtonMobileContainer = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  outline: 2px solid transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: var(--primary-color);
  position: fixed;
  top: 1rem;
  right: 1rem;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms;

  ::after {
    content: "";
    height: 2px;
    display: inline-block;
    background-color: white;
    width: 60%;
    border-radius: 1px;
    box-shadow: 0px 6px 0px 0px white, 0px -6px 0px 0px white;
  }
  :hover {
    outline: 2px solid var(--secondary-color);
  }
`

export const ContainerOptions = styled.div`
  display: flex;
  position: absolute;
  bottom: 0rem;
  left: 0;
  font-size: 1rem;
  z-index: 5;
`
