import { Block } from 'baseui/block'
import React from 'react'
import {
  HorizontalSlider,
  HorizontalSliderWrapper,
  NextSlideAction,
  PrevSlideAction,
  SliderElementProps
} from 'react-simple-slider'
import { datas } from './datas'
import Exemple1Form from './Exemple1Form'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

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
          <HorizontalSliderWrapper
            transition={transition}
            reverse={reverseChecked}
            datas={datas}
            currentSize={{ element: 116, margin: 10 }}
          >
            <HorizontalSlider>
              <Element />
            </HorizontalSlider>
            <PrevSlideAction>
              <button>Prev</button>
            </PrevSlideAction>
            <NextSlideAction>
              <button>Next</button>
            </NextSlideAction>
          </HorizontalSliderWrapper>
        </Block>
      </Block>

      <SyntaxHighlighter language='tsx' style={dracula}>
        {getComponentCode(reverseChecked, transition)}
      </SyntaxHighlighter>
    </Block>
  )
}

function getComponentCode(reverse: boolean, transition: string) {
  console.log(reverse, transition)
  return `function Exemple() {
    <HorizontalSliderWrapper
      transition="${transition}"${reverse ? '\n      reverse' : ''}
      datas={datas}
      currentSize={{ element: 116, margin: 10 }}>
      <HorizontalSlider>
        <Element />
      </HorizontalSlider>
      <PrevSlideAction>
        <button>Prev</button>
      </PrevSlideAction>
      <NextSlideAction>
        <button>Next</button>
      </NextSlideAction>
    </HorizontalSliderWrapper>
  }`
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
