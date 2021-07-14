import { useStyletron } from 'baseui'
import { Block } from 'baseui/block'
import { Button } from 'baseui/button'
import { ArrowLeft, ArrowRight } from 'baseui/icon'
import { Pagination, SIZE } from 'baseui/pagination'
import React from 'react'
import {
  CarouselElement,
  CarouselWrapper,
  NextSlideAction,
  PrevSlideAction,
  SliderElementProps,
  useCarouselContext,
  useCarouselCurrentSlide
} from 'react-clear-carousel'
import { imageDatas } from './datas'
import { useMediaQuery } from './useMediaQuery'

const ImageExemple = () => {
  const [css, theme] = useStyletron()
  const matches = useMediaQuery('(max-width: 400px)')

  return (
    <Block
      margin='8px'
      width='100%'
      display='flex'
      flexDirection='column'
      alignItems='center'>
      <CarouselWrapper
        datas={imageDatas}
        currentSize={{ element: 400, margin: 16 }}>
        <Block display='flex' alignItems='center'>
          <PrevSlideAction>
            <Button
              overrides={{
                Root: {
                  style: () => ({
                    position: 'relative',
                    left: '24px',
                    zIndex: 2
                  })
                }
              }}
              kind='secondary'
              shape='circle'
              children={<ArrowLeft size={32} />}
            />
          </PrevSlideAction>
          <CarouselElement
            rootClassname={css({
              width: matches ? '250px' : '400px',
              border: `2px solid ${theme.colors.buttonSecondaryFill}`,
              borderRadius: '4px'
            })}>
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
        </Block>
        <SlidePagination max={imageDatas.length} />
      </CarouselWrapper>
    </Block>
  )
}

function SlidePagination({ max }: { max: number }) {
  const { currentSlide } = useCarouselCurrentSlide()
  const { setSlide } = useCarouselContext()
  return (
    <Pagination
      numPages={max}
      size={SIZE.mini}
      currentPage={currentSlide + 1}
      onPageChange={({ nextPage }) => {
        setSlide(nextPage - 1)
      }}
    />
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
      />
    </div>
  )
}

export default ImageExemple
