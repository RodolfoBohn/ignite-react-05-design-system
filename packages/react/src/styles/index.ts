import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@rodolfobohn-ignite-ui/tokens'

export const { styled, css, createTheme, globalCss, keyframes } =
  createStitches({
    themeMap: {
      ...defaultThemeMap,
      height: 'space',
      width: 'space',
    },

    theme: {
      colors,
      fontSizes,
      fontWeights,
      fonts,
      lineHeights,
      radii,
      space,
    },
  })
