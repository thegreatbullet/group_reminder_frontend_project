import React from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function Form({ title, body, todo }) {
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
      >
        <TextField
          id='standard-helperText'
          label={title || 'Title'}
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
      </Box>
    </div>
  )
}
