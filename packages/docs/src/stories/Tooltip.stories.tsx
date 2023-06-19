import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from '@rodolfobohn-ignite-ui/react'
import { PlusCircle } from 'phosphor-react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    children: <PlusCircle size={32} />,
    contentText: 'Testing tooltip component',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  tags: ['autodocs'],
} as Meta

export const Primary: StoryObj = {}
