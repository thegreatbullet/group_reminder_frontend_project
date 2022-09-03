import React from 'react'

import Link from 'next/link'

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

export default function HeaderMobile(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <HideOnScroll {...props}>
          <AppBar name='header header--mobile'>
            <Container maxWidth='xl'>
              <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
                <Link href='/'>
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
                </Link>
              </Toolbar>
            </Container>
          </AppBar>
        </HideOnScroll>
      </Box>
    </React.Fragment>
  )
}
