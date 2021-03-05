import React from 'react'
import { useCarouselContext } from './CarouselWrapper'
import { callAll } from './utils'

export function NextSlideAction({
  children
}: {
  children: React.ReactElement
}) {
  const { nextSlide } = useCarouselContext()
  return React.cloneElement(children, {
    onClick: callAll(nextSlide, children.props.onClick)
  })
}

export function PrevSlideAction({
  children
}: {
  children: React.ReactElement
}) {
  const { prevSlide } = useCarouselContext()
  return React.cloneElement(children, {
    onClick: callAll(prevSlide, children.props.onClick)
  })
}
