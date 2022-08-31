import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import MainAppDesktop from '../../pages/components/desktop/mainapp/MainAppDesktop'

describe('<MainAppDesktop/>', () => {
  describe('Opening form after clicking button', () => {
    async function clickingAddNewGroupButton() {
      const user = userEvent.setup()

      render(<MainAppDesktop />)

      await user.click(screen.getByTestId('buttonAddGroup'))
    }

    it('Opens form', async () => {
      await clickingAddNewGroupButton()
      expect(screen.getByTestId('formNewGroup').value).toEqual('')
    })
  })
})
