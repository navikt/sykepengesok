import './hvem-kan-faa.less'

import parser from 'html-react-parser'
import Lenke from 'nav-frontend-lenker'
import { Element, Normaltekst } from 'nav-frontend-typografi'
import React from 'react'

import { tekst } from '../../utils/tekster'

const HvemKanFaa = () => {
    return (
        <>
            <>
                <Normaltekst tag="ul">
                    <li>{tekst('tilskudd.start.du-er')}</li>
                    <li>{tekst('tilskudd.start.du-trenger')}</li>
                    <li>{tekst('tilskudd.start.du-har')}</li>
                </Normaltekst>
            </>
            <>
                <Element tag="h3">{tekst('tilskudd.start.hva-dekker')}</Element>
                <Normaltekst>
                    {parser(tekst('tilskudd.start.hva-dekker-tekst'))}
                    <br />
                    <Lenke target="blank"
                        href="https://nav.no/reisetilskudd">{tekst('tilskudd.start.les-mer-reisetilskudd')}</Lenke>.
                </Normaltekst>
            </>

            <>
                <Element tag="h3">{tekst('tilskudd.start.forste-16')}</Element>
                <Normaltekst>
                    {tekst('tilskudd.start.forste-16-tekst')}
                </Normaltekst>
                <Normaltekst>
                    {tekst('tilskudd.start.forste-16-tekst-2')}
                </Normaltekst>
            </>
            <>
                <Element tag="h3">{tekst('tilskudd.start.hvor-mye')}</Element>
                <Normaltekst>
                    {tekst('tilskudd.start.du-kan')}
                    <br />
                    <Lenke target="blank"
                        href="https://nav.no/grunnbelop">{tekst('tilskudd.start.les-mer-grunnbelop')}</Lenke>.
                </Normaltekst>
            </>
            <>
                <Element tag="h3">{tekst('tilskudd.start.husk')}</Element>
                <Normaltekst>{tekst('tilskudd.start.fristen-for')}</Normaltekst>
            </>
        </>
    )
}

export default HvemKanFaa
