import { Normaltekst, UndertekstBold } from 'nav-frontend-typografi'
import React from 'react'

import { useAppStore } from '../../data/stores/app-store'
import { tekst } from '../../utils/tekster'

const ArbeidsgiverInfo = () => {
    const { valgtSykmelding } = useAppStore()

    if (valgtSykmelding?.mottakendeArbeidsgiver?.navn) {
        return (
            <div className="avsnitt">
                <UndertekstBold tag="h3" className="avsnitt-hode">
                    {tekst('sykepengesoknad.sykmelding-utdrag.arbeidsgiver')}
                </UndertekstBold>
                <Normaltekst>{valgtSykmelding.mottakendeArbeidsgiver.navn}</Normaltekst>
            </div>
        )
    }
    return null
}

export default ArbeidsgiverInfo
