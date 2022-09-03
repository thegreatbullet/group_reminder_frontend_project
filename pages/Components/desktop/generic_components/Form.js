import React, { useState } from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import Button from '@mui/material/Button'

export default function Form({ title, body, todo, handleSubmit }) {
  const [titleValue, setTitle] = useState('')
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
          label={title || 'Title'}
          value={titleValue}
          variant='standard'
        />
        <TextField
          id='standard-helperText'
          label={body || 'Body'}
          variant='standard'
        />
        <TextField
          id='standard-helperText'
          label={todo || 'todo'}
          variant='standard'
        />
        <Button variant='outlined'>{'Add New'}</Button>
      </Box>
    </div>
  )
}
