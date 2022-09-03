import React from 'react'

import Button from '@mui/material/Button'

function hello() {
  alert('hello')
}

export default function ButtonAddGroup() {
  return (
    <>
      <div data-testid='buttonAddGroup'>
        <Button variant='outlined'>{'Add New'}</Button>
      </div>
    </>
  )
}
