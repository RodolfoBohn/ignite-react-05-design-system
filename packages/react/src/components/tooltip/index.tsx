import React from 'react'
import * as TooltipBase from '@radix-ui/react-tooltip'
import { Arrow, Content } from './styles'

export interface Props {
  isVisible: boolean
  children: React.ReactNode
  contentText: string
  onChangeVisible: () => void
}

export const Tooltip = ({
  children,
  contentText,
  isVisible,
  onChangeVisible,
}: Props) => {
  return (
    <TooltipBase.Provider delayDuration={200}>
      <TooltipBase.Root open={isVisible} onOpenChange={onChangeVisible}>
        <TooltipBase.Trigger asChild>{children}</TooltipBase.Trigger>
        <TooltipBase.Portal>
          <Content>
            {contentText}
            <Arrow />
          </Content>
        </TooltipBase.Portal>
      </TooltipBase.Root>
    </TooltipBase.Provider>
  )
}
