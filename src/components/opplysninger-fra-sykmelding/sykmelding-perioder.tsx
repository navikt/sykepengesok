import dayjs from 'dayjs'
import { Normaltekst, UndertekstBold } from 'nav-frontend-typografi'
import React from 'react'

import { useAppStore } from '../../data/stores/app-store'
import { SykmeldingPeriode } from '../../types/types'
import { getDuration } from '../../utils/dato-utils'
import { erOppdelt } from '../../utils/periode-utils'
import { sorterPerioderEldsteFoerst } from '../../utils/sykmelding-utils'
import { tekst } from '../../utils/tekster'
import Bjorn from '../sporsmal/bjorn/bjorn'
import Vis from '../vis'

const SykmeldingPerioder = () => {
    const { valgtSoknad, valgtSykmelding } = useAppStore()

    if (!valgtSykmelding) {
        return null
    }

    return (
        <div className="sykmelding-perioder">
            {sorterPerioderEldsteFoerst(valgtSykmelding.mulighetForArbeid.perioder).map((periode: SykmeldingPeriode, index: number) => {
                const fom = dayjs(periode.fom).format('D. MMM')
                const tom = dayjs(periode.tom).format('D. MMM YYYY')
                const dager = getDuration(new Date(periode.fom), new Date(periode.tom)) + ' dager'

                return (
                    <div className="avsnitt" key={index}>
                        <UndertekstBold tag="h3" className="avsnitt-hode">
                            {tekst('din-sykmelding.periode.tittel')}
                        </UndertekstBold>
                        <Normaltekst><strong>{fom} - {tom}</strong> &bull; {dager}</Normaltekst>

                        <Vis hvis={periode.grad}>
                            <Normaltekst>
                                {periode.grad} {tekst('din-sykmelding.periode.prosent-sykmeldt')}
                            </Normaltekst>
                        </Vis>

                        <Vis hvis={periode.behandlingsdager}>
                            <Normaltekst>
                                <Vis hvis={periode.behandlingsdager! > 1}>
                                    {periode.behandlingsdager} {tekst('din-sykmelding.periode.behandlingsdager')}
                                </Vis>
                                <Vis hvis={periode.behandlingsdager! === 1}>
                                    {tekst('din-sykmelding.periode.behandlingsdag')}
                                </Vis>
                            </Normaltekst>
                        </Vis>
                    </div>
                )
            })}
            <Vis hvis={erOppdelt(valgtSoknad!, valgtSykmelding)}>
                <Bjorn className="" nokkel="sykepengesoknad.sykmelding-utdrag.oppdelt.bjorn" />
            </Vis>
        </div>
    )
}

export default SykmeldingPerioder
