import React from 'react'

import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import CardBackend from './CardBackend'
import CardFrontend from './CardFrontend'

export default function Skill() {
  return (
    <>
      <Container maxWidth='100vw'>
        <Box
          sx={{
            mt: 13,
          }}
        >
          <Typography variant='h3' align='center'>
            Skills
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2, fontSize: '0.65rem' }}>
            <Grid item xs={6}>
              <CardFrontend />
            </Grid>

            <Grid item xs={6}>
              <CardBackend />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}
