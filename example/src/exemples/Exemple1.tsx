import { Block } from 'baseui/block'
import React from 'react'
import {
  HorizontalCarousel,
  HorizontalCarouselWrapper,
  NextSlideAction,
  PrevSlideAction,
  SliderElementProps
} from 'react-simple-slider'
import { datas } from './datas'
import Exemple1Form from './Exemple1Form'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import getInteractiveExempleCode from './interactiveExempleCode'

const Exemple1 = () => {
  const [reverseChecked, setReverseChecked] = React.useState(false)
  const [transition, setTransition] = React.useState(
    'transform .3s ease-in-out'
  )

  return (
    <Block>
      <Block width='100%' display='flex' justifyContent='center'>
        <Exemple1Form
          reverseChecked={reverseChecked}
          setReverseChecked={setReverseChecked}
          transition={transition}
          setTransition={setTransition}
        />
        <Block width={['200px', '400px', '400px']}>
          <HorizontalCarouselWrapper
            transition={transition}
            reverse={reverseChecked}
            datas={datas}
            currentSize={{ element: 116, margin: 10 }}
          >
            <HorizontalCarousel>
              <Element />
            </HorizontalCarousel>
            <PrevSlideAction>
              <button>Prev</button>
            </PrevSlideAction>
            <NextSlideAction>
              <button>Next</button>
            </NextSlideAction>
          </HorizontalCarouselWrapper>
        </Block>
      </Block>

      <SyntaxHighlighter language='tsx' style={dracula}>
        {getInteractiveExempleCode(reverseChecked, transition)}
      </SyntaxHighlighter>
    </Block>
  )
}

const Element = ({
  className,
  data
}: SliderElementProps<{ id: number; text: string; color: string }>) => {
  return (
    <div className={className}>
      <Block backgroundColor={data?.color} color='colorPrimary' padding='8px'>
        <p>{data?.text}</p>
      </Block>
    </div>
  )
}

export default Exemple1
