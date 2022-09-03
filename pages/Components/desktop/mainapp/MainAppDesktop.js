import React from 'react'

import Box from '@mui/material/Box'

import ButtonAddGroup from './components/ButtonAddGroup'
import CardCustom from '../generic_components/CardCustom'
import FormNewGroup from './components/FormNewGroup'

export const MainAppContext = React.createContext()

export default function MainAppDesktop() {
  return (
    <>
      <Box sx={{ p: 5 }}>
        <Box sx={{ mb: 5 }}>
          <ButtonAddGroup />
        </Box>

        <Box sx={{ display: 'flex' }}>
          <CardCustom />
          <CardCustom date='Tomorrow' />
        </Box>

        <Box>
          <FormNewGroup />
        </Box>
      </Box>
    </>
  )
}
