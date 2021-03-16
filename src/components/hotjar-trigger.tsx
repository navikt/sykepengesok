import { useEffect } from 'react'

import { RSSoknadstype } from '../types/rs-types/rs-soknadstype'
import env from '../utils/environment'
import { info } from '../utils/logger'

interface HotjarTriggerProps {
    soknadstype: RSSoknadstype;
    children: any;
}

interface HotjarWindow extends Window {
    hj: (name: string, value: string) => void;
}

export const typeTilTriggerMapping = (soknadstype: RSSoknadstype) => {
    switch (soknadstype) {
        case RSSoknadstype.SELVSTENDIGE_OG_FRILANSERE:
            return 'SOKNAD_FRILANSER_NAERINGSDRIVENDE'
        case RSSoknadstype.OPPHOLD_UTLAND:
            return 'SOKNAD_OPPHOLD_UTENFOR_NORGE'
        case RSSoknadstype.ARBEIDSTAKERE:
            return 'SOKNAD_ARBEIDSTAKER_NY'
        case RSSoknadstype.ARBEIDSLEDIG:
            return 'SOKNAD_ARBEIDSLEDIG'
        case RSSoknadstype.BEHANDLINGSDAGER:
            return 'SOKNAD_BEHANDLINGSDAGER'
        case RSSoknadstype.ANNET_ARBEIDSFORHOLD:
            return 'SOKNAD_ANNET_ARBEIDSFORHOLD'
        case RSSoknadstype.REISETILSKUDD:
            return 'SOKNAD_REISETILSKUDD'
    }
}

export const HotjarTrigger = ({ soknadstype, children }: HotjarTriggerProps) => {
    useEffect(() => {
        const hotJarWindow = (window as unknown as HotjarWindow)

        if (env.isProd) {
            setTimeout(() => {
                if (typeof hotJarWindow.hj !== 'function') {
                    info('Hotjar ble ikke lastet inn...')
                } else {
                    hotJarWindow.hj('trigger', typeTilTriggerMapping(soknadstype))
                }
            }, 500)
        }
    })

    return children
}
