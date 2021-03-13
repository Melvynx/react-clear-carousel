import React from 'react'
import { Block } from 'baseui/block'
import { Heading, HeadingLevel } from 'baseui/heading'
import { StyledLink } from 'baseui/link'
import InteractiveExemple from './exemples/InteractiveExemple'
import ImageExemple from './exemples/ImageExemple'
import ExempleWrapper from './exemples/ExempleWrapper'
import { useStyletron } from 'baseui'
import { Paragraph2 } from 'baseui/typography'

export default function Exemples() {
  const [css] = useStyletron()

  return (
    <Block
      margin='auto'
      display='flex'
      flexDirection='column'
      height='100%'
      width={['100%', '100%', '1000px', '1000px']}>
      <HeadingLevel>
        <Heading
          overrides={{
            Block: {
              style: () => ({ margin: '0 0 16px 0', textAlign: 'center' })
            }
          }}>
          react-clear-carousel
        </Heading>
        <Block
          marginBottom={'16px'}
          display='flex'
          flexDirection='column'
          alignItems='center'>
          <Paragraph2>Simple react carousel easy to integrate.</Paragraph2>
          <Block display='flex' alignItems='center'>
            <StyledLink href='https://github.com'>
              <img
                src='https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png'
                className={css({
                  width: '64px',
                  height: 'auto',
                  margin: '8px'
                })}
                alt='github logo'
              />
            </StyledLink>
          </Block>
        </Block>
        <ExempleWrapper
          title='Interactive example'
          description='Carousel with very little basic code. It is possible to see several cards. Try clicking on a card, it will be displayed first.'>
          <InteractiveExemple />
        </ExempleWrapper>
        <ExempleWrapper
          title='Exemple 2'
          description='Carousel only one element. It is easy to display an image, with buttons and custom elements.'>
          <>
            <ImageExemple />
          </>
        </ExempleWrapper>
      </HeadingLevel>
    </Block>
  )
}
