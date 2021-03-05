# react-simple-slider

> Simple react slider easy to integrate

It is a simple slider that will be customizable and offers great posibilities.

## Install

```bash
npm install --save react-simple-slider
# or
yarn add react-simple-slider
```

## Usage

```tsx
import React from 'react'

import {
  HorizontalSlider,
  HorizontalSliderWrapper,
  NextSlideAction,
  PrevSlideAction,
  SliderElementProps
} from 'react-simple-slider'

const datas = [
  { id: 0, text: 'slider 1' },
  { id: 1, text: 'slider 2' },
  { id: 2, text: 'slider 3' }
]

const Slider = () => {
  return (
    <div style={{ width: 200 }}>
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
        <p>id: {data?.text}</p>
      </div>
    </div>
  )
}
```

## API

#### useSimpleSlider

```ts
import { useSimpleSlider } from 'react-simple-slider'
```

- SimpleSliderConfig: {
  listLength: `number` Size of all elements
  size: {
  element: `number` Width of one element
  margin: `number` Margin of one element
  }
  }

#### HorizontalSliderWrapper

```ts
import { HorizontalSliderWrapper } from 'react-simple-slider'
```

- datas: Array of datas for your elements. Must have an `id`.
- currentSize: `number` {
  element: `number` Width of one element
  margin: `number` Margin of one element
  }
- children: `React.ReactElement` Any children.

#### HorizontalSlider

```ts
import { HorizontalSlider } from 'react-simple-slider'
```

- children: `React.ReactElement` Element need to take 2 props : `className`: `string` and `data`: Your data type.
- rootClassname: `string` Classes for the root element
- elementBoxClassname?: `string` Classes for flex div who flex the elements

#### NextSlideAction

```tsx
import { NextSlideAction, PrevSlideAction } from 'react-simple-slider'

const Buttons = () => (
  <div>
    <PrevSlideAction>
      <button>Prev</button>
    </PrevSlideAction>
    <NextSlideAction>
      <button>Next</button>
    </NextSlideAction>
  </div>
)
```

- children: `React.ReactElement` `onClick` props will be injected into your children.

## License

MIT © [Melvynx](https://github.com/Melvynx)
