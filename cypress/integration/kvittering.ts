import {
    arbeidsledigKvittering,
    arbeidstakerDeltPeriodeForsteUtenforArbeidsgiverperiodeKvittering,
    arbeidstakerInnenforArbeidsgiverperiodeKvittering,
    arbeidstakerMedOppholdForsteUtenforArbeidsgiverperiodeKvittering,
    arbeidstakerMedOppholdKvittering,
    arbeidstakerUtenforArbeidsgiverperiodeKvittering,
    arbeidstakerUtenOppholdForsteUtenforArbeidsgiverperiodeKvittering,
    arbeidstakerUtenOppholdKvittering,
    oppholdUtlandKvittering,
    selvstendigKvittering,
    sendtArbeidsledigKvittering,
} from '../../src/data/mock/data/soknader-integration'

describe('Tester kvittering', () => {
    before(() => {
        cy.visit('http://localhost:8080')
    })

    afterEach(() => {
        cy.get('.brodsmuler__smuler').then(smuler => {
            if (smuler.find('.smule .lenke').length > 0) {
                cy.contains('Søknader').click({ force: true })
            }
        })
    })

    context('Arbeidsledig', () => {
        it('Nylig sendt', () => {
            // Velg søknad
            cy.get(`#soknader-list-til-behandling article a[href*=${arbeidsledigKvittering.id}]`).click()

            // Svar og send
            cy.contains('Jeg vet at jeg kan miste retten til sykepenger hvis opplysningene jeg gir ikke er riktige eller fullstendige.')
                .click({ force: true })
            cy.contains('Gå videre').click()
            cy.get('.inputPanelGruppe__inner label:nth-child(2) > input[value=NEI]').click({ force: true })
            cy.contains('Gå videre').click()
            cy.get('.skjemaelement__label').click({ force: true })
            cy.contains('Send søknaden').click()
            cy.url().should('include', `/kvittering/${arbeidsledigKvittering.id}`)

            // Sendt datoer
            cy.get('.kvittering .alertstripe--suksess')
                .should('contain', 'Søknaden er sendt til NAV')
                .and('not.contain', 'Org.nr')

            // Hva skjer videre
            cy.get('.alertstripe.opplysninger.alertstripe--info')
                .should('contain', 'Hva skjer videre?')
                .and('contain', 'NAV behandler søknaden din')
                .and('contain', 'Saksbehandlingstidene kan variere noe. Sjekk saksbehandlingstidene i ditt fylke')
                .and('contain', 'Når blir pengene utbetalt?')
                .and('contain', 'Blir søknaden din innvilget før den 15. i denne måneden, blir pengene utbetalt innen den 25. samme måned. Blir det innvilget etter den 15. i måneden, utbetales pengene innen 5 dager.')

            // Oppsummering minimert
            cy.get('.utvidbar.oppsummering.ekspander.lilla .utvidbar__toggle')
                .should('contain', 'Oppsummering fra søknaden')
                .and('have.attr', 'aria-expanded', 'false')

            // Opplysninger minimert
            cy.get('.utvidbar.ekspander .utvidbar__toggle')
                .should('contain', 'Opplysninger fra sykmeldingen')
                .and('have.attr', 'aria-expanded', 'false')

            // Knapperad ( Endre, Ettersend)
            cy.contains('Endre søknad').should('exist')
        })

        it('Etter 30 dager', () => {
            cy.get(`#soknader-sendt article[aria-labelledby*=${sendtArbeidsledigKvittering.id}]`).click()

            cy.url().should('include', `/kvittering/${sendtArbeidsledigKvittering.id}`)

            // Sendt datoer
            cy.get('.kvittering .alertstripe--suksess')
                .should('contain', 'Søknaden er sendt til NAV')
                .and('contain', 'Mottatt: Torsdag 23. april, kl 11:56')
                .and('not.contain', 'Org.nr')

            // Hva skjer videre skal ikke finnes
            cy.get('.alertstripe.opplysninger.alertstripe--info')
                .should('not.exist')

            // Oppsummering ekspandert
            cy.get('.utvidbar.oppsummering.ekspander.lilla.apen .utvidbar__toggle')
                .should('contain', 'Oppsummering fra søknaden')

            // Opplysninger minimert
            cy.get('.utvidbar.ekspander .utvidbar__toggle')
                .should('contain', 'Opplysninger fra sykmeldingen')

            // Knapperad ( Endre, Ettersend)
            cy.contains('Endre søknad').should('exist')
        })
    })

    context('Utland', () => {
        it('Nylig sendt', () => {
            // Velg søknad
            cy.get(`#soknader-list-til-behandling article a[href*=${oppholdUtlandKvittering.id}]`).click({ force: true })

            // Svar og send
            cy.get('#1_0 .fom .nav-datovelger__kalenderknapp').click()
            cy.get('.DayPicker-Day').contains('17').click()
            cy.get('#1_0 .tom .nav-datovelger__kalenderknapp').click()
            cy.get('.DayPicker-Day').contains('24').click()
            cy.contains('Gå videre').click()
            cy.get('.skjemaelement__input').type('Fransk')
            cy.contains('Søre franske territorier').click({ force: true })
            cy.contains('Gå videre').click({ force: true })
            cy.contains('Nei').click({ force: true })
            cy.contains('Gå videre').click({ force: true })
            cy.contains('Jeg bekrefter de to punktene ovenfor').click({ force: true })
            cy.contains('Send søknaden').click({ force: true })
            cy.url().should('include', `/kvittering/${oppholdUtlandKvittering.id}`)

            // Sendt datoer
            cy.get('.kvittering .alertstripe--suksess')
                .should('contain', 'Søknaden er sendt til NAV')
                .and('not.contain', 'Org.nr')

            // Hva skjer videre
            cy.get('.alertstripe.opplysninger.alertstripe--info')
                .should('contain', 'Hva skjer videre?')
                .and('contain', 'Du får svar på om du kan reise')
                .and('contain', 'NAV vurderer om reisen vil forlenge sykefraværet ditt eller hindre planlagte aktiviteter.')
                .and('contain', 'Risiko ved reise før du har mottatt svar')
                .and('contain', 'Du kan risikere at sykepengene stanses i perioden du er på Reise.')
                .and('contain', 'Sykepengene kan beregnes etter et lavere grunnlag når du er tilbake.')
                .and('contain', 'Du kan få avslag på videre sykepenger hvis reisen varer fire uker eller mer.')
                .and('contain', 'Les mer om sykepenger når du er på reise.')
                .and('contain', 'Du søker om sykepenger')
                .and('contain', 'Etter at sykefraværsperioden er over, søker du om sykepenger på vanlig måte. Du får en melding fra NAV når søknaden er klar til å fylles ut.')
                .and('not.contain', 'NAV behandler søknaden din')
                .and('not.contain', 'Saksbehandlingstidene kan variere noe. Sjekk saksbehandlingstidene i ditt fylke')

            // Oppsummering minimert
            cy.get('.utvidbar.oppsummering.ekspander.lilla .utvidbar__toggle')
                .should('contain', 'Oppsummering fra søknaden')
                .and('have.attr', 'aria-expanded', 'false')

            // Opplysninger finnes ikke
            cy.contains('Opplysninger fra sykmeldingen').should('not.exist')

            // Knapperad finnes ikke
            cy.contains('Endre søknad').should('not.exist')
            cy.contains('Send til NAV').should('not.exist')
            cy.contains('Send til arbeidsgiver').should('not.exist')
        })
    })

    context('Selvstendig', () => {
        it('Nylig sendt', () => {
            // Velg søknad
            cy.get(`#soknader-list-til-behandling article a[href*=${selvstendigKvittering.id}]`).click()

            // Svar og send
            cy.contains('Jeg vet at jeg kan miste retten til sykepenger hvis opplysningene jeg gir ikke er riktige eller fullstendige.')
                .click({ force: true })
            cy.contains('Gå videre').click()
            cy.get('.inputPanelGruppe__inner label:nth-child(2) > input[value=NEI]').click({ force: true })
            cy.contains('Gå videre').click()
            cy.get('.skjemaelement__label').click({ force: true })
            cy.contains('Send søknaden').click()
            cy.url().should('include', `/kvittering/${selvstendigKvittering.id}`)

            // Sendt datoer
            cy.get('.kvittering .alertstripe--suksess')
                .should('contain', 'Søknaden er sendt til NAV')
                .and('not.contain', 'Org.nr')

            // Hva skjer videre
            cy.get('.alertstripe.opplysninger.alertstripe--info')
                .should('contain', 'Hva skjer videre?')
                .and('contain', 'NAV behandler søknaden din')
                .and('contain', 'Saksbehandlingstidene kan variere noe. Sjekk saksbehandlingstidene i ditt fylke')
                .and('contain', 'Når blir pengene utbetalt?')
                .and('contain', 'Blir søknaden din innvilget før den 15. i denne måneden, blir pengene utbetalt innen den 25. samme måned. Blir det innvilget etter den 15. i måneden, utbetales pengene innen 5 dager.')

            // Oppsummering minimert
            cy.get('.utvidbar.oppsummering.ekspander.lilla .utvidbar__toggle')
                .should('contain', 'Oppsummering fra søknaden')
                .and('have.attr', 'aria-expanded', 'false')

            // Opplysninger minimert
            cy.get('.utvidbar.ekspander .utvidbar__toggle')
                .should('contain', 'Opplysninger fra sykmeldingen')
                .and('have.attr', 'aria-expanded', 'false')

            // Knapperad ( Endre, Ettersend)
            cy.contains('Endre søknad').should('exist')
            cy.contains('Send til NAV').should('not.exist')
            cy.contains('Send til arbeidsgiver').should('not.exist')
        })
    })

    context('Arbeidstaker', () => {
        it('Innenfor arbeidsgiverperiode', () => {
            cy.get(`#soknader-list-til-behandling article a[href*=${arbeidstakerInnenforArbeidsgiverperiodeKvittering.id}]`).click()
            besvarSoknad()
            cy.url().should('include', `/kvittering/${arbeidstakerInnenforArbeidsgiverperiodeKvittering.id}`)
            inntil16dagerKvittering()

            // Ettersend
            cy.contains('Send til NAV').click()
            cy.contains('Vanligvis sendes søknaden bare til NAV hvis det samlede sykefraværet er 16 dager eller mer. Denne søknaden er beregnet til å være kortere. Hvis arbeidsgiveren din eller NAV har bedt deg sende den likevel, gjør du det her')
            cy.contains('Ja, send søknaden').click()
            cy.contains('Send til NAV').should('not.exist')

            // Sendt datoer
            cy.get('.kvittering .alertstripe--suksess')
                .should('contain', 'Søknaden er sendt')
            cy.get('.sendt-info .oppsummering__avkrysset')
                .should('contain', 'arb')
                .and('contain', 'NAV')


            // Hva skjer videre
            cy.get('.hva-skjer')
                .should('contain', 'Hva skjer videre?')
                .and('contain', 'Før NAV kan behandle søknaden')
                .and('contain', 'Når sykefraværet ditt er lengre enn 16 kalenderdager, betyr det at du får sykepenger utbetalt av NAV. Noen arbeidsplasser fortsetter å utbetale sykepenger fra dag 17, men da får de penger tilbake fra NAV senere.  Arbeidsgiveren din må derfor sende oss inntektsmelding så fort som mulig.')
                .and('contain', 'Hvorfor går det et skille ved 16 dager?')
                .and('contain', 'Hva er en inntektsmelding')
                .and('contain', 'NAV behandler søknaden')
                .and('contain', 'Saksbehandlingstidene kan variere noe. Sjekk saksbehandlingstidene i ditt fylke')
                .and('contain', 'Når blir pengene utbetalt')
                .and('contain', 'Blir søknaden din innvilget før den 15. i denne måneden, blir pengene utbetalt innen den 25. samme måned. Blir det innvilget etter den 15. i måneden, utbetales pengene innen 5 dager.')
                .and('not.contain', 'Du får sykepengene fra arbeidsgiveren din')

            // Behandlingstider lenke
            cy.contains('Sjekk saksbehandlingstidene i ditt fylke')
                .should('have.attr', 'href', 'https://www.nav.no/no/nav-og-samfunn/om-nav/saksbehandlingstider-i-nav')

            // Arbeidsgiverperiode tekst
            cy.contains('Hvorfor går det et skille ved 16 dager?').click({ force: true })
            cy.get('.alertstripe--info')
                .should('contain', 'Arbeidsgiveren skal betale sykepenger i en periode på opptil 16 kalenderdager, også kalt arbeidsgiverperioden. NAV overtar sykepengeutbetalingen fra og med 17. kalenderdag.')

            // Inntektsmelding
            cy.contains('Hva er en inntektsmelding').click({ force: true })
            cy.get('.alertstripe--info')
                .should('contain', 'Arbeidsplassen din sender inntektsopplysninger og annen informasjon som NAV trenger for å behandle søkaden din. Inntektsmeldingen sendes digitalt fra arbeidsplassens lønns og personalsystemet eller fra Altinn.no.')

        })

        it('Utenfor arbeidsgiverperiode', () => {
            cy.get(`#soknader-list-til-behandling article a[href*=${arbeidstakerUtenforArbeidsgiverperiodeKvittering.id}]`).click({ force: true })
            besvarSoknad()
            cy.url().should('include', `/kvittering/${arbeidstakerUtenforArbeidsgiverperiodeKvittering.id}`)
            over16dagerKvittering()
        })

        it('Delt periode og første utenfor arbeidsgiverperiode', () => {
            cy.get(`#soknader-list-til-behandling article a[href*=${arbeidstakerDeltPeriodeForsteUtenforArbeidsgiverperiodeKvittering.id}]`).click({ force: true })
            besvarSoknad()
            cy.url().should('include', `/kvittering/${arbeidstakerDeltPeriodeForsteUtenforArbeidsgiverperiodeKvittering.id}`)
            over16dagerKvittering()
        })

        it('Oppfølgende periode uten opphold og første utenfor arbeidsgiverperiode', () => {
            cy.get(`#soknader-list-til-behandling article a[href*=${arbeidstakerUtenOppholdForsteUtenforArbeidsgiverperiodeKvittering.id}]`).click({ force: true })
            besvarSoknad()
            cy.url().should('include', `/kvittering/${arbeidstakerUtenOppholdForsteUtenforArbeidsgiverperiodeKvittering.id}`)
            over16dagerKvittering()
        })

        it('Oppfølgende periode uten opphold', () => {
            cy.get(`#soknader-list-til-behandling article a[href*=${arbeidstakerUtenOppholdKvittering.id}]`).click({ force: true })
            besvarSoknad()
            cy.url().should('include', `/kvittering/${arbeidstakerUtenOppholdKvittering.id}`)
            utenOppholdKvittering()
        })

        it('Oppfølgende periode 16 eller mindre dager og første utenfor arbeidsgiverperiode', () => {
            cy.get(`#soknader-list-til-behandling article a[href*=${arbeidstakerMedOppholdForsteUtenforArbeidsgiverperiodeKvittering.id}]`).click()
            besvarSoknad()
            cy.url().should('include', `/kvittering/${arbeidstakerMedOppholdForsteUtenforArbeidsgiverperiodeKvittering.id}`)
            over16dagerKvittering()
        })

        it('Oppfølgende periode 16 eller mindre dager', () => {
            cy.get(`#soknader-list-til-behandling article a[href*=${arbeidstakerMedOppholdKvittering.id}]`).click({ force: true })
            besvarSoknad()
            cy.url().should('include', `/kvittering/${arbeidstakerMedOppholdKvittering.id}`)
            medOppholdKvittering()
        })
    })
})

const besvarSoknad = () => {
    cy.contains('Jeg vet at jeg kan miste retten til sykepenger hvis opplysningene jeg gir ikke er riktige eller fullstendige.')
        .click({ force: true })
    cy.contains('Gå videre').click()
    cy.get('.inputPanelGruppe__inner label:nth-child(2) > input[value=NEI]').click({ force: true })
    cy.contains('Gå videre').click()
    cy.get('.skjemaelement__label').click({ force: true })
    cy.contains('Send søknaden').click()
}

const inntil16dagerKvittering = () => {
    // Sendt datoer
    cy.get('.kvittering .alertstripe--suksess')
        .should('contain', 'Søknaden er sendt')
    cy.get('.sendt-info .oppsummering__avkrysset')
        .should('contain', 'arb')
        .and('not.contain', 'NAV')

    // Hva skjer videre
    cy.get('.hva-skjer')
        .should('contain', 'Hva skjer videre?')
        .and('contain', 'Du får sykepengene fra arbeidsgiveren din')
        .and('contain', 'Arbeidsgiveren din betaler de første 16 kalenderdagene av sykefraværet. Hvis du mener sykefraværet har vart lenger enn det, kan du sende søknaden til NAV. Noen arbeidsplasser fortsetter å utbetale sykepenger fra dag 17, men da får de penger tilbake fra NAV.')
        .and('not.contain', 'Før NAV kan behandle søknaden')
        .and('not.contain', 'NAV behandler søknaden')
        .and('not.contain', 'Når blir pengene utbetalt')

    // Oppsummering minimert
    cy.get('.utvidbar.oppsummering.ekspander.lilla .utvidbar__toggle')
        .should('contain', 'Oppsummering fra søknaden')
        .and('have.attr', 'aria-expanded', 'false')

    // Opplysninger minimert
    cy.get('.utvidbar.ekspander .utvidbar__toggle')
        .should('contain', 'Opplysninger fra sykmeldingen')
        .and('have.attr', 'aria-expanded', 'false')

    // Knapperad ( Endre, Ettersend)
    cy.contains('Endre søknad').should('exist')
    cy.contains('Send til NAV').should('exist')
    cy.contains('Send til arbeidsgiver').should('not.exist')
}

const over16dagerKvittering = () => {
    // Sendt datoer
    cy.get('.kvittering .alertstripe--suksess')
        .should('contain', 'Søknaden er sendt')
    cy.get('.sendt-info .oppsummering__avkrysset')
        .should('contain', 'arb')
        .and('contain', 'NAV')

    // Hva skjer videre
    cy.get('.hva-skjer')
        .should('contain', 'Hva skjer videre?')
        .and('contain', 'Før NAV kan behandle søknaden')
        .and('contain', 'Når sykefraværet ditt er lengre enn 16 kalenderdager, betyr det at du får sykepenger utbetalt av NAV. Noen arbeidsplasser fortsetter å utbetale sykepenger fra dag 17, men da får de penger tilbake fra NAV senere.  Arbeidsgiveren din må derfor sende oss inntektsmelding så fort som mulig.')
        .and('contain', 'Hvorfor går det et skille ved 16 dager?')
        .and('contain', 'Hva er en inntektsmelding')
        .and('contain', 'NAV behandler søknaden')
        .and('contain', 'Saksbehandlingstidene kan variere noe. Sjekk saksbehandlingstidene i ditt fylke')
        .and('contain', 'Når blir pengene utbetalt')
        .and('contain', 'Blir søknaden din innvilget før den 15. i denne måneden, blir pengene utbetalt innen den 25. samme måned. Blir det innvilget etter den 15. i måneden, utbetales pengene innen 5 dager.')
        .and('not.contain', 'Du får sykepengene fra arbeidsgiveren din')

    // Behandlingstider lenke
    cy.contains('Sjekk saksbehandlingstidene i ditt fylke')
        .should('have.attr', 'href', 'https://www.nav.no/no/nav-og-samfunn/om-nav/saksbehandlingstider-i-nav')

    // Arbeidsgiverperiode tekst
    cy.contains('Hvorfor går det et skille ved 16 dager?').click({ force: true })
    cy.get('.alertstripe--info')
        .should('contain', 'Arbeidsgiveren skal betale sykepenger i en periode på opptil 16 kalenderdager, også kalt arbeidsgiverperioden. NAV overtar sykepengeutbetalingen fra og med 17. kalenderdag.')

    // Inntektsmelding
    cy.contains('Hva er en inntektsmelding').click({ force: true })
    cy.get('.alertstripe--info')
        .should('contain', 'Arbeidsplassen din sender inntektsopplysninger og annen informasjon som NAV trenger for å behandle søkaden din. Inntektsmeldingen sendes digitalt fra arbeidsplassens lønns og personalsystemet eller fra Altinn.no.')

    // Oppsummering minimert
    cy.get('.utvidbar.oppsummering.ekspander.lilla .utvidbar__toggle')
        .should('contain', 'Oppsummering fra søknaden')
        .and('have.attr', 'aria-expanded', 'false')

    // Opplysninger minimert
    cy.get('.utvidbar.ekspander .utvidbar__toggle')
        .should('contain', 'Opplysninger fra sykmeldingen')
        .and('have.attr', 'aria-expanded', 'false')

    // Knapperad ( Endre, Ettersend)
    cy.contains('Endre søknad').should('exist')
    cy.contains('Send til NAV').should('not.exist')
    cy.contains('Send til arbeidsgiver').should('not.exist')
}

const utenOppholdKvittering = () => {
    // Sendt datoer
    cy.get('.kvittering .alertstripe--suksess')
        .should('contain', 'Søknaden er sendt')
    cy.get('.sendt-info .oppsummering__avkrysset')
        .should('not.contain', 'arb')
        .and('contain', 'NAV')

    // Hva skjer videre
    cy.get('.hva-skjer')
        .should('contain', 'Hva skjer videre?')
        .and('contain', 'NAV behandler søknaden')
        .and('contain', 'Saksbehandlingstidene kan variere noe. Sjekk saksbehandlingstidene i ditt fylke')
        .and('contain', 'Når blir pengene utbetalt')
        .and('contain', 'Blir søknaden din innvilget før den 15. i denne måneden, blir pengene utbetalt innen den 25. samme måned. Blir det innvilget etter den 15. i måneden, utbetales pengene innen 5 dager.')
        .and('not.contain', 'Før NAV kan behandle søknaden')
        .and('not.contain', 'Du får sykepengene fra arbeidsgiveren din')

    // Behandlingstider lenke
    cy.contains('Sjekk saksbehandlingstidene i ditt fylke')
        .should('have.attr', 'href', 'https://www.nav.no/no/nav-og-samfunn/om-nav/saksbehandlingstider-i-nav')

    // Oppsummering minimert
    cy.get('.utvidbar.oppsummering.ekspander.lilla .utvidbar__toggle')
        .should('contain', 'Oppsummering fra søknaden')
        .and('have.attr', 'aria-expanded', 'false')

    // Opplysninger minimert
    cy.get('.utvidbar.ekspander .utvidbar__toggle')
        .should('contain', 'Opplysninger fra sykmeldingen')
        .and('have.attr', 'aria-expanded', 'false')

    // Knapperad ( Endre, Ettersend)
    cy.contains('Endre søknad').should('exist')
    cy.contains('Send til NAV').should('not.exist')
    cy.contains('Send til arbeidsgiver').should('exist')
}

const medOppholdKvittering = () => {
    // Sendt datoer
    cy.get('.kvittering .alertstripe--suksess')
        .should('contain', 'Søknaden er sendt')
    cy.get('.sendt-info .oppsummering__avkrysset')
        .should('not.contain', 'arb')
        .and('contain', 'NAV')

    // Hva skjer videre
    cy.get('.hva-skjer')
        .should('contain', 'Viktig informasjon')
        .and('contain', 'Før NAV kan behandle søknaden')
        .and('contain', 'Du har vært friskmeldt inntil 16 dager siden sist du søkte om sykepenger. Da må arbeidsgiver sende oss inntektsmelding på nytt. Hør gjerne med arbeidsgiveren din hvis du er usikker på om den er sendt.')
        .and('contain', 'Hvorfor inntektsmeldingen må sendes på nytt?')
        .and('contain', 'NAV behandler søknaden')
        .and('contain', 'Saksbehandlingstidene kan variere noe. Sjekk saksbehandlingstidene i ditt fylke')
        .and('contain', 'Når blir pengene utbetalt')
        .and('contain', 'Blir søknaden din innvilget før den 15. i denne måneden, blir pengene utbetalt innen den 25. samme måned. Blir det innvilget etter den 15. i måneden, utbetales pengene innen 5 dager.')
        .and('not.contain', 'Du får sykepengene fra arbeidsgiveren din')

    // Inntekstmelding
    cy.contains('Hvorfor inntektsmeldingen må sendes på nytt?').click({ force: true })
    cy.get('.alertstripe--info')
        .should('contain', 'Lønn eller arbeidstid kan ha endret seg siden du var syk forrige gang. Dette får vi bare informasjon om gjennom inntektsmeldingen.')

    // Behandlingstider lenke
    cy.contains('Sjekk saksbehandlingstidene i ditt fylke')
        .should('have.attr', 'href', 'https://www.nav.no/no/nav-og-samfunn/om-nav/saksbehandlingstider-i-nav')

    // Oppsummering minimert
    cy.get('.utvidbar.oppsummering.ekspander.lilla .utvidbar__toggle')
        .should('contain', 'Oppsummering fra søknaden')
        .and('have.attr', 'aria-expanded', 'false')

    // Opplysninger minimert
    cy.get('.utvidbar.ekspander .utvidbar__toggle')
        .should('contain', 'Opplysninger fra sykmeldingen')
        .and('have.attr', 'aria-expanded', 'false')

    // Knapperad ( Endre, Ettersend)
    cy.contains('Endre søknad').should('exist')
    cy.contains('Send til NAV').should('not.exist')
    cy.contains('Send til arbeidsgiver').should('exist')
}
