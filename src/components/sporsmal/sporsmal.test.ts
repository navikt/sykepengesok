import { veldigLangSoknad } from '../../data/mock/data/soknader-integration'
import { TagTyper } from '../../types/enums'
import { RSSvartype } from '../../types/rs-types/rs-svartype'
import { Soknad, Sporsmal } from '../../types/types'
import { flattenSporsmal } from '../../utils/soknad-utils'
import { tekst } from '../../utils/tekster'
import { fjernIndexFraTag, hentGeneriskFeilmelding } from './sporsmal-utils'

test('Alle tags har global feilmelding', () => {
    let tags = Object.values(TagTyper)
    let manglerFeilmelding = false

    tags = tags.filter(skipTag => {
        return skipTag !== TagTyper.VAER_KLAR_OVER_AT                       // Svartype: IKKE_RELEVANT
            && skipTag !== TagTyper.IKKE_SOKT_UTENLANDSOPPHOLD_INFORMASJON  // Svartype: IKKE_RELEVANT
            && skipTag !== TagTyper.BEKREFT_OPPLYSNINGER_UTLAND_INFO        // Svartype: IKKE_RELEVANT
            && skipTag !== TagTyper.ENKELTSTAENDE_BEHANDLINGSDAGER          // Svartype: INFO_BEHANDLINGSDAGER
    })

    tags.forEach(tag => {
        if (tekst(`soknad.feilmelding.${tag}` as any) === undefined) {
            // eslint-disable-next-line no-console
            console.log('Mangler feilmelding for tag:', tag)
            manglerFeilmelding = true
        }
    })

    expect(manglerFeilmelding).toBeFalsy()
})

test('Alle svartyper har generiskfeilmelding', () => {
    const svartyper = Object.values(RSSvartype)
    let manglerFeilmelding = false

    svartyper.forEach(svartype => {
        if(hentGeneriskFeilmelding(svartype) === undefined) {
            // eslint-disable-next-line no-console
            console.log('Mangler generisk feilmelding for svartype:', svartype)
            manglerFeilmelding = true
        }
    })

    expect(manglerFeilmelding).toBeFalsy()
})

test('Alle sporsmal tag ligger i veldigLangSoknad', () => {
    const soknad: Soknad = new Soknad(veldigLangSoknad as any)
    const sporsmalTagsUtenIndex = hentAlleTagsUtenIndex(soknad.sporsmal)
    const tagsSomSkalStottes = Object.values(TagTyper).filter(skipTag => {
        // TODO: Sjekk at disse tagene fortsatt er i bruk, legg de inn i søknaden
        return skipTag !== 'BETALER_ARBEIDSGIVER'                   // Kan fjernes?
            && skipTag !== 'ENKELTSTAENDE_BEHANDLINGSDAGER_DAG_NAR' // Ble brukt mens vi satte opp ny søknad, ligger i prod?
            && skipTag !== 'HVOR_MANGE_TIMER'                       // Finnes i syfosoknad, men brukes ikke
            && skipTag !== 'BEKREFT_OPPLYSNINGER_UTLAND'            // Kan bare inneholde en sisteside, dekkes av andre tester
            && skipTag !== 'BEKREFT_OPPLYSNINGER_UTLAND_INFO'       // Kan bare inneholde en sisteside
            && skipTag !== 'TRANSPORT_TIL_DAGLIG'                   // TODO: Fix denne testen
            && skipTag !== 'TYPE_TRANSPORT'
            && skipTag !== 'BIL_TIL_DAGLIG'
            && skipTag !== 'KM_HJEM_JOBB'
            && skipTag !== 'OFFENTLIG_TRANSPORT_TIL_DAGLIG'
            && skipTag !== 'OFFENTLIG_TRANSPORT_BELOP'
            && skipTag !== 'REISE_MED_BIL'
            && skipTag !== 'BIL_DATOER'
            && skipTag !== 'BIL_BOMPENGER'
            && skipTag !== 'BIL_BOMPENGER_BELOP'
            && skipTag !== 'KVITTERINGER'
            && skipTag !== 'UTBETALING'
    })
    let manglerTagsISoknad = false
    let manglerTagsIKoden = false

    // Mangler tags i soknaden
    tagsSomSkalStottes.forEach(tag => {
        if (!sporsmalTagsUtenIndex.has(tag)) {
            // eslint-disable-next-line no-console
            console.log(`Mangler sporsmal tag i veldigLangSoknad [ ${tag} ]`)
            manglerTagsISoknad = true
        }
    })
    expect(manglerTagsISoknad).toBeFalsy()

    // Mangler tags i koden
    sporsmalTagsUtenIndex.forEach((tag: any) => {
        if (!tagsSomSkalStottes.includes(tag)) {
            // eslint-disable-next-line no-console
            console.log(`Mangler sporsmal tag i TagTyper [ ${tag} ]`)
            manglerTagsIKoden = true
        }
    })
    expect(manglerTagsIKoden).toBeFalsy()
})

const hentAlleTagsUtenIndex = (sporsmal: Sporsmal[]) => {
    const flatSoknad = flattenSporsmal(sporsmal)
    const tags = new Set()
    flatSoknad.forEach(spm => {
        tags.add(fjernIndexFraTag(spm.tag))
    })
    return tags
}
