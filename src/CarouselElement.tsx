import React from 'react'
import { useCarouselContext } from './CarouselWrapper'
import './styles.css'
import { clsx } from './utils'

type HorizontalSliderProps = {
  children: React.ReactElement
  rootClassname?: string
  elementBoxClassname?: string
}

export function CarouselElement({
  children,
  rootClassname,
  elementBoxClassname
}: HorizontalSliderProps) {
  const {
    elementsDatas: elementsData,
    classes,
    setSlide
  } = useCarouselContext()

  return (
    <div className={clsx(rootClassname, classes?.root)}>
      <div className={clsx(classes?.flexBox, elementBoxClassname)}>
        {elementsData.map((data, i) => (
          <div key={data.id} onClick={() => setSlide?.(i)}>
            {React.cloneElement(children, {
              className: clsx(children.props.className, classes?.card),
              data
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
