import React from 'react'
import * as BaseToast from '@radix-ui/react-toast'
import { CloseButton, Description, Root, Title, Viewport } from './styles'
import { X } from 'phosphor-react'

export interface ToastProps {
  title: string
  description: string
  isVisible: boolean
  duration?: number
  onChangeVisible: () => void
}

export const Toast = ({
  title,
  description,
  isVisible,
  duration,
  onChangeVisible,
}: ToastProps) => {
  return (
    <BaseToast.Provider duration={duration}>
      <Root open={isVisible} onOpenChange={onChangeVisible}>
        {/* <Root open={isVisible}> */}
        {/* <Root> */}
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
        <CloseButton>
          <X size={20} />
        </CloseButton>
      </Root>

      <Viewport />
    </BaseToast.Provider>
  )
}
