import * as uuid from 'uuid'
import FetchMock, { HandlerArgument, MiddlewareUtils } from 'yet-another-fetch-mock'

import { RSMottaker } from '../../types/rs-types/rs-mottaker'
import { RSSoknad } from '../../types/rs-types/rs-soknad'
import { RSSoknadstatus } from '../../types/rs-types/rs-soknadstatus'
import { RSSoknadstype } from '../../types/rs-types/rs-soknadstype'
import env from '../../utils/environment'
import { jsonDeepCopy } from '../../utils/json-deep-copy'
import {
    arbeidstakerDeltPeriodeForsteUtenforArbeidsgiverperiodeKvittering,
    arbeidstakerInnenforArbeidsgiverperiodeKvittering,
    arbeidstakerMedOppholdForsteUtenforArbeidsgiverperiodeKvittering,
    arbeidstakerUtenforArbeidsgiverperiodeKvittering,
    arbeidstakerUtenOppholdForsteUtenforArbeidsgiverperiodeKvittering,
    sok6,
    soknaderIntegration,
    soknadSomTriggerFeilStatusForOppdaterSporsmal,
    soknadSomTriggerSporsmalFinnesIkkeISoknad,
} from './data/soknader-integration'
import { arbeidstaker, arbeidstakerGradert, soknaderOpplaering } from './data/soknader-opplaering'
import { sykmeldinger } from './data/sykmeldinger'
import { unleashToggles } from './data/toggles'

const mock = FetchMock.configure({
    enableFallback: true,
    middleware: MiddlewareUtils.combine(
        MiddlewareUtils.loggingMiddleware()
    )
})

const soknader = [ ...jsonDeepCopy(soknaderOpplaering) ]
if (!env.isOpplaering) {
    soknader.push(...jsonDeepCopy(soknaderIntegration))
}

mock.put(`${env.syfoapiRoot}/syfosoknad/api/soknader/:soknad/sporsmal/:sporsmal`, (args: HandlerArgument) => {


    if (args.pathParams.soknad === soknadSomTriggerSporsmalFinnesIkkeISoknad.id) {
        return Promise.resolve({
            status: 400,
            body: JSON.stringify({ reason: 'SPORSMAL_FINNES_IKKE_I_SOKNAD' })
        })
    }
    if (args.pathParams.soknad === soknadSomTriggerFeilStatusForOppdaterSporsmal.id) {
        return Promise.resolve({
            status: 400,
            body: JSON.stringify({ reason: 'FEIL_STATUS_FOR_OPPDATER_SPORSMAL' })
        })
    }
    return Promise.resolve({
        status: 200,
        body: JSON.stringify({ oppdatertSporsmal: args.body })
    })
})
mock.post(`${env.syfoapiRoot}/syfosoknad/api/soknader/:soknad/korriger`, (args: HandlerArgument) => {
    const soknad = jsonDeepCopy(soknader.find((sok: RSSoknad) => {
        return sok.id === args.pathParams.soknad
    }))!
    soknad.id = uuid.v4()
    soknad.status = RSSoknadstatus.UTKAST_TIL_KORRIGERING
    return soknad as any
})
mock.post(`${env.syfoapiRoot}/syfosoknad/api/soknader/:soknad/gjenapne`, {})
mock.post(`${env.syfoapiRoot}/syfosoknad/api/opprettSoknadUtland`, () => {
    const soknad = soknader.find((sok: RSSoknad) => {
        return sok.soknadstype === RSSoknadstype.OPPHOLD_UTLAND && sok.status === RSSoknadstatus.NY
    })
    if (soknad) {
        return soknad
    }
    const soknadOriginal = jsonDeepCopy(soknaderOpplaering.find((sok: RSSoknad) => {
        return sok.soknadstype === RSSoknadstype.OPPHOLD_UTLAND && sok.status === RSSoknadstatus.NY
    })!)
    soknadOriginal.id = uuid.v4()
    soknadOriginal.status = RSSoknadstatus.NY
    return soknadOriginal as any
})
mock.post(`${env.syfoapiRoot}/syfosoknad/api/soknader/:soknad/finnMottaker`, (args: HandlerArgument) => {
    const soknadId = args.pathParams.soknad

    if (soknadId === arbeidstaker.id ||
        soknadId === arbeidstakerUtenforArbeidsgiverperiodeKvittering.id ||
        soknadId === arbeidstakerDeltPeriodeForsteUtenforArbeidsgiverperiodeKvittering.id ||
        soknadId === arbeidstakerUtenOppholdForsteUtenforArbeidsgiverperiodeKvittering.id ||
        soknadId === arbeidstakerMedOppholdForsteUtenforArbeidsgiverperiodeKvittering.id) {
        return { mottaker: RSMottaker.ARBEIDSGIVER_OG_NAV }
    }
    if (soknadId === arbeidstakerGradert.id ||
        soknadId === arbeidstakerInnenforArbeidsgiverperiodeKvittering.id ||
        soknadId === sok6.id) {
        return { mottaker: RSMottaker.ARBEIDSGIVER }
    }

    return { mottaker: RSMottaker.NAV }
})


mock.post(env.unleashUrl, unleashToggles)
mock.get(`${env.syfoapiRoot}/syfosoknad/api/soknader`, soknader as any)
mock.get(`${env.syforestRoot}/sykmeldinger`, sykmeldinger as any)
mock.post(`${env.syfoapiRoot}/syfosoknad/api/soknader/:soknad/send`, {})
mock.post(`${env.syfoapiRoot}/syfosoknad/api/soknader/:soknad/ettersendTilNav`, {})
mock.post(`${env.syfoapiRoot}/syfosoknad/api/soknader/:soknad/ettersendTilArbeidsgiver`, {})
mock.post(`${env.syfoapiRoot}/syfosoknad/api/soknader/:soknad/avbryt`, {})
