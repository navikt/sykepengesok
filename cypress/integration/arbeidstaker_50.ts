import { arbeidstakerGradert } from '../../src/data/mock/data/soknader-opplaering'

describe('Tester arbeidstakersøknad - gradert 50%', () => {

    const soknad = arbeidstakerGradert

    before(() => {
        cy.visit('http://localhost:8080')
    })

    it('Laster startside', function() {
        cy.get('.typo-sidetittel').should('be.visible').and('have.text', 'Søknader')
        cy.get(`#soknader-list-til-behandling article a[href*=${soknad.id}]`).click()
    })


    it('Søknad ANSVARSERKLARING', function() {
        cy.url().should('include', `${soknad.id}/1`)

        // Sykmelding
        cy.contains('1. april - 24. april 2020 • 24 dager')
        cy.contains('POSTEN NORGE AS, BÆRUM')
        cy.contains('50 % sykmeldt')
        cy.contains('Opplysninger fra sykmeldingen').click()

        // Godkjenne ANSVARSERKLARING
        cy.contains('Jeg vet at jeg kan miste retten til sykepenger hvis opplysningene jeg gir ikke er riktige eller fullstendige.')
            .click({ force: true })

        cy.contains('Gå videre').click()
    })


    it('Tilbake til ANSVARSERKLARING og frem igjen', function() {
        cy.url().should('include', `${soknad.id}/2`)
        cy.contains('Tilbake').click()
        cy.url().should('include', `${soknad.id}/1`)
        cy.contains('Gå videre').click()
    })

    it('Søknad EGENMELDINGER', function() {
        cy.url().should('include', `${soknad.id}/2`)

        // Test spørsmål
        cy.get('.inputPanelGruppe__inner label:first-child > input[value=JA]').click({ force: true })
        cy.get('.undersporsmal .skjemaelement__input#687298').click()

        cy.contains('Hvilke dager var du syk med egenmelding? Du trenger bare oppgi dager før 1. april 2020.')
        cy.get('#687299_0 .fom .nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('11').click()
        cy.get('#687299_0 .tom .nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('12').click()

        cy.contains('Gå videre').click()
    })


    it('Søknad TILBAKE_I_ARBEID', function() {
        cy.url().should('include', `${soknad.id}/3`)

        // Test spørsmål
        cy.get('.inputPanelGruppe__inner label:first-child > input[value=JA]').click({ force: true })
        cy.contains('Når begynte du å jobbe igjen?')
        cy.get('.nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('20').click()

        cy.contains('Gå videre').click()
    })


    it('Søknad FERIE_V2', function() {
        cy.url().should('include', `${soknad.id}/4`)

        // Test spørsmål
        cy.get('.inputPanelGruppe__inner label:first-child > input[value=JA]').click({ force: true })
        cy.contains('Når tok du ut ferie?')
        cy.get('#687305_0 .fom .nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('16').click()
        cy.get('#687305_0 .tom .nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('23').click()

        cy.contains('Gå videre').click()
    })


    it('Søknad PERMISJON_V2', function() {
        cy.url().should('include', `${soknad.id}/5`)

        // Test spørsmål
        cy.get('.inputPanelGruppe__inner label:first-child > input[value=JA]').click({ force: true })
        cy.contains('Når tok du permisjon?')
        cy.get('#687307_0 .fom .nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('14').click()
        cy.get('#687307_0 .tom .nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('22').click()

        cy.contains('Gå videre').click()
    })


    it('Søknad UTLAND_V2', function() {
        cy.url().should('include', `${soknad.id}/6`)

        // Test spørsmål
        cy.get('.inputPanelGruppe__inner label:first-child > input[value=JA]').click({ force: true })
        cy.contains('Når var du utenfor EØS?')
        cy.get('#687309_0 .fom .nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('14').click()
        cy.get('#687309_0 .tom .nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('22').click()

        cy.contains('Gå videre').click()
    })


    it('Søknad ARBEID_UTENFOR_NORGE', function() {
        cy.url().should('include', `${soknad.id}/7`)

        // Test spørsmål
        cy.get('.inputPanelGruppe__inner label:first-child > input[value=JA]').click({ force: true })
        cy.contains('Utfører du arbeid andre steder enn i Norge?')

        cy.contains('Gå videre').click()
    })


    it('Søknad JOBBET_DU_GRADERT', function() {
        cy.url().should('include', `${soknad.id}/8`)

        // Test spørsmål
        cy.get('.inputPanelGruppe__inner label:first-child > input[value=JA]').click({ force: true })

        // Underspørsmål 1
        cy.contains('Hvor mange timer i uken jobber du vanligvis når du er frisk? Varierer det, kan du oppgi gjennomsnittet.')
        cy.get('.undersporsmal .skjemaelement__input#687312').focus().type('12')

        // Underspørsmål 2
        cy.contains('Hvor mye jobbet du totalt 1. - 24. april 2020 hos POSTEN NORGE AS, BÆRUM?')
        // Svarer prosent
        cy.get('.undersporsmal .skjemaelement__input.radioknapp[value=prosent]').focus().click({ force: true })
        cy.get('.undersporsmal .skjemaelement__input#687315').focus().type('51')
        // Svarer timer
        cy.get('.undersporsmal .skjemaelement__input.radioknapp[value=timer]').focus().click({ force: true })
        // Ferie/permisjon/tilbake i arbeid dekker alle datoer fra dag 14.
        // Gradkalkulatoren dermed vil regne ut at man har hatt 9 arbeidsdager i denne perioden
        // 12 timer * (9 dager/7) * 0.5 (50% sykefraværsgrad) = 7,71 timer, så vi prøver litt lavere enn det
        cy.get('.undersporsmal .skjemaelement__input#687317').focus().type('7.7')

        cy.contains('Gå videre').click()

        // Feilmelding
        cy.contains('Timene du skrev inn tyder på at du har jobbet mindre enn 50 %. Du må enten svare nei på spørsmålet over eller endre antall timer her.')

        // Endre timer til 7.8, som er mer enn 7.71
        cy.get('.undersporsmal .skjemaelement__input#687317').focus().type('{selectall}').type('7.8')

        cy.contains('Gå videre').click()
    })


    it('Søknad ANDRE_INNTEKTSKILDER', function() {
        cy.url().should('include', `${soknad.id}/9`)

        // Test spørsmål
        cy.get('.inputPanelGruppe__inner label:first-child > input[value=JA]').click({ force: true })

        // Svarer JA
        // Underspørsmål nivå 1 - checkbox
        cy.contains('Hvilke andre inntektskilder har du?')
        cy.get('.undersporsmal .checkboxgruppe label[for=687320]').should('include.text', 'andre arbeidsforhold')
        cy.get('.undersporsmal .checkboxgruppe .checkboks#687320').click({ force: true })
        // Underspørsmål nivå 2 - radio
        cy.get('.undersporsmal .checkboxgruppe .radioContainer .radioknapp#687321_0').click({ force: true })
        cy.contains('Du må sende egen sykepengesøknad for dette. ' +
            'Det betyr også at legen må skrive en sykmelding for hvert arbeidsforhold du er sykmeldt fra.')

        // Svarer NEI
        // Underspørsmål nivå 1 - checkbox
        cy.contains('Hvilke andre inntektskilder har du?')
        cy.get('.undersporsmal .checkboxgruppe label[for=687322]').should('include.text', 'selvstendig næringsdrivende')
        cy.get('.undersporsmal .checkboxgruppe .checkboks#687322').click({ force: true })
        // Underspørsmål nivå 2 - radio
        cy.get('.undersporsmal .checkboxgruppe .radioContainer .radioknapp#687323_1').click()

        cy.contains('Gå videre').click()
    })

    it('Søknad UTDANNING', function() {
        cy.url().should('include', `${soknad.id}/10`)

        // Test spørsmål
        cy.get('.inputPanelGruppe__inner label:first-child > input[value=JA]').click({ force: true })

        // Underspørsmål 1
        cy.contains('Når startet du på utdanningen?')
        cy.get('.nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('10').click()

        // Underspørsmål 2 - dato
        cy.contains('Er utdanningen et fulltidsstudium?')
        // Underspørsmål 2 - radio
        cy.get('.undersporsmal .skjemaelement .radioContainer .radioknapp#687333_0').click({ force: true })

        cy.contains('Gå videre').click()
    })

    it('Søknad PERMITTERT_NAA', function() {
        cy.url().should('include', `${soknad.id}/11`)

        // Sjekk at sykmelding er minimert
        cy.get('.sykmelding-perioder').should('not.be.visible')

        // Test spørsmål
        cy.get('.inputPanelGruppe__inner label:first-child > input[value=JA]').click({ force: true })
        cy.contains('Velg første dag i permitteringen')
        cy.get('.nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('20').click()

        // Gå til neste, så tilbake å svar nei
        cy.contains('Gå videre').click()
        cy.url().should('include', `${soknad.id}/12`)
        cy.contains('Tilbake').click()
        cy.get('.inputPanelGruppe__inner label:nth-child(2) > input[value=NEI]').click({ force: true })

        cy.contains('Gå videre').click()
    })


    it('Søknad PERMITTERT_PERIODE', function() {
        cy.url().should('include', `${soknad.id}/12`)

        // Hovedspørsmål
        cy.get('.inputPanelGruppe__inner label:first-child > input[value=JA]').click({ force: true })

        // Periode 1
        cy.get('#687295_0 .fom .nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('4').click()
        cy.get('#687295_0 .tom .nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('5').click()

        // Periode 2
        cy.contains('+ Legg til ekstra periode').click()
        cy.get('#687295_1 .fom .nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('11').click()
        cy.get('#687295_1 .tom .nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('12').click()
        cy.get('#687295_1_fom')
            .should('have.value', '11.04.2020')
        cy.get('#687295_1_tom')
            .should('have.value', '12.04.2020')

        // Periode 3
        cy.contains('+ Legg til ekstra periode').click()
        cy.get('#687295_2 .fom .nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('18').click()
        cy.get('#687295_2 .tom .nav-datovelger__kalenderknapp').click()
        cy.get('.DayPicker-Day').contains('19').click()
        cy.get('#687295_2_fom')
            .should('have.value', '18.04.2020')
        cy.get('#687295_2_tom')
            .should('have.value', '19.04.2020')

        // Fjern periode 2
        cy.get('#btn_687295_1').contains('Slett periode').click({ force: true })
        cy.get('#687295_2_fom').should('exist')
            .should('have.value', '18.04.2020')
        cy.get('#687295_2_tom').should('exist')
            .should('have.value', '19.04.2020')
        cy.get('#687295_1_tom')
            .should('not.exist')

        // Fjern periode 3
        cy.get('#btn_687295_2').contains('Slett periode').click({ force: true })
        cy.get('#687295_2_tom')
            .should('not.exist')

        cy.contains('Gå videre').click()
    })


    it('Søknad ANSVARSERKLARING ', function() {
        cy.url().should('include', `${soknad.id}/13`)
        cy.get('.skjemaelement__label').click({ force: true })
        cy.contains('Jeg har lest all informasjonen jeg har fått i søknaden og bekrefter at opplysningene jeg har gitt er korrekte.')
        cy.contains('Søknaden sendes til POSTEN NORGE AS, BÆRUM.')

        cy.contains('Send søknaden').click()
    })

    it('Søknad kvittering', () => {
        cy.url().should('include', `/kvittering/${soknad.id}`)
        cy.get('.hva-skjer')
            .should('contain', 'Hva skjer videre?')
            .and('contain', 'Du får sykepengene fra arbeidsgiveren din')
    })
})
