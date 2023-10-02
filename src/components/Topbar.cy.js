/* eslint-disable no-undef */
import Topbar from './Topbar.vue'

describe('<Topbar />', () => {
  it('renders', () => {
    cy.mount(Topbar)
  })

  it('topbar should have characters option', () => {
    cy.mount(Topbar)
    cy.get('[data-cy=characters]').should('have.text', 'Characters')
  })
})
