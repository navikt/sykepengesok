import { fremtidigSøknad } from '../../src/data/mock/data/soknader-integration'

describe('Tester fremtidig søknad', () => {


    before(() => {
        cy.visit('http://localhost:8080')
    })

    it('Laster startside', function() {
        cy.get('.soknadtopp__tittel').should('be.visible').and('have.text', 'Søknad om sykepenger')
    })

    it('Fremtidig søknad har forventa tekst', function() {
        cy.get('.soknadtopp__tittel').should('be.visible').and('have.text', 'Søknad om sykepenger')
        cy.get(`#soknader-planlagt article[aria-labelledby*=${fremtidigSøknad.id}]`)
            .should('include.text', 'Gjelder perioden 23. mai – 7. juni 2020')
            .should('include.text', 'Kan fylles ut fra 08.06.2020')
            .should('include.text', 'Planlagt')

    })

    it('Ved klikk så åpnes popup', function() {
        cy.get(`#soknader-planlagt article[aria-labelledby*=${fremtidigSøknad.id}]`).click()
        cy.get('.ReactModal__Content')
            .should('include.text', 'Planlagt søknad')
            .get('.alertstripe > .typo-normal')
            .should('include.text', 'Du kan fylle ut denne søknaden 8. juni 2020.')
    })
})

