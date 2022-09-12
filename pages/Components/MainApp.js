import React from 'react'
import { useEffect } from 'react'

import { Box, Button } from '@mui/material'

import NewGroupForm from './Mainapp/NewGroupForm'
import { useGroupContext } from '../context/group_context'

export default function MainApp({ groupsData }) {
  const { isNewGroupFormOpen, openNewGroupForm, initializeGroups } =
    useGroupContext()

  // Initialize the data once
  useEffect(() => {
    initializeGroups(groupsData)
  }, [groupsData])

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
