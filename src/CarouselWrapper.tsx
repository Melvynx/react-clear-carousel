import React from 'react'
import { ElementId, CarouselContextProps, CarouselWrapperProps } from './types'
import { useSimpleCarousel } from './useSimpleCarousel'

const CarouselWrapperContext = React.createContext<CarouselContextProps>({
  elementsDatas: []
})

export function CarouselWrapper<T extends ElementId>({
  datas,
  currentSize,
  children,
  reverse,
  transition
}: CarouselWrapperProps<T>) {
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
    <CarouselWrapperContext.Provider value={value}>
      {children}
    </CarouselWrapperContext.Provider>
  )
}

export const useCarouselContext = () => {
  const context = React.useContext(CarouselWrapperContext)

  if (!context)
    throw new Error(
      'Context must be used with HorizontalSliderContext.Provider'
    )
  return context
}
