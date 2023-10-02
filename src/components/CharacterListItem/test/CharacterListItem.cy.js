/* eslint-disable no-undef */
import CharacterListItem from '@/components/CharacterListItem/index.vue'

describe('should mount with character info', () => {
  it('renders', () => {
    const character = {
      id: 6,
      name: 'Abadango Cluster Princess',
      status: 'Alive',
      species: 'Alien',
      type: '',
      gender: 'Female',
      origin: {
          name: 'Abadango',
          url: 'https://rickandmortyapi.com/api/location/2'
      },
      location: {
          name: 'Abadango',
          url: 'https://rickandmortyapi.com/api/location/2'
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
      episode: [
          'https://rickandmortyapi.com/api/episode/27'
      ],
      url: 'https://rickandmortyapi.com/api/character/6',
      created: '2017-11-04T19:50:28.250Z'
  }
    cy.mount(CharacterListItem, { props: { character }})
    cy.get('[data-cy=character-image]').should('be.visible').and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0)
    })
    cy.get('[data-cy=character-name]').should('have.text', 'Abadango Cluster Princess')
    cy.get('[data-cy=character-species-status]').should('have.text', 'Alien - Alive')
    cy.get('[data-cy=character-origin]').should('have.text', 'Abadango')
    cy.get('[data-cy=character-location]').should('have.text', 'Abadango')
  })
})
