import { useStyletron } from 'baseui'
import { Block } from 'baseui/block'
import React from 'react'
import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Checkbox } from 'baseui/checkbox'

export default function Exemple1Form({
  reverseChecked,
  setReverseChecked,
  transition,
  setTransition
}: {
  reverseChecked: boolean
  setReverseChecked: (checked: boolean) => void
  transition: string
  setTransition: (transition: string) => void
}) {
  const [css, theme] = useStyletron()

  return (
    <Block
      className={css({
        border: `1px solid ${theme.colors.backgroundTertiary}`,
        marginRight: '16px'
      })}
      padding='8px'
    >
      <h6
        className={css({
          fontSize: '20px',
          margin: '0 0 16px 0',
          lineHeight: 1,
          color: 'white'
        })}
      >
        Interactive Slider Settings
      </h6>
      <Checkbox
        checked={reverseChecked}
        onChange={(e: any) => setReverseChecked(e.target.checked)}
        labelPlacement='right'
        overrides={{
          Root: { style: () => ({ marginBottom: '16px' }) }
        }}
      >
        Enable reverse and change flexDirection
      </Checkbox>
      <FormControl
        label='transition'
        caption='the transition applied when the elements move'
      >
        <Input
          value={transition}
          onChange={(e: any) => setTransition(e.target.value)}
        />
      </FormControl>
    </Block>
  )
}
