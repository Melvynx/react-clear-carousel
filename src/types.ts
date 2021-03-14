export type CarouselStylesProps = {
  size: ElementSize
  currentSlide: number
  reverse?: boolean
  transition?: string
}

export type ElementSize = {
  element: number
  margin: number
}

export type SimpleSliderConfig = {
  listLength: number
  size: ElementSize
  reverse?: boolean
  transition?: string
}

export interface ElementId {
  id: number
}

export type CarouselContextProps = {
  nextSlide?: () => void
  prevSlide?: () => void
  setSlide?: (slideIndex: number) => void
  elementsDatas: ElementId[]
  classes?: { card: string; flexBox: string; root: string }
}

export type CarouselCurrentSlideContextProps = {
  currentSlide: number
}

export type CarouselWrapperProps<T extends ElementId> = {
  datas: T[]
  currentSize: ElementSize
  reverse?: boolean
  children: React.ReactElement | React.ReactElement[]
  transition?: string
  enableCurrentSlideHook?: boolean
}

export type SliderElementProps<T extends ElementId> = {
  className?: string
  data?: T
}
