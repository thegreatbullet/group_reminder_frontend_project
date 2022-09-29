import React from 'react'

import { useGroupContext } from '../../context/group_context'

import Button from '@mui/material/Button'

export default function AddGroup() {
  const { isNewGroupFormOpen, openNewGroupForm, closeNewGroupForm } =
    useGroupContext()
  return (
    <>
      {!isNewGroupFormOpen ? (
        // Open Form
        <Button
          style={{
            borderRadius: 30,
            padding: '0.5rem 1.4rem',
          }}
          variant='outlined'
          onClick={openNewGroupForm}
        >
          Add new Group
        </Button>
      ) : (
        // Close Form
        <Button
          style={{
            borderRadius: 30,
            padding: '0.5rem 1.4rem',
          }}
          variant='outlined'
          onClick={closeNewGroupForm}
        >
          Add new Group
        </Button>
      )}
    </>
  )
}
