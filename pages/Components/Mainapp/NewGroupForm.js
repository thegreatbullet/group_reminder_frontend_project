import React, { useState } from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import { AccountsDataContext } from '../..'

import { useGroupContext } from '../../context/group_context'

export default function FormNewGroup() {
  const { groupName, closeNewGroupForm } = useGroupContext()
  const accountsData = React.useContext(AccountsDataContext)
  const [title, setTitle] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
  }

  function handleClick(e) {
    e.preventDefault()
    closeNewGroupForm()
  }

  return (
    <div>
      <form action='/api/form' method='post'>
        <TextField
          id='standard-helperText'
          label={'Group Name'}
          variant='standard'
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button
          variant='outlined'
          type='submit'
          onClick={handleClick}
          sx={{ width: 1 / 20 }}
        >
          {'Create'}
        </Button>
      </form>
    </div>
  )
}
