describe('Creating a group', () => {
  it('Shows the message', () => {
    // Goes to dev website
    cy.visit('http://localhost:3000')

    // Click on the add new group button
    cy.get('[data-testid="buttonAddGroup"]').click()

    // Form pops up
    cy.get('[data-testid="formAddGroup"]').should('have.value', 'Create group')
    cy.get('[data-testid="formAddGroup"]').should('have.value', 'Group name: ')
    cy.get('[data-testid="formAddGroup"]').should(
      'have.value',
      'Members to add: '
    )
    cy.get('[data-testid="buttonSubmitAddGroup"]').should(
      'have.value',
      'submit'
    )

    // Form has required fields

    // Wayne enters information

    // Wayne exits the form

    // Notification pops up, telling him the group has been created

    // New group appears on sidebar
  })
})
