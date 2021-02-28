import React from 'react'
import {
  ElementId,
  HorizontalSliderContextProps,
  HorizontalSliderWrapperProps
} from './types'
import { useSimpleSlider } from './useSimpleSlider'

const HorizontalSliderContext = React.createContext<HorizontalSliderContextProps>(
  {
    elementsDatas: []
  }
)

export function HorizontalSliderWrapper<T extends ElementId>({
  datas,
  currentSize,
  children
}: HorizontalSliderWrapperProps<T>) {
  const { classes, setSlide, nextSlide, prevSlide } = useSimpleSlider({
    listLength: datas.length,
    size: currentSize
  })

  return (
    <HorizontalSliderContext.Provider
      value={{ nextSlide, prevSlide, classes, setSlide, elementsDatas: datas }}
    >
      {children}
    </HorizontalSliderContext.Provider>
  )
}

export const useHorizontalSliderContext = () => {
  const context = React.useContext(HorizontalSliderContext)

  if (!context)
    throw new Error(
      'Context must be used with HorizontalSliderContext.Provider'
    )
  return context
}
