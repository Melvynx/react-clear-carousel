import { useStyletron } from 'baseui'
import { Block } from 'baseui/block'
import React from 'react'
import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Checkbox } from 'baseui/checkbox'

export default function InteractiveExempleForm({
  props,
  setProps
}: {
  props: {
    reverse: boolean
    transition: string
    one: boolean
  }
  setProps: Function
}) {
  const [css, theme] = useStyletron()

  return (
    <Block
      className={css({
        border: `1px solid ${theme.colors.backgroundTertiary}`,
        marginRight: '16px'
      })}
      padding='8px'
      width='100%'>
      <h6
        className={css({
          fontSize: '20px',
          margin: '0 0 16px 0',
          lineHeight: 1,
          color: 'white'
        })}>
        Interactive Carousel Settings
      </h6>
      <Checkbox
        checked={props.reverse}
        onChange={(e: any) =>
          setProps((prev: any) => ({ ...prev, reverse: e.target.checked }))
        }
        labelPlacement='right'
        overrides={{
          Root: { style: () => ({ marginBottom: '16px' }) }
        }}>
        Enable reverse
      </Checkbox>
      <Checkbox
        checked={props.one}
        onChange={(e: any) =>
          setProps((prev: any) => ({ ...prev, one: e.target.checked }))
        }
        labelPlacement='right'
        overrides={{
          Root: { style: () => ({ marginBottom: '16px' }) }
        }}>
        Display only one card
      </Checkbox>
      <FormControl
        label='transition'
        caption='Transition applied to slide change'>
        <Input
          value={props.transition}
          onChange={(e: any) => {
            const value = e.target?.value
            if (!value) return
            setProps((prev: any) => ({ ...prev, transition: value }))
          }}
          clearOnEscape
        />
      </FormControl>
    </Block>
  )
}
