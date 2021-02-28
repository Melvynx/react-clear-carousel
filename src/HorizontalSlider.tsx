import React from 'react'
import clsx from 'clsx'
import { useHorizontalSliderContext } from './HorizontalSliderWrapper'
import './styles.css'

type HorizontalSliderProps = {
  children: React.ReactElement
  rootClassname?: string
  elementBoxClassname?: string
}

export function HorizontalSlider({
  children,
  rootClassname,
  elementBoxClassname
}: HorizontalSliderProps) {
  const {
    elementsDatas: elementsData,
    classes,
    setSlide
  } = useHorizontalSliderContext()

  return (
    <div className={clsx(rootClassname, classes?.root)}>
      <div
        style={{ display: 'flex' }}
        className={clsx(classes?.flexBox, elementBoxClassname)}
      >
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
