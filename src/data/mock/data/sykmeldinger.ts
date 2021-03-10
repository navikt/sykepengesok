import { Sykmelding } from '../../../types/types'

// Sykepengesøknad
export const frilanserSm: Sykmelding = {
    'id': 'baf4a9ab-cc9b-42af-bba3-67cd6ca06388',
    'startLegemeldtFravaer': '2020-04-01',
    'skalViseSkravertFelt': true,
    'identdato': '2020-04-01',
    'status': 'BEKREFTET',
    'naermesteLederStatus': null,
    'erEgenmeldt': false,
    'erPapirsykmelding': false,
    'innsendtArbeidsgivernavn': null,
    'valgtArbeidssituasjon': 'FRILANSER',
    'mottakendeArbeidsgiver': null,
    'orgnummer': null,
    'sendtdato': '2020-05-13T13:24:17',
    'sporsmal': {
        'arbeidssituasjon': 'FRILANSER',
        'harForsikring': false,
        'fravaersperioder': [ {
            fom: '2020-01-01',
            tom: '2020-06-01'
        } ],
        'harAnnetFravaer': false
    },
    'pasient': {
        'fnr': '31057023263',
        'fornavn': 'Frida',
        'mellomnavn': 'Perma',
        'etternavn': 'Frost'
    },
    'arbeidsgiver': 'LOMMEN BARNEHAVE',
    'stillingsprosent': 100,
    'diagnose': {
        'hoveddiagnose': {
            'diagnose': 'TENDINITT INA',
            'diagnosekode': 'L87',
            'diagnosesystem': 'ICPC-2'
        },
        'bidiagnoser': [
            {
                'diagnose': 'GANGLION SENE',
                'diagnosekode': 'L87',
                'diagnosesystem': 'ICPC-2'
            }
        ],
        'fravaersgrunnLovfestet': null,
        'fravaerBeskrivelse': null,
        'svangerskap': false,
        'yrkesskade': false,
        'yrkesskadeDato': '2020-04-01'
    },
    'mulighetForArbeid': {
        'perioder': [
            {
                'fom': '2020-04-01',
                'tom': '2020-04-24',
                'grad': 100,
                'behandlingsdager': null,
                'reisetilskudd': null,
                'avventende': null,
                'redusertVenteperiode': null
            }
        ],
        'aktivitetIkkeMulig433': [
            'Annet'
        ],
        'aktivitetIkkeMulig434': [
            'Annet'
        ],
        'aarsakAktivitetIkkeMulig433': 'andre årsaker til sykefravær',
        'aarsakAktivitetIkkeMulig434': 'andre årsaker til sykefravær'
    },
    'friskmelding': {
        'arbeidsfoerEtterPerioden': true,
        'hensynPaaArbeidsplassen': 'Må ta det pent',
        'antarReturSammeArbeidsgiver': true,
        'antattDatoReturSammeArbeidsgiver': '2020-04-01',
        'antarReturAnnenArbeidsgiver': true,
        'tilbakemeldingReturArbeid': '2020-04-01',
        'utenArbeidsgiverAntarTilbakeIArbeid': false,
        'utenArbeidsgiverAntarTilbakeIArbeidDato': null,
        'utenArbeidsgiverTilbakemelding': null
    },
    'utdypendeOpplysninger': {
        'sykehistorie': 'Langvarig korsryggsmerter. Ømhet og smerte',
        'paavirkningArbeidsevne': 'Kan ikke utføre arbeidsoppgaver 100% som kreves fra yrket. Duplikatbuster: f5357d2e-1101-40ec-8528-f99c078a3e3c',
        'resultatAvBehandling': 'Nei',
        'henvisningUtredningBehandling': 'Henvist til fysio',
        'grupper': [
            {
                'id': '6.2',
                'sporsmal': [
                    {
                        'id': '6.2.1',
                        'svar': 'Langvarig korsryggsmerter. Ømhet og smerte'
                    },
                    {
                        'id': '6.2.2',
                        'svar': 'Kan ikke utføre arbeidsoppgaver 100% som kreves fra yrket. Duplikatbuster: f5357d2e-1101-40ec-8528-f99c078a3e3c'
                    },
                    {
                        'id': '6.2.3',
                        'svar': 'Nei'
                    },
                    {
                        'id': '6.2.4',
                        'svar': 'Henvist til fysio'
                    }
                ]
            }
        ]
    },
    'arbeidsevne': {
        'tilretteleggingArbeidsplass': 'Fortsett som sist.',
        'tiltakNAV': 'Pasienten har plager som er kommet tilbake etter operasjon. Det er nylig tatt MR bildet som viser forandringer i hånd som mulig må opereres. Venter på time. Det er mulig sykemledingen vil vare utover aktuell sm periode. ',
        'tiltakAndre': null
    },
    'meldingTilNav': {
        'navBoerTaTakISaken': false,
        'navBoerTaTakISakenBegrunnelse': null
    },
    'innspillTilArbeidsgiver': null,
    'tilbakedatering': {
        'dokumenterbarPasientkontakt': null,
        'tilbakedatertBegrunnelse': null
    },
    'bekreftelse': {
        'utstedelsesdato': '2020-03-31',
        'sykmelder': 'Frida Perma Frost',
        'sykmelderTlf': '94431152'
    }
}
export const arbeidstaker100Sm: Sykmelding = {
    'id': '7e90121c-b64b-4a1c-b7a5-93c9d95aba47',
    'startLegemeldtFravaer': '2020-04-01',
    'skalViseSkravertFelt': true,
    'identdato': '2020-04-01',
    'status': 'SENDT',
    'naermesteLederStatus': null,
    'erEgenmeldt': false,
    'erPapirsykmelding': false,
    'innsendtArbeidsgivernavn': 'POSTEN NORGE AS, BÆRUM',
    'valgtArbeidssituasjon': 'ARBEIDSTAKER',
    'mottakendeArbeidsgiver': {
        'navn': 'POSTEN NORGE AS, BÆRUM',
        'virksomhetsnummer': '974654458',
        'juridiskOrgnummer': '984661185'
    },
    'orgnummer': '974654458',
    'sendtdato': '2020-05-13T13:21:21',
    'sporsmal': {
        'arbeidssituasjon': 'ARBEIDSTAKER',
        'harForsikring': null,
        'fravaersperioder': [],
        'harAnnetFravaer': null
    },
    'pasient': {
        'fnr': '31057023263',
        'fornavn': 'Frida',
        'mellomnavn': 'Perma',
        'etternavn': 'Frost'
    },
    'arbeidsgiver': 'LOMMEN BARNEHAVE',
    'stillingsprosent': 100,
    'diagnose': {
        'hoveddiagnose': {
            'diagnose': 'TENDINITT INA',
            'diagnosekode': 'L87',
            'diagnosesystem': 'ICPC-2'
        },
        'bidiagnoser': [
            {
                'diagnose': 'GANGLION SENE',
                'diagnosekode': 'L87',
                'diagnosesystem': 'ICPC-2'
            }
        ],
        'fravaersgrunnLovfestet': null,
        'fravaerBeskrivelse': null,
        'svangerskap': false,
        'yrkesskade': false,
        'yrkesskadeDato': '2020-04-01'
    },
    'mulighetForArbeid': {
        'perioder': [
            {
                'fom': '2020-04-01',
                'tom': '2020-04-24',
                'grad': 100,
                'behandlingsdager': null,
                'reisetilskudd': null,
                'avventende': null,
                'redusertVenteperiode': null
            }
        ],
        'aktivitetIkkeMulig433': [
            'Annet'
        ],
        'aktivitetIkkeMulig434': [
            'Annet'
        ],
        'aarsakAktivitetIkkeMulig433': 'andre årsaker til sykefravær',
        'aarsakAktivitetIkkeMulig434': 'andre årsaker til sykefravær'
    },
    'friskmelding': {
        'arbeidsfoerEtterPerioden': true,
        'hensynPaaArbeidsplassen': 'Må ta det pent',
        'antarReturSammeArbeidsgiver': true,
        'antattDatoReturSammeArbeidsgiver': '2020-04-01',
        'antarReturAnnenArbeidsgiver': true,
        'tilbakemeldingReturArbeid': '2020-04-01',
        'utenArbeidsgiverAntarTilbakeIArbeid': false,
        'utenArbeidsgiverAntarTilbakeIArbeidDato': null,
        'utenArbeidsgiverTilbakemelding': null
    },
    'utdypendeOpplysninger': {
        'sykehistorie': 'Langvarig korsryggsmerter. Ømhet og smerte',
        'paavirkningArbeidsevne': 'Kan ikke utføre arbeidsoppgaver 100% som kreves fra yrket. Duplikatbuster: d6eca6d8-1a57-46b9-bb96-10d8ff96c419',
        'resultatAvBehandling': 'Nei',
        'henvisningUtredningBehandling': 'Henvist til fysio',
        'grupper': [
            {
                'id': '6.2',
                'sporsmal': [
                    {
                        'id': '6.2.1',
                        'svar': 'Langvarig korsryggsmerter. Ømhet og smerte'
                    },
                    {
                        'id': '6.2.2',
                        'svar': 'Kan ikke utføre arbeidsoppgaver 100% som kreves fra yrket. Duplikatbuster: d6eca6d8-1a57-46b9-bb96-10d8ff96c419'
                    },
                    {
                        'id': '6.2.3',
                        'svar': 'Nei'
                    },
                    {
                        'id': '6.2.4',
                        'svar': 'Henvist til fysio'
                    }
                ]
            }
        ]
    },
    'arbeidsevne': {
        'tilretteleggingArbeidsplass': 'Fortsett som sist.',
        'tiltakNAV': 'Pasienten har plager som er kommet tilbake etter operasjon. Det er nylig tatt MR bildet som viser forandringer i hånd som mulig må opereres. Venter på time. Det er mulig sykemledingen vil vare utover aktuell sm periode. ',
        'tiltakAndre': null
    },
    'meldingTilNav': {
        'navBoerTaTakISaken': false,
        'navBoerTaTakISakenBegrunnelse': null
    },
    'innspillTilArbeidsgiver': null,
    'tilbakedatering': {
        'dokumenterbarPasientkontakt': null,
        'tilbakedatertBegrunnelse': null
    },
    'bekreftelse': {
        'utstedelsesdato': '2020-03-31',
        'sykmelder': 'Frida Perma Frost',
        'sykmelderTlf': '94431152'
    }
}
export const arbeidstaker50Sm: Sykmelding = {
    'id': 'ee4540e3-eba6-46cb-b90f-05747ddb1537',
    'startLegemeldtFravaer': '2020-04-01',
    'skalViseSkravertFelt': true,
    'identdato': '2020-04-01',
    'status': 'SENDT',
    'naermesteLederStatus': null,
    'erEgenmeldt': false,
    'erPapirsykmelding': false,
    'innsendtArbeidsgivernavn': 'POSTEN NORGE AS, BÆRUM',
    'valgtArbeidssituasjon': 'ARBEIDSTAKER',
    'mottakendeArbeidsgiver': {
        'navn': 'POSTEN NORGE AS, BÆRUM',
        'virksomhetsnummer': '974654458',
        'juridiskOrgnummer': '984661185'
    },
    'orgnummer': '974654458',
    'sendtdato': '2020-05-13T13:13:01',
    'sporsmal': {
        'arbeidssituasjon': 'ARBEIDSTAKER',
        'harForsikring': null,
        'fravaersperioder': [],
        'harAnnetFravaer': null
    },
    'pasient': {
        'fnr': '31057023263',
        'fornavn': 'Frida',
        'mellomnavn': 'Perma',
        'etternavn': 'Frost'
    },
    'arbeidsgiver': 'LOMMEN BARNEHAVE',
    'stillingsprosent': 100,
    'diagnose': {
        'hoveddiagnose': {
            'diagnose': 'TENDINITT INA',
            'diagnosekode': 'L87',
            'diagnosesystem': 'ICPC-2'
        },
        'bidiagnoser': [
            {
                'diagnose': 'GANGLION SENE',
                'diagnosekode': 'L87',
                'diagnosesystem': 'ICPC-2'
            }
        ],
        'fravaersgrunnLovfestet': null,
        'fravaerBeskrivelse': null,
        'svangerskap': false,
        'yrkesskade': false,
        'yrkesskadeDato': '2020-04-01'
    },
    'mulighetForArbeid': {
        'perioder': [
            {
                'fom': '2020-04-01',
                'tom': '2020-04-24',
                'grad': 50,
                'behandlingsdager': null,
                'reisetilskudd': false,
                'avventende': null,
                'redusertVenteperiode': null
            }
        ],
        'aktivitetIkkeMulig433': null,
        'aktivitetIkkeMulig434': null,
        'aarsakAktivitetIkkeMulig433': null,
        'aarsakAktivitetIkkeMulig434': null
    },
    'friskmelding': {
        'arbeidsfoerEtterPerioden': true,
        'hensynPaaArbeidsplassen': 'Må ta det pent',
        'antarReturSammeArbeidsgiver': true,
        'antattDatoReturSammeArbeidsgiver': '2020-04-01',
        'antarReturAnnenArbeidsgiver': true,
        'tilbakemeldingReturArbeid': '2020-04-01',
        'utenArbeidsgiverAntarTilbakeIArbeid': false,
        'utenArbeidsgiverAntarTilbakeIArbeidDato': null,
        'utenArbeidsgiverTilbakemelding': null
    },
    'utdypendeOpplysninger': {
        'sykehistorie': 'Langvarig korsryggsmerter. Ømhet og smerte',
        'paavirkningArbeidsevne': 'Kan ikke utføre arbeidsoppgaver 100% som kreves fra yrket. Duplikatbuster: 58e2fce3-7565-4a3d-80cf-63fe282d3dde',
        'resultatAvBehandling': 'Nei',
        'henvisningUtredningBehandling': 'Henvist til fysio',
        'grupper': [
            {
                'id': '6.2',
                'sporsmal': [
                    {
                        'id': '6.2.1',
                        'svar': 'Langvarig korsryggsmerter. Ømhet og smerte'
                    },
                    {
                        'id': '6.2.2',
                        'svar': 'Kan ikke utføre arbeidsoppgaver 100% som kreves fra yrket. Duplikatbuster: 58e2fce3-7565-4a3d-80cf-63fe282d3dde'
                    },
                    {
                        'id': '6.2.3',
                        'svar': 'Nei'
                    },
                    {
                        'id': '6.2.4',
                        'svar': 'Henvist til fysio'
                    }
                ]
            }
        ]
    },
    'arbeidsevne': {
        'tilretteleggingArbeidsplass': 'Fortsett som sist.',
        'tiltakNAV': 'Pasienten har plager som er kommet tilbake etter operasjon. Det er nylig tatt MR bildet som viser forandringer i hånd som mulig må opereres. Venter på time. Det er mulig sykemledingen vil vare utover aktuell sm periode. ',
        'tiltakAndre': null
    },
    'meldingTilNav': {
        'navBoerTaTakISaken': false,
        'navBoerTaTakISakenBegrunnelse': null
    },
    'innspillTilArbeidsgiver': null,
    'tilbakedatering': {
        'dokumenterbarPasientkontakt': null,
        'tilbakedatertBegrunnelse': null
    },
    'bekreftelse': {
        'utstedelsesdato': '2020-03-31',
        'sykmelder': 'Frida Perma Frost',
        'sykmelderTlf': '94431152'
    }
}
export const arbeidstakerBehandlingsdagerSm: Sykmelding = {
    'id': 'e876fe08-2765-4bd6-966c-922eefe99382',
    'startLegemeldtFravaer': '2020-04-01',
    'skalViseSkravertFelt': true,
    'identdato': '2020-04-01',
    'status': 'SENDT',
    'naermesteLederStatus': null,
    'erEgenmeldt': false,
    'erPapirsykmelding': false,
    'innsendtArbeidsgivernavn': 'POSTEN NORGE AS, BÆRUM',
    'valgtArbeidssituasjon': 'ARBEIDSTAKER',
    'mottakendeArbeidsgiver': {
        'navn': 'POSTEN NORGE AS, BÆRUM',
        'virksomhetsnummer': '974654458',
        'juridiskOrgnummer': '984661185'
    },
    'orgnummer': '974654458',
    'sendtdato': '2020-05-13T13:22:38',
    'sporsmal': {
        'arbeidssituasjon': 'ARBEIDSTAKER',
        'harForsikring': null,
        'fravaersperioder': [],
        'harAnnetFravaer': null
    },
    'pasient': {
        'fnr': '31057023263',
        'fornavn': 'Frida',
        'mellomnavn': 'Perma',
        'etternavn': 'Frost'
    },
    'arbeidsgiver': 'LOMMEN BARNEHAVE',
    'stillingsprosent': 100,
    'diagnose': {
        'hoveddiagnose': {
            'diagnose': 'TENDINITT INA',
            'diagnosekode': 'L87',
            'diagnosesystem': 'ICPC-2'
        },
        'bidiagnoser': [
            {
                'diagnose': 'GANGLION SENE',
                'diagnosekode': 'L87',
                'diagnosesystem': 'ICPC-2'
            }
        ],
        'fravaersgrunnLovfestet': null,
        'fravaerBeskrivelse': null,
        'svangerskap': false,
        'yrkesskade': false,
        'yrkesskadeDato': '2020-04-01'
    },
    'mulighetForArbeid': {
        'perioder': [
            {
                'fom': '2020-04-01',
                'tom': '2020-04-24',
                'grad': null,
                'behandlingsdager': 1,
                'reisetilskudd': null,
                'avventende': null,
                'redusertVenteperiode': null
            }
        ],
        'aktivitetIkkeMulig433': null,
        'aktivitetIkkeMulig434': null,
        'aarsakAktivitetIkkeMulig433': null,
        'aarsakAktivitetIkkeMulig434': null
    },
    'friskmelding': {
        'arbeidsfoerEtterPerioden': true,
        'hensynPaaArbeidsplassen': 'Må ta det pent',
        'antarReturSammeArbeidsgiver': true,
        'antattDatoReturSammeArbeidsgiver': '2020-04-01',
        'antarReturAnnenArbeidsgiver': true,
        'tilbakemeldingReturArbeid': '2020-04-01',
        'utenArbeidsgiverAntarTilbakeIArbeid': false,
        'utenArbeidsgiverAntarTilbakeIArbeidDato': null,
        'utenArbeidsgiverTilbakemelding': null
    },
    'utdypendeOpplysninger': {
        'sykehistorie': 'Langvarig korsryggsmerter. Ømhet og smerte',
        'paavirkningArbeidsevne': 'Kan ikke utføre arbeidsoppgaver 100% som kreves fra yrket. Duplikatbuster: 2256fba0-3f0b-47d9-8f89-256c511f160d',
        'resultatAvBehandling': 'Nei',
        'henvisningUtredningBehandling': 'Henvist til fysio',
        'grupper': [
            {
                'id': '6.2',
                'sporsmal': [
                    {
                        'id': '6.2.1',
                        'svar': 'Langvarig korsryggsmerter. Ømhet og smerte'
                    },
                    {
                        'id': '6.2.2',
                        'svar': 'Kan ikke utføre arbeidsoppgaver 100% som kreves fra yrket. Duplikatbuster: 2256fba0-3f0b-47d9-8f89-256c511f160d'
                    },
                    {
                        'id': '6.2.3',
                        'svar': 'Nei'
                    },
                    {
                        'id': '6.2.4',
                        'svar': 'Henvist til fysio'
                    }
                ]
            }
        ]
    },
    'arbeidsevne': {
        'tilretteleggingArbeidsplass': 'Fortsett som sist.',
        'tiltakNAV': 'Pasienten har plager som er kommet tilbake etter operasjon. Det er nylig tatt MR bildet som viser forandringer i hånd som mulig må opereres. Venter på time. Det er mulig sykemledingen vil vare utover aktuell sm periode. ',
        'tiltakAndre': null
    },
    'meldingTilNav': {
        'navBoerTaTakISaken': false,
        'navBoerTaTakISakenBegrunnelse': null
    },
    'innspillTilArbeidsgiver': null,
    'tilbakedatering': {
        'dokumenterbarPasientkontakt': null,
        'tilbakedatertBegrunnelse': null
    },
    'bekreftelse': {
        'utstedelsesdato': '2020-03-31',
        'sykmelder': 'Frida Perma Frost',
        'sykmelderTlf': '94431152'
    }
}
export const arbeidstakerAvbruttSm: Sykmelding = {
    'id': 'ff5a4a27-2d76-4e12-9786-c7e4f31121e6',
    'startLegemeldtFravaer': null,
    'skalViseSkravertFelt': false,
    'identdato': '2020-02-28',
    'status': 'SENDT',
    'naermesteLederStatus': 'NEI',
    'innsendtArbeidsgivernavn': null,
    'valgtArbeidssituasjon': 'ARBEIDSTAKER',
    'sporsmal': {
        'arbeidssituasjon': null,
        'harForsikring': null,
        'fravaersperioder': [],
        'harAnnetFravaer': null
    },
    'pasient': {
        'fnr': null,
        'fornavn': null,
        'mellomnavn': null,
        'etternavn': null
    },
    'arbeidsgiver': null,
    'stillingsprosent': null,
    'diagnose': {
        'hoveddiagnose': {
            'diagnosekode': 'L87',
            'diagnosesystem': 'Ukjent',
            'diagnosetekst': 'Ukjent'
        },
        'bidiagnoser': null,
        'fravaersgrunnLovfestet': null,
        'fravaerBeskrivelse': null,
        'svangerskap': null,
        'yrkesskade': null,
        'yrkesskadeDato': null
    },
    'mulighetForArbeid': {
        'perioder': [
            {
                'grad': 80,
                'reisetilskudd': false,
                'fom': '2020-05-20',
                'tom': '2020-06-05',
                'behandlingsdager': null
            }
        ],
        'aktivitetIkkeMulig433': null,
        'aktivitetIkkeMulig434': null,
        'aarsakAktivitetIkkeMulig433': null,
        'aarsakAktivitetIkkeMulig434': null
    },
    'friskmelding': {
        'arbeidsfoerEtterPerioden': null,
        'hensynPaaArbeidsplassen': null,
        'antarReturSammeArbeidsgiver': false,
        'antattDatoReturSammeArbeidsgiver': null,
        'antarReturAnnenArbeidsgiver': false,
        'tilbakemeldingReturArbeid': null,
        'utenArbeidsgiverAntarTilbakeIArbeid': false,
        'utenArbeidsgiverAntarTilbakeIArbeidDato': null,
        'utenArbeidsgiverTilbakemelding': null
    },
    'utdypendeOpplysninger': {
        'grupper': []
    },
    'arbeidsevne': {
        'tilretteleggingArbeidsplass': null,
        'tiltakNAV': null,
        'tiltakAndre': null
    },
    'meldingTilNav': {
        'navBoerTaTakISaken': false,
        'navBoerTaTakISakenBegrunnelse': null
    },
    'innspillTilArbeidsgiver': 'kjør på',
    'tilbakedatering': {
        'dokumenterbarPasientkontakt': null,
        'tilbakedatertBegrunnelse': null
    },
    'bekreftelse': {
        'utstedelsesdato': null,
        'sykmelder': null,
        'sykmelderTlf': null
    },
    'mottakendeArbeidsgiver': {
        'navn': 'Arbeidsgivernavn',
        'virksomhetsnummer': '123456789',
        'juridiskOrgnummer': '123123123'
    },
    'orgnummer': '2134324',
    'sendtdato': '2020-06-12T10:42:18.763'
}
export const arbeidsledigSm: Sykmelding = {
    'id': '470c9e25-e112-4060-be61-7a24af530889',
    'startLegemeldtFravaer': '2020-03-01',
    'skalViseSkravertFelt': true,
    'identdato': '2020-04-01',
    'status': 'BEKREFTET',
    'naermesteLederStatus': null,
    'erEgenmeldt': false,
    'erPapirsykmelding': false,
    'innsendtArbeidsgivernavn': null,
    'valgtArbeidssituasjon': 'ARBEIDSLEDIG',
    'mottakendeArbeidsgiver': null,
    'orgnummer': null,
    'sendtdato': '2020-05-13T13:23:35',
    'sporsmal': {
        'arbeidssituasjon': 'ARBEIDSLEDIG',
        'harForsikring': null,
        'fravaersperioder': [],
        'harAnnetFravaer': null
    },
    'pasient': {
        'fnr': '31057023263',
        'fornavn': 'Frida',
        'mellomnavn': 'Perma',
        'etternavn': 'Frost'
    },
    'arbeidsgiver': 'LOMMEN BARNEHAVE',
    'stillingsprosent': 100,
    'diagnose': {
        'hoveddiagnose': {
            'diagnose': 'TENDINITT INA',
            'diagnosekode': 'L87',
            'diagnosesystem': 'ICPC-2'
        },
        'bidiagnoser': [
            {
                'diagnose': 'GANGLION SENE',
                'diagnosekode': 'L87',
                'diagnosesystem': 'ICPC-2'
            }
        ],
        'fravaersgrunnLovfestet': null,
        'fravaerBeskrivelse': null,
        'svangerskap': false,
        'yrkesskade': false,
        'yrkesskadeDato': '2020-04-01'
    },
    'mulighetForArbeid': {
        'perioder': [
            {
                'fom': '2020-03-01',
                'tom': '2020-04-24',
                'grad': 100,
                'behandlingsdager': null,
                'reisetilskudd': null,
                'avventende': null,
                'redusertVenteperiode': null
            }
        ],
        'aktivitetIkkeMulig433': [
            'Annet'
        ],
        'aktivitetIkkeMulig434': [
            'Annet'
        ],
        'aarsakAktivitetIkkeMulig433': 'andre årsaker til sykefravær',
        'aarsakAktivitetIkkeMulig434': 'andre årsaker til sykefravær'
    },
    'friskmelding': {
        'arbeidsfoerEtterPerioden': true,
        'hensynPaaArbeidsplassen': 'Må ta det pent',
        'antarReturSammeArbeidsgiver': true,
        'antattDatoReturSammeArbeidsgiver': '2020-04-01',
        'antarReturAnnenArbeidsgiver': true,
        'tilbakemeldingReturArbeid': '2020-04-01',
        'utenArbeidsgiverAntarTilbakeIArbeid': false,
        'utenArbeidsgiverAntarTilbakeIArbeidDato': null,
        'utenArbeidsgiverTilbakemelding': null
    },
    'utdypendeOpplysninger': {
        'sykehistorie': 'Langvarig korsryggsmerter. Ømhet og smerte',
        'paavirkningArbeidsevne': 'Kan ikke utføre arbeidsoppgaver 100% som kreves fra yrket. Duplikatbuster: 7a40ed6e-e3a4-4b13-8ae1-402cec8954ad',
        'resultatAvBehandling': 'Nei',
        'henvisningUtredningBehandling': 'Henvist til fysio',
        'grupper': [
            {
                'id': '6.2',
                'sporsmal': [
                    {
                        'id': '6.2.1',
                        'svar': 'Langvarig korsryggsmerter. Ømhet og smerte'
                    },
                    {
                        'id': '6.2.2',
                        'svar': 'Kan ikke utføre arbeidsoppgaver 100% som kreves fra yrket. Duplikatbuster: 7a40ed6e-e3a4-4b13-8ae1-402cec8954ad'
                    },
                    {
                        'id': '6.2.3',
                        'svar': 'Nei'
                    },
                    {
                        'id': '6.2.4',
                        'svar': 'Henvist til fysio'
                    }
                ]
            }
        ]
    },
    'arbeidsevne': {
        'tilretteleggingArbeidsplass': 'Fortsett som sist.',
        'tiltakNAV': 'Pasienten har plager som er kommet tilbake etter operasjon. Det er nylig tatt MR bildet som viser forandringer i hånd som mulig må opereres. Venter på time. Det er mulig sykemledingen vil vare utover aktuell sm periode. ',
        'tiltakAndre': null
    },
    'meldingTilNav': {
        'navBoerTaTakISaken': false,
        'navBoerTaTakISakenBegrunnelse': null
    },
    'innspillTilArbeidsgiver': null,
    'tilbakedatering': {
        'dokumenterbarPasientkontakt': null,
        'tilbakedatertBegrunnelse': null
    },
    'bekreftelse': {
        'utstedelsesdato': '2020-03-31',
        'sykmelder': 'Frida Perma Frost',
        'sykmelderTlf': '94431152'
    }
}
export const arbeidsledigKvitteringSm: Sykmelding = {
    'id': '54d684f4-1e36-4ad9-bfbd-30365284234b',
    'startLegemeldtFravaer': null,
    'skalViseSkravertFelt': false,
    'identdato': '2020-02-28',
    'status': 'BEKREFTET',
    'naermesteLederStatus': 'NEI',
    'innsendtArbeidsgivernavn': null,
    'valgtArbeidssituasjon': 'ARBEIDSLEDIG',
    'sporsmal': {
        'arbeidssituasjon': null,
        'harForsikring': null,
        'fravaersperioder': [],
        'harAnnetFravaer': null
    },
    'pasient': {
        'fnr': null,
        'fornavn': null,
        'mellomnavn': null,
        'etternavn': null
    },
    'arbeidsgiver': null,
    'stillingsprosent': null,
    'diagnose': {
        'hoveddiagnose': {
            'diagnosekode': 'L87',
            'diagnosesystem': 'Ukjent',
            'diagnosetekst': 'Ukjent'
        },
        'bidiagnoser': null,
        'fravaersgrunnLovfestet': null,
        'fravaerBeskrivelse': null,
        'svangerskap': null,
        'yrkesskade': null,
        'yrkesskadeDato': null
    },
    'mulighetForArbeid': {
        'perioder': [
            {
                'grad': 100,
                'reisetilskudd': false,
                'fom': '2020-06-07',
                'tom': '2020-06-22',
                'behandlingsdager': null
            }
        ],
        'aktivitetIkkeMulig433': null,
        'aktivitetIkkeMulig434': null,
        'aarsakAktivitetIkkeMulig433': null,
        'aarsakAktivitetIkkeMulig434': null
    },
    'friskmelding': {
        'arbeidsfoerEtterPerioden': null,
        'hensynPaaArbeidsplassen': null,
        'antarReturSammeArbeidsgiver': false,
        'antattDatoReturSammeArbeidsgiver': null,
        'antarReturAnnenArbeidsgiver': false,
        'tilbakemeldingReturArbeid': null,
        'utenArbeidsgiverAntarTilbakeIArbeid': false,
        'utenArbeidsgiverAntarTilbakeIArbeidDato': null,
        'utenArbeidsgiverTilbakemelding': null
    },
    'utdypendeOpplysninger': {
        'grupper': []
    },
    'arbeidsevne': {
        'tilretteleggingArbeidsplass': null,
        'tiltakNAV': null,
        'tiltakAndre': null
    },
    'meldingTilNav': {
        'navBoerTaTakISaken': false,
        'navBoerTaTakISakenBegrunnelse': null
    },
    'innspillTilArbeidsgiver': 'kjør på',
    'tilbakedatering': {
        'dokumenterbarPasientkontakt': null,
        'tilbakedatertBegrunnelse': null
    },
    'bekreftelse': {
        'utstedelsesdato': null,
        'sykmelder': null,
        'sykmelderTlf': null
    },
    'sendtdato': '2020-06-23T11:55:24.319'
}
export const selvstendingSm: Sykmelding = {
    'id': 'f2e93cca-eea8-464b-b942-ee1821169885',
    'startLegemeldtFravaer': null,
    'skalViseSkravertFelt': false,
    'identdato': '2020-02-28',
    'status': 'BEKREFTET',
    'naermesteLederStatus': 'NEI',
    'innsendtArbeidsgivernavn': null,
    'valgtArbeidssituasjon': 'NAERINGSDRIVENDE',
    'sporsmal': {
        'arbeidssituasjon': null,
        'harForsikring': null,
        'fravaersperioder': [],
        'harAnnetFravaer': null
    },
    'pasient': {
        'fnr': null,
        'fornavn': null,
        'mellomnavn': null,
        'etternavn': null
    },
    'arbeidsgiver': null,
    'stillingsprosent': null,
    'diagnose': {
        'hoveddiagnose': {
            'diagnosekode': 'L87',
            'diagnosesystem': 'Ukjent',
            'diagnosetekst': 'Ukjent'
        },
        'bidiagnoser': null,
        'fravaersgrunnLovfestet': null,
        'fravaerBeskrivelse': null,
        'svangerskap': null,
        'yrkesskade': null,
        'yrkesskadeDato': null
    },
    'mulighetForArbeid': {
        'perioder': [
            {
                'grad': 100,
                'reisetilskudd': false,
                'fom': '2020-06-01',
                'tom': '2020-06-22',
                'behandlingsdager': null
            }
        ],
        'aktivitetIkkeMulig433': null,
        'aktivitetIkkeMulig434': null,
        'aarsakAktivitetIkkeMulig433': null,
        'aarsakAktivitetIkkeMulig434': null
    },
    'friskmelding': {
        'arbeidsfoerEtterPerioden': null,
        'hensynPaaArbeidsplassen': null,
        'antarReturSammeArbeidsgiver': false,
        'antattDatoReturSammeArbeidsgiver': null,
        'antarReturAnnenArbeidsgiver': false,
        'tilbakemeldingReturArbeid': null,
        'utenArbeidsgiverAntarTilbakeIArbeid': false,
        'utenArbeidsgiverAntarTilbakeIArbeidDato': null,
        'utenArbeidsgiverTilbakemelding': null
    },
    'utdypendeOpplysninger': {
        'grupper': []
    },
    'arbeidsevne': {
        'tilretteleggingArbeidsplass': null,
        'tiltakNAV': null,
        'tiltakAndre': null
    },
    'meldingTilNav': {
        'navBoerTaTakISaken': false,
        'navBoerTaTakISakenBegrunnelse': null
    },
    'innspillTilArbeidsgiver': 'kjør på',
    'tilbakedatering': {
        'dokumenterbarPasientkontakt': null,
        'tilbakedatertBegrunnelse': null
    },
    'bekreftelse': {
        'utstedelsesdato': null,
        'sykmelder': null,
        'sykmelderTlf': null
    },
    'sendtdato': '2020-06-23T16:07:06.427'
}

// Reisetilskudd
export const arbeidstakerReisetilskudd: Sykmelding = {
    'id': '83b6edca-691d-4dd9-9825-31df356bb951',
    'startLegemeldtFravaer': '2021-02-01',
    'skalViseSkravertFelt': true,
    'identdato': '2021-02-01',
    'status': 'BEKREFTET',
    'naermesteLederStatus': null,
    'erEgenmeldt': false,
    'erPapirsykmelding': false,
    'innsendtArbeidsgivernavn': null,
    'valgtArbeidssituasjon': 'ARBEIDSTAKER',
    'mottakendeArbeidsgiver': null,
    'orgnummer': null,
    'sendtdato': '2021-03-09T16:14:31',
    'sporsmal': {
        'arbeidssituasjon': 'ARBEIDSTAKER',
        'harForsikring': null,
        'fravaersperioder': [],
        'harAnnetFravaer': null
    },
    'pasient': {
        'fnr': '23047824435',
        'fornavn': 'LITEN',
        'mellomnavn': null,
        'etternavn': 'HØYSTAKK'
    },
    'arbeidsgiver': 'LOMMEN BARNEHAVE',
    'stillingsprosent': 100,
    'diagnose': {
        'hoveddiagnose': {
            'diagnose': 'TENDINITT INA',
            'diagnosekode': 'L87',
            'diagnosesystem': 'ICPC-2'
        },
        'bidiagnoser': [
            {
                'diagnose': 'GANGLION SENE',
                'diagnosekode': 'L87',
                'diagnosesystem': 'ICPC-2'
            }
        ],
        'fravaersgrunnLovfestet': null,
        'fravaerBeskrivelse': null,
        'svangerskap': false,
        'yrkesskade': false,
        'yrkesskadeDato': '2021-02-01'
    },
    'mulighetForArbeid': {
        'perioder': [
            {
                'fom': '2021-02-01',
                'tom': '2021-02-24',
                'grad': null,
                'behandlingsdager': null,
                'reisetilskudd': true,
                'avventende': null,
                'redusertVenteperiode': null
            }
        ],
        'aktivitetIkkeMulig433': [],
        'aktivitetIkkeMulig434': [],
        'aarsakAktivitetIkkeMulig433': null,
        'aarsakAktivitetIkkeMulig434': null
    },
    'friskmelding': {
        'arbeidsfoerEtterPerioden': true,
        'hensynPaaArbeidsplassen': 'Må ta det pent',
        'antarReturSammeArbeidsgiver': true,
        'antattDatoReturSammeArbeidsgiver': '2021-02-01',
        'antarReturAnnenArbeidsgiver': true,
        'tilbakemeldingReturArbeid': '2021-02-01',
        'utenArbeidsgiverAntarTilbakeIArbeid': false,
        'utenArbeidsgiverAntarTilbakeIArbeidDato': null,
        'utenArbeidsgiverTilbakemelding': null
    },
    'utdypendeOpplysninger': {
        'sykehistorie': 'Langvarig korsryggsmerter. Ømhet og smerte',
        'paavirkningArbeidsevne': 'Kan ikke utføre arbeidsoppgaver 100% som kreves fra yrket. Duplikatbuster: c043e59d-24ef-45dd-92e8-5bb07fd017a1',
        'resultatAvBehandling': 'Nei',
        'henvisningUtredningBehandling': 'Henvist til fysio',
        'grupper': [
            {
                'id': '6.2',
                'sporsmal': [
                    {
                        'id': '6.2.1',
                        'svar': 'Langvarig korsryggsmerter. Ømhet og smerte'
                    },
                    {
                        'id': '6.2.2',
                        'svar': 'Kan ikke utføre arbeidsoppgaver 100% som kreves fra yrket. Duplikatbuster: c043e59d-24ef-45dd-92e8-5bb07fd017a1'
                    },
                    {
                        'id': '6.2.3',
                        'svar': 'Nei'
                    },
                    {
                        'id': '6.2.4',
                        'svar': 'Henvist til fysio'
                    }
                ]
            }
        ]
    },
    'arbeidsevne': {
        'tilretteleggingArbeidsplass': 'Fortsett som sist.',
        'tiltakNAV': 'Pasienten har plager som er kommet tilbake etter operasjon. Det er nylig tatt MR bildet som viser forandringer i hånd som mulig må opereres. Venter på time. Det er mulig sykemledingen vil vare utover aktuell sm periode. ',
        'tiltakAndre': null
    },
    'meldingTilNav': {
        'navBoerTaTakISaken': false,
        'navBoerTaTakISakenBegrunnelse': null
    },
    'innspillTilArbeidsgiver': null,
    'tilbakedatering': {
        'dokumenterbarPasientkontakt': null,
        'tilbakedatertBegrunnelse': null
    },
    'bekreftelse': {
        'utstedelsesdato': '2021-01-31',
        'sykmelder': 'Frida Perma Frost',
        'sykmelderTlf': '94431152'
    }
}

// Integrasjonstester
export const syk1: Sykmelding = {
    'id': 'syk1',
    'startLegemeldtFravaer': '2020-01-01',
    'skalViseSkravertFelt': true,
    'identdato': '2020-01-01',
    'status': 'SENDT',
    'naermesteLederStatus': null,
    'erEgenmeldt': false,
    'erPapirsykmelding': false,
    'innsendtArbeidsgivernavn': 'arb1',
    'valgtArbeidssituasjon': 'ARBEIDSTAKER',
    'mottakendeArbeidsgiver': {
        'navn': 'arb1',
        'virksomhetsnummer': '1',
        'juridiskOrgnummer': '1'
    },
    'orgnummer': '1',
    'sendtdato': '2020-01-01T00:00:01',
    'sporsmal': {
        'arbeidssituasjon': 'ARBEIDSTAKER',
        'harForsikring': null,
        'fravaersperioder': [],
        'harAnnetFravaer': null
    },
    'pasient': {
        'fnr': '31057023263',
        'fornavn': 'Frida',
        'mellomnavn': 'Perma',
        'etternavn': 'Frost'
    },
    'arbeidsgiver': 'arb1',
    'stillingsprosent': 100,
    'diagnose': {
        'hoveddiagnose': {
            'diagnose': 'TENDINITT INA',
            'diagnosekode': 'L87',
            'diagnosesystem': 'ICPC-2'
        },
        'bidiagnoser': [
            {
                'diagnose': 'GANGLION SENE',
                'diagnosekode': 'L87',
                'diagnosesystem': 'ICPC-2'
            }
        ],
        'fravaersgrunnLovfestet': null,
        'fravaerBeskrivelse': null,
        'svangerskap': false,
        'yrkesskade': false,
        'yrkesskadeDato': '2020-01-01'
    },
    'mulighetForArbeid': {
        'perioder': [
            {
                'fom': '2020-01-01',
                'tom': '2020-01-05',
                'grad': 100,
                'behandlingsdager': null,
                'reisetilskudd': null,
                'avventende': null,
                'redusertVenteperiode': null
            }
        ],
        'aktivitetIkkeMulig433': [
            'Annet'
        ],
        'aktivitetIkkeMulig434': [
            'Annet'
        ],
        'aarsakAktivitetIkkeMulig433': 'andre årsaker til sykefravær',
        'aarsakAktivitetIkkeMulig434': 'andre årsaker til sykefravær'
    },
    'friskmelding': {
        'arbeidsfoerEtterPerioden': true,
        'hensynPaaArbeidsplassen': 'Må ta det pent',
        'antarReturSammeArbeidsgiver': true,
        'antattDatoReturSammeArbeidsgiver': '2020-01-01',
        'antarReturAnnenArbeidsgiver': true,
        'tilbakemeldingReturArbeid': '2020-01-01',
        'utenArbeidsgiverAntarTilbakeIArbeid': false,
        'utenArbeidsgiverAntarTilbakeIArbeidDato': null,
        'utenArbeidsgiverTilbakemelding': null
    },
    'utdypendeOpplysninger': {
        'sykehistorie': 'Langvarig korsryggsmerter. Ømhet og smerte',
        'paavirkningArbeidsevne': 'Kan ikke utføre arbeidsoppgaver 100% som kreves fra yrket. Duplikatbuster: d6eca6d8-1a57-46b9-bb96-10d8ff96c419',
        'resultatAvBehandling': 'Nei',
        'henvisningUtredningBehandling': 'Henvist til fysio',
        'grupper': [
            {
                'id': '6.2',
                'sporsmal': [
                    {
                        'id': '6.2.1',
                        'svar': 'Langvarig korsryggsmerter. Ømhet og smerte'
                    },
                    {
                        'id': '6.2.2',
                        'svar': 'Kan ikke utføre arbeidsoppgaver 100% som kreves fra yrket. Duplikatbuster: d6eca6d8-1a57-46b9-bb96-10d8ff96c419'
                    },
                    {
                        'id': '6.2.3',
                        'svar': 'Nei'
                    },
                    {
                        'id': '6.2.4',
                        'svar': 'Henvist til fysio'
                    }
                ]
            }
        ]
    },
    'arbeidsevne': {
        'tilretteleggingArbeidsplass': 'Fortsett som sist.',
        'tiltakNAV': 'Pasienten har plager som er kommet tilbake etter operasjon. Det er nylig tatt MR bildet som viser forandringer i hånd som mulig må opereres. Venter på time. Det er mulig sykemledingen vil vare utover aktuell sm periode. ',
        'tiltakAndre': null
    },
    'meldingTilNav': {
        'navBoerTaTakISaken': false,
        'navBoerTaTakISakenBegrunnelse': null
    },
    'innspillTilArbeidsgiver': null,
    'tilbakedatering': {
        'dokumenterbarPasientkontakt': null,
        'tilbakedatertBegrunnelse': null
    },
    'bekreftelse': {
        'utstedelsesdato': '2020-01-01',
        'sykmelder': 'Frida Perma Frost',
        'sykmelderTlf': '94431152'
    }
}
export const syk2: Sykmelding = {
    'id': 'syk2',
    'startLegemeldtFravaer': '2020-01-01',
    'skalViseSkravertFelt': true,
    'identdato': '2020-01-01',
    'status': 'SENDT',
    'naermesteLederStatus': null,
    'erEgenmeldt': false,
    'erPapirsykmelding': false,
    'innsendtArbeidsgivernavn': 'arb2',
    'valgtArbeidssituasjon': 'ARBEIDSTAKER',
    'mottakendeArbeidsgiver': {
        'navn': 'arb2',
        'virksomhetsnummer': '2',
        'juridiskOrgnummer': '2'
    },
    'orgnummer': '2',
    'sendtdato': '2020-01-01T00:00:01',
    'sporsmal': {
        'arbeidssituasjon': 'ARBEIDSTAKER',
        'harForsikring': null,
        'fravaersperioder': [],
        'harAnnetFravaer': null
    },
    'pasient': {
        'fnr': '31057023263',
        'fornavn': 'Frida',
        'mellomnavn': 'Perma',
        'etternavn': 'Frost'
    },
    'arbeidsgiver': 'arb2',
    'stillingsprosent': 100,
    'diagnose': {
        'hoveddiagnose': {
            'diagnose': 'TENDINITT INA',
            'diagnosekode': 'L87',
            'diagnosesystem': 'ICPC-2'
        },
        'bidiagnoser': [
            {
                'diagnose': 'GANGLION SENE',
                'diagnosekode': 'L87',
                'diagnosesystem': 'ICPC-2'
            }
        ],
        'fravaersgrunnLovfestet': null,
        'fravaerBeskrivelse': null,
        'svangerskap': false,
        'yrkesskade': false,
        'yrkesskadeDato': '2020-01-01'
    },
    'mulighetForArbeid': {
        'perioder': [
            {
                'fom': '2020-01-01',
                'tom': '2020-01-20',
                'grad': 100,
                'behandlingsdager': null,
                'reisetilskudd': null,
                'avventende': null,
                'redusertVenteperiode': null
            }
        ],
        'aktivitetIkkeMulig433': [
            'Annet'
        ],
        'aktivitetIkkeMulig434': [
            'Annet'
        ],
        'aarsakAktivitetIkkeMulig433': 'andre årsaker til sykefravær',
        'aarsakAktivitetIkkeMulig434': 'andre årsaker til sykefravær'
    },
    'friskmelding': {
        'arbeidsfoerEtterPerioden': true,
        'hensynPaaArbeidsplassen': 'Må ta det pent',
        'antarReturSammeArbeidsgiver': true,
        'antattDatoReturSammeArbeidsgiver': '2020-01-01',
        'antarReturAnnenArbeidsgiver': true,
        'tilbakemeldingReturArbeid': '2020-01-01',
        'utenArbeidsgiverAntarTilbakeIArbeid': false,
        'utenArbeidsgiverAntarTilbakeIArbeidDato': null,
        'utenArbeidsgiverTilbakemelding': null
    },
    'utdypendeOpplysninger': {
        'sykehistorie': 'Langvarig korsryggsmerter. Ømhet og smerte',
        'paavirkningArbeidsevne': 'Kan ikke utføre arbeidsoppgaver 100% som kreves fra yrket. Duplikatbuster: d6eca6d8-1a57-46b9-bb96-10d8ff96c419',
        'resultatAvBehandling': 'Nei',
        'henvisningUtredningBehandling': 'Henvist til fysio',
        'grupper': [
            {
                'id': '6.2',
                'sporsmal': [
                    {
                        'id': '6.2.1',
                        'svar': 'Langvarig korsryggsmerter. Ømhet og smerte'
                    },
                    {
                        'id': '6.2.2',
                        'svar': 'Kan ikke utføre arbeidsoppgaver 100% som kreves fra yrket. Duplikatbuster: d6eca6d8-1a57-46b9-bb96-10d8ff96c419'
                    },
                    {
                        'id': '6.2.3',
                        'svar': 'Nei'
                    },
                    {
                        'id': '6.2.4',
                        'svar': 'Henvist til fysio'
                    }
                ]
            }
        ]
    },
    'arbeidsevne': {
        'tilretteleggingArbeidsplass': 'Fortsett som sist.',
        'tiltakNAV': 'Pasienten har plager som er kommet tilbake etter operasjon. Det er nylig tatt MR bildet som viser forandringer i hånd som mulig må opereres. Venter på time. Det er mulig sykemledingen vil vare utover aktuell sm periode. ',
        'tiltakAndre': null
    },
    'meldingTilNav': {
        'navBoerTaTakISaken': false,
        'navBoerTaTakISakenBegrunnelse': null
    },
    'innspillTilArbeidsgiver': null,
    'tilbakedatering': {
        'dokumenterbarPasientkontakt': null,
        'tilbakedatertBegrunnelse': null
    },
    'bekreftelse': {
        'utstedelsesdato': '2020-01-01',
        'sykmelder': 'Frida Perma Frost',
        'sykmelderTlf': '94431152'
    }
}
export const syk3: Sykmelding = {
    'id': 'syk3',
    'startLegemeldtFravaer': '2020-01-10',
    'skalViseSkravertFelt': true,
    'identdato': '2020-01-10',
    'status': 'SENDT',
    'naermesteLederStatus': null,
    'erEgenmeldt': false,
    'erPapirsykmelding': false,
    'innsendtArbeidsgivernavn': 'arb3',
    'valgtArbeidssituasjon': 'ARBEIDSTAKER',
    'mottakendeArbeidsgiver': {
        'navn': 'arb3',
        'virksomhetsnummer': '3',
        'juridiskOrgnummer': '3'
    },
    'orgnummer': '3',
    'sendtdato': '2020-01-10T00:00:01',
    'sporsmal': {
        'arbeidssituasjon': 'ARBEIDSTAKER',
        'harForsikring': null,
        'fravaersperioder': [],
        'harAnnetFravaer': null
    },
    'pasient': {
        'fnr': '31057023263',
        'fornavn': 'Frida',
        'mellomnavn': 'Perma',
        'etternavn': 'Frost'
    },
    'arbeidsgiver': 'arb3',
    'stillingsprosent': 100,
    'diagnose': {
        'hoveddiagnose': {
            'diagnose': 'TENDINITT INA',
            'diagnosekode': 'L87',
            'diagnosesystem': 'ICPC-2'
        },
        'bidiagnoser': [
            {
                'diagnose': 'GANGLION SENE',
                'diagnosekode': 'L87',
                'diagnosesystem': 'ICPC-2'
            }
        ],
        'fravaersgrunnLovfestet': null,
        'fravaerBeskrivelse': null,
        'svangerskap': false,
        'yrkesskade': false,
        'yrkesskadeDato': '2020-01-10'
    },
    'mulighetForArbeid': {
        'perioder': [
            {
                'fom': '2020-01-10',
                'tom': '2020-01-20',
                'grad': 100,
                'behandlingsdager': null,
                'reisetilskudd': null,
                'avventende': null,
                'redusertVenteperiode': null
            }
        ],
        'aktivitetIkkeMulig433': [
            'Annet'
        ],
        'aktivitetIkkeMulig434': [
            'Annet'
        ],
        'aarsakAktivitetIkkeMulig433': 'andre årsaker til sykefravær',
        'aarsakAktivitetIkkeMulig434': 'andre årsaker til sykefravær'
    },
    'friskmelding': {
        'arbeidsfoerEtterPerioden': true,
        'hensynPaaArbeidsplassen': 'Må ta det pent',
        'antarReturSammeArbeidsgiver': true,
        'antattDatoReturSammeArbeidsgiver': '2020-01-10',
        'antarReturAnnenArbeidsgiver': true,
        'tilbakemeldingReturArbeid': '2020-01-10',
        'utenArbeidsgiverAntarTilbakeIArbeid': false,
        'utenArbeidsgiverAntarTilbakeIArbeidDato': null,
        'utenArbeidsgiverTilbakemelding': null
    },
    'utdypendeOpplysninger': {
        'sykehistorie': 'Langvarig korsryggsmerter. Ømhet og smerte',
        'paavirkningArbeidsevne': 'Kan ikke utføre arbeidsoppgaver 100% som kreves fra yrket. Duplikatbuster: d6eca6d8-1a57-46b9-bb96-10d8ff96c419',
        'resultatAvBehandling': 'Nei',
        'henvisningUtredningBehandling': 'Henvist til fysio',
        'grupper': [
            {
                'id': '6.2',
                'sporsmal': [
                    {
                        'id': '6.2.1',
                        'svar': 'Langvarig korsryggsmerter. Ømhet og smerte'
                    },
                    {
                        'id': '6.2.2',
                        'svar': 'Kan ikke utføre arbeidsoppgaver 100% som kreves fra yrket. Duplikatbuster: d6eca6d8-1a57-46b9-bb96-10d8ff96c419'
                    },
                    {
                        'id': '6.2.3',
                        'svar': 'Nei'
                    },
                    {
                        'id': '6.2.4',
                        'svar': 'Henvist til fysio'
                    }
                ]
            }
        ]
    },
    'arbeidsevne': {
        'tilretteleggingArbeidsplass': 'Fortsett som sist.',
        'tiltakNAV': 'Pasienten har plager som er kommet tilbake etter operasjon. Det er nylig tatt MR bildet som viser forandringer i hånd som mulig må opereres. Venter på time. Det er mulig sykemledingen vil vare utover aktuell sm periode. ',
        'tiltakAndre': null
    },
    'meldingTilNav': {
        'navBoerTaTakISaken': false,
        'navBoerTaTakISakenBegrunnelse': null
    },
    'innspillTilArbeidsgiver': null,
    'tilbakedatering': {
        'dokumenterbarPasientkontakt': null,
        'tilbakedatertBegrunnelse': null
    },
    'bekreftelse': {
        'utstedelsesdato': '2020-01-10',
        'sykmelder': 'Frida Perma Frost',
        'sykmelderTlf': '94431152'
    }
}
export const syk4: Sykmelding = {
    'id': 'syk4',
    'startLegemeldtFravaer': '2020-01-06',
    'skalViseSkravertFelt': true,
    'identdato': '2020-01-06',
    'status': 'SENDT',
    'naermesteLederStatus': null,
    'erEgenmeldt': false,
    'erPapirsykmelding': false,
    'innsendtArbeidsgivernavn': 'arb1',
    'valgtArbeidssituasjon': 'ARBEIDSTAKER',
    'mottakendeArbeidsgiver': {
        'navn': 'arb1',
        'virksomhetsnummer': '1',
        'juridiskOrgnummer': '1'
    },
    'orgnummer': '1',
    'sendtdato': '2020-01-06T00:00:01',
    'sporsmal': {
        'arbeidssituasjon': 'ARBEIDSTAKER',
        'harForsikring': null,
        'fravaersperioder': [],
        'harAnnetFravaer': null
    },
    'pasient': {
        'fnr': '31057023263',
        'fornavn': 'Frida',
        'mellomnavn': 'Perma',
        'etternavn': 'Frost'
    },
    'arbeidsgiver': 'arb1',
    'stillingsprosent': 100,
    'diagnose': {
        'hoveddiagnose': {
            'diagnose': 'TENDINITT INA',
            'diagnosekode': 'L87',
            'diagnosesystem': 'ICPC-2'
        },
        'bidiagnoser': [
            {
                'diagnose': 'GANGLION SENE',
                'diagnosekode': 'L87',
                'diagnosesystem': 'ICPC-2'
            }
        ],
        'fravaersgrunnLovfestet': null,
        'fravaerBeskrivelse': null,
        'svangerskap': false,
        'yrkesskade': false,
        'yrkesskadeDato': '2020-01-06'
    },
    'mulighetForArbeid': {
        'perioder': [
            {
                'fom': '2020-01-06',
                'tom': '2020-01-20',
                'grad': 100,
                'behandlingsdager': null,
                'reisetilskudd': null,
                'avventende': null,
                'redusertVenteperiode': null
            }
        ],
        'aktivitetIkkeMulig433': [
            'Annet'
        ],
        'aktivitetIkkeMulig434': [
            'Annet'
        ],
        'aarsakAktivitetIkkeMulig433': 'andre årsaker til sykefravær',
        'aarsakAktivitetIkkeMulig434': 'andre årsaker til sykefravær'
    },
    'friskmelding': {
        'arbeidsfoerEtterPerioden': true,
        'hensynPaaArbeidsplassen': 'Må ta det pent',
        'antarReturSammeArbeidsgiver': true,
        'antattDatoReturSammeArbeidsgiver': '2020-01-06',
        'antarReturAnnenArbeidsgiver': true,
        'tilbakemeldingReturArbeid': '2020-01-06',
        'utenArbeidsgiverAntarTilbakeIArbeid': false,
        'utenArbeidsgiverAntarTilbakeIArbeidDato': null,
        'utenArbeidsgiverTilbakemelding': null
    },
    'utdypendeOpplysninger': {
        'sykehistorie': 'Langvarig korsryggsmerter. Ømhet og smerte',
        'paavirkningArbeidsevne': 'Kan ikke utføre arbeidsoppgaver 100% som kreves fra yrket. Duplikatbuster: d6eca6d8-1a57-46b9-bb96-10d8ff96c419',
        'resultatAvBehandling': 'Nei',
        'henvisningUtredningBehandling': 'Henvist til fysio',
        'grupper': [
            {
                'id': '6.2',
                'sporsmal': [
                    {
                        'id': '6.2.1',
                        'svar': 'Langvarig korsryggsmerter. Ømhet og smerte'
                    },
                    {
                        'id': '6.2.2',
                        'svar': 'Kan ikke utføre arbeidsoppgaver 100% som kreves fra yrket. Duplikatbuster: d6eca6d8-1a57-46b9-bb96-10d8ff96c419'
                    },
                    {
                        'id': '6.2.3',
                        'svar': 'Nei'
                    },
                    {
                        'id': '6.2.4',
                        'svar': 'Henvist til fysio'
                    }
                ]
            }
        ]
    },
    'arbeidsevne': {
        'tilretteleggingArbeidsplass': 'Fortsett som sist.',
        'tiltakNAV': 'Pasienten har plager som er kommet tilbake etter operasjon. Det er nylig tatt MR bildet som viser forandringer i hånd som mulig må opereres. Venter på time. Det er mulig sykemledingen vil vare utover aktuell sm periode. ',
        'tiltakAndre': null
    },
    'meldingTilNav': {
        'navBoerTaTakISaken': false,
        'navBoerTaTakISakenBegrunnelse': null
    },
    'innspillTilArbeidsgiver': null,
    'tilbakedatering': {
        'dokumenterbarPasientkontakt': null,
        'tilbakedatertBegrunnelse': null
    },
    'bekreftelse': {
        'utstedelsesdato': '2020-01-06',
        'sykmelder': 'Frida Perma Frost',
        'sykmelderTlf': '94431152'
    }
}
export const syk5: Sykmelding = {
    'id': 'syk5',
    'startLegemeldtFravaer': '2020-01-21',
    'skalViseSkravertFelt': true,
    'identdato': '2020-01-21',
    'status': 'SENDT',
    'naermesteLederStatus': null,
    'erEgenmeldt': false,
    'erPapirsykmelding': false,
    'innsendtArbeidsgivernavn': 'arb1',
    'valgtArbeidssituasjon': 'ARBEIDSTAKER',
    'mottakendeArbeidsgiver': {
        'navn': 'arb1',
        'virksomhetsnummer': '1',
        'juridiskOrgnummer': '1'
    },
    'orgnummer': '1',
    'sendtdato': '2020-01-21T00:00:01',
    'sporsmal': {
        'arbeidssituasjon': 'ARBEIDSTAKER',
        'harForsikring': null,
        'fravaersperioder': [],
        'harAnnetFravaer': null
    },
    'pasient': {
        'fnr': '31057023263',
        'fornavn': 'Frida',
        'mellomnavn': 'Perma',
        'etternavn': 'Frost'
    },
    'arbeidsgiver': 'arb1',
    'stillingsprosent': 100,
    'diagnose': {
        'hoveddiagnose': {
            'diagnose': 'TENDINITT INA',
            'diagnosekode': 'L87',
            'diagnosesystem': 'ICPC-2'
        },
        'bidiagnoser': [
            {
                'diagnose': 'GANGLION SENE',
                'diagnosekode': 'L87',
                'diagnosesystem': 'ICPC-2'
            }
        ],
        'fravaersgrunnLovfestet': null,
        'fravaerBeskrivelse': null,
        'svangerskap': false,
        'yrkesskade': false,
        'yrkesskadeDato': '2020-01-21'
    },
    'mulighetForArbeid': {
        'perioder': [
            {
                'fom': '2020-01-21',
                'tom': '2020-01-25',
                'grad': 100,
                'behandlingsdager': null,
                'reisetilskudd': null,
                'avventende': null,
                'redusertVenteperiode': null
            }
        ],
        'aktivitetIkkeMulig433': [
            'Annet'
        ],
        'aktivitetIkkeMulig434': [
            'Annet'
        ],
        'aarsakAktivitetIkkeMulig433': 'andre årsaker til sykefravær',
        'aarsakAktivitetIkkeMulig434': 'andre årsaker til sykefravær'
    },
    'friskmelding': {
        'arbeidsfoerEtterPerioden': true,
        'hensynPaaArbeidsplassen': 'Må ta det pent',
        'antarReturSammeArbeidsgiver': true,
        'antattDatoReturSammeArbeidsgiver': '2020-01-21',
        'antarReturAnnenArbeidsgiver': true,
        'tilbakemeldingReturArbeid': '2020-01-21',
        'utenArbeidsgiverAntarTilbakeIArbeid': false,
        'utenArbeidsgiverAntarTilbakeIArbeidDato': null,
        'utenArbeidsgiverTilbakemelding': null
    },
    'utdypendeOpplysninger': {
        'sykehistorie': 'Langvarig korsryggsmerter. Ømhet og smerte',
        'paavirkningArbeidsevne': 'Kan ikke utføre arbeidsoppgaver 100% som kreves fra yrket. Duplikatbuster: d6eca6d8-1a57-46b9-bb96-10d8ff96c419',
        'resultatAvBehandling': 'Nei',
        'henvisningUtredningBehandling': 'Henvist til fysio',
        'grupper': [
            {
                'id': '6.2',
                'sporsmal': [
                    {
                        'id': '6.2.1',
                        'svar': 'Langvarig korsryggsmerter. Ømhet og smerte'
                    },
                    {
                        'id': '6.2.2',
                        'svar': 'Kan ikke utføre arbeidsoppgaver 100% som kreves fra yrket. Duplikatbuster: d6eca6d8-1a57-46b9-bb96-10d8ff96c419'
                    },
                    {
                        'id': '6.2.3',
                        'svar': 'Nei'
                    },
                    {
                        'id': '6.2.4',
                        'svar': 'Henvist til fysio'
                    }
                ]
            }
        ]
    },
    'arbeidsevne': {
        'tilretteleggingArbeidsplass': 'Fortsett som sist.',
        'tiltakNAV': 'Pasienten har plager som er kommet tilbake etter operasjon. Det er nylig tatt MR bildet som viser forandringer i hånd som mulig må opereres. Venter på time. Det er mulig sykemledingen vil vare utover aktuell sm periode. ',
        'tiltakAndre': null
    },
    'meldingTilNav': {
        'navBoerTaTakISaken': false,
        'navBoerTaTakISakenBegrunnelse': null
    },
    'innspillTilArbeidsgiver': null,
    'tilbakedatering': {
        'dokumenterbarPasientkontakt': null,
        'tilbakedatertBegrunnelse': null
    },
    'bekreftelse': {
        'utstedelsesdato': '2020-01-21',
        'sykmelder': 'Frida Perma Frost',
        'sykmelderTlf': '94431152'
    }
}
export const syk7: Sykmelding = {
    'id': 'syk7',
    'startLegemeldtFravaer': '2020-01-01',
    'skalViseSkravertFelt': true,
    'identdato': '2020-01-10',
    'status': 'SENDT',
    'naermesteLederStatus': null,
    'erEgenmeldt': false,
    'erPapirsykmelding': false,
    'innsendtArbeidsgivernavn': 'arb4',
    'valgtArbeidssituasjon': 'ARBEIDSTAKER',
    'mottakendeArbeidsgiver': {
        'navn': 'arb4',
        'virksomhetsnummer': '4',
        'juridiskOrgnummer': '4'
    },
    'orgnummer': '4',
    'sendtdato': '2020-01-10T00:00:01',
    'sporsmal': {
        'arbeidssituasjon': 'ARBEIDSTAKER',
        'harForsikring': null,
        'fravaersperioder': [],
        'harAnnetFravaer': null
    },
    'pasient': {
        'fnr': '31057023263',
        'fornavn': 'Frida',
        'mellomnavn': 'Perma',
        'etternavn': 'Frost'
    },
    'arbeidsgiver': 'arb4',
    'stillingsprosent': 100,
    'diagnose': {
        'hoveddiagnose': {
            'diagnose': 'TENDINITT INA',
            'diagnosekode': 'L87',
            'diagnosesystem': 'ICPC-2'
        },
        'bidiagnoser': [
            {
                'diagnose': 'GANGLION SENE',
                'diagnosekode': 'L87',
                'diagnosesystem': 'ICPC-2'
            }
        ],
        'fravaersgrunnLovfestet': null,
        'fravaerBeskrivelse': null,
        'svangerskap': false,
        'yrkesskade': false,
        'yrkesskadeDato': '2020-01-10'
    },
    'mulighetForArbeid': {
        'perioder': [
            {
                'fom': '2020-01-10',
                'tom': '2020-01-25',
                'grad': 100,
                'behandlingsdager': null,
                'reisetilskudd': null,
                'avventende': null,
                'redusertVenteperiode': null
            }
        ],
        'aktivitetIkkeMulig433': [
            'Annet'
        ],
        'aktivitetIkkeMulig434': [
            'Annet'
        ],
        'aarsakAktivitetIkkeMulig433': 'andre årsaker til sykefravær',
        'aarsakAktivitetIkkeMulig434': 'andre årsaker til sykefravær'
    },
    'friskmelding': {
        'arbeidsfoerEtterPerioden': true,
        'hensynPaaArbeidsplassen': 'Må ta det pent',
        'antarReturSammeArbeidsgiver': true,
        'antattDatoReturSammeArbeidsgiver': '2020-01-10',
        'antarReturAnnenArbeidsgiver': true,
        'tilbakemeldingReturArbeid': '2020-01-10',
        'utenArbeidsgiverAntarTilbakeIArbeid': false,
        'utenArbeidsgiverAntarTilbakeIArbeidDato': null,
        'utenArbeidsgiverTilbakemelding': null
    },
    'utdypendeOpplysninger': {
        'sykehistorie': 'Langvarig korsryggsmerter. Ømhet og smerte',
        'paavirkningArbeidsevne': 'Kan ikke utføre arbeidsoppgaver 100% som kreves fra yrket. Duplikatbuster: d6eca6d8-1a57-46b9-bb96-10d8ff96c419',
        'resultatAvBehandling': 'Nei',
        'henvisningUtredningBehandling': 'Henvist til fysio',
        'grupper': [
            {
                'id': '6.2',
                'sporsmal': [
                    {
                        'id': '6.2.1',
                        'svar': 'Langvarig korsryggsmerter. Ømhet og smerte'
                    },
                    {
                        'id': '6.2.2',
                        'svar': 'Kan ikke utføre arbeidsoppgaver 100% som kreves fra yrket. Duplikatbuster: d6eca6d8-1a57-46b9-bb96-10d8ff96c419'
                    },
                    {
                        'id': '6.2.3',
                        'svar': 'Nei'
                    },
                    {
                        'id': '6.2.4',
                        'svar': 'Henvist til fysio'
                    }
                ]
            }
        ]
    },
    'arbeidsevne': {
        'tilretteleggingArbeidsplass': 'Fortsett som sist.',
        'tiltakNAV': 'Pasienten har plager som er kommet tilbake etter operasjon. Det er nylig tatt MR bildet som viser forandringer i hånd som mulig må opereres. Venter på time. Det er mulig sykemledingen vil vare utover aktuell sm periode. ',
        'tiltakAndre': null
    },
    'meldingTilNav': {
        'navBoerTaTakISaken': false,
        'navBoerTaTakISakenBegrunnelse': null
    },
    'innspillTilArbeidsgiver': null,
    'tilbakedatering': {
        'dokumenterbarPasientkontakt': null,
        'tilbakedatertBegrunnelse': null
    },
    'bekreftelse': {
        'utstedelsesdato': '2020-01-10',
        'sykmelder': 'Frida Perma Frost',
        'sykmelderTlf': '94431152'
    }
}
export const syk8: Sykmelding = {
    'id': 'syk8',
    'startLegemeldtFravaer': '2020-01-01',
    'skalViseSkravertFelt': true,
    'identdato': '2020-02-01',
    'status': 'SENDT',
    'naermesteLederStatus': null,
    'erEgenmeldt': false,
    'erPapirsykmelding': false,
    'innsendtArbeidsgivernavn': 'arb4',
    'valgtArbeidssituasjon': 'ARBEIDSTAKER',
    'mottakendeArbeidsgiver': {
        'navn': 'arb4',
        'virksomhetsnummer': '4',
        'juridiskOrgnummer': '4'
    },
    'orgnummer': '4',
    'sendtdato': '2020-02-01T00:00:01',
    'sporsmal': {
        'arbeidssituasjon': 'ARBEIDSTAKER',
        'harForsikring': null,
        'fravaersperioder': [],
        'harAnnetFravaer': null
    },
    'pasient': {
        'fnr': '31057023263',
        'fornavn': 'Frida',
        'mellomnavn': 'Perma',
        'etternavn': 'Frost'
    },
    'arbeidsgiver': 'arb4',
    'stillingsprosent': 100,
    'diagnose': {
        'hoveddiagnose': {
            'diagnose': 'TENDINITT INA',
            'diagnosekode': 'L87',
            'diagnosesystem': 'ICPC-2'
        },
        'bidiagnoser': [
            {
                'diagnose': 'GANGLION SENE',
                'diagnosekode': 'L87',
                'diagnosesystem': 'ICPC-2'
            }
        ],
        'fravaersgrunnLovfestet': null,
        'fravaerBeskrivelse': null,
        'svangerskap': false,
        'yrkesskade': false,
        'yrkesskadeDato': '2020-02-01'
    },
    'mulighetForArbeid': {
        'perioder': [
            {
                'fom': '2020-02-01',
                'tom': '2020-02-05',
                'grad': 100,
                'behandlingsdager': null,
                'reisetilskudd': null,
                'avventende': null,
                'redusertVenteperiode': null
            }
        ],
        'aktivitetIkkeMulig433': [
            'Annet'
        ],
        'aktivitetIkkeMulig434': [
            'Annet'
        ],
        'aarsakAktivitetIkkeMulig433': 'andre årsaker til sykefravær',
        'aarsakAktivitetIkkeMulig434': 'andre årsaker til sykefravær'
    },
    'friskmelding': {
        'arbeidsfoerEtterPerioden': true,
        'hensynPaaArbeidsplassen': 'Må ta det pent',
        'antarReturSammeArbeidsgiver': true,
        'antattDatoReturSammeArbeidsgiver': '2020-02-01',
        'antarReturAnnenArbeidsgiver': true,
        'tilbakemeldingReturArbeid': '2020-02-01',
        'utenArbeidsgiverAntarTilbakeIArbeid': false,
        'utenArbeidsgiverAntarTilbakeIArbeidDato': null,
        'utenArbeidsgiverTilbakemelding': null
    },
    'utdypendeOpplysninger': {
        'sykehistorie': 'Langvarig korsryggsmerter. Ømhet og smerte',
        'paavirkningArbeidsevne': 'Kan ikke utføre arbeidsoppgaver 100% som kreves fra yrket. Duplikatbuster: d6eca6d8-1a57-46b9-bb96-10d8ff96c419',
        'resultatAvBehandling': 'Nei',
        'henvisningUtredningBehandling': 'Henvist til fysio',
        'grupper': [
            {
                'id': '6.2',
                'sporsmal': [
                    {
                        'id': '6.2.1',
                        'svar': 'Langvarig korsryggsmerter. Ømhet og smerte'
                    },
                    {
                        'id': '6.2.2',
                        'svar': 'Kan ikke utføre arbeidsoppgaver 100% som kreves fra yrket. Duplikatbuster: d6eca6d8-1a57-46b9-bb96-10d8ff96c419'
                    },
                    {
                        'id': '6.2.3',
                        'svar': 'Nei'
                    },
                    {
                        'id': '6.2.4',
                        'svar': 'Henvist til fysio'
                    }
                ]
            }
        ]
    },
    'arbeidsevne': {
        'tilretteleggingArbeidsplass': 'Fortsett som sist.',
        'tiltakNAV': 'Pasienten har plager som er kommet tilbake etter operasjon. Det er nylig tatt MR bildet som viser forandringer i hånd som mulig må opereres. Venter på time. Det er mulig sykemledingen vil vare utover aktuell sm periode. ',
        'tiltakAndre': null
    },
    'meldingTilNav': {
        'navBoerTaTakISaken': false,
        'navBoerTaTakISakenBegrunnelse': null
    },
    'innspillTilArbeidsgiver': null,
    'tilbakedatering': {
        'dokumenterbarPasientkontakt': null,
        'tilbakedatertBegrunnelse': null
    },
    'bekreftelse': {
        'utstedelsesdato': '2020-02-01',
        'sykmelder': 'Frida Perma Frost',
        'sykmelderTlf': '94431152'
    }
}

export const sykmeldinger: Sykmelding[] = [
    frilanserSm,
    arbeidstaker100Sm,
    arbeidstaker50Sm,
    arbeidstakerBehandlingsdagerSm,
    arbeidstakerAvbruttSm,
    arbeidsledigSm,
    arbeidsledigKvitteringSm,
    selvstendingSm,
    arbeidstakerReisetilskudd,
    syk1,
    syk2,
    syk3,
    syk4,
    syk5,
    syk7,
    syk8,
]
