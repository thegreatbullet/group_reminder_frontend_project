import React from 'react'

import Button from '@mui/material/Button'

export default function ButtonAdd({ buttonText, onClick, type }) {
  return (
    <Button variant='outlined' onClick={onClick} type={type}>
      {buttonText || 'Add New'}
    </Button>
  )
}
