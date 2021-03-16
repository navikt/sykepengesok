import { frilanser } from '../../src/data/mock/data/soknader-opplaering'

describe('Tester frilansersøknad', () => {
    //-----
    // Sykmelding: baf4a9ab-cc9b-42af-bba3-67cd6ca06388, frilanser - 100%
    // Søknad: a8e40578-682b-4a04-bfda-b7768af2ae13, fom: 1.4.20, tom: 24.4.20
    //-----
    const soknad = frilanser

    before(() => {
        cy.visit('http://localhost:8080')
    })

    it('Laster startside', function() {
        cy.get('.typo-sidetittel').should('be.visible').and('have.text', 'Søknader')
        cy.get(`#soknader-list-til-behandling article a[href*=${soknad.id}]`).click()
    })


    it('Søknad ANSVARSERKLARING - steg 1', function() {
        cy.url().should('include', `${soknad.id}/1`)

        // Sykmelding
        cy.contains('1. april - 24. april 2020 • 24 dager')
        cy.contains('Har ikke forsikring som gjelder de første 16 dagene av sykefraværet')
        cy.contains('Egenmelding og/eller sykmelding på papir')
        cy.contains('1. januar – 1. juni 2020')
        cy.contains('Opplysninger fra sykmeldingen').click()
        cy.contains('Har ikke forsikring som gjelder de første 16 dagene av sykefraværet').should('not.be.visible')


        // Godkjenne ANSVARSERKLARING
        cy.contains('Jeg vet at jeg kan miste retten til sykepenger hvis opplysningene jeg gir ikke er riktige eller fullstendige.')
            .click({ force: true })

        cy.contains('Gå videre').click()
    })


    it('Søknad TILBAKE_I_ARBEID - steg 2', function() {
        cy.url().should('include', `${soknad.id}/2`)

        // Test spørsmål
        cy.get('.inputPanelGruppe__inner label:first-child > input[value=JA]').click({ force: true })
        cy.contains('Når begynte du å jobbe igjen?')
        cy.get('.nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('20').click()

        cy.contains('Gå videre').click()
    })

    it('Søknad JOBBET_DU_100_PROSENT - steg 3', function() {
        cy.url().should('include', `${soknad.id}/3`)

        // Test spørsmål
        cy.get('.inputPanelGruppe__inner label:first-child > input[value=JA]').click({ force: true })

        // Underspørsmål 1
        cy.contains('Hvor mange timer i uken jobber du vanligvis når du er frisk? Varierer det, kan du oppgi gjennomsnittet.')
        cy.get('.undersporsmal .skjemaelement__input#687432').focus().type('12')

        // Underspørsmål 2
        cy.contains('Hvor mye jobbet du totalt i 1. - 24. april 2020 som frilanser?')
        // Svarer prosent
        cy.get('.undersporsmal .skjemaelement__input.radioknapp[value=prosent]').focus().click({ force: true })
        cy.get('.undersporsmal .skjemaelement__input#687435').focus().type('21')

        cy.contains('Gå videre').click()
    })

    it('Søknad ANDRE_INNTEKTSKILDER - steg 4', function() {
        cy.url().should('include', `${soknad.id}/4`)

        // Test spørsmål
        cy.get('.inputPanelGruppe__inner label:first-child > input[value=JA]').click({ force: true })

        // Svarer JA
        // Underspørsmål nivå 1 - checkbox
        cy.contains('Hvilke inntektskilder har du?')
        cy.get('.undersporsmal .checkboxgruppe label[for=687440]')
            .should('include.text', 'arbeidsforhold')
            .click({ force: true })
        // Underspørsmål nivå 2 - radio
        cy.get('.undersporsmal .checkboxgruppe .radioContainer .radioknapp#687441_0')
            .click({ force: true })
        cy.contains('Du må sende egen sykepengesøknad for dette. ' +
            'Det betyr også at legen må skrive en sykmelding for hvert arbeidsforhold du er sykmeldt fra.')

        cy.contains('Gå videre').click()
    })

    it('Søknad UTLAND - steg 5', function() {
        cy.url().should('include', `${soknad.id}/5`)

        // Test spørsmål
        cy.contains('Har du vært utenfor EØS mens du var sykmeldt 1. - 24. april 2020?')
        cy.get('.inputPanelGruppe__inner label:first-child > input[value=JA]').click({ force: true })

        // Underspørsmål 1
        cy.contains('Når var du utenfor EØS?')
        cy.get('#687448_0 .fom .nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('17').click()
        cy.get('#687448_0 .tom .nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('24').click()

        // Underspørsmål 2 - Ja
        cy.contains('Har du søkt om å beholde sykepengene for disse dagene?')
        cy.get('.undersporsmal .radioContainer .radioknapp#687449_0').click({ force: true })
        cy.get('.ekstrasporsmal')
            .should('have.text', 'Du må ha sendt en egen utenlandssøknad for å svare ja på dette spørsmålet. Husk at du også må fullføre denne søknaden om sykepenger.')
            .find('a').should('have.attr', 'href', '/sykepengesoknad-utland')

        // Underspørsmål 2 - Nei
        cy.get('.undersporsmal .radioContainer .radioknapp#687449_1').click({ force: true })
        cy.get('.ekstrasporsmal')
            .should('have.text', 'I utgangspunktet kan du bare få sykepenger mens du er i et land innenfor EØS. Du kan likevel søke NAV om å få reise ut av EØS og beholde sykepengene i en begrenset periode.')
            .find('a').should('have.attr', 'href', '/sykepengesoknad-utland')

        cy.contains('Gå videre').click()
    })

    it('Søknad ARBEID_UTENFOR_NORGE - steg 6', function() {
        cy.url().should('include', `${soknad.id}/6`)

        // Test spørsmål
        cy.get('.inputPanelGruppe__inner label:first-child > input[value=JA]').click({ force: true })
        cy.contains('Utfører du arbeid andre steder enn i Norge?')

        cy.contains('Gå videre').click()
    })

    it('Søknad UTDANNING - steg 7', function() {
        cy.url().should('include', `${soknad.id}/7`)

        // Test spørsmål
        cy.contains('Har du vært under utdanning i løpet av perioden 1. - 24. april 2020?')
        cy.get('.inputPanelGruppe__inner label:first-child > input[value=JA]').click({ force: true })

        // Underspørsmål 1
        cy.contains('Når startet du på utdanningen?')
        cy.get('.nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('10').click()

        // Underspørsmål 2 - radio
        cy.contains('Er utdanningen et fulltidsstudium?')
        cy.get('.undersporsmal .skjemaelement .radioContainer .radioknapp#687454_0').click({ force: true })

        cy.contains('Gå videre').click()
    })

    it('Søknad VAER_KLAR_OVER_AT - steg 8', function() {
        cy.url().should('include', `${soknad.id}/8`)
        cy.get('.skjemaelement__label').click({ force: true })
        cy.contains('Jeg har lest all informasjonen jeg har fått i søknaden og bekrefter at opplysningene jeg har gitt er korrekte.')

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
