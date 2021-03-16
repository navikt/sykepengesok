import { arbeidstakersoknadMedUtenlandsoppholdSoktSykepenger } from '../../src/data/mock/data/soknader-integration'
import { oppholdUtland } from '../../src/data/mock/data/soknader-opplaering'

describe('Tester opprettelse av søknad om å beholde sykepenger utenfor EØS', () => {

    before(() => {
        cy.visit('http://localhost:8080')
    })

    it('Laster startside', function() {
        cy.get('.typo-sidetittel').should('be.visible').and('have.text', 'Søknader')
        cy.get(`#soknader-list-til-behandling article a[href*=${arbeidstakersoknadMedUtenlandsoppholdSoktSykepenger.id}]`).click()
    })


    it('Søknad ANSVARSERKLARING - steg 1', function() {
        cy.url().should('include', `${arbeidstakersoknadMedUtenlandsoppholdSoktSykepenger.id}/1`)

        // Godkjenne ANSVARSERKLARING
        cy.contains('Jeg vet at jeg kan miste retten til sykepenger hvis opplysningene jeg gir ikke er riktige eller fullstendige.')
            .click({ force: true })

        cy.contains('Gå videre').click()
    })


    it('Søknad UTLANDSOPPHOLD_SOKT_SYKEPENGER - steg 2', function() {
        cy.url().should('include', `${arbeidstakersoknadMedUtenlandsoppholdSoktSykepenger.id}/2`)

        // Test spørsmål
        cy.contains('Har du søkt om å beholde sykepengene for de dagene du var utenfor EØS?')
        cy.get('.inputPanelGruppe__inner label:first-child > input[value=JA]').click({ force: true })

        cy.get('.utland_infotekst')
            .should('include.text', 'Du må ha sendt en egen utenlandssøknad for å svare ja på dette spørsmålet. Husk at du også må fullføre denne søknaden om sykepenger.')
            .find('a').should('have.attr', 'href', '/sykepengesoknad-utland')

        cy.get('.inputPanelGruppe__inner input[value=NEI]').click({ force: true })

        cy.get('.utland_infotekst')
            .should('include.text', 'I utgangspunktet kan du bare få sykepenger mens du er i et land innenfor EØS. Du kan likevel søke NAV om å få reise ut av EØS og beholde sykepengene i en begrenset periode.')
            .find('a').should('have.attr', 'href', '/sykepengesoknad-utland')
    })

    it('Vi åpner opprettelse av søknad siden', function() {
        cy.visit('/sykepengesoknad-utland')
        cy.contains('Søknad om å beholde sykepenger utenfor EØS')
        cy.contains('Fortsett til søknaden').click()
    })

    it('Vi er på søknaden for å beholde søknader', function() {
        cy.url().should('include', `${oppholdUtland.id}/1`)
        cy.contains('Søknad om å beholde sykepenger utenfor EØS')
        cy.contains('Når skal du reise?')
        cy.contains('Gå videre')
    })
})
