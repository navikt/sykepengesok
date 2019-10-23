import React from 'react';
import Avkrysset from './avkrysset';
import { SvarEnums } from '../../../../types/enums';
import { OppsummeringProps } from '../oppsummering';
import UndersporsmalSum from './undersporsmal-sum';
import Vis from '../../../../utils/vis';

const CheckboxSum = ({ sporsmal }: OppsummeringProps) => {
    const uspm = sporsmal.undersporsmal;
    return (
        <Vis hvis={sporsmal.svar[0] && sporsmal.svar[0].verdi === SvarEnums.CHECKED}>
            <Avkrysset tekst={sporsmal.sporsmalstekst}/>
            <UndersporsmalSum sporsmalsliste={uspm}/>
        </Vis>
    );
};

export default CheckboxSum;