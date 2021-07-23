import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = {
  body: "\"Kumbh Sans\", Inter, \"M PLUS 1P\", system-ui, sans-serif",
  heading: "Kumbh Sans, Georgia, serif",
  mono: "Menlo, monospace",
}

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
  xxl: '100em',
})

const theme = extendTheme({
  colors: {
    black: '#16161D',
  },
  fonts,
  breakpoints,
  initialColorMode: "dark",
  useSystemColorMode: true,
})

export default theme
