import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { List, ListItem, Typography } from '@mui/material'

import Image from 'next/image'

export default function CardBackend() {
  return (
    <Box sx={{ maxWidth: '100vw' }}>
      <Card
        variant='outlined'
        sx={{ height: '30vw', display: { xs: 'none', md: 'block' } }}
      >
        {/* Desktop */}
        <CardContent>
          <Typography variant='h6' align='center' fontSize='2.5rem'>
            Backend
          </Typography>
          <hr />
          <List>
            <ListItem sx={{ fontSize: '1.8rem', height: '4rem' }}>
              Django
              <Box sx={{ ml: 2.7, mt: 2 }}>
                <Image
                  src='/images/Django.svg'
                  height={40}
                  width={31}
                  alt='A logo of ReactJS framework'
                />
              </Box>
            </ListItem>
            <ListItem sx={{ fontSize: '1.8rem', height: '4rem' }}>
              Django REST
              <Image
                src='/images/Django_REST.png'
                height={66}
                width={147}
                alt='A logo of ReactJS framework'
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Card
        variant='outlined'
        sx={{ height: '65vw', display: { md: 'none', xs: 'block' } }}
      >
        <CardContent>
          <Typography variant='h6' align='center'>
            Backend
          </Typography>
          <hr />
          <List>
            <ListItem>
              Django
              <Image
                src='/images/Django.svg'
                height={15}
                width={30}
                alt='A logo of ReactJS framework'
              />
            </ListItem>
            <ListItem sx={{ pt: 0.2 }}>
              Django
              <Image
                src='/images/Django_REST.png'
                height={30}
                width={68}
                alt='A logo of ReactJS framework'
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  )
}
