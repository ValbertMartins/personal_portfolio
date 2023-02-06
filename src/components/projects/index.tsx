import { motion } from "framer-motion"
import {
  Container,
  Description,
  Details,
  ProjectContainer,
  Title,
  Button,
  ButtonContainer,
} from "./styles"
import { ReactComponent as GithubIcon } from "../../assets/svg/githubIcon.svg"
import { ReactComponent as ExtenalLinkIcon } from "../../assets/svg/externalLinkIcon.svg"
import Preview from "../preview"
import { projects } from "../../utils/projectsInfoProvider"

const Projects = () => {
  return (
    <Container id="projects">
      {projects.map(project => {
        return (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{
              margin: "0px 0px 0px 0px",
              once: true,
            }}
          >
            <ProjectContainer>
              <Preview images={project.images} />

              <Details>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
                <ButtonContainer>
                  <Button
                    href={project.links.deployLink}
                    disabled={project.links.deployLink ? false : true}
                  >
                    <ExtenalLinkIcon />
                  </Button>
                  <Button href={project.links.githubRepo}>
                    <GithubIcon />
                  </Button>
                </ButtonContainer>
              </Details>
            </ProjectContainer>
          </motion.div>
        )
      })}
    </Container>
  )
}

export default Projects
