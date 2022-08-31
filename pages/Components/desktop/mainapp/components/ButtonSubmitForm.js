import React from 'react'

import ButtonAdd from '../../generic_components/Button'

function handleButtomSubmitForm(event) {
  event.preventDefault()
  console.log('You have submitted the form')
}

export default function ButtonAddGroup({ onClick }) {
  return (
    <>
      <div data-testid='buttonSubmitForm'>
        <ButtonAdd onClick={onClick} buttonText={'Submit Form'} type='submit' />
      </div>
    </>
  )
}
