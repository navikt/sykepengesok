import './opplysninger.less'

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { RouteParams } from '../../app'
import { useAppStore } from '../../data/stores/app-store'
import { RSSoknadstatus } from '../../types/rs-types/rs-soknadstatus'
import { tekst } from '../../utils/tekster'
import Utvidbar from '../utvidbar/utvidbar'
import ArbeidsgiverInfo from './arbeidsgiver-info'
import ArbeidssituasjonInfo from './arbeidssituasjon-info'
import plasterHover from './plaster-hover.svg'
import plaster from './plaster.svg'
import SykmeldingDato from './sykmelding-dato'
import ForsikringInfo from './sykmelding-forsikring'
import FravaersperioderInfo from './sykmelding-fravaersperioder'
import SykmeldingPerioder from './sykmelding-perioder'

interface OpplysningerProps {
    ekspandert: boolean;
}

const Opplysninger = ({ ekspandert }: OpplysningerProps) => {
    const valgtSoknad = useAppStore().valgtSoknad!
    const [ apen, setApen ] = useState<boolean>(ekspandert)
    const { stegId } = useParams<RouteParams>()

    useEffect(() => {
        const tidligere = valgtSoknad.status === RSSoknadstatus.SENDT
        const stegNo = parseInt(stegId)
        setApen(!tidligere && stegNo === 1)
    }, [ valgtSoknad.status, stegId ])

    return (
        <Utvidbar className={'ekspander' + (apen ? ' apen' : '')}
            ikon={plaster} ikonHover={plasterHover} erApen={apen}
            tittel={tekst('sykepengesoknad.sykmelding-utdrag.tittel')}
            ikonAltTekst=""
        >
            <div className="opplysninger">
                {apen}
                <SykmeldingPerioder />
                <ArbeidsgiverInfo />
                <SykmeldingDato />
                <ArbeidssituasjonInfo />
                <FravaersperioderInfo />
                <ForsikringInfo />
            </div>
        </Utvidbar>
    )
}

export default Opplysninger
