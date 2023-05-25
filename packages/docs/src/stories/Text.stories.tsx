import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non temporibus doloribus inventore voluptatum, iusto dignissimos aspernatur corporis cum atque perferendis totam id earum, excepturi veniam unde repudiandae sequi, omnis nesciunt?',
  },
  tags: ['autodocs'],
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
