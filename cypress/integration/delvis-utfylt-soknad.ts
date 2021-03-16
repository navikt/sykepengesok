import { delvisUtfylltArbeidsledig } from '../../src/data/mock/data/soknader-integration'

describe('Tester delvis utfylt søknad', () => {

    const soknad = delvisUtfylltArbeidsledig

    before(() => {
        cy.visit('http://localhost:8080')
    })

    it('Laster startside', () => {
        cy.get('.typo-sidetittel').should('be.visible').and('have.text', 'Søknader')
        cy.get(`#soknader-list-til-behandling article a[href*=${soknad.id}]`).click()
    })

    it('Søknad ANSVARSERKLARING - steg 1', () => {
        cy.url().should('include', `${soknad.id}/1`)
        cy.contains('Gå videre').click()
    })


    it('Søknad ARBEID_UTENFOR_NORGE - Gå videre direkte - steg 2', () => {
        cy.url().should('include', `${soknad.id}/2`)
        cy.get('.inputPanel--checked').contains('Nei')

        cy.contains('Gå videre').click()
    })

    it('Søknad PERMITTERT_PERIODE er utfylt med ja og periode - steg 2', () => {
        cy.url().should('include', `${soknad.id}/3`)
        cy.get('.inputPanel--checked').contains('Ja')
        cy.get('.skjemaelement__label').contains('Fra og med')
        cy.get('.skjemaelement__label').contains('Til og med')
    })
})
