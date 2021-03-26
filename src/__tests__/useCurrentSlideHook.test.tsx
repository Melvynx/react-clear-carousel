import React from 'react'
import { render, screen } from '@testing-library/react'
import { NextSlideAction, PrevSlideAction } from '../CarouselActions'
import { CarouselWrapper, useCarouselCurrentSlide } from '../CarouselWrapper'
import { CarouselElement } from '../CarouselElement'
import { SliderElementProps } from '../types'
import userEvent from '@testing-library/user-event'

export type DatasTypes = { id: number; text: string; color: string }

export const datas: DatasTypes[] = [
  { id: 0, text: 'McNab', color: '#9b59b6' },
  { id: 1, text: 'McNab', color: '#9b59b6' },
  { id: 2, text: 'McNab', color: '#9b59b6' }
]

const classes = { root: 'rootClassname', element: 'elementBoxClassname' }

function Carousel() {
  return (
    <div>
      <CarouselWrapper datas={datas} currentSize={{ element: 10, margin: 10 }}>
        <CarouselElement
          rootClassname={classes.root}
          elementBoxClassname={classes.element}>
          <Element />
        </CarouselElement>
        <PrevSlideAction>
          <button>Prev</button>
        </PrevSlideAction>
        <NextSlideAction>
          <button>Next</button>
        </NextSlideAction>
        <HookTest />
      </CarouselWrapper>
    </div>
  )
}

const HookTest = () => {
  const { currentSlide } = useCarouselCurrentSlide()
  return <p>currentSlide: {currentSlide}</p>
}

const Element = ({ className, data }: SliderElementProps<DatasTypes>) => {
  return (
    <div className={className}>
      <div>
        <p>{data?.text}</p>
      </div>
    </div>
  )
}

describe('useCarouselCurrentSlide', () => {
  test('hook display the current slide', () => {
    render(<Carousel />)

    expect(screen.getByText(/currentSlide/i)).toHaveTextContent(
      'currentSlide: 0'
    )

    userEvent.click(screen.getByText(/next/i))
    userEvent.click(screen.getByText(/next/i))

    expect(screen.getByText(/currentSlide/i)).toHaveTextContent(
      'currentSlide: 2'
    )
    userEvent.click(screen.getByText(/prev/i))

    expect(screen.getByText(/currentSlide/i)).toHaveTextContent(
      'currentSlide: 1'
    )
  })
})
