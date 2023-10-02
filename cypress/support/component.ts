//Imports css for styled components
import '@/assets/main.css'


// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/vue'
import { createPinia, setActivePinia } from 'pinia'
import { useCharacterStore } from '../../src/stores/character'

setActivePinia(
  createPinia()
)

const store = useCharacterStore()

Cypress.Commands.add('getStore', () => store)

declare global {
  namespace Cypress {
    interface Chainable {
      getStore()
    }
  }
}

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

Cypress.Commands.add('mount', mount)

// Example use:
// cy.mount(MyComponent)
