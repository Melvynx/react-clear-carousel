import { Block } from 'baseui/block'
import React from 'react'
import {
  CarouselElement,
  CarouselWrapper,
  NextSlideAction,
  PrevSlideAction,
  SliderElementProps
} from 'react-very-light-carousel'
import { datas, DatasTypes } from './datas'
import InteractiveExempleForm from './InteractiveExempleForm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import getInteractiveExempleCode from './getInteractiveExempleCode'
import { useStyletron } from 'baseui'

const InteractiveExemple = () => {
  const [props, setProps] = React.useState({
    reverse: false,
    transition: 'transform .3s ease-in-out',
    one: false
  })
  const [css, theme] = useStyletron()

  return (
    <Block>
      <Block width='100%' display='flex' justifyContent='center'>
        <InteractiveExempleForm props={props} setProps={setProps} />
        <Block
          className={css({
            border: `1px solid ${theme.colors.backgroundTertiary}`
          })}
          minWidth={['200px', '400px', '400px']}>
          <Block width={props.one ? '116px' : ['200px', '400px', '400px']}>
            <CarouselWrapper
              transition={props.transition}
              reverse={props.reverse}
              datas={datas}
              currentSize={{ element: 116, margin: 10 }}>
              <CarouselElement>
                <Element />
              </CarouselElement>
              <PrevSlideAction>
                <button>Prev</button>
              </PrevSlideAction>
              <NextSlideAction>
                <button>Next</button>
              </NextSlideAction>
            </CarouselWrapper>
          </Block>
        </Block>
      </Block>

      <SyntaxHighlighter language='tsx' style={dracula}>
        {getInteractiveExempleCode(props)}
      </SyntaxHighlighter>
    </Block>
  )
}

const Element = ({ className, data }: SliderElementProps<DatasTypes>) => {
  return (
    <div className={className}>
      <Block backgroundColor={data?.color} color='colorPrimary' padding='8px'>
        <p>{data?.text}</p>
      </Block>
    </div>
  )
}

export default InteractiveExemple
