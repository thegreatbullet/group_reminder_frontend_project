import React from 'react'

import ButtonAdd from '../../generic_components/Button'

function hello() {
  alert('hello')
}

export default function ButtonAddGroup() {
  return (
    <>
      <div data-testid='buttonAddGroup'>
        <ButtonAdd buttonText={'Add new group'} onClick={hello} />
      </div>
    </>
  )
}
