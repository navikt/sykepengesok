import { arbeidsledig } from '../../src/data/mock/data/soknader-opplaering'

describe('Tester arbeidsledigsøknad', () => {

    const soknad = arbeidsledig

    before(() => {
        cy.visit('http://localhost:8080')
    })

    it('Laster startside', () => {
        cy.get('.typo-sidetittel').should('be.visible').and('have.text', 'Søknader')
        cy.get(`#soknader-list-til-behandling article a[href*=${soknad.id}]`).click()
    })

    it('Søknad ANSVARSERKLARING - steg 1', () => {
        cy.url().should('include', `${soknad.id}/1`)

        // Sykmelding
        cy.contains('1. mars - 24. april 2020 • 55 dager')
        cy.contains('100 % sykmeldt')
        cy.contains('Sykmeldingen din er lang, derfor er den delt opp i flere søknader om sykepenger')
        cy.contains('Opplysninger fra sykmeldingen').click()

        // Godkjenne ANSVARSERKLARING
        cy.contains('Jeg vet at jeg kan miste retten til sykepenger hvis opplysningene jeg gir ikke er riktige eller fullstendige.')
            .click({ force: true })

        cy.contains('Gå videre').click()
    })

    it('Søknad FRISKMELDT - steg 2', () => {
        cy.url().should('include', `${soknad.id}/2`)

        // Test spørsmål
        cy.get('.inputPanelGruppe__inner label:nth-child(2) > input[value=NEI]').click({ force: true })
        cy.contains('Fra hvilken dato har du ikke lenger behov for sykmelding?')
        cy.get('.nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('20').click()

        cy.contains('Gå videre').click()
    })

    it('Søknad ANDRE_INNTEKTSKILDER - steg 3', () => {
        cy.url().should('include', `${soknad.id}/3`)

        // Test spørsmål
        cy.contains('Har du hatt inntekt mens du har vært sykmeldt i perioden 1. - 24. april 2020? Du trenger ikke oppgi penger fra NAV.')
        cy.get('.inputPanelGruppe__inner label:first-child > input[value=JA]').click({ force: true })

        // Når ingen velges så dukker bare 1 feilmelding opp
        cy.contains('Gå videre').click()
        cy.contains('Det er 1 feil i skjemaet')
        cy.contains('Du må oppgi hvilke inntektskilder du har')

        // Svarer JA
        // Underspørsmål nivå 1 - checkbox
        cy.contains('Hvilke inntektskilder har du hatt?')
        cy.get('.undersporsmal .checkboxgruppe label[for=687404]').should('include.text', 'andre arbeidsforhold')
        cy.get('.undersporsmal .checkboxgruppe .checkboks#687404').click({ force: true })
        // Underspørsmål nivå 2 - radio
        cy.get('.undersporsmal .checkboxgruppe .radioContainer .radioknapp#687405_0').click({ force: true })
        cy.contains('Du må sende egen sykepengesøknad for dette. ' +
            'Det betyr også at legen må skrive en sykmelding for hvert arbeidsforhold du er sykmeldt fra.')

        cy.contains('Gå videre').click()
    })

    it('Søknad UTDANNING - steg 4', () => {
        cy.url().should('include', `${soknad.id}/4`)

        // Test spørsmål
        cy.get('.inputPanelGruppe__inner label:first-child > input[value=JA]').click({ force: true })

        // Underspørsmål 1
        cy.contains('Når startet du på utdanningen?')
        cy.get('.nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('10').click()

        // Underspørsmål 2 - dato
        cy.contains('Er utdanningen et fulltidsstudium?')
        // Underspørsmål 2 - radio
        cy.get('.undersporsmal .skjemaelement .radioContainer .radioknapp#687421_0').click({ force: true })

        cy.contains('Gå videre').click({ force: true })
    })

    it('Søknad ARBEIDSLEDIG_UTLAND - steg 5', () => {
        cy.url().should('include', `${soknad.id}/5`)

        // Test spørsmål
        cy.contains('Var du på reise utenfor EØS mens du var sykmeldt 1. - 24. april 2020?')
        cy.get('.inputPanelGruppe__inner label:first-child > input[value=JA]').click({ force: true })

        // Underspørsmål 1
        cy.contains('Når var du utenfor EØS?')
        cy.get('#687423_0 .fom .nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('17').click()
        cy.get('#687423_0 .tom .nav-datovelger__kalenderknapp').click({ force: true })
        cy.get('.DayPicker-Day').contains('24').click()

        // Underspørsmål 2
        cy.contains('Har du søkt om å beholde sykepengene for disse dagene?')
        cy.get('.skjemaelement__label[for=687424_0]').click({ force: true })

        cy.contains('Gå videre').click()
    })


    it('Søknad PERMITTERT_NAA - steg 6', () => {
        cy.url().should('include', `${soknad.id}/6`)

        // Sjekk at sykmelding er minimert
        cy.get('.sykmelding-perioder').should('not.be.visible')

        // Test spørsmål
        cy.get('.inputPanelGruppe__inner label:first-child > input[value=JA]').click({ force: true })
        cy.contains('Velg første dag i permitteringen')
        cy.get('.nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('20').click()

        cy.contains('Gå videre').click()
    })

    it('Søknad PERMITTERT_PERIODE - steg 7', () => {
        cy.url().should('include', `${soknad.id}/7`)

        // Hovedspørsmål
        cy.get('.inputPanelGruppe__inner label:first-child > input[value=JA]').click({ force: true })

        // Periode 1
        cy.get('#687399_0 .fom .nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('10').click()
        cy.get('#687399_0 .tom .nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('13').click()

        // Periode 2 - overlapper
        cy.contains('+ Legg til ekstra periode').click()
        cy.get('#687399_1 .fom .nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('12').click()
        cy.get('#687399_1 .tom .nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('14').click()

        // Feilmelding
        cy.contains('Gå videre').click()
        cy.contains('Det er 1 feil i skjemaet')
        cy.contains('Du kan ikke legge inn perioder som overlapper med hverandre')

        // Endre periode 2
        cy.get('#687399_1 .fom .nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('14').click()
        cy.get('#687399_1 .tom .nav-datovelger__kalenderknapp').click({ force: true })
        cy.get('.DayPicker-Day').contains('16').click()
        cy.get('#687399_1_fom')
            .should('have.value', '14.11.2020')
        cy.get('#687399_1_tom')
            .should('have.value', '16.11.2020')

        // Gå frem også tilbake
        cy.contains('Gå videre').click()
        cy.url().should('include', `${soknad.id}/8`)
        cy.contains('Tilbake').click()
        cy.url().should('include', `${soknad.id}/7`)

        // Periode 1 - hentSvar og formater
        cy.get('#687399_0_fom')
            .should('have.value', '10.11.2020')
        cy.get('#687399_0_tom')
            .should('have.value', '13.11.2020')

        // Periode 3 - Må velge 2 datoer
        cy.contains('+ Legg til ekstra periode').click()
        cy.get('#687399_2 .fom .nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('10').click()
        cy.contains('Gå videre').click()

        // Feilmelding
        cy.contains('Det er 1 feil i skjemaet')
        cy.contains('Du må oppgi en til og med dato')

        // Endre periode 3
        cy.get('#687399_2 .fom .nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('20').click()
        cy.get('#687399_2 .tom .nav-datovelger__kalenderknapp').click({ force: true })
        cy.get('.DayPicker-Day').contains('22').click()
        cy.get('#687399_2_fom')
            .should('have.value', '20.11.2020')
        cy.get('#687399_2_tom')
            .should('have.value', '22.11.2020')

        cy.contains('Gå videre').click()
    })


    it('Søknad VAER_KLAR_OVER_AT - steg 8', () => {
        cy.url().should('include', `${soknad.id}/8`)
        cy.get('.skjemaelement__label').click({ force: true })
        cy.contains('Jeg har lest all informasjonen jeg har fått i søknaden og bekrefter at opplysningene jeg har gitt er korrekte.')
        cy.contains('Søknaden sendes til').should('not.exist')

        cy.contains('Send søknaden').click()
    })

    it('Søknad kvittering', () => {
        cy.url().should('include', `/kvittering/${soknad.id}`)
        // Hva skjer videre
        cy.get('.alertstripe.opplysninger.alertstripe--info')
            .should('contain', 'Hva skjer videre?')
            .and('contain', 'NAV behandler søknaden din')
            .and('contain', 'Når blir pengene utbetalt?')
    })
})
