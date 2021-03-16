import {
    soknadSomTriggerFeilStatusForOppdaterSporsmal,
    soknadSomTriggerSporsmalFinnesIkkeISoknad
} from '../../src/data/mock/data/soknader-integration'

describe('Tester feilsituasjoner ', () => {

    describe('Tester SPORSMAL_FINNES_IKKE_I_SOKNAD ', () => {

        before(() => {
            cy.visit('http://localhost:8080')
        })

        it('Laster startside og åpner søknad', function() {
            cy.get('.typo-sidetittel').should('be.visible').and('have.text', 'Søknader')
            cy.get(`#soknader-list-til-behandling article a[href*=${soknadSomTriggerSporsmalFinnesIkkeISoknad.id}]`).click()
        })


        it('Ved svar på første spørsmål får vi en SPORSMAL_FINNES_IKKE_I_SOKNAD feil fra backend som gir oss refresh mulighet', function() {
            cy.url().should('include', `${soknadSomTriggerSporsmalFinnesIkkeISoknad.id}/1`)

            cy.get('.skjemaelement__label').click({ force: true })
            cy.contains('Gå videre').click()
        })

        it('Vi havner på feilstate siden', function() {
            cy.url().should('equal', 'http://localhost:8080/')
            cy.contains('Ooops! Her har det skjedd noe rart. Du må laste inn siden på nytt for å fortsette')

            cy.contains('Last inn siden på nytt').click()
            cy.get('.typo-sidetittel').should('be.visible').and('have.text', 'Søknader')
        })
    })

    describe('Tester FEIL_STATUS_FOR_OPPDATER_SPORSMAL ', () => {

        before(() => {
            cy.visit('http://localhost:8080')
        })


        it('Vi går inn på en annen søknad som gir en annen feil', function() {
            cy.get(`#soknader-list-til-behandling article a[href*=${soknadSomTriggerFeilStatusForOppdaterSporsmal.id}]`).click()
        })


        it('Ved svar på første spørsmål får vi en FEIL_STATUS_FOR_OPPDATER_SPORSMAL feil fra backend som gir oss refresh mulighet', function() {
            cy.url().should('include', `${soknadSomTriggerFeilStatusForOppdaterSporsmal.id}/1`)

            cy.get('.skjemaelement__label').click({ force: true })
            cy.contains('Gå videre').click()
        })

        it('Vi havner på feilstate siden pga FEIL_STATUS_FOR_OPPDATER_SPORSMAL', function() {
            cy.url().should('equal', 'http://localhost:8080/')
            cy.contains('Ooops! Her har det skjedd noe rart. Du må laste inn siden på nytt for å fortsette')

            cy.contains('Last inn siden på nytt').click()
            cy.get('.typo-sidetittel').should('be.visible').and('have.text', 'Søknader')
        })
    })

})
