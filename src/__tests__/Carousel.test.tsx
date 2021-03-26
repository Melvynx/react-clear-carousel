import React from 'react'
import { render, screen } from '@testing-library/react'
import { NextSlideAction, PrevSlideAction } from '../CarouselActions'
import { CarouselWrapper } from '../CarouselWrapper'
import { CarouselElement } from '../CarouselElement'
import { CarouselWrapperProps, ElementId, SliderElementProps } from '../types'
import userEvent from '@testing-library/user-event'

export type DatasTypes = ElementId & { text: string; color: string }

export const datas: DatasTypes[] = [
  { id: 0, text: 'McNab', color: '#9b59b6' },
  { id: 1, text: 'Pumi', color: '#8e44ad' },
  { id: 2, text: 'Huntaway', color: '#273c75' },
  { id: 3, text: 'Koolie', color: '#192a56' },
  { id: 4, text: 'Kuvasz', color: '#3498db' },
  { id: 5, text: 'Mudi', color: '#2980b9' },
  { id: 6, text: 'Biard', color: '#7f8c8d' },
  { id: 7, text: 'Collies', color: '#95a5a6' },
  { id: 8, text: 'Tornjak', color: '#34495e' },
  { id: 9, text: 'Lurcher', color: '#2c3e50' },
  { id: 10, text: 'Longdog', color: '#e74c3c' },
  { id: 11, text: 'Hound', color: '#c0392b' },
  { id: 12, text: 'Lurcher', color: '#d35400' }
]

const classes = { root: 'rootClassname', element: 'elementBoxClassname' }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Carousel(props: any) {
  return (
    <div>
      <CarouselWrapper datas={datas} {...props}>
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
      </CarouselWrapper>
    </div>
  )
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

describe('Carousel', () => {
  test('Carousel has the good style by default', () => {
    const size = { element: 100, margin: 10 }
    const { container } = render(<Carousel currentSize={size} />)
    const rootContainer = container.children[0].children[0]

    expect(rootContainer).toHaveStyle('overflow: hidden')

    const flexboxContainer = rootContainer.children[0]

    expect(flexboxContainer).toHaveStyle({
      transition: 'transform .3s ease-in-out',
      transform: 'translate(-0px)',
      display: 'flex'
    })

    const elementContainer = flexboxContainer.children[0].children[0]

    expect(elementContainer).toHaveStyle({
      width: `${size.element}px`,
      marginRight: `${size.margin}px`
    })
  })

  test('transition override default transition', () => {
    const size = { element: 100, margin: 10 }
    const transition = 'transition super'
    const { container } = render(
      <Carousel transition={transition} currentSize={size} />
    )
    const rootContainer = container.children[0].children[0]
    const flexboxContainer = rootContainer.children[0]

    expect(flexboxContainer).toHaveStyle({
      transition,
      transform: 'translate(-0px)',
      display: 'flex'
    })
  })

  test('reverse props change styles', () => {
    const size = { element: 100, margin: 10 }
    const { container } = render(<Carousel reverse currentSize={size} />)
    const rootContainer = container.children[0].children[0]
    const flexboxContainer = rootContainer.children[0]

    expect(flexboxContainer).toHaveStyle({
      transition: 'transform .3s ease-in-out',
      transform: 'translate(+0px)',
      display: 'flex'
    })

    const elementContainer = flexboxContainer.children[0].children[0]

    expect(elementContainer).toHaveStyle({
      width: `${size.element}px`,
      marginLeft: `${size.margin}px`
    })
  })

  test('onClick update translate props', () => {
    const size = { element: 100, margin: 10 }
    const { container } = render(<Carousel currentSize={size} />)
    userEvent.click(screen.getByText(/next/i))
    const rootContainer = container.children[0].children[0]
    const flexboxContainer = rootContainer.children[0]

    expect(flexboxContainer).toHaveStyle({
      transition: 'transform .3s ease-in-out',
      transform: `translate(-${size.element + size.margin * 1}px)`,
      display: 'flex'
    })
  })

  test('prev on first slide will go to last', () => {
    const size = { element: 100, margin: 10 }
    const { container } = render(<Carousel currentSize={size} />)
    userEvent.click(screen.getByText(/prev/i))
    const rootContainer = container.children[0].children[0]
    const flexboxContainer = rootContainer.children[0]

    expect(flexboxContainer).toHaveStyle({
      transition: 'transform .3s ease-in-out',
      transform: `translate(-${
        (size.element + size.margin) * (datas.length - 1)
      }px)`,
      display: 'flex'
    })
  })

  test('classes added is correctly added', () => {
    const size = { element: 100, margin: 10 }
    const { container } = render(<Carousel currentSize={size} />)

    const rootContainer = container.children[0].children[0]
    expect(rootContainer).toHaveClass(classes.root)

    const flexboxContainer = rootContainer.children[0]

    expect(flexboxContainer).toHaveClass(classes.element)
  })
})
