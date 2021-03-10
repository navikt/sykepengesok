import * as uuid from 'uuid'
import FetchMock, { MiddlewareUtils } from 'yet-another-fetch-mock'

import { RSMottaker } from '../../types/rs-types/rs-mottaker'
import { RSSoknad } from '../../types/rs-types/rs-soknad'
import { RSSoknadstatus } from '../../types/rs-types/rs-soknadstatus'
import { RSSoknadstype } from '../../types/rs-types/rs-soknadstype'
import env from '../../utils/environment'
import { jsonDeepCopy } from '../../utils/json-deep-copy'
import { reisetilskuddene } from './data/reisetilskudd'
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

const mock = FetchMock.configure({
    enableFallback: true,
    middleware: MiddlewareUtils.combine(
        MiddlewareUtils.loggingMiddleware()
    )
})

const soknader = [ ...jsonDeepCopy(soknaderOpplaering) ]
if (!env.isOpplaering) {
    soknader.push(...jsonDeepCopy(soknaderIntegration))
    soknader.push(...jsonDeepCopy(reisetilskuddene))
}

mock.put(`${env.flexGatewayRoot}/syfosoknad/api/soknader/:soknad/sporsmal/:sporsmal`,
    (req) => {

        if (req.pathParams.soknad === soknadSomTriggerSporsmalFinnesIkkeISoknad.id) {
            return Promise.resolve({
                status: 400,
                body: JSON.stringify({ reason: 'SPORSMAL_FINNES_IKKE_I_SOKNAD' })
            })
        }
        if (req.pathParams.soknad === soknadSomTriggerFeilStatusForOppdaterSporsmal.id) {
            return Promise.resolve({
                status: 400,
                body: JSON.stringify({ reason: 'FEIL_STATUS_FOR_OPPDATER_SPORSMAL' })
            })
        }
        return Promise.resolve({
            status: 200,
            body: JSON.stringify({ oppdatertSporsmal: req.body })
        })
    })

mock.post(`${env.flexGatewayRoot}/syfosoknad/api/soknader/:soknad/korriger`,
    (req, res, ctx) => {
        const soknad = jsonDeepCopy(soknader.find((sok: RSSoknad) => {
            return res(ctx.json(sok.id === req.pathParams.soknad))
        }))!
        soknad.id = uuid.v4()
        soknad.status = RSSoknadstatus.UTKAST_TIL_KORRIGERING
        return res(ctx.json(soknad))
    })

mock.post(`${env.flexGatewayRoot}/syfosoknad/api/opprettSoknadUtland`,
    (req, res, ctx) => {
        const soknad = soknader.find((sok: RSSoknad) => {
            return sok.soknadstype === RSSoknadstype.OPPHOLD_UTLAND && sok.status === RSSoknadstatus.NY
        })
        if (soknad) {
            return res(ctx.json(soknad))
        }
        const soknadOriginal = jsonDeepCopy(soknaderOpplaering.find((sok: RSSoknad) => {
            return sok.soknadstype === RSSoknadstype.OPPHOLD_UTLAND && sok.status === RSSoknadstatus.NY
        })!)
        soknadOriginal.id = uuid.v4()
        soknadOriginal.status = RSSoknadstatus.NY
        return res(ctx.json(soknadOriginal))
    })

mock.post(`${env.flexGatewayRoot}/syfosoknad/api/soknader/:soknad/finnMottaker`,
    (req, res, ctx) => {
        const soknadId = req.pathParams.soknad

        if (soknadId === arbeidstaker.id ||
            soknadId === arbeidstakerUtenforArbeidsgiverperiodeKvittering.id ||
            soknadId === arbeidstakerDeltPeriodeForsteUtenforArbeidsgiverperiodeKvittering.id ||
            soknadId === arbeidstakerUtenOppholdForsteUtenforArbeidsgiverperiodeKvittering.id ||
            soknadId === arbeidstakerMedOppholdForsteUtenforArbeidsgiverperiodeKvittering.id) {
            return res(ctx.json({ mottaker: RSMottaker.ARBEIDSGIVER_OG_NAV }))
        }
        if (soknadId === arbeidstakerGradert.id ||
            soknadId === arbeidstakerInnenforArbeidsgiverperiodeKvittering.id ||
            soknadId === sok6.id) {
            return res(ctx.json({ mottaker: RSMottaker.ARBEIDSGIVER }))
        }

        return res(ctx.json({ mottaker: RSMottaker.NAV }))
    })


mock.get(`${env.flexGatewayRoot}/syfosoknad/api/soknader`,
    (req, res, ctx) => res(ctx.json(soknader)))

mock.get(`${env.sykmeldingerBackendProxyRoot}/api/v1/syforest/sykmeldinger`,
    (req, res, ctx) => res(ctx.json(sykmeldinger)))

mock.post(`${env.flexGatewayRoot}/syfosoknad/api/soknader/:soknad/send`,
    () => Promise.resolve({ status: 200 }))

mock.post(`${env.flexGatewayRoot}/syfosoknad/api/soknader/:soknad/ettersendTilNav`,
    () => Promise.resolve({ status: 200 }))

mock.post(`${env.flexGatewayRoot}/syfosoknad/api/soknader/:soknad/ettersendTilArbeidsgiver`,
    () => Promise.resolve({ status: 200 }))

mock.post(`${env.flexGatewayRoot}/syfosoknad/api/soknader/:soknad/avbryt`,
    () => Promise.resolve({ status: 200 }))

mock.post(`${env.flexGatewayRoot}/syfosoknad/api/soknader/:soknad/gjenapne`,
    () => Promise.resolve({ status: 200 }))

