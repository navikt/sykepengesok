import { avbruttSoknad } from '../../src/data/mock/data/soknader-integration'

describe('Tester gjenoppretting av søknad', () => {


    before(() => {
        cy.visit('http://localhost:8080')
    })

    it('Laster startside', function() {
        cy.get('.typo-sidetittel').should('be.visible').and('have.text', 'Søknader om sykepenger')
    })

    it('Avbrutt søknad har forventa tekst', function() {
        cy.get(`#soknader-sendt article[aria-labelledby*=${avbruttSoknad.id}]`)
            .should('include.text', '20. mai – 5. juni 2020')
            .should('include.text', 'Avbrutt av deg')

    })

    it('Ved klikk så åpnes avbrutt søknad visning', function() {
        cy.get(`#soknader-sendt article[aria-labelledby*=${avbruttSoknad.id}]`).click()
        cy.url().should('include', `${avbruttSoknad.id}/1`)
    })

    it('Avbrutt tekster stemmer', function() {
        cy.contains('Avbrutt av deg')
        cy.contains('12. juni 2020')

        // Sykmelding
        cy.contains('20. mai - 5. juni 2020 • 17 dager')
    })

    it('Søknad kan gjenåpnes', function() {
        cy.contains('Gjenåpne søknad').click()
        cy.url().should('include', `${avbruttSoknad.id}/1`)
        cy.contains('Gå videre')
    })

    it('Søknad kan avbrytes ', function() {

        // Avbryt dialog vises
        cy.contains('Jeg ønsker ikke å bruke denne søknaden').click()
        // cy.get('.avbrytDialog__dialog button.lenke:contains(Angre)').click()
        // cy.get('.avbrytDialog__dialog button.lenke:contains(Angre)').should('not.be.visible')

        cy.contains('Jeg ønsker ikke å bruke denne søknaden').click()
        // cy.get('button.knapp.knapp--fare:contains(Ja, jeg er sikker)').click()
        cy.url().should('include', `${avbruttSoknad.id}/1`)
        // cy.contains('Gjenåpne søknad')
    })
})
