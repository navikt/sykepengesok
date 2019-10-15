import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Soknad } from '../types/types';
import { logger } from '../utils/logger';
import { Normaltekst, Sidetittel } from 'nav-frontend-typografi';
import { getUrlTilSoknad } from '../utils/url-utils';

interface StartIgjenProps {
    soknad: Soknad
}

const StartIgjen = ({ soknad }: StartIgjenProps) => {

    useEffect(() => {
        const type = soknad.soknadstype ? soknad.soknadstype : 'ARBEIDSTAKER_GAMMEL_PLATTFORM';
        const sporsmalsliste = soknad.soknadstype ? JSON.stringify(soknad.sporsmal) : null;
        logger.error({
            message: `Ugyldig tilstand i søknad av typen ${type} med ID: ${soknad.id}`,
            sporsmalsliste,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="panel">
            <div className="hode hode--informasjon">
                <Sidetittel tag="h2" className="hode__tittel">Oops, nå har vi mistet dataene dine</Sidetittel>
                <Normaltekst className="hode__melding">
                    Derfor må du dessverre
                    <Link className="lenke" to={getUrlTilSoknad(soknad.id, undefined)}>
                        fylle ut søknaden på nytt
                    </Link>.
                </Normaltekst>
            </div>
        </div>
    );
};

export default StartIgjen;