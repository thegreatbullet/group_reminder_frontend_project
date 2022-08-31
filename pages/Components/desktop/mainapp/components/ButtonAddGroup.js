import React from 'react'

import ButtonAdd from '../../generic_components/Button'

export default function ButtonAddGroup() {
  return (
    <>
      <div data-testid='buttonAddGroup'>
        <ButtonAdd buttonText={'Add new group'} />
      </div>
    </>
  )
}
