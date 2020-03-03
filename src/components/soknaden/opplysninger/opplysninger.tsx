import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tekster from './opplysninger-tekster';
import SykmeldingPerioder from './sykmelding-perioder';
import ArbeidsgiverInfo from './arbeidsgiver-info';
import SykmeldingDato from './sykmelding-dato';
import SelvstendigInfo from './selvstendig-info';
import { useAppStore } from '../../../data/stores/app-store';
import { RSSoknadstatus } from '../../../types/rs-types/rs-soknadstatus';
import plaster from './plaster.svg';
import plasterHover from './plaster-hover.svg';
import Utvidbar from '../../utvidbar';
import './opplysninger.less';

interface OpplysningerProps {
    ekspandert: boolean;
}

const Opplysninger = ({ ekspandert }: OpplysningerProps) => {
    const { valgtSoknad } = useAppStore();
    const [ apen, setApen ] = useState<boolean>(ekspandert);
    const { stegId } = useParams();

    useEffect(() => {
        const tidligere = valgtSoknad.status === RSSoknadstatus.SENDT || valgtSoknad.status === RSSoknadstatus.AVBRUTT;
        const stegNo = parseInt(stegId);
        setApen(!tidligere && stegNo === 1);
    }, [ valgtSoknad.status, stegId ]);

    return (
        <Utvidbar className={'ekspander' + (apen ? ' apen' : '')}
            ikon={plaster} ikonHover={plasterHover} erApen={apen}
            tittel={tekster['sykepengesoknad.sykmelding-utdrag.tittel']}
            ikonAltTekst=""
        >
            <div className="opplysninger">
                {apen}
                <SykmeldingPerioder />
                <ArbeidsgiverInfo />
                <SykmeldingDato />
                <SelvstendigInfo />
            </div>
        </Utvidbar>
    )
};

export default Opplysninger;
