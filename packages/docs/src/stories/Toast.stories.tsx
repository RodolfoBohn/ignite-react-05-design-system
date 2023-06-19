import type { Meta, StoryObj } from '@storybook/react'
import { Text, Toast, ToastProps } from '@rodolfobohn-ignite-ui/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {
    title: 'Title',
    description: 'Description',
    isVisible: true,
    duration: 50000,
    // onChangeVisible: () => {},
  },
  decorators: [
    (Story) => {
      return (
        <div>
          <Text color="gray800">
            O Toast será exibido no canto inferior direito da tela
          </Text>
          {Story()}
        </div>
      )
    },
  ],

  tags: ['autodocs'],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
