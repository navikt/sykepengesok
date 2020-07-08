import { Element, Normaltekst } from 'nav-frontend-typografi'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { RSSvartype } from '../../../types/rs-types/rs-svartype'
import { Sporsmal } from '../../../types/types'
import AnimateOnMount from '../../animate-on-mount'
import Vis from '../../vis'
import { hentSvar } from '../hent-svar'
import { SpmProps } from '../sporsmal-form/sporsmal-form'
import { hentFeilmelding } from '../sporsmal-utils'
import UndersporsmalListe from '../undersporsmal/undersporsmal-liste'

export interface RadioUnderKompProps {
    selectedOption: string;
    uspm: Sporsmal;
    idx: number;
    sporsmal: Sporsmal;
    handleOptionChange: (e: ChangeEvent<HTMLInputElement>) => void;
}


export const RadioUnderKomp = ({ idx, uspm, selectedOption, sporsmal, handleOptionChange }: RadioUnderKompProps) => {
    const { register } = useFormContext()
    const feilmelding = hentFeilmelding(sporsmal)

    const checked = selectedOption === uspm.sporsmalstekst

    return (
        <div className="radioContainer" key={idx}>
            <input type="radio"
                id={uspm.id}
                name={sporsmal.id}
                value={uspm.sporsmalstekst}
                onChange={handleOptionChange}
                checked={checked}
                aria-checked={checked}
                ref={register({ required: feilmelding.global })}
                className="skjemaelement__input radioknapp"
            />
            <label className="skjemaelement__label" htmlFor={uspm.id}>
                {uspm.sporsmalstekst}
            </label>

            <AnimateOnMount
                mounted={checked}
                enter="undersporsmal--vis"
                leave="undersporsmal--skjul"
                start="undersporsmal"
            >
                <UndersporsmalListe oversporsmal={uspm} oversporsmalSvar={checked ? 'CHECKED' : ''} />
            </AnimateOnMount>
        </div>
    )
}

const RadioKomp = ({ sporsmal }: SpmProps) => {
    const { setValue, errors } = useFormContext()
    const [ selectedOption, setSelectedOption ] = useState<string>(hentSvar(sporsmal))
    const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value)
    }

    const feilmelding = hentFeilmelding(sporsmal)

    useEffect(() => {
        setValue(sporsmal.id, hentSvar(sporsmal))
        // eslint-disable-next-line
    }, [sporsmal.id]);

    return (
        <>
            <Vis hvis={sporsmal.sporsmalstekst !== null}>
                <Element tag="h3" className="skjema__sporsmal">{sporsmal.sporsmalstekst}</Element>
            </Vis>

            <div className={erHorisontal(sporsmal.svartype)
                ? 'skjemaelement skjemaelement--horisontal'
                : 'skjemaelement'}
            >
                {sporsmal.undersporsmal.map((uspm, idx) => {
                    return RadioUnderKomp({ idx, uspm, sporsmal, selectedOption, handleOptionChange })
                })}
            </div>

            <div role="alert" aria-live="assertive">
                <Vis hvis={errors[sporsmal.id] !== undefined}>
                    <Normaltekst tag="span" className="skjemaelement__feilmelding">
                        <p>{feilmelding.lokal}</p>
                    </Normaltekst>
                </Vis>
            </div>
        </>
    )
}

export default RadioKomp

export const erHorisontal = (svartype: RSSvartype) => {
    return svartype === RSSvartype.RADIO_GRUPPE_TIMER_PROSENT
}
