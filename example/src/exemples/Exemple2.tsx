import React from 'react'
import { Card, StyledContents, StyledTitle } from 'baseui/card'
import { Block } from 'baseui/block'

import {
  HorizontalSlider,
  HorizontalSliderWrapper,
  NextSlideAction,
  PrevSlideAction,
  SliderElementProps
} from 'react-simple-slider'

const datas = [
  { id: 0, text: 'yesterday', title: 'good day' },
  { id: 1, text: 'sunday', title: 'bad day' },
  { id: 2, text: 'wedsday', title: 'no day' },
  { id: 3, text: 'monday', title: 'next day' },
  { id: 4, text: 'monday too', title: 'best day' }
]

const Exemple1 = () => {
  return (
    <Block width={['100%', '600px', '600px']}>
      <HorizontalSliderWrapper
        datas={datas}
        currentSize={{ element: 200, margin: 20 }}
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
}: SliderElementProps<{ id: number; text: string; title: string }>) => {
  return (
    <div className={className}>
      <Card>
        <StyledTitle>{data?.title}</StyledTitle>
        <StyledContents>{data?.text}</StyledContents>
      </Card>
    </div>
  )
}

export default Exemple1
