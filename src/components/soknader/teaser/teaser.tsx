import { HoyreChevron } from 'nav-frontend-chevron'
import { Undertekst, Undertittel } from 'nav-frontend-typografi'
import React from 'react'

import { RSSoknadstype } from '../../../types/rs-types/rs-soknadstype'
import { tilLesbarPeriodeMedArstall } from '../../../utils/dato-utils'
import env from '../../../utils/environment'
import { getUrlTilSoknad } from '../../../utils/url-utils'
import { useAmplitudeInstance } from '../../amplitude/amplitude'
import Vis from '../../vis'
import { InngangsIkon, Inngangspanel } from '../inngang/inngangspanel'
import {
    hentIkon,
    hentIkonHover,
    leggTilSoknadstypeForDemoside,
    periodeListevisning,
    SykepengesoknadTeaserProps, teaserTittel
} from './teaser-util'

const Teaser = ({ soknad }: SykepengesoknadTeaserProps) => {
    const { logEvent } = useAmplitudeInstance()

    return (
        <article
            aria-labelledby={`soknader-header-${soknad.id}`}
            onClick={() => logEvent('skjema åpnet', { soknadstype: soknad.soknadstype })}
        >
            <Inngangspanel to={getUrlTilSoknad(soknad)} className="inngangspanel--ny">
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
                        <Vis hvis={env.isOpplaering}>
                            {leggTilSoknadstypeForDemoside(soknad)}
                        </Vis>
                    </div>
                </div>
                <HoyreChevron />
            </Inngangspanel>
        </article>
    )
}

export default Teaser
