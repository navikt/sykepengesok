import { Normaltekst, UndertekstBold } from 'nav-frontend-typografi'
import React from 'react'

import { useAppStore } from '../../data/stores/app-store'
import { tekst } from '../../utils/tekster'

const ArbeidssituasjonInfo = () => {
    const { valgtSykmelding } = useAppStore()


    if (valgtSykmelding?.valgtArbeidssituasjon) {

        return (
            <div className="avsnitt">
                <UndertekstBold tag="h3"
                    className="avsnitt-hode">{tekst('din-sykmelding.arbeidssituasjon.tittel.2')}</UndertekstBold>
                <Normaltekst>{tekst(`din-sykmelding.arbeidssituasjon.alternativ.${valgtSykmelding.valgtArbeidssituasjon.toLowerCase()}` as any)}</Normaltekst>
            </div>
        )
    }


    return null

}

export default ArbeidssituasjonInfo
