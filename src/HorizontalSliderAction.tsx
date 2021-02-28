import React from 'react'
import { useHorizontalSliderContext } from './HorizontalSliderWrapper'
import { callAll } from './utils'

export function NextSlideAction({
  children
}: {
  children: React.ReactElement
}) {
  const { nextSlide } = useHorizontalSliderContext()
  return React.cloneElement(children, {
    onClick: callAll(nextSlide, children.props.onClick)
  })
}

export function PrevSlideAction({
  children
}: {
  children: React.ReactElement
}) {
  const { prevSlide } = useHorizontalSliderContext()
  return React.cloneElement(children, {
    onClick: callAll(prevSlide, children.props.onClick)
  })
}
