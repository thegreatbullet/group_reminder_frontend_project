import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import List from '../generic_components/List'
import ButtonAdd from '../generic_components/ButtonAdd'
import { Toolbar } from '@mui/material'

const card = (
  <React.Fragment>
    <Card variant='outlined'>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Todo: Today
        </Typography>
        <List />
      </CardContent>
    </Card>
  </React.Fragment>
)

export default function OutlinedCard() {
  return (
    <>
      <ButtonAdd />
      <Box>{card}</Box>
    </>
  )
}
