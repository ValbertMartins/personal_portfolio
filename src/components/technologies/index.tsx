import { AnimatePresence, delay, motion } from "framer-motion"
import { useState } from "react"
import { technologiesList } from "../../utils/technologiesInfoProvider"
import {
  ContainerContent,
  Flex,
  Grid,
  Icon,
  ItemContainer,
  Modal,
  ModalButton,
  ModalContent,
  Name,
  Title,
} from "./styles"

const Technologies = () => {
  const [itemId, setItemId] = useState<string | null>(null)
  const [technologie] = technologiesList.filter(item => item.id === itemId)

  return (
    <ContainerContent>
      <Title>Technologies</Title>
      <Grid>
        {technologiesList.map(item => {
          return (
            <ItemContainer
              layoutId={item.id}
              key={item.id}
              onClick={() => setItemId(item.id)}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: itemId ? 0.1 : 1, y: 0 }}
            >
              <Icon
                src={item.icon}
                maxWidth={4}
              />
            </ItemContainer>
          )
        })}
      </Grid>
      <AnimatePresence>
        {itemId && (
          <Modal>
            <ModalContent layoutId={itemId}>
              <Flex>
                <Icon
                  src={technologie.icon}
                  maxWidth={12}
                />
                <Name color={technologie.borderColor}>{technologie.title}</Name>
              </Flex>

              <p>{technologie.description}</p>
              <ModalButton onClick={() => setItemId(null)}>x</ModalButton>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </ContainerContent>
  )
}

export default Technologies
