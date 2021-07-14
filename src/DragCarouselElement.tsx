import React from 'react'
import { useCarouselContext, useCarouselCurrentSlide } from './CarouselWrapper'
import { clsx } from './utils'

export default function DragCarouselElement({
  elementBoxClassname,
  children
}: {
  elementBoxClassname?: string
  children: React.ReactElement | React.ReactElement[]
}) {
  const flexboxRef = React.useRef<HTMLDivElement>(null)
  const isStart = React.useRef(false)

  const { classes, setSlide, currentSize, datasLength } = useCarouselContext()
  const { currentSlide } = useCarouselCurrentSlide()

  React.useEffect(() => {
    const container = flexboxRef.current
    if (!container) return

    let startX = 0
    let lastClientX = 0

    function onMouseDown(event: MouseEvent) {
      if (!flexboxRef.current) return
      flexboxRef.current.style.transition = ''
      isStart.current = true
      startX = event.clientX
    }

    function onMouseUp(event: MouseEvent) {
      if (
        !flexboxRef.current ||
        !currentSize ||
        !isStart.current ||
        !datasLength
      )
        return
      isStart.current = false
      lastClientX = event.clientX || lastClientX
      // to update value after click event
      const pixelMovedCount = event.clientX - startX

      setSlide?.((prevSlide) => {
        console.log('SALUT')
        if (!currentSize || !flexboxRef.current) return prevSlide
        console.log('çavas')

        const { margin, element } = currentSize
        const oneSlideLength = (element + margin) * 1

        const keepPositiveTrace = Math.max(
          -1,
          Math.min(1, Math.round(-pixelMovedCount))
        )

        const diffBySlide = Math.abs(pixelMovedCount / oneSlideLength)
        const fiexdCountSlide = Math.abs(
          diffBySlide - Number(diffBySlide.toFixed())
        )
        const countSlide =
          fiexdCountSlide >= 0.2
            ? Math.ceil(diffBySlide)
            : Math.floor(diffBySlide)

        console.log('ROUND', {
          countSlide,
          fiexdCountSlide,
          keepPositiveTrace,
          diffBySlide
        })

        flexboxRef.current.style.transform = ''
        flexboxRef.current.style.transition = ''
        console.log('SLIDE RESULT', {
          prevSlide,
          '+': '+',
          countSlide,
          '*': '*',
          keepPositiveTrace,
          '=': '=',
          result: prevSlide + countSlide * keepPositiveTrace
        })
        const newSlide = prevSlide + countSlide * keepPositiveTrace
        if (newSlide < 0 || newSlide >= datasLength) return prevSlide
        return newSlide
      })
    }

    function onMouseMove(event: MouseEvent) {
      if (!isStart.current || !flexboxRef.current || !currentSize) return

      lastClientX = event.clientX
      const { margin, element } = currentSize
      const diff = startX - lastClientX
      const translatePixel = (element + margin) * currentSlide + diff

      flexboxRef.current.style.transform = `translate(-${translatePixel}px)`
      flexboxRef.current.style.transition = 'none'
    }

    function onTouchEnd(event: TouchEvent) {
      event.preventDefault()

      const touches = event.touches?.length
        ? event.touches
        : event.changedTouches

      const mouseEvent = new MouseEvent('mousedown', {
        clientX: touches[0].clientX,
        clientY: touches[0].clientY
      })
      onMouseUp(mouseEvent)
    }

    function onTouchStart(event: TouchEvent) {
      event.preventDefault()
      isStart.current = true

      const mouseEvent = new MouseEvent('mousedown', {
        clientX: event.touches[0].clientX,
        clientY: event.touches[0].clientY
      })
      onMouseDown(mouseEvent)
    }

    function onTouchMove(event: TouchEvent) {
      event.preventDefault()

      const mouseEvent = new MouseEvent('mousedown', {
        clientX: event.touches[0].clientX,
        clientY: event.touches[0].clientY
      })
      onMouseMove(mouseEvent)
    }

    container.addEventListener('mousedown', onMouseDown)
    container.addEventListener('mouseleave', onMouseUp)
    container.addEventListener('mouseup', onMouseUp)
    container.addEventListener('mousemove', onMouseMove)
    container.addEventListener('touchstart', onTouchStart)
    container.addEventListener('touchend', onTouchEnd)
    container.addEventListener('touchmove', onTouchMove)

    return () => {
      container.removeEventListener('mousedown', onMouseDown)
      container.removeEventListener('mouseleave', onMouseUp)
      container.removeEventListener('mouseup', onMouseUp)
      container.removeEventListener('mousemove', onMouseMove)
      container.removeEventListener('touchstart', onTouchStart)
      container.removeEventListener('touchend', onTouchEnd)
      container.removeEventListener('touchmove', onTouchMove)
    }
  }, [currentSlide, setSlide])

  return (
    <div
      className={clsx(classes?.flexBox, elementBoxClassname)}
      style={{ position: 'relative' }}
      ref={flexboxRef}>
      {children}
    </div>
  )
}
