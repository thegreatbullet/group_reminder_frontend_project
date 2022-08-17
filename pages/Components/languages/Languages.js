import * as React from 'react'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import { Typography, Box, Container } from '@mui/material'

export default function Languages() {
  return (
    <Container maxWidth='xl' sx='100vw'>
      <Stack spacing={1} sx={{ mt: 9 }}>
        {/* Desktop */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Typography variant='h3' align='center'>
            Languages
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Box sx={{ display: 'flex', mt: 4 }}>
              <Typography fontSize='1.75rem' className='mt-2'>
                English
              </Typography>
              <Rating
                name='half-rating-read'
                defaultValue={2.5}
                precision={0.5}
                readOnly
                sx={{ ml: 3.6, mt: 1, fontSize: '1.75rem' }}
              />
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Typography fontSize='1.75rem' className='mt-2'>
                Chinese
              </Typography>
              <Rating
                name='half-rating-read'
                defaultValue={2.5}
                precision={0.5}
                readOnly
                sx={{
                  ml: 2,
                  mt: 1.1,
                  fontSize: '1.75rem',
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* Mobile  */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Typography variant='h3' align='center'>
            Languages
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Box sx={{ display: 'flex', mt: 4 }}>
              <Typography fontSize='0.79rem' className='mt-2'>
                English
              </Typography>
              <Rating
                name='half-rating-read'
                defaultValue={2.5}
                precision={0.5}
                readOnly
                sx={{ ml: 2.6 }}
              />
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Typography fontSize='0.79rem' className='mt-2'>
                Chinese
              </Typography>
              <Rating
                name='half-rating-read'
                defaultValue={2.5}
                precision={0.5}
                readOnly
                sx={{
                  ml: 2,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Stack>
    </Container>
  )
}
