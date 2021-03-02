import * as React from 'react'
import { useSimpleSliderStyles } from './useSimpleSliderStyles'
import { SimpleSliderConfig } from './types'

export function useSimpleSlider({
  listLength,
  size,
  reverse,
  transition
}: SimpleSliderConfig) {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const classes = useSimpleSliderStyles({
    size,
    currentSlide,
    reverse,
    transition
  })

  const nextSlide = () =>
    setCurrentSlide((p) => (p + 1 > listLength - 1 ? 0 : p + 1))

  const prevSlide = () =>
    setCurrentSlide((p) => (p - 1 < 0 ? listLength - 1 : p - 1))

  const setSlide = (slide: number) =>
    slide >= 0 && slide <= listLength && setCurrentSlide(slide)

  return { nextSlide, prevSlide, setSlide, classes }
}
