import React from 'react'
import { Block } from 'baseui/block'
import { Heading, HeadingLevel } from 'baseui/heading'
import { StyledLink } from 'baseui/link'
import InteractiveExemple from './exemples/InteractiveExemple'
import ImageExemple from './exemples/ImageExemple'
import ExempleWrapper from './exemples/ExempleWrapper'
import { Paragraph2 } from 'baseui/typography'
import GithubLogo from './logo/GithubLogo'
import NpmLogo from './logo/NpmLogo'

export default function Exemples() {
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
          <Paragraph2>Clear carousel easy to integrate.</Paragraph2>
          <Block display='flex' alignItems='center'>
            <StyledLink
              className='big-link-margin'
              href='https://github.com/Melvynx/react-clear-carousel'>
              <GithubLogo />
            </StyledLink>
            <StyledLink
              className='big-link-margin'
              href='https://www.npmjs.com/package/react-clear-carousel'>
              <NpmLogo />
            </StyledLink>
          </Block>
        </Block>
        <ExempleWrapper
          title='Interactive example'
          description='Few codes are needed to have a nice result. Here is an interactive example to try different props.'>
          <InteractiveExemple />
        </ExempleWrapper>
        <ExempleWrapper
          title='Customization example'
          description='Customization is simple. The index of the slide displayed is easily accessible.'>
          <ImageExemple />
        </ExempleWrapper>
      </HeadingLevel>
    </Block>
  )
}
