import Link from 'next/link'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'

export default function Header() {
  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <AppBar
          className='header header--desktop'
          position='static'
          sx={{ py: 0.1 }}
        >
          <Container maxWidth='xl'>
            <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
              <Link href='/'>
                <Typography
                  variant='h6'
                  noWrap
                  sx={{
                    fontFamily: 'inherit',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    fontSize: '1.2rem',
                  }}
                >
                  LOGO
                </Typography>
              </Link>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  )
}
