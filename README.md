# react-clear-carousel

[![npm minified size](https://img.shields.io/bundlephobia/min/react-clear-carousel?style=flat-square)](https://www.npmjs.com/package/react-clear-carousel)
[![package version](https://img.shields.io/npm/v/react-clear-carousel?style=flat-square)](https://www.npmjs.com/package/react-clear-carousel)
[![license](https://img.shields.io/npm/l/react-clear-carousel?style=flat-square)](https://www.npmjs.com/package/react-clear-carousel)
[![typescript](https://shields-staging.herokuapp.com/badge/types-TypeScript-%232f74c0?style=flat-square&logo=appveyor)](https://www.npmjs.com/package/react-clear-carousel)

Clear react carousel easy to integrate, he is very light and use 0 dependency.
It is a carousel that will be customizable and offers great posibilities.

Go test the demo online [react-clear-carousel demo](https://melvynx.github.io/react-clear-carousel/).

## Install

```bash
npm install --save react-clear-carousel
# of
yarn add react-clear-carousel
```

## Usage

```tsx
import React from 'react'

import {
  CarouselElement,
  CarouselWrapper,
  NextSlideAction,
  PrevSlideAction,
  SliderElementProps
} from 'react-clear-carousel'

const datas = [
  { id: 0, text: 'slider 1' },
  { id: 1, text: 'slider 2' },
  { id: 2, text: 'slider 3' }
]

const Carousel = () => {
  return (
    <div style={{ width: 400 }}>
      <CarouselWrapper
        reverse={false}
        datas={datas}
        currentSize={{ element: 116, margin: 10 }}>
        <CarouselElement>
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

const Element = ({
  className,
  data
}: SliderElementProps<{ id: number; text: string }>) => {
  return (
    <div className={className}>
      <div style={{ padding: '8px', color: 'red', border: '1px solid blue' }}>
        <p>{data?.text}</p>
      </div>
    </div>
  )
}
```

## API

#### useSimpleSlider

```ts
import { useSimpleSlider } from 'react-clear-carousel'

export type SimpleSliderConfig = {
  listLength: number // length of your datas
  size: {
    element: number // size of one element
    margin: number // margin of one element
  }
  reverse?: boolean // true and the carousel go left to right
  transition?: string // transition when carousel slide change
}

function useSimpleCarousel(
  config: SimpleSliderConfig
): {
  nextSlide: () => void // handle the next slide
  prevSlide: () => void // handle the prev slide,
  setSlide: () => void // set slide to specific id,
  classes: {
    // different class for elements
    card: string
    flexBox: string
    root: string
  }
}
```

#### CarouselWrapper

```ts
import { CarouselWrapper } from 'react-clear-carousel'

export type CarouselWrapperProps<T extends ElementId> = {
  datas: T[] // data given for different slide
  currentSize: {
    element: number // size of one element
    margin: number // margin of one element
  }
  children: React.ReactElement | React.ReactElement[]
  reverse?: boolean // true and the carousel go left to right
  transition?: string // transition when carousel slide change
}

function CarouselWrapper<T extends ElementId>(props: CarouselWrapperProps<T>)
```

#### CarouselElement

```ts
import { CarouselElement } from 'react-clear-carousel'

type HorizontalSliderProps = {
  children: React.ReactElement // element for each slide
  rootClassname?: string // classname for the root
  elementBoxClassname?: string // classname for elements flex box
}

function CarouselElement(props: HorizontalSliderProps)
```

#### NextSlideAction

```tsx
import { NextSlideAction, PrevSlideAction } from 'react-simple-slider'

const Buttons = () => (
  <div>
    <PrevSlideAction>
      <button>Prev slide</button>
    </PrevSlideAction>
    <NextSlideAction>
      <button>Next slide</button>
    </NextSlideAction>
  </div>
)
```

The children will have a `onClick` props to handle next / prev slide.

## License

MIT © [Melvynx](https://github.com/Melvynx)
