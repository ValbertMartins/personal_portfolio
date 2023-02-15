import { AnimatePresence, delay, motion } from "framer-motion"
import { technologiesList } from "../../utils/technologiesInfoProvider"
import { useState } from "react"
import {
  ContainerContent,
  Flex,
  Icon,
  ItemContainer,
  Modal,
  ModalButton,
  ModalContent,
  Name,
} from "./styles"

type Props = {
  setItemId: React.Dispatch<React.SetStateAction<string | null>>
  itemId: string | null
}

const Technologies = ({ itemId, setItemId }: Props) => {
  const [technologie] = technologiesList.filter(item => item.id === itemId)

  return (
    <ContainerContent>
      {technologiesList.map(item => {
        return (
          <ItemContainer
            layoutId={item.id}
            key={item.id}
            onClick={() => setItemId(item.id)}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: itemId ? 0 : 1, y: 0 }}
          >
            <Icon
              src={item.icon}
              maxWidth={4}
            />
          </ItemContainer>
        )
      })}

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
              <ModalButton
                color={technologie.borderColor}
                onClick={() => setItemId(null)}
              ></ModalButton>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </ContainerContent>
  )
}

export default Technologies
