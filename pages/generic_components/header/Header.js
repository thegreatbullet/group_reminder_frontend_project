import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Container from '@mui/material/Container'
import Slide from '@mui/material/Slide'

import { Box } from '@mui/material'

function HideOnScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default function Header(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* Mobile Display */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <HideOnScroll
          {...props}
          sx={{
            display: {
              xs: 'block',
              md: 'none',
            },
          }}
        >
          <AppBar className='header header--mobile'>
            <Container maxWidth='xl'>
              <Toolbar disableGutters>
                {/* Logo Desktop */}
                <Typography
                  variant='h6'
                  noWrap
                  sx={{
                    mr: 2,
                    display: {
                      xs: 'none',
                      md: 'block',
                    },
                    fontFamily: 'inherit',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    fontSize: '2rem',
                    py: 2,
                  }}
                >
                  LOGO
                </Typography>
                {/* Logo (Mobile) */}
                <Typography
                  variant='h5'
                  href=''
                  sx={{
                    mr: 2,
                    display: { md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'lato',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  LOGO
                </Typography>
              </Toolbar>
            </Container>
          </AppBar>
        </HideOnScroll>
      </Box>

      {/* Hide on mobile */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <AppBar className='header header--desktop'>
          <Container maxWidth='xl'>
            <Toolbar disableGutters>
              {/* Logo Desktop */}
              <Typography
                variant='h6'
                noWrap
                sx={{
                  mr: 2,
                  display: {
                    xs: 'none',
                    md: 'block',
                  },
                  fontFamily: 'inherit',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  fontSize: '2rem',
                  py: 2,
                }}
              >
                LOGO
              </Typography>
              {/* Logo (Mobile) */}
              <Typography
                variant='h5'
                href=''
                sx={{
                  mr: 2,
                  display: { md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'inherit',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <Toolbar />
    </React.Fragment>
  )
}
