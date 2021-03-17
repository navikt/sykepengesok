import './undersporsmal/undersporsmal.less'

import React from 'react'

import { RSSvartype } from '../../types/rs-types/rs-svartype'
import { Sporsmal } from '../../types/types'
import BehDager from './typer/beh-dager'
import CheckboxKomp from './typer/checkbox-komp'
import CheckboxPanel from './typer/checkbox-panel'
import DatoInput from './typer/dato-komp'
import IkkeRelevant from './typer/ikke-relevant'
import JaNeiInput from './typer/ja-nei-input'
import JaNeiRadio from './typer/ja-nei-radio'
import Land from './typer/land'
import Perioder from './typer/perioder'
import RadioKomp from './typer/radio-komp'
import TallKomp from './typer/tall-komp'
import UkjentSporsmal from './typer/ukjent-sporsmal'

interface UndersporsmalProps {
    sporsmal: Sporsmal;
}

const SporsmalSwitch = ({ sporsmal }: UndersporsmalProps) => {
    switch (sporsmal.svartype) {
        case RSSvartype.CHECKBOX_PANEL:
            return <CheckboxPanel sporsmal={sporsmal} />

        case RSSvartype.CHECKBOX:
        case RSSvartype.CHECKBOX_GRUPPE:
            return <CheckboxKomp sporsmal={sporsmal} />

        case RSSvartype.DATO:
            return <DatoInput sporsmal={sporsmal} />

        case RSSvartype.PERIODER:
            return <Perioder sporsmal={sporsmal} />

        case RSSvartype.JA_NEI:
            if (!sporsmal.erHovedsporsmal &&
                (sporsmal.parentKriterie === 'CHECKED'
                    || sporsmal.parentKriterie === 'JA'
                    || sporsmal.undersporsmal.length === 0)
            ) {
                return <JaNeiRadio sporsmal={sporsmal} />
            }
            return <JaNeiInput sporsmal={sporsmal} />

        case RSSvartype.TIMER:
        case RSSvartype.PROSENT:
        case RSSvartype.TALL:
        case RSSvartype.BELOP:
        case RSSvartype.KILOMETER:
            return <TallKomp sporsmal={sporsmal} />

        case RSSvartype.RADIO_GRUPPE:
        case RSSvartype.RADIO_GRUPPE_TIMER_PROSENT:
            return <RadioKomp sporsmal={sporsmal} />

        case RSSvartype.INFO_BEHANDLINGSDAGER:
            return <BehDager sporsmal={sporsmal} />

        case RSSvartype.LAND:
            return <Land sporsmal={sporsmal} />

        case RSSvartype.IKKE_RELEVANT:
            return <IkkeRelevant sporsmal={sporsmal} />

        default:
            return <UkjentSporsmal sporsmal={sporsmal} />
    }
}

export default SporsmalSwitch
