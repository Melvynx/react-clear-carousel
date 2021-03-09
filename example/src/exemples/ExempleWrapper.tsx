import { Block } from 'baseui/block'
import { Paragraph1 } from 'baseui/typography'
import React from 'react'
import { useStyletron } from 'baseui'
import { Heading } from 'baseui/heading'

type ExempleWrapperProps = {
  title: string
  description: string
  children: React.ReactElement
}

export default function ExempleWrapper({
  title,
  description,
  children
}: ExempleWrapperProps) {
  const [css, theme] = useStyletron()

  return (
    <Block
      className={css({
        borderBottom: `1px solid ${theme.colors.backgroundTertiary}`
      })}
      padding={['8px', '8px', '16px', '16px']}
      display='flex'
      flexDirection='column'>
      <Heading
        styleLevel={3}
        className={css({
          margin: '0',
          fontSize: '32px',
          color: theme.colors.white
        })}>
        {title}
      </Heading>
      <Paragraph1>{description}</Paragraph1>
      <Block display='flex' justifyContent='center'>
        {children}
      </Block>
    </Block>
  )
}
