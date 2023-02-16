import React, { Dispatch, SetStateAction } from "react"
import { Container, Circle } from "./styles"

interface Props {
  setChangeTheme: Dispatch<SetStateAction<boolean>>
  changeTheme: boolean
}

const ButtonTheme = ({ setChangeTheme, changeTheme }: Props) => {
  return (
    <Container
      layout
      onClick={() => setChangeTheme(!changeTheme)}
      style={{
        justifyContent: changeTheme ? "flex-end" : "flex-start",
      }}
    >
      <Circle
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
      ></Circle>
    </Container>
  )
}

export default ButtonTheme
