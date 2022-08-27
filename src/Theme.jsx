import { extendTheme, theme as base } from "@chakra-ui/react"

export const theme = extendTheme({
  fonts: {
    heading: `'Roboto Slab', ${base.fonts.heading}`,
    body: `'Montserrat', sans-serif`,
  },
  styles: {
    global: {
        body: {
            bg: 'pink.50'
        }
    }
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'pink', // default is gray
      }
    }
  }
})