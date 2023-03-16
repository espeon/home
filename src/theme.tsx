import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = {
  body: "\"Plus Jakarta Sans\", Inter, system-ui, sans-serif",
  heading: "\"Kumbh Sans\", \"Red Hat Mono\", Georgia, serif",
  title: "\"Libre Baskerville\", \"Red Hat Mono\", Georgia, serif",
  mono: "Menlo, \"Red Hat Mono\"",
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
