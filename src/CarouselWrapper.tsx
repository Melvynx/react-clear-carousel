import React from 'react'
import {
  ElementId,
  HorizontalSliderContextProps,
  HorizontalSliderWrapperProps
} from './types'
import { useSimpleCarousel } from './useSimpleCarousel'

const HorizontalCarouselWrapperContext = React.createContext<HorizontalSliderContextProps>(
  {
    elementsDatas: []
  }
)

export function CarouselWrapper<T extends ElementId>({
  datas,
  currentSize,
  children,
  reverse,
  transition
}: HorizontalSliderWrapperProps<T>) {
  const { classes, setSlide, nextSlide, prevSlide } = useSimpleCarousel({
    listLength: datas.length,
    size: currentSize,
    reverse,
    transition
  })

  const value = React.useMemo(
    () => ({ nextSlide, prevSlide, classes, setSlide, elementsDatas: datas }),
    []
  )

  return (
    <HorizontalCarouselWrapperContext.Provider value={value}>
      {children}
    </HorizontalCarouselWrapperContext.Provider>
  )
}

export const useCarouselContext = () => {
  const context = React.useContext(HorizontalCarouselWrapperContext)

  if (!context)
    throw new Error(
      'Context must be used with HorizontalSliderContext.Provider'
    )
  return context
}
