import * as React from 'react'
import { FormGroup } from '@mui/material'

import ButtonSubmitForm from './ButtonSubmitForm'
import Form from '../../generic_components/Form'

function hello() {
  alert('hello')
}

export default function FormNewGroup() {
  return (
    <>
      <Form title={'Group name'} body={'Members'} todo={'Todo'} />
      <ButtonSubmitForm onClick={hello} />
    </>
  )
}
