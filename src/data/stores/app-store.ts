import constate from 'constate'
import { useState } from 'react'

import { RSMottaker } from '../../types/rs-types/rs-mottaker'
import {  Soknad, Sykmelding } from '../../types/types'

export const [ AppStoreProvider, useAppStore ] = constate(() => {
    const [ soknader, setSoknader ] = useState<Soknad[]>([])
    const [ sykmeldinger, setSykmeldinger ] = useState<Sykmelding[]>([])
    const [ valgtSoknad, setValgtSoknad ] = useState<Soknad>()
    const [ valgtSykmelding, setValgtSykmelding ] = useState<Sykmelding>()
    const [ erBekreftet, setErBekreftet ] = useState<boolean>(false)
    const [ mottaker, setMottaker ] = useState<RSMottaker>()
    const [ top, setTop ] = useState<number>(0)
    const [ validCheck, setValidCheck ] = useState<boolean>()
    const [ feilState, setFeilState ] = useState<boolean>(false)
    const [ feilmeldingTekst, setFeilmeldingTekst ] = useState<string>('')
    const [ rerenderSporsmalForm, setRerenderSporsmalForm ] = useState<number>(new Date().getUTCMilliseconds())

    return {
        soknader, setSoknader,
        valgtSoknad, setValgtSoknad,
        sykmeldinger, setSykmeldinger,
        valgtSykmelding, setValgtSykmelding,
        erBekreftet, setErBekreftet,
        mottaker, setMottaker,
        top, setTop,
        validCheck, setValidCheck,
        feilState, setFeilState,
        feilmeldingTekst, setFeilmeldingTekst,
        rerenderSporsmalForm, setRerenderSporsmalForm,
    }
})
