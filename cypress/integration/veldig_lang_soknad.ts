import { veldigLangSoknad } from '../../src/data/mock/data/soknader-integration'
import { Soknad } from '../../src/types/types'

describe('Tester støtte for gamle spørsmål', () => {
    //-----
    // Sykmelding: 7e90121c-b64b-4a1c-b7a5-93c9d95aba47, arbeidstaker - 100%
    // Søknad: faba11f5-123-abc-8c8a-58b28ce2f3ef, fom: 1.4.20, tom: 24.4.20
    //-----
    const soknad = new Soknad(veldigLangSoknad as any) as Soknad
    let steg = 1

    function svarJaHovedsporsmal() {
        cy.get('.inputPanelGruppe__inner label:first-child > input[value=JA]').click({ force: true })
    }

    function svarNeiHovedsporsmal() {
        cy.get('.inputPanelGruppe__inner label:nth-child(2) > input[value=NEI]').click({ force: true })
    }

    function svarCheckboxPanel() {
        cy.get('.skjemaelement__label').click({ force: true })
    }

    function velgDato() {
        const velgDato = 10
        const className = '.nav-datovelger__kalenderknapp'

        cy.get(className).click()
        cy.get('.DayPicker-Day').contains(velgDato).first().click()
    }

    function velgPeriode() {
        const fom = '12'
        const tom = '15'
        const className = '.nav-datovelger__kalenderknapp'

        cy.get('.fom ' + className).click()
        cy.get('.DayPicker-Day').contains(fom).click()
        cy.get('.tom ' + className).click()
        cy.get('.DayPicker-Day').contains(tom).click()
    }

    function velgTimerPerUke() {
        const id = soknad.sporsmal[steg - 1].undersporsmal[0].id
        cy.get(`.undersporsmal .skjemaelement__input#${id}`).focus().type('12')
    }

    function velgTimer() {
        const id = soknad.sporsmal[steg - 1].undersporsmal[1].undersporsmal[1].undersporsmal[0].id
        cy.get('.undersporsmal .skjemaelement__input.radioknapp[value=timer]').focus().click({ force: true })
        cy.get(`.undersporsmal .skjemaelement__input#${id}`).focus().type('21')
    }

    function velgCheckbox(gjelder: string) {
        cy.get('.undersporsmal .checkboxgruppe').contains(gjelder).click({ force: true })
    }

    function svarJaRadio(gjelder: string) {
        cy.contains(gjelder).siblings().contains('Ja').click({ force: true })
    }

    function svarSykMedEgenmelding() {
        cy.contains('Jeg var syk med egenmelding').click({ force: true })
    }

    function velgBehandlingsdager() {
        cy.get('.skjema__beh-dager').contains('10').click({ force: true })
        cy.get('.skjema__beh-dager').contains('16').click({ force: true })
    }

    function velgLand(land: string) {
        cy.get('.skjemaelement__input').type(land)
        cy.contains(land).click({ force: true })
    }

    function gaVidere() {
        cy.contains('Gå videre').click({ force: true })
        cy.url().should('include', `${soknad.id}/${++steg}`)
    }

    before(() => {
        cy.visit('http://localhost:8080')
    })

    it('Laster startside', () => {
        cy.get('.typo-sidetittel').should('be.visible').and('have.text', 'Søknader')
        cy.get(`#soknader-list-til-behandling article a[href*=${soknad.id}]`).click()
    })
    it('ANSVARSERKLARING', () => {
        svarCheckboxPanel()
        gaVidere()
    })

    it('ANDRE_INNTEKTSKILDER', () => {
        svarJaHovedsporsmal()
        velgCheckbox('dagmamma')
        svarJaRadio('Er du sykmeldt fra dette?')
        gaVidere()
    })
    it('ANDRE_INNTEKTSKILDER', () => {
        svarJaHovedsporsmal()
        velgCheckbox('frilanser')
        svarJaRadio('Er du sykmeldt fra dette?')
        gaVidere()
    })
    it('ARBEID_UTENFOR_NORGE', () => {
        svarNeiHovedsporsmal()
        gaVidere()
    })
    it('ARBEIDSGIVER', () => {
        svarJaHovedsporsmal()
        svarJaRadio('Er du 100 % sykmeldt?')
        svarJaRadio('Har du avtalt med arbeidsgiveren din at du skal ha ferie i hele perioden?')
        gaVidere()
    })
    it('ARBEIDSLEDIG_UTLAND', () => {
        svarJaHovedsporsmal()
        velgPeriode()
        svarJaRadio('Har du søkt om å beholde sykepengene for disse dagene?')
        gaVidere()
    })
    it('EGENMELDINGER', () => {
        svarJaHovedsporsmal()
        svarSykMedEgenmelding()
        velgPeriode()
        gaVidere()
    })
    it('ENKELTSTAENDE_BEHANDLINGSDAGER', () => {
        velgBehandlingsdager()
        gaVidere()
    })
    it('FERIE_V2', () => {
        svarJaHovedsporsmal()
        velgPeriode()
        gaVidere()
    })
    it('FERIE_PERMISJON_UTLAND', () => {
        svarJaHovedsporsmal()
        velgCheckbox('Jeg tok ut ferie')
        velgPeriode()
        gaVidere()
    })
    it('FRAVER_FOR_BEHANDLING', () => {
        svarJaHovedsporsmal()
        svarSykMedEgenmelding()
        velgPeriode()
        gaVidere()
    })
    it('FRISKMELDT', () => {
        svarJaHovedsporsmal()
        gaVidere()
    })
    it('JOBBET_DU_100_PROSENT', () => {
        svarJaHovedsporsmal()
        velgTimerPerUke()
        velgTimer()
        gaVidere()
    })
    it('JOBBET_DU_GRADERT', () => {
        svarJaHovedsporsmal()
        velgTimerPerUke()
        velgTimer()
        gaVidere()
    })
    it('LAND', () => {
        velgLand('franske')
        gaVidere()
    })
    it('PERIODEUTLAND', () => {
        velgPeriode()
        gaVidere()
    })
    it('PERMISJON_V2', () => {
        svarJaHovedsporsmal()
        velgPeriode()
        gaVidere()
    })
    it('PERMITTERT_NAA', () => {
        svarJaHovedsporsmal()
        velgDato()
        gaVidere()
    })
    it('PERMITTERT_PERIODE', () => {
        svarJaHovedsporsmal()
        velgPeriode()
        gaVidere()
    })
    it('TILBAKE_I_ARBEID', () => {
        svarJaHovedsporsmal()
        velgDato()
        gaVidere()
    })
    it('UTDANNING', () => {
        svarJaHovedsporsmal()
        velgDato()
        svarJaRadio('Er utdanningen et fulltidsstudium?')
        gaVidere()
    })
    it('UTLAND', () => {
        svarJaHovedsporsmal()
        velgPeriode()
        svarJaRadio('Har du søkt om å beholde sykepengene for disse dagene?')
        gaVidere()
    })
    it('UTLAND_V2', () => {
        svarJaHovedsporsmal()
        velgPeriode()
        gaVidere()
    })

    it('VAER_KLAR_OVER_AT & BEKREFT_OPPLYSNINGER', () => {
        svarCheckboxPanel()
        cy.contains('Send søknaden').click()
    })
    it('Søknad kvittering', () => {
        cy.url().should('include', `/kvittering/${soknad.id}`)
        cy.get('.hva-skjer')
            .should('contain', 'Hva skjer videre?')
            .and('contain', 'Før NAV kan behandle søknaden')
            .and('contain', 'Hvorfor går det et skille ved 16 dager?')
            .and('contain', 'Hva er en inntektsmelding')
            .and('contain', 'NAV behandler søknaden')
            .and('contain', 'Når blir pengene utbetalt')
    })
})
