import React from 'react'
import OpeningPage from './OpeningPage'

describe('<OpeningPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<OpeningPage />)
  })
})