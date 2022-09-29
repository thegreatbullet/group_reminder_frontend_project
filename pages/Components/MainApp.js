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
  }, [])

  return (
    <>
      <Box>{isNewGroupFormOpen ? <NewGroupForm /> : <></>}</Box>
    </>
  )
}
