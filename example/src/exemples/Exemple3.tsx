import React from 'react'
import { Card, StyledContents } from 'baseui/card'
import { Block } from 'baseui/block'

import {
  HorizontalSlider,
  HorizontalSliderWrapper,
  NextSlideAction,
  PrevSlideAction,
  SliderElementProps
} from 'react-simple-slider'
import { datas, DatasTypes } from './datas'

const Exemple3 = () => {
  return (
    <Block margin='8px' width={'200px'}>
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

const Element = ({ className, data }: SliderElementProps<DatasTypes>) => {
  return (
    <div className={className}>
      <Card
        overrides={{
          Root: {
            style: () => ({
              backgroundColor: data?.color
            })
          }
        }}
      >
        <StyledContents>
          <p>
            Dog name:<span style={{ fontWeight: 'bold' }}>{data?.text}</span>
          </p>
        </StyledContents>
      </Card>
    </div>
  )
}

export default Exemple3
