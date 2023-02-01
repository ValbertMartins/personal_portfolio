import React from "react"

import { motion } from "framer-motion"
import {
  Abstract,
  Description,
  MyInfoContainer,
  Name,
  ButtonDownloadCurriculum,
} from "./styles"
import { ReactComponent as DownloadIcon } from "../../../assets/svg/downloadIcon.svg"
import curriculumFile from "../../../assets/curriculoAtualizado.pdf"

const ProfileInfo = () => {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <MyInfoContainer>
        <Name>Valbert Martins</Name>
        <Description>Hello, I'm Front-end Developer</Description>
        <Abstract>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem
        </Abstract>
        <ButtonDownloadCurriculum
          href={curriculumFile}
          download="Curriculum"
        >
          Download CV
          <DownloadIcon />
        </ButtonDownloadCurriculum>
      </MyInfoContainer>
    </motion.div>
  )
}

export default ProfileInfo
