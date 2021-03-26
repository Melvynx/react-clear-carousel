import React from 'react'
import {
  ElementId,
  CarouselContextProps,
  CarouselWrapperProps,
  CarouselCurrentSlideContextProps
} from './types'
import { useSimpleCarousel } from './useSimpleCarousel'

const CarouselWrapperContext = React.createContext<CarouselContextProps>({
  elementsDatas: []
})

type CarouselCurrentSlideContextPropsNull = CarouselCurrentSlideContextProps | null

const CarouselCurrentSlideContext = React.createContext<CarouselCurrentSlideContextPropsNull>(
  null
)

export function CarouselWrapper<T extends ElementId>({
  datas,
  currentSize,
  children,
  reverse,
  transition
}: CarouselWrapperProps<T>) {
  const {
    classes,
    setSlide,
    nextSlide,
    prevSlide,
    currentSlide
  } = useSimpleCarousel({
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
    <CarouselWrapperContext.Provider value={value}>
      <CarouselCurrentSlideContext.Provider value={{ currentSlide }}>
        {children}
      </CarouselCurrentSlideContext.Provider>
    </CarouselWrapperContext.Provider>
  )
}

export const useCarouselContext = () => {
  const context = React.useContext(CarouselWrapperContext)

  if (!context)
    throw new Error(
      'useCarouselContext must be used within CarouselWrapperContext.Provider'
    )
  return context
}

export const useCarouselCurrentSlide = () => {
  const context = React.useContext(CarouselCurrentSlideContext)

  if (!context)
    throw new Error(
      'You need to set `enableCurrentSlideHook` to true on `CarouselWrapper` to use this hook.'
    )
  return context
}
