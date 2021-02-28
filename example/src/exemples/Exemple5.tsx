import React from 'react'
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

const Exemple5 = () => {
  const [css, theme] = useStyletron()

  const buttonClass = css({
    border: `1px solid ${theme.colors.white}`,
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    background: 'none',
    color: theme.colors.white,
    cursor: 'pointer'
  })

  return (
    <Block
      width={'280px'}
      margin='8px'
      className={css({
        border: `4px solid ${theme.colors.accent400}`,
        display: 'flex',
        alignItems: 'center'
      })}
    >
      <HorizontalSliderWrapper
        datas={datas}
        currentSize={{ element: 200, margin: 10 }}
      >
        <PrevSlideAction>
          <button className={buttonClass}>-</button>
        </PrevSlideAction>
        <HorizontalSlider rootClassname={css({ width: '200px' })}>
          <Element />
        </HorizontalSlider>
        <NextSlideAction>
          <button className={buttonClass}>+</button>
        </NextSlideAction>
      </HorizontalSliderWrapper>
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
      <img
        className={css({
          width: '200px',
          height: 'auto'
        })}
        src={data?.src}
        alt='slider'
      />
    </div>
  )
}

export default Exemple5
