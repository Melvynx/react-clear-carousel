export type HorizontalSliderStylesProps = {
  size: SliderElementSize
  currentSlide: number
  reverse?: boolean
  transition?: string
}

export type SliderElementSize = {
  element: number
  margin: number
}

export type SimpleSliderConfig = {
  listLength: number
  size: SliderElementSize
  reverse?: boolean
  transition?: string
}

export interface ElementId {
  id: number
}

export type HorizontalSliderContextProps = {
  nextSlide?: () => void
  prevSlide?: () => void
  setSlide?: (slideIndex: number) => void
  elementsDatas: ElementId[]
  classes?: { card: string; flexBox: string; root: string }
}

export type HorizontalSliderWrapperProps<T> = {
  datas: T[]
  currentSize: SliderElementSize
  reverse?: boolean
  children: React.ReactElement | React.ReactElement[]
  transition?: string
}

export type SliderElementProps<T extends ElementId> = {
  className?: string
  data?: T
}
