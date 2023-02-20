import React, { useEffect, useState, SetStateAction, Dispatch } from "react"
import MenuMobile from "../menuMobile"
import ButtonTheme from "../buttonTheme"
import HeaderItems from "../headerItems"
import { HeaderContainer, HeaderContent } from "./styles"

interface Props {
  setChangeTheme: Dispatch<SetStateAction<boolean>>
  changeTheme: boolean
}

const Header = ({ setChangeTheme, changeTheme }: Props) => {
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
        <ButtonTheme
          setChangeTheme={setChangeTheme}
          changeTheme={changeTheme}
        />
        <div>
          {windowSize <= 580 ? (
            <MenuMobile>
              <HeaderItems color="#FFF" />
            </MenuMobile>
          ) : (
            <HeaderItems color="#6215DD" />
          )}
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
