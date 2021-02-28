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
import { useStyletron } from 'baseui'

const datas = [
  { id: 0, text: 'yesterday', title: 'good day' },
  { id: 1, text: 'sunday', title: 'bad day' },
  { id: 2, text: 'wedsday', title: 'no day' },
  { id: 3, text: 'monday', title: 'next day' },
  { id: 4, text: 'monday too', title: 'best day' }
]

const Exemple4 = () => {
  const [css] = useStyletron()

  return (
    <Block width={'400px'}>
      <HorizontalSliderWrapper
        datas={datas}
        currentSize={{ element: 200, margin: 10 }}
      >
        <HorizontalSlider
          rootClassname={css({
            border: '1px solid red'
          })}
          elementBoxClassname={css({
            margin: '16px',
            border: '1px solid blue'
          })}
        >
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

export default Exemple4
