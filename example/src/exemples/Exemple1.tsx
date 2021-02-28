import { Block } from 'baseui/block'
import React from 'react'

import {
  HorizontalSlider,
  HorizontalSliderWrapper,
  NextSlideAction,
  PrevSlideAction,
  SliderElementProps
} from 'react-simple-slider'

const datas = [
  { id: 0, text: 'h' },
  { id: 1, text: 'e' },
  { id: 2, text: 'l' },
  { id: 3, text: 'l' },
  { id: 4, text: 'o' },
  { id: 5, text: '_' },
  { id: 6, text: 'w' },
  { id: 7, text: 'o' },
  { id: 8, text: 'r' },
  { id: 9, text: 'l' },
  { id: 10, text: 'd' },
  { id: 11, text: 's' },
  { id: 12, text: '!' }
]

const Exemple1 = () => {
  return (
    <Block width={['200px', '400px', '400px']}>
      <HorizontalSliderWrapper
        datas={datas}
        currentSize={{ element: 116, margin: 10 }}
      >
        <HorizontalSlider>
          <Element />
        </HorizontalSlider>
        <PrevSlideAction>
          <button>Prev</button>
        </PrevSlideAction>
        <NextSlideAction>
          <button>Next</button>
        </NextSlideAction>
      </HorizontalSliderWrapper>
    </Block>
  )
}

const Element = ({
  className,
  data
}: SliderElementProps<{ id: number; text: string }>) => {
  return (
    <div className={className}>
      <Block
        backgroundColor='backgroundSecondary'
        color='colorPrimary'
        padding='8px'
      >
        <p>id: {data?.text}</p>
      </Block>
    </div>
  )
}

export default Exemple1
