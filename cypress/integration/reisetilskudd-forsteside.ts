import { nyttReisetilskudd } from '../../src/data/mock/data/reisetilskudd'

describe('Teste førsteside i reisetilskuddsøknaden', () => {


    before(() => {
        cy.visit('http://localhost:8080')
    })

    describe('Landingside og listevisning', () => {
        it('Laster startside', () => {
            cy.get('.typo-sidetittel').should('be.visible').and('have.text', 'Søknader')
        })

        it('Søknad har forventa tekst', () => {
            cy.get(`article[aria-labelledby*=${nyttReisetilskudd.id}]`)
                .should('include.text', 'Søknad om reisetilskudd')

        })

        it('Ved klikk så åpnes søknaden om reisetilskudd', () => {
            cy.get(`article[aria-labelledby*=${nyttReisetilskudd.id}]`).click()
            cy.url().should('equal', `http://localhost:8080/soknader/${nyttReisetilskudd.id}/1`)
        })

    })

    describe('Vi stoler på deg', () => {
        it('URL er riktig', () => {
            cy.url().should('include', `/soknader/${nyttReisetilskudd.id}/1`)
        })

        it('Laster inn hvem kan få reisetilskudd', () => {
            cy.get('.hvem-kan-faa').should('be.visible')
            cy.get('.hvem-kan-faa .ekspanderbartPanel__tittel')
                .should('be.visible')
                .and('have.text', 'Hvem kan få reisetilskudd?')
                .click()

            cy.get('li').contains('Du er yrkesaktiv.')
            cy.get('li').contains('Du trenger midlertidig transport til og fra arbeidsstedet på grunn av helseplager.')
            cy.get('li').contains('Du har i utgangspunktet rett til sykepenger. Reisetilskuddet kommer da i stedet for sykepengene.')

            cy.get('.typo-element').contains('Hvor mye kan du få?')
            cy.get('.typo-normal').contains('Du kan maksimalt få det samme som du ville fått i sykepenger. Det vil si at det daglige reisetilskuddet ikke kan være høyere enn det du ellers ville fått i sykepenger den dagen. Dagsatsen er årslønnen din delt på 260. Årslønnen blir redusert til 6G (grunnbeløpet i folketrygden) hvis du tjener mer enn det.')

            cy.get('.typo-element').contains('Husk å søke før fristen')
            cy.get('.typo-normal').contains('Fristen for å søke om refusjon er 3 måneder etter at sykmeldingsperioden er over.')
        })

        it('Laster inn veilederpanel spar-tid', () => {
            cy.get('.spar-tid').should('be.visible')
            cy.get('.spar-tid .nav-veilederpanel__content h2').should('be.visible').and('have.text', 'Spar tid med mobilen')
            cy.get('.spar-tid .nav-veilederpanel__content').contains('Fyller du ut fra telefonen, kan du ta bilde av kvitteringene og bruke dem direkte i søknaden.')
        })
    })
})
