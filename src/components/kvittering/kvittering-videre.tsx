import dayjs from 'dayjs'
import { AlertStripeInfo } from 'nav-frontend-alertstriper'
import Lenke from 'nav-frontend-lenker'
import { Element,Normaltekst, Undertittel } from 'nav-frontend-typografi'
import React from 'react'

import { useAppStore } from '../../data/stores/app-store'
import { tekst } from '../../utils/tekster'

const KvitteringVidere = () => {
    const { valgtSoknad } = useAppStore()

    if (dayjs(new Date()).diff(dayjs(valgtSoknad!.opprettetDato), 'day') > 30) {
        return null
    }

    return (
        <AlertStripeInfo className="opplysninger">
            <Undertittel tag="h3">{tekst('kvittering.hva-skjer-videre')}</Undertittel>
            <div className="avsnitt">
                <Element tag="h2">{tekst('kvittering.nav-behandler-soknaden')}</Element>
                <Normaltekst tag="span">{tekst('kvittering.saksbehandling-avhenger-av')} </Normaltekst>
                <Lenke href={tekst('kvittering.finn-ut.url')}>
                    <Normaltekst tag="span">{tekst('kvittering.finn-ut')}</Normaltekst>
                </Lenke>
            </div>
            <div className="avsnitt">
                <Element tag="h2">{tekst('kvittering.naar-blir-pengene')}</Element>
                <Normaltekst tag="span">{tekst('kvittering.det-er-ulike-regler')} </Normaltekst>
                <Lenke href={tekst('kvittering.se-hva.url')}>
                    <Normaltekst tag="span">{tekst('kvittering.se-hva')}</Normaltekst>
                </Lenke>
            </div>
        </AlertStripeInfo>
    )
}

export default KvitteringVidere
