import React from 'react'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { DarkTheme, BaseProvider } from 'baseui'
import Exemples from './Exemples'
import { Block } from 'baseui/block'

const engine = new Styletron()

export default function Hello() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={DarkTheme}>
        <Block
          backgroundColor='backgroundPrimary'
          display='flex'
          padding={['8px', '16px', '32px']}>
          <Exemples />
        </Block>
      </BaseProvider>
    </StyletronProvider>
  )
}
