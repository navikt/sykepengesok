import * as React from 'react';
import { Link } from 'react-router-dom';
import cls from 'classnames';
import { Normaltekst, Systemtittel } from 'nav-frontend-typografi';

import './inngangspanel.less';

interface InngangspanelIkonProps {
    ikon: string,
    ikonHover?: string,
}

export const InngangspanelIkon = ({ ikon, ikonHover }: InngangspanelIkonProps) => {
    return (
        <>
            <span className="inngangspanel__ikon inngangspanel__ikon--normal">
                <img alt="" src={ikon}/>
            </span>
            {ikonHover
                ?
                <span className="inngangspanel__ikon inngangspanel__ikon--hover">
                    <img alt="" src={ikonHover || ikon}/>
                </span>
                :
                null}
        </>
    );
};

interface InngangspanelProps {
    to: string,
    children: React.ReactNode,
    className: string
}

export const Inngangspanel = ({ to, children, className, ...rest }: InngangspanelProps) => {
    return (
        <Link to={to} className={cls('inngangspanel', className)} {...rest}>
            {children}
        </Link>
    );
};

interface InngangspanelHeaderProps {
    meta: string,
    tittel: string,
    status: string,
    id: string,
}

export const InngangspanelHeader = ({ meta, tittel, status, id }: InngangspanelHeaderProps) => {
    return (
        <header className="inngangspanel__header">
            <Normaltekst className="inngangspanel__meta">
                {meta}
            </Normaltekst>
            <Systemtittel tag="h3" className="inngangspanel__tittel">
                {tittel}
            </Systemtittel>
            {
                status
                    ? <Normaltekst className="inngangspanel__status">{status}</Normaltekst>
                    : null
            }
        </header>
    );
};

interface InngangspanelUndertekstProps {
    children: string,
    className?: string,
}

export const InngangspanelUndertekst = ({ children, className }: InngangspanelUndertekstProps) => {
    return (<Normaltekst className={cls('inngangspanel__undertekst', className)}>{children}</Normaltekst>);
};