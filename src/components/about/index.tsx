import { motion } from "framer-motion"
import React, { useState } from "react"
import {
  Container,
  ContainerContent,
  Grid,
  Icon,
  ItemContainer,
  Modal,
  ModalContent,
  Title,
} from "./styles"

const items = [
  {
    id: "1",
    title: "ReactJS",
    icon: "src/assets/svg/reactjs_icon.svg",
    borderColor: "#00D8FF",
  },
  {
    id: "2",
    title: "Javascript",
    icon: "src/assets/svg/javascript_icon.svg",
    borderColor: "#F7DF1E",
  },
  {
    id: "3",
    title: "Typescript",
    icon: "src/assets/svg/typescript_icon.svg",
    borderColor: "#3178C6",
  },
  {
    id: "4",
    title: "Styled-components",
    icon: "src/assets/images/styled-components.png",
    borderColor: "#DA7BB6",
  },
  {
    id: "5",
    title: "MongoDB",
    icon: "src/assets/svg/mongodb_icon.svg",
    borderColor: "#499D4A",
  },
  {
    id: "6",
    title: "HTML",
    icon: "src/assets/svg/html_icon.svg",
    borderColor: "#E44D26",
  },
  {
    id: "7",
    title: "Css",
    icon: "src/assets/svg/css_icon.svg",
    borderColor: "#1172B8",
  },
  {
    id: "8",
    title: "Git",
    icon: "src/assets/svg/git_icon.svg",
    borderColor: "#EE513B",
  },
  {
    id: "9",
    title: "Mysql",
    icon: "src/assets/svg/mysql_icon.svg",
    borderColor: "#000",
  },
]

const About = () => {
  const [itemId, setItemId] = useState<string | null>(null)

  return (
    <Container id="about">
      <ContainerContent>
        <Title>Technologies</Title>
        <Grid>
          {items.map(item => {
            return (
              <motion.div
                layoutId={item.id}
                key={item.id}
                // borderColor={item.borderColor}
                onClick={() => setItemId(item.id)}
                style={{
                  width: "300px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "95px",
                  borderRadius: "0.2rem",
                  border: "1px solid green",
                }}
              >
                <Icon src={item.icon} />
              </motion.div>
            )
          })}
        </Grid>
        {itemId && (
          <motion.div
            style={{
              position: "fixed",
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              top: 0,
              left: 0,
            }}
          >
            <motion.div
              layoutId={itemId}
              style={{
                backgroundColor: "white",
                width: "400px",
                height: "200px",
                border: "1px solid green",
              }}
            >
              <motion.button onClick={() => setItemId(null)}>x</motion.button>
            </motion.div>
          </motion.div>
        )}
      </ContainerContent>
    </Container>
  )
}

export default About
