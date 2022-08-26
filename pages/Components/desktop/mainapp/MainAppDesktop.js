import * as React from 'react'

import Box from '@mui/material/Box'

import ButtonAdd from '../generic_components/ButtonAdd'
import CustomCard from '../generic_components/CustomCard'

export default function MainAppDesktop() {
  return (
    <Box sx={{ p: 5 }}>
      <Box sx={{ mb: 5 }}>
        <ButtonAdd />
      </Box>

      <Box sx={{ display: 'flex' }}>
        <CustomCard date='Today' />
        <CustomCard date='Tomorrow' />
      </Box>

      <Box></Box>
    </Box>
  )
}
