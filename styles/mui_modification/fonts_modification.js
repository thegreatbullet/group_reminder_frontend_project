import { createTheme } from '@mui/material'

// Font
const theme = createTheme({
  typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),
  },
})

export { theme }
