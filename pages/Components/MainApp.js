import { Box, Button } from '@mui/material'
import React from 'react'

import NewGroupForm from './Mainapp/NewGroupForm'
import { useGroupContext } from '../context/group_context'

export default function MainApp() {
  const { isNewGroupFormOpen, openNewGroupForm } = useGroupContext()
  return (
    <>
      <Box>
        <Button variant='outlined' sx={{ m: 5 }} onClick={openNewGroupForm}>
          Add New Group
        </Button>
        {isNewGroupFormOpen ? <NewGroupForm /> : <></>}
      </Box>
    </>
  )
}
