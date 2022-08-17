import React from 'react'

import { Typography } from '@mui/material'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

export default function Skills() {
  return (
    <>
      <Container maxWidth='xl' sx={{ width: '100vw' }}>
        <Box
          sx={{
            mt: 5,
          }}
        >
          <Box>
            <Typography variant='h3' align='center'>
              Qualifications
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  )
}
