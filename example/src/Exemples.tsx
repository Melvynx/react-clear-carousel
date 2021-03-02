import React from 'react'
import { Block } from 'baseui/block'
import { Heading, HeadingLevel } from 'baseui/heading'
import { StyledLink } from 'baseui/link'
import Exemple1 from './exemples/Exemple1'
import Exemple2 from './exemples/Exemple2'
import Exemple3 from './exemples/Exemple3'
import Exemple4 from './exemples/Exemple4'
import Exemple5 from './exemples/Exemple5'
import ExempleWrapper from './exemples/ExempleWrapper'
import { useStyletron } from 'baseui'

export default function Exemples() {
  const [css, theme] = useStyletron()

  const paragraph = css({
    fontSize: 16,
    margin: 0,
    color: theme.colors.primary300,
    lineHeight: 2
  })

  return (
    <Block
      margin='auto'
      display='flex'
      flexDirection='column'
      height='100%'
      width={['100%', '100%', '1000px', '1000px']}
    >
      <HeadingLevel>
        <Heading
          overrides={{
            Block: { style: () => ({ margin: 0 }) }
          }}
        >
          react-simple-slider
        </Heading>
        <Block marginBottom={'16px'}>
          <p className={paragraph}>
            Simple slider made in React easily customizable.
          </p>
          <p className={paragraph}>
            Here is an example to help you. The source code for these examples
            is on github.
          </p>
          <StyledLink href='https://github.com'>
            API and more info on Github
          </StyledLink>
        </Block>
        <ExempleWrapper
          title='Exemple 1'
          description='Slider with very little basic code. It is possible to see several cards. Try clicking on a map, it will be displayed first.'
        >
          <Exemple1 />
        </ExempleWrapper>
        <ExempleWrapper
          title='Exemple 2'
          description='Slider with a card that has style. It is possible to change the size.'
        >
          <Exemple2 />
        </ExempleWrapper>
        <ExempleWrapper
          title='Exemple 3'
          description='Displays only one element. It is easy to display an image, with buttons and custom elements.'
        >
          <>
            <Exemple3 />
            <Exemple5 />
          </>
        </ExempleWrapper>
        <ExempleWrapper
          title='Exemple 4'
          description='It is easy to add styles to internal elements. Here you can see how the component works, hiding the cards that exceed.'
        >
          <Exemple4 />
        </ExempleWrapper>
      </HeadingLevel>
    </Block>
  )
}
