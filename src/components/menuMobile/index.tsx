import { AnimatePresence } from "framer-motion"
import { MouseEvent, ReactNode, useState } from "react"
import { ButtonCloseModal, ButtonHamburguer, ContentModal, ModalMobile } from "./styles"

export const MenuMobile = ({ children }: { children: ReactNode }) => {
  const [showMenuMobile, setShowMenuMobile] = useState(false)

  function handleOpenModal(event: MouseEvent<HTMLDivElement>) {
    event.stopPropagation()
    if (event.currentTarget !== event.target) setShowMenuMobile(false)
  }

  return (
    <>
      <ButtonHamburguer onClick={() => setShowMenuMobile(!showMenuMobile)} />

      <AnimatePresence>
        {showMenuMobile && (
          <ModalMobile
            onClick={() => setShowMenuMobile(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ContentModal
              onClick={handleOpenModal}
              initial={{ y: 900 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "tween" }}
              exit={{ y: 900 }}
            >
              {children}
              <ButtonCloseModal onClick={() => setShowMenuMobile(false)}></ButtonCloseModal>
            </ContentModal>
          </ModalMobile>
        )}
      </AnimatePresence>
    </>
  )
}

export default MenuMobile
