import { arbeidstakerGradert } from '../../src/data/mock/data/soknader-opplaering'

describe('Tester ettersending og korrigering', () => {

    const soknad = arbeidstakerGradert

    before(() => {
        cy.visit('http://localhost:8080')
    })

    it('Laster startside', function() {
        cy.get('.typo-sidetittel').should('be.visible').and('have.text', 'Søknader')
        cy.get(`#soknader-list-til-behandling article a[href*=${soknad.id}]`).click()
    })


    it('Svar på søknad', function() {
        cy.url().should('include', `${soknad.id}/1`)
        cy.get('.skjemaelement__label').click({ force: true })
        cy.contains('Gå videre').click()


        cy.url().should('include', `${soknad.id}/2`)
        cy.get('.inputPanelGruppe__inner label:nth-child(2) > input[value=NEI]').click({ force: true })
        cy.contains('Gå videre').click()

        cy.url().should('include', `${soknad.id}/3`)
        cy.get('.inputPanelGruppe__inner label:nth-child(2) > input[value=NEI]').click({ force: true })
        cy.contains('Gå videre').click()

        cy.url().should('include', `${soknad.id}/4`)
        cy.get('.inputPanelGruppe__inner label:nth-child(2) > input[value=NEI]').click({ force: true })
        cy.contains('Gå videre').click()

        cy.url().should('include', `${soknad.id}/5`)
        cy.get('.inputPanelGruppe__inner label:nth-child(2) > input[value=NEI]').click({ force: true })
        cy.contains('Gå videre').click()

        cy.url().should('include', `${soknad.id}/6`)
        cy.get('.inputPanelGruppe__inner label:nth-child(2) > input[value=NEI]').click({ force: true })
        cy.contains('Gå videre').click()

        cy.url().should('include', `${soknad.id}/7`)
        cy.get('.inputPanelGruppe__inner label:nth-child(2) > input[value=NEI]').click({ force: true })
        cy.contains('Gå videre').click()

        cy.url().should('include', `${soknad.id}/8`)
        cy.get('.inputPanelGruppe__inner label:nth-child(2) > input[value=NEI]').click({ force: true })
        cy.contains('Gå videre').click()

        cy.url().should('include', `${soknad.id}/9`)
        cy.get('.inputPanelGruppe__inner label:nth-child(2) > input[value=NEI]').click({ force: true })
        cy.contains('Gå videre').click()

        cy.url().should('include', `${soknad.id}/10`)
        cy.get('.inputPanelGruppe__inner label:nth-child(2) > input[value=NEI]').click({ force: true })
        cy.contains('Gå videre').click()

        cy.url().should('include', `${soknad.id}/11`)
        cy.get('.inputPanelGruppe__inner label:first-child > input[value=JA]').click({ force: true })
        cy.contains('Velg første dag i permitteringen')
        cy.get('.nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('20').click()
        cy.contains('Gå videre').click()

        cy.url().should('include', `${soknad.id}/12`)
        cy.get('.inputPanelGruppe__inner label:nth-child(2) > input[value=NEI]').click({ force: true })
        cy.contains('Gå videre').click()

        cy.url().should('include', `${soknad.id}/13`)
        cy.get('.skjemaelement__label').click({ force: true })
        cy.contains('Send søknaden').click()
    })

    it('Ettersend', () => {
        cy.url().should('include', `/kvittering/${soknad.id}`)

        // Sendt til
        cy.get('.sendt-info')
            .should('contain', 'POSTEN NORGE AS, BÆRUM (Org.nr. 974654458)')
            .and('contain', 'NAV')

        // Ettersend
        cy.contains('Send til NAV').click()
        cy.contains('Vanligvis sendes søknaden bare til NAV hvis det samlede sykefraværet er 16 dager eller mer. Denne søknaden er beregnet til å være kortere. Hvis arbeidsgiveren din eller NAV har bedt deg sende den likevel, gjør du det her')
        cy.contains('Ja, send søknaden').click()
        cy.contains('Send til NAV').should('not.exist')

    })

    it('Korriger', () => {
        // Endre søknad
        cy.url().should('include', `/kvittering/${soknad.id}`)
        cy.contains('Endre søknad').click()

        // Ny søknad
        cy.url().should('not.include', `/kvittering/${soknad.id}`)
        cy.url().should('include', '/1')
        cy.get('.alertstripe--info')
            .should('contain', 'Rediger det som er feil i søknaden, og send den inn på nytt.')

        // ANSVARSERKLARING er resatt
        cy.get('.skjemaelement__input.checkboks[type=checkbox]').should('not.be.checked')
        cy.get('.skjemaelement__label').click({ force: true })
        cy.get('.skjemaelement__input.checkboks[type=checkbox]').should('be.checked')
        cy.contains('Gå videre').click()

        // Alle andre er satt
        cy.url().should('include', '/2')
        // TODO: Se på mulighet for at mock setter svar ved /korriger
    })

    it('Søknad har teaser', () => {
        cy.get('.brodsmuler__smuler .smule .lenke:contains(Søknader)').click()
        cy.get('.typo-sidetittel').should('be.visible').and('have.text', 'Søknader')

        cy.get(`#soknader-list-til-behandling article a[href*=${soknad.id}]`).should('not.exist')
        cy.get(`#soknader-sendt article a[href*=${soknad.id}]`)
            .should('contain', '1. – 24. april 2020')
            .and('contain', 'Sendt til arbeidsgiver og NAV')
    })
})
