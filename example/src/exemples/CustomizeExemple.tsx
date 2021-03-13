import React from 'react'
import { Block } from 'baseui/block'

import {
  CarouselElement,
  CarouselWrapper,
  NextSlideAction,
  PrevSlideAction,
  SliderElementProps
} from 'react-clear-carousel'
import { useStyletron } from 'baseui'
import { DatasTypes } from './datas'

const datas = [
  { id: 0, text: 'yesterday', title: 'good day' },
  { id: 1, text: 'sunday', title: 'bad day' },
  { id: 2, text: 'wedsday', title: 'no day' },
  { id: 3, text: 'monday', title: 'next day' },
  { id: 4, text: 'monday too', title: 'best day' }
]

const CustomizeExemple = () => {
  const [css] = useStyletron()

  return (
    <Block width={'400px'}>
      <CarouselWrapper datas={datas} currentSize={{ element: 200, margin: 10 }}>
        <CarouselElement
          rootClassname={css({
            border: '2px solid red'
          })}
          elementBoxClassname={css({
            margin: '16px',
            border: '2px solid blue'
          })}>
          <Element />
        </CarouselElement>
        <PrevSlideAction>
          <button>Prev</button>
        </PrevSlideAction>
        <NextSlideAction>
          <button>Next</button>
        </NextSlideAction>
      </CarouselWrapper>
    </Block>
  )
}

const Element = ({ className, data }: SliderElementProps<DatasTypes>) => {
  return (
    <div className={className} style={{ border: '1px solid white' }}>
      <Block backgroundColor={data?.color} color='colorPrimary' padding='8px'>
        <p>{data?.text}</p>
      </Block>
    </div>
  )
}

export default CustomizeExemple
