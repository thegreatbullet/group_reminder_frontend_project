import React, { useState } from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import Button from '@mui/material/Button'
import { AccountsDataContext } from '../../../..'

export default function Form() {
  const accountsData = React.useContext(AccountsDataContext)
  const [title, setTitle] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (title) {
      console.log(title)
      console.log(accountsData)
    }
  }

  return (
    <div>
      <Box
        component='form'
        display='flex'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          flexDirection: 'column',
        }}
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <TextField
          id='standard-helperText'
          label={'Group Name'}
          variant='standard'
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button variant='outlined' type='submit'>
          {'Create'}
        </Button>
      </Box>
    </div>
  )
}
