import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react/src/index'

export default {
  component: Button,
  title: 'Buton',

  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Small = {} as StoryObj<ButtonProps>

export const Large = {
  args: {
    size: 'large',
  },
} as StoryObj<ButtonProps>
