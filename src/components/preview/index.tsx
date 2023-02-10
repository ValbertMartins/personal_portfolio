import { useState } from "react"
import { Carousel } from "react-responsive-carousel"
import { Container, Indicator } from "./styles"
import "react-responsive-carousel/lib/styles/carousel.min.css"

type Props = {
  images?: string[]
}

type handleIndicatorProps = (
  clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
  isSelected: boolean,
  index: number,
  label: string
) => React.ReactNode

const handleIndicator: handleIndicatorProps = (clickHandler, isSelected) => {
  if (isSelected) {
    return <Indicator active />
  }
  return <Indicator onClick={clickHandler} />
}

const Preview = ({ images }: Props) => {
  return (
    <Container>
      <Carousel
        autoPlay
        showThumbs={false}
        showStatus={false}
        dynamicHeight={true}
        infiniteLoop
        interval={4000}
        renderIndicator={handleIndicator}
      >
        {images?.map(image => {
          return (
            <div key={image}>
              <img src={image} />
            </div>
          )
        })}
      </Carousel>
    </Container>
  )
}

export default Preview
