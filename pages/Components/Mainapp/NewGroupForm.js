import React, { useState } from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import { useGroupContext } from '../../context/group_context'

export default function NewGroupForm() {
  const { closeNewGroupForm } = useGroupContext()
  const [title, setTitle] = useState('')

  function handleClick(e) {
    e.preventDefault()
    console.log(title)
    closeNewGroupForm()
  }

  async function submitForm() {
    const response = await fetch()
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
