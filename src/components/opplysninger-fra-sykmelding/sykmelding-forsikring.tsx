import { Normaltekst, UndertekstBold } from 'nav-frontend-typografi'
import React from 'react'

import { useAppStore } from '../../data/stores/app-store'
import { tekst } from '../../utils/tekster'

const ForsikringInfo = () => {
    const { valgtSykmelding } = useAppStore()

    if ((valgtSykmelding?.valgtArbeidssituasjon === 'FRILANSER'
        || valgtSykmelding?.valgtArbeidssituasjon === 'NAERINGSDRIVENDE')
        && valgtSykmelding.sporsmal.harForsikring !== null) {

        const nokkel = valgtSykmelding.sporsmal.harForsikring
            ? 'sykepengesoknad.sykmelding-utdrag.forsikring-ja'
            : 'sykepengesoknad.sykmelding-utdrag.forsikring-nei'

        return (
            <div className="avsnitt">
                <UndertekstBold tag="h3" className="avsnitt-hode">
                    {tekst('sykepengesoknad.sykmelding-utdrag.forsikring')}
                </UndertekstBold>
                <Normaltekst>{tekst(nokkel)}</Normaltekst>
            </div>
        )
    }
    return null
}

export default ForsikringInfo
