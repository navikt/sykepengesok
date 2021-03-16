import { HoyreChevron } from 'nav-frontend-chevron'
import { Undertekst, Undertittel } from 'nav-frontend-typografi'
import React from 'react'

import { RSSoknadstype } from '../../../types/rs-types/rs-soknadstype'
import { tilLesbarPeriodeMedArstall } from '../../../utils/dato-utils'
import { getUrlTilSoknad } from '../../../utils/url-utils'
import { useAmplitudeInstance } from '../../amplitude/amplitude'
import Vis from '../../vis'
import { InngangsIkon, Inngangspanel, InngangsStatus } from '../inngang/inngangspanel'
import {
    hentIkon,
    hentIkonHover,
    hentTeaserStatustekst,
    periodeListevisning,
    SykepengesoknadTeaserProps, teaserTittel
} from './teaser-util'

const TidligereSoknaderTeaser = ({ soknad }: SykepengesoknadTeaserProps) => {
    const { logEvent } = useAmplitudeInstance()

    return (
        <article aria-labelledby={`soknader-header-${soknad.id}`} onClick={() => {
            logEvent('skjema åpnet', { soknadstype: soknad.soknadstype })
        }}>
            <Inngangspanel to={getUrlTilSoknad(soknad)}>
                <div className="inngangspanel__ytre">
                    <div className="inngangspanel__del1">
                        <InngangsIkon
                            ikon={hentIkon(soknad)}
                            ikonHover={hentIkonHover(soknad)}
                        />
                        <div className="inngangspanel__innhold">
                            <Vis hvis={soknad.soknadstype !== RSSoknadstype.OPPHOLD_UTLAND}>
                                <Undertekst className="inngangspanel__periode">
                                    {tilLesbarPeriodeMedArstall(soknad.fom, soknad.tom)}
                                </Undertekst>
                            </Vis>
                            <Undertittel tag="h3" className="inngangspanel__tittel">
                                {teaserTittel(soknad)}
                            </Undertittel>
                            {periodeListevisning(soknad)}
                        </div>
                    </div>
                    <InngangsStatus status={soknad.status} tekst={hentTeaserStatustekst(soknad)} />
                </div>
                <HoyreChevron />
            </Inngangspanel>
        </article>
    )
}

export default TidligereSoknaderTeaser
