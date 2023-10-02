/* eslint-disable no-undef */
import Pagination from '@/components/Pagination/index.vue'

describe('<Pagination />', () => {
  it('renders with default page 1', () => {
    const pagination = {
      count: 123,
      pages: 7,
      next: 'http://www.test.com?page=2',
      prev: null
    }
    cy.mount(Pagination, { props: { pagination } })
    cy.get('[data-cy=page-item-1]').should('have.class', 'active')
  })

  it('clicking should triggers event emitting page', () => {
    const onClickSpy = cy.spy().as('onClickSpy')
    const pagination = {
      count: 123,
      pages: 7,
      next: 'http://www.test.com?page=2',
      prev: ''
    }
    cy.mount(Pagination, { props: { pagination, onClick: onClickSpy } })
    cy.get('[data-cy=page-item-1]').click()
    cy.get('@onClickSpy').should('have.been', 1)
  })

  it('should rendes with a button for first page ', () => {
    const pagination = {
      count: 210,
      pages: 11,
      next: 'http://www.test.com?page=7',
      prev: 'http://www.test.com?page=5'
    }
    cy.mount(Pagination, { props: { pagination } })
    cy.get('[data-cy=page-item-first]').should('have.text', ' First ')
  })

  it('should rendes with span', () => {
    const pagination = {
      count: 210,
      pages: 11,
      next: 'http://www.test.com?page=2',
      prev: null
    }
    cy.mount(Pagination, { props: { pagination } })
    cy.get('[data-cy=page-item-span]').should('have.text', ' ... ')
  })
})
