import Alertstripe from 'nav-frontend-alertstriper'
import { HoyreChevron } from 'nav-frontend-chevron'
import ModalWrapper from 'nav-frontend-modal'
import { Systemtittel, Undertekst, Undertittel } from 'nav-frontend-typografi'
import React, { useState } from 'react'

import { RSSoknadstype } from '../../../types/rs-types/rs-soknadstype'
import { tilLesbarPeriodeMedArstall } from '../../../utils/dato-utils'
import { tekst } from '../../../utils/tekster'
import { useAmplitudeInstance } from '../../amplitude/amplitude'
import Vis from '../../vis'
import { InngangsIkon, InngangsStatus } from '../inngang/inngangspanel'
import {
    hentIkon,
    hentIkonHover,
    hentTeaserStatustekst,
    periodeListevisning,
    SykepengesoknadTeaserProps, teaserTittel
} from './teaser-util'

const UtgaattSoknaderTeaser = ({ soknad }: SykepengesoknadTeaserProps) => {
    const { logEvent } = useAmplitudeInstance()
    const [ aapen, setAapen ] = useState<boolean>(false)

    return (
        <article aria-labelledby={`soknader-header-${soknad.id}`} onClick={() => {
            logEvent('skjema åpnet', { soknadstype: soknad.soknadstype })
        }}>
            <button className="inngangspanel inngangspanel__btn"
                onClick={() => setAapen(true)}>
                <div className="inngangspanel__ytre">
                    <div className="inngangspanel__del1">
                        <InngangsIkon
                            ikon={hentIkon(soknad)}
                            ikonHover={hentIkonHover(soknad)}
                        />
                        <div className="inngangspanel--inaktivt">
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
            </button>
            <ModalWrapper className="modal__teaser_popup" onRequestClose={() => setAapen(false)}
                contentLabel={'planlagt'}
                isOpen={aapen}
            >
                <Systemtittel tag="h3" className="modal__tittel">
                    {tekst('soknad.teaser.utgaatt.popup.header')}
                </Systemtittel>
                <Alertstripe type="info">{tekst('soknad.teaser.utgaatt.popup.innhold')}</Alertstripe>
                <button className="knapp knapp--hoved" onClick={() => setAapen(false)}>
                    Lukk
                </button>
            </ModalWrapper>
        </article>
    )
}

export default UtgaattSoknaderTeaser
