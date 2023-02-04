import { motion } from "framer-motion"
import { Container, Description, Details, Preview, ProjectContainer, Title } from "./styles"

interface ProjectProps {
  preview: null
  title: string
  description: string
}

const projects: ProjectProps[] = [
  {
    preview: null,
    title: "ProjectOne",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
  },
  {
    preview: null,
    title: "Project two",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
  },
  {
    preview: null,
    title: "Project three",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
  },
  {
    preview: null,
    title: "Project four",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
  },
  {
    preview: null,
    title: "Project five",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
  },
]

const Projects = () => {
  return (
    <Container id="projects">
      {projects.map(project => {
        return (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{
              margin: "0px 0px 0px 0px",
              once: true,
            }}
          >
            <ProjectContainer key={project.title}>
              <Preview></Preview>
              <Details>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
              </Details>
            </ProjectContainer>
          </motion.div>
        )
      })}
    </Container>
  )
}

export default Projects
