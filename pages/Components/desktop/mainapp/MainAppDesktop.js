import React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import CardCustom from '../generic_components/CardCustom'
import FormNewGroup from './components/FormNewGroup'
import { useState } from 'react'

export const MainAppContext = React.createContext()

export default function MainAppDesktop() {
  const [showFormNewGroup, setShowFormNewGroup] = useState(false)

  function handleButtonNewGroupClick() {
    setShowFormNewGroup(!showFormNewGroup)
  }
  return (
    <>
      <Box sx={{ p: 5 }}>
        <Box sx={{ mb: 5 }}>
          <Button
            data-testid='buttonAddGroup'
            variant='outlined'
            onClick={handleButtonNewGroupClick}
          >
            {'Add New'}
          </Button>
        </Box>
        {showFormNewGroup ? <FormNewGroup /> : <></>}

        <Box sx={{ display: 'flex' }}>
          <CardCustom />
          <CardCustom date='Tomorrow' />
        </Box>
      </Box>
    </>
  )
}
