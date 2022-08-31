import * as React from 'react'

import Box from '@mui/material/Box'

import ButtonAddGroup from './components/ButtonAddGroup'
import ButtonSubmitForm from './components/ButtonSubmitForm'
import CustomCard from '../generic_components/CardCustom'
import FormNewGroup from '../generic_components/FormCustom'

export default function MainAppDesktop() {
  return (
    <Box sx={{ p: 5 }}>
      <Box sx={{ mb: 5 }}>
        <ButtonAddGroup />
      </Box>

      <Box sx={{ display: 'flex' }}>
        <CustomCard date='Today' />
        <CustomCard date='Tomorrow' />
      </Box>

      <Box>
        <FormNewGroup />
        <ButtonSubmitForm />
      </Box>
      <button>Hello</button>
    </Box>
  )
}
