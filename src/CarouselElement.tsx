import React from 'react'
import { useCarouselContext } from './CarouselWrapper'
import DragCarouselElement from './DragCarouselElement'
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
  const { elementsDatas: elementsData, classes } = useCarouselContext()

  return (
    <div className={clsx(rootClassname, classes?.root)}>
      <DragCarouselElement elementBoxClassname={elementBoxClassname}>
        {elementsData.map((data) => (
          <div key={data.id}>
            {React.cloneElement(children, {
              className: clsx(children.props.className, classes?.card),
              data
            })}
          </div>
        ))}
      </DragCarouselElement>
    </div>
  )
}
