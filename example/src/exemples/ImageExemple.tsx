import React from 'react'
import { Block } from 'baseui/block'
import {
  CarouselElement,
  CarouselWrapper,
  NextSlideAction,
  PrevSlideAction,
  SliderElementProps
} from 'react-very-light-carousel'
import { useStyletron } from 'baseui'
import { Button } from 'baseui/button'
import { imageDatas } from './datas'
import { ArrowRight, ArrowLeft } from 'baseui/icon'

const ImageExemple = () => {
  const [css, theme] = useStyletron()

  return (
    <Block margin='8px' display='flex' alignItems='center'>
      <CarouselWrapper
        datas={imageDatas}
        currentSize={{ element: 400, margin: 16 }}
      >
        <PrevSlideAction>
          <Button
            overrides={{
              Root: {
                style: () => ({ position: 'relative', left: '24px', zIndex: 2 })
              }
            }}
            kind='secondary'
            shape='circle'
            children={<ArrowLeft size={32} />}
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
            children={<ArrowRight size={32} />}
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
