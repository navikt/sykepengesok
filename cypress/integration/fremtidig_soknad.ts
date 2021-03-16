import { fremtidigSoknad } from '../../src/data/mock/data/soknader-opplaering'

describe('Tester fremtidig søknad', () => {


    before(() => {
        cy.visit('http://localhost:8080')
    })

    it('Laster startside', function() {
        cy.get('.typo-sidetittel').should('be.visible').and('have.text', 'Søknader')
    })

    it('Fremtidig søknad har forventa tekst', function() {
        cy.get(`#soknader-list-til-behandling article[aria-labelledby*=${fremtidigSoknad.id}]`)
            .should('include.text', '23. mai – 7. juni 3020')
            .and('include.text', 'Aktiveres 8. juni 3020')
    })

    it('Ved klikk så åpnes popup', function() {
        cy.get(`#soknader-list-til-behandling article[aria-labelledby*=${fremtidigSoknad.id}]`).click()
        cy.get('.ReactModal__Content')
            .should('include.text', 'Planlagt søknad')
            .get('.alertstripe > .typo-normal')
            .should('include.text', 'Du kan fylle ut denne søknaden 8. juni 3020.')
    })
})


