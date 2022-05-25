describe('Home', () => {
  it('should submit a todo form on desktop', () => {
    cy.viewport('macbook-13')
    cy.visit('/')
    cy.get('input[id="name"]').type('todo 1')
    cy.get('form').submit()
    cy.get(`[aria-label="list-todo"]`).contains('todo 1')
  })

  it('should submit a todo form on mobile', () => {
    cy.viewport('iphone-6')
    cy.visit('/')
    cy.get('input[id="name"]').type('todo 1')
    cy.get('form').submit()
    cy.get(`[aria-label="list-todo"]`).contains('todo 1')
  })
})
