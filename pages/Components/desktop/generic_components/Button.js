import React from 'react'

import Button from '@mui/material/Button'

export default function ButtonAdd({ buttonText }) {
  return <Button variant='outlined'>{buttonText || 'Add New'}</Button>
}
