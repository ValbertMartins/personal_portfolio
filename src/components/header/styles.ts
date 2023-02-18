import styled from "styled-components"

export const HeaderContainer = styled.div`
  background-color: var(--bg-color);
  position: fixed;
  width: 100%;
  top: 0rem;
  z-index: 10;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.2);

  @media (max-width: 580px) {
    background-color: transparent;
    border-bottom: none;
    box-shadow: none;
  }
`
export const HeaderContent = styled.div`
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem;
  font-size: 1.1rem;
  @media (max-width: 1025px) {
    font-size: 1rem;
  }
  @media (max-width: 710px) {
  }
`
