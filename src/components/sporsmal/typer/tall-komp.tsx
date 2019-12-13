import React, { useEffect, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { Normaltekst } from 'nav-frontend-typografi';
import Vis from '../../../utils/vis';
import tekster from '../sporsmal-tekster';
import { SpmProps } from '../sporsmal-form';
import { hentSvar } from '../sporsmal-utils';
import UndersporsmalListe from '../undersporsmal/undersporsmal-liste';

interface TallKompProps {
    desimaler: number;
}

type AllTallProps = SpmProps & TallKompProps;

const TallInput = ({ sporsmal, desimaler }: AllTallProps) => {
    const compId = 'spm_' + sporsmal.id;
    const feilmelding = tekster['soknad.feilmelding.' + sporsmal.tag.toLowerCase()];
    const { register, setValue, watch, errors } = useFormContext();
    const watchVerdi = watch(compId);
    const undersporsmal = useRef<HTMLDivElement>(null);

    const handleChange = () => {
        if (watchVerdi === 'ja') {
            undersporsmal.current.classList.add('aapen');
        } else {
            undersporsmal.current.classList.remove('aapen');
        }
    };

    useEffect(() => {
        setValue(compId, hentSvar(sporsmal));
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Vis hvis={sporsmal.sporsmalstekst !== null}>
                <label className="skjema__sporsmal" htmlFor={compId}>
                    <Normaltekst tag="span">{sporsmal.sporsmalstekst}</Normaltekst>
                </label>
            </Vis>

            <input type="number"
                className="skjemaelement__input input--s"
                name={compId}
                id={compId}
                ref={register({
                    validate: (value: any) => value === true || feilmelding
                })}
                onChange={() => handleChange}
            />

            <div role="alert" aria-live="assertive">
                <Vis hvis={errors[compId] !== undefined}>
                    <Normaltekst tag="span" className="skjemaelement__feilmelding">
                        {errors[compId] && errors[compId].message}
                    </Normaltekst>
                </Vis>
            </div>

            <div className="undersporsmal" ref={undersporsmal}>
                <Vis hvis={watchVerdi > 0}>
                    <UndersporsmalListe undersporsmal={sporsmal.undersporsmal} />
                </Vis>
            </div>
        </>
    )
};

export default TallInput;
