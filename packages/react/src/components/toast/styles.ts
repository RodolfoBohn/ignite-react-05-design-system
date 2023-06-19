import { styled } from '../../styles'
import * as BaseToast from '@radix-ui/react-toast'

export const Viewport = styled(BaseToast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  margin: 0,
  marginRight: '$8',
  marginBottom: '$8',
  padding: 0,
  listStyle: 'none',
  zIndex: 99999999,
})

export const Root = styled(BaseToast.Root, {
  border: '1px solid $colors$gray600',
  borderRadius: '$sm',
  padding: '$3 $5',
  background: '$gray800',
  width: 360,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  '&>div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$1',
  },
})

export const Title = styled(BaseToast.Title, {
  fontSize: '$xl',
  color: '$white',
  fontFamily: '$default',
  lineHeight: '$base',
})

export const Description = styled(BaseToast.Description, {
  fontSize: '$sm',
  color: '$gray200',
  fontFamily: '$default',
  lineHeight: '$base',
})

export const CloseButton = styled(BaseToast.Close, {
  all: 'unset',
  cursor: 'pointer',
  lineHeight: 0,
  '&>svg': {
    color: '$gray200',
  },
})
