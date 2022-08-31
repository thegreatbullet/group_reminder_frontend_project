import React from 'react'

import ButtonAdd from '../../generic_components/Button'

function handleButtomSubmitForm(event) {
  event.preventDefault()
  console.log('You have submitted the form')
}

export default function ButtonAddGroup() {
  return (
    <>
      <div data-testid='buttonSubmitForm'>
        <ButtonAdd
          onClick={handleButtomSubmitForm}
          buttonText={'Submit Form'}
        />
      </div>
    </>
  )
}
