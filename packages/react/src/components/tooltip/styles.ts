import { styled } from '../../styles'
import * as TooltipBase from '@radix-ui/react-tooltip'

export const Content = styled(TooltipBase.Content, {
  padding: '$3 $4',
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',
})

export const Arrow = styled(TooltipBase.Arrow, {
  fill: '$gray900',
})
