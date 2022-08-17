import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { List, ListItem, Typography } from '@mui/material'

import Image from 'next/image'

export default function CardFrontend() {
  return (
    <Box sx={{ maxWidth: '100vw' }}>
      {/* Desktop  */}
      <Card
        variant='outlined'
        sx={{ height: '30vw', display: { xs: 'none', md: 'block' } }}
      >
        <CardContent>
          <Typography variant='h6' align='center' fontSize='2.5rem'>
            Frontend
          </Typography>
          <hr />
          <List>
            <ListItem sx={{ fontSize: '1.8rem', height: '4rem' }}>
              HTML
              <Box sx={{ ml: 2.5, mb: 1 }}>
                <i className='programming lang-html'></i>
              </Box>
            </ListItem>
            <ListItem sx={{ fontSize: '1.8rem', height: '4rem' }}>
              CSS
              <Box sx={{ ml: 2.5 }}>
                <i className='programming lang-css'></i>
              </Box>
            </ListItem>
            <ListItem sx={{ fontSize: '1.8rem', height: '4rem' }}>
              JS
              <Box sx={{ ml: 2.5 }}>
                <i className='programming lang-javascript'></i>
              </Box>
            </ListItem>
            <ListItem sx={{ fontSize: '1.8rem', height: '4rem' }}>
              ReactJS
              <Box sx={{ ml: 2.5, mt: 0.7 }}>
                <Image
                  src='/images/ReactJS.svg'
                  height={56}
                  width={63}
                  alt='A logo of ReactJS framework'
                />
              </Box>
            </ListItem>
            <ListItem sx={{ pt: 0.2, fontSize: '1.8rem', height: '4rem' }}>
              NextJS
              <Box sx={{ ml: 2.5, mt: 0.9 }}>
                <Image
                  src='/images/NextJS.svg'
                  height={57}
                  width={94}
                  alt='A logo of ReactJS framework'
                />
              </Box>
            </ListItem>
          </List>
        </CardContent>
      </Card>

      {/* Mobile  */}
      <Card
        variant='outlined'
        sx={{ height: '65vw', display: { xs: 'block', md: 'none' } }}
      >
        <CardContent>
          <Typography variant='h6' align='center'>
            Frontend
          </Typography>
          <hr />
          <List>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <ListItem sx={{ fontSize: '0.65rem' }}>
                HTML
                <i className='programming lang-html'></i>
              </ListItem>
            </Box>
            <ListItem sx={{ pt: 0.2, fontSize: '0.65rem' }}>
              CSS
              <i className='programming lang-css'></i>
            </ListItem>
            <ListItem sx={{ pt: 0.2 }}>
              JS
              <i className='programming lang-javascript'></i>
            </ListItem>
            <ListItem sx={{ pt: 0.2 }}>
              ReactJS
              <Image
                src='/images/ReactJS.svg'
                height={16}
                width={18}
                alt='A logo of ReactJS framework'
              />
            </ListItem>
            <ListItem sx={{ pt: 0.2 }}>
              NextJS
              <Image
                src='/images/NextJS.svg'
                height={15}
                width={30}
                alt='A logo of ReactJS framework'
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  )
}
