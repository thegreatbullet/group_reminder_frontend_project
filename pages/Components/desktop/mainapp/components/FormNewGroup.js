import Form from '../../generic_components/Form'

function handleSubmit(e) {
  e.preventDefault()
  alert('hello')
}

export default function FormNewGroup() {
  return (
    <>
      <Form
        title={'Group name'}
        body={'Members'}
        todo={'Todo'}
        handleSubmit={handleSubmit}
      />
    </>
  )
}
