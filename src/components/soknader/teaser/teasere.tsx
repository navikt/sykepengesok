import { Select } from 'nav-frontend-skjema'
import { Element, Undertittel } from 'nav-frontend-typografi'
import React, { useState } from 'react'

import { RSSoknadstatus } from '../../../types/rs-types/rs-soknadstatus'
import { Soknad } from '../../../types/types'
import { sorterEtterPerioder, sorterEtterSendt, sorterEtterStatus } from '../../../utils/sorter-soknader'
import Vis from '../../vis'
import FremtidigeSoknaderTeaser from './fremtidige-soknader-teaser'
import Teaser from './teaser'
import TidligereSoknaderTeaser from './tidligere-soknader-teaser'
import UtgaattSoknaderTeaser from './utgatt-soknader-teaser'

interface SoknaderTeasereProps {
    soknader: Soknad[];
    className?: string;
    tittel: string;
    tomListeTekst?: string;
    id: string;
    kanSorteres?: boolean;
}

enum Sortering {
    Dato = 'Dato',
    Status = 'Status',
    Sendt = 'Sendt',
}

const Teasere = ({ soknader, className, tittel, tomListeTekst, id, kanSorteres = false }: SoknaderTeasereProps) => {
    const [ sortering, setSortering ] = useState<Sortering>(Sortering.Dato)

    const sorterteSoknader = () => {
        if (sortering === 'Dato') {
            return soknader.sort(sorterEtterPerioder)
        } else if (sortering === 'Status') {
            return soknader.sort(sorterEtterStatus)
        } else if (sortering === 'Sendt') {
            return soknader.sort(sorterEtterSendt)
        }
        return soknader
    }

    return (
        <>
            <header className="teasere__header">
                <Vis hvis={kanSorteres && sorterteSoknader().length > 0}>
                    <Select label="Sorter etter"
                        className="inngangspanel__sortering"
                        onChange={(event) => setSortering(event.target.value as Sortering)}
                    >
                        {Object.values(Sortering).map((sort, idx) => {
                            return <option value={sort} key={idx}>{sort}</option>
                        })}
                    </Select>
                </Vis>
                <Vis hvis={sorterteSoknader().length > 0 || tomListeTekst !== undefined}>
                    <Undertittel tag="h2" className="teasere__header__tittel">
                        {tittel}
                    </Undertittel>
                </Vis>
            </header>

            <div id={id} className={className}>
                {sorterteSoknader().map((soknad, idx) => {
                    switch (soknad.status) {
                        case RSSoknadstatus.FREMTIDIG:
                            return <FremtidigeSoknaderTeaser key={idx} soknad={soknad} />
                        case RSSoknadstatus.SENDT:
                        case RSSoknadstatus.AVBRUTT:
                            return <TidligereSoknaderTeaser key={idx} soknad={soknad} />
                        case RSSoknadstatus.UTGAATT:
                            return <UtgaattSoknaderTeaser key={idx} soknad={soknad} />
                        default:
                            return <Teaser key={idx} soknad={soknad} />
                    }
                })}
                <Vis hvis={soknader.length === 0}>
                    <Element className="inngangspanel inngangspanel--tomListe">
                        {tomListeTekst}
                    </Element>
                </Vis>
            </div>
        </>
    )
}

export default Teasere
