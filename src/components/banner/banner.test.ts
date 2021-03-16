import 'dayjs/locale/nb'

import { tekst } from '../../utils/tekster'

it('Returns text from bundle', () => {
    const text = tekst('soknader.sidetittel')
    expect(text).toEqual('Søknader')
})
