import React from 'react'
import { Block } from 'baseui/block'

import {
  CarouselElement,
  CarouselWrapper,
  NextSlideAction,
  PrevSlideAction,
  SliderElementProps
} from 'react-simple-slider'
import { useStyletron } from 'baseui'
import { Button } from 'baseui/button'

const datas = [
  {
    id: 0,
    src: 'https://lenews.ch/wp-content/uploads/2016/05/Dogs-at-Nestle.jpg'
  },
  {
    id: 1,
    src:
      'https://www.sbb.ch/content/dam/internet/keyvisual/GA-Hund.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg'
  },
  {
    id: 2,
    src:
      'https://fun-dog-garderie.ch/wp-content/uploads/2019/06/Fun-Dog-Garderie-Piscine.jpg'
  },
  {
    id: 3,
    src:
      'https://www.sbb.ch/content/dam/internet/keyvisual/Hund.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg'
  },
  {
    id: 4,
    src:
      'https://static.secureholiday.net/static/CMS/photos/000/044/000044323.jpg'
  }
]

const ImageExemple = () => {
  const [css, theme] = useStyletron()

  return (
    <Block margin='8px' display='flex' alignItems='center'>
      <CarouselWrapper datas={datas} currentSize={{ element: 400, margin: 16 }}>
        <PrevSlideAction>
          <Button
            overrides={{
              Root: {
                style: () => ({ position: 'relative', left: '24px', zIndex: 2 })
              }
            }}
            kind='secondary'
            shape='circle'
            children='-'
          />
        </PrevSlideAction>
        <CarouselElement
          rootClassname={css({
            width: '400px',
            border: `2px solid ${theme.colors.buttonSecondaryFill}`,
            borderRadius: '4px'
          })}
        >
          <Element />
        </CarouselElement>
        <NextSlideAction>
          <Button
            overrides={{
              Root: { style: () => ({ position: 'relative', right: '24px' }) }
            }}
            kind='secondary'
            shape='circle'
            children='+'
          />
        </NextSlideAction>
      </CarouselWrapper>
    </Block>
  )
}

const Element = ({
  className,
  data
}: SliderElementProps<{ id: number; src: string }>) => {
  const [css] = useStyletron()

  return (
    <div className={className}>
      <div
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
        className={css({
          overflow: 'hidden',
          height: '250px',

          background: `url(${data?.src})`
        })}
      ></div>
    </div>
  )
}

export default ImageExemple
