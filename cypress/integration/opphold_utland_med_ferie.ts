import { soknaderOpplaering as soknader } from '../../src/data/mock/data/soknader-opplaering'
import { RSSoknad } from '../../src/types/rs-types/rs-soknad'

describe('Tester søknad om å beholde sykepenger utenfor EØS', () => {

    const soknad = soknader.find((sok: RSSoknad) => sok.id === 'b9d67b0d-b1f8-44a5-bcbd-6010b60b90ce')!

    before(() => {
        cy.visit('http://localhost:8080')
    })

    it('Laster startside', function() {
        cy.get('.typo-sidetittel').should('be.visible').and('have.text', 'Søknader')
        cy.get(`#soknader-list-til-behandling article a[href*=${soknad.id}]`).should('include.text', 'Søknad om å beholde sykepenger utenfor EØS')
        cy.get(`#soknader-list-til-behandling article a[href*=${soknad.id}]`).click()
    })


    it('PERIODEUTLAND - steg 1', function() {
        cy.url().should('include', `${soknad.id}/1`)


        cy.contains('Opplysninger fra sykmeldingen').should('not.exist')
        cy.contains('Når skal du reise?')

        cy.get('#1_0 .fom .nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('17').click()
        cy.get('#1_0 .tom .nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('24').click()


        cy.contains('Gå videre').click()
    })

    it('LAND - steg 2', function() {
        cy.url().should('include', `${soknad.id}/2`)


        cy.contains('Hvilket land skal du reise til?')
        cy.get('.skjemaelement__input').type('Fransk')
        cy.contains('Fransk Polynesia')
        cy.contains('Søre franske territorier').click({ force: true })

        cy.contains('Gå videre').click()
    })

    it('Vi svarer Ja på arbeidsgiverspørsmålet', function() {
        cy.url().should('include', `${soknad.id}/3`)
        cy.contains('Har du arbeidsgiver?')
        cy.get('#3_0').click({ force: true })
        cy.contains('Er du 100 % sykmeldt?')
    })

    it('Vi svarer Nei på 100% sykmeldt spørsmålet og får en bjørn', function() {
        cy.get('#4_1').click({ force: true })
        cy.contains('Det er ikke mulig å ta ut ferie de dagene eller timene du skulle arbeidet og få utbetalt sykepenger for de andre. Men har du spart opp fleksitid, kan du avspasere dagene eller timene du skulle jobbet og få sykepenger for de andre dagene. Eksempel: Er du 50 prosent sykmeldt og ønsker å reise til utlandet noen dager, kan du avspasere halvparten av dagene. Har du ikke nok fleksitid å avspasere, må du ta ut hele feriedager.')
    })

    it('Sykmeldt sporsmalet forsvinner når vi klikker nei', function() {
        cy.get('#3_1').click({ force: true })
        cy.contains('Er du 100 % sykmeldt?').should('not.exist')
        cy.get('#3_0').click({ force: true })
    })

    it('Gå videre forsvinner og bjørn vises når man har avtalt ferie', function() {
        cy.contains('Har du avtalt med arbeidsgiveren din at du skal ha ferie i hele perioden?')
        cy.contains('Gå videre')
        cy.contains('Avbryt søknad').should('not.exist')


        cy.get('#5_0').click({ force: true })
        cy.contains('Du får ikke sykepenger mens du har ferie. Det betyr at du ikke trenger å sende denne søknaden. God tur!')

        cy.contains('Gå videre').should('not.exist')
    })

    it('Vi avbryter søknaden og havner på forsiden, søknaden er borte', function() {
        cy.contains('Avbryt søknad').click()

        cy.url().should('equal', 'http://localhost:8080/')

        cy.get('.typo-sidetittel').should('be.visible').and('have.text', 'Søknader')
        cy.get(`#soknader-list-til-behandling article a[href*=${soknad.id}]`).should('not.exist')
    })
})
