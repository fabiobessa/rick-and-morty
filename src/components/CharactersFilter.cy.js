/* eslint-disable no-undef */
import CharactersFilter from './CharactersFilter.vue'

describe('select should have options', () => {
  it('renders', () => {
    cy.mount(CharactersFilter)
    cy.get('[data-cy=status-select] > option').should(($select) => {
      expect($select).to.have.length(4)
      // checks text
      expect($select.eq(0)).to.contain('Select a status')
      expect($select.eq(1)).to.contain('Alive')
      expect($select.eq(2)).to.contain('Dead')
      expect($select.eq(3)).to.contain('Unknown')
      // checks values
      expect($select.eq(0)).have.value('')
      expect($select.eq(1)).have.value('alive')
      expect($select.eq(2)).have.value('dead')
      expect($select.eq(3)).have.value('unknown')
    })
  })
})
