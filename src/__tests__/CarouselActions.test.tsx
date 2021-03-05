import React from 'react'
import { render, screen } from '@testing-library/react'
import { NextSlideAction, PrevSlideAction } from '../CarouselActions'
import userEvent from '@testing-library/user-event'

describe('CarouselActions', () => {
  test('carousel actions call onclick on click children', () => {
    const text = 'hello'
    const onClick = jest.fn()
    render(
      <PrevSlideAction>
        <button onClick={onClick}>{text}</button>
      </PrevSlideAction>
    )
    userEvent.click(screen.getByText(text))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('carousel display the children', () => {
    const text = 'hello'
    render(
      <PrevSlideAction>
        <button>{text}</button>
      </PrevSlideAction>
    )
  })

  test('carousel actions call onclick on click children', () => {
    const text = 'hello'
    const onClick = jest.fn()
    render(
      <NextSlideAction>
        <button onClick={onClick}>{text}</button>
      </NextSlideAction>
    )
    userEvent.click(screen.getByText(text))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('carousel display the children', () => {
    const text = 'hello'
    render(
      <NextSlideAction>
        <button>{text}</button>
      </NextSlideAction>
    )
  })
})
