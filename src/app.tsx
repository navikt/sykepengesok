import './app.less'

import ModalWrapper from 'nav-frontend-modal'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { Amplitude } from './components/amplitude/amplitudeProvider'
import { DataFetcher } from './data/data-fetcher'
import StoreProvider from './data/stores/store-provider'
import RedirectTilOversikt from './pages/feil/redirect-til-oversikt'
import { RefreshHvisFeilState } from './pages/feil/refresh-hvis-feil-state'
import KvitteringSide from './pages/kvittering/kvittering-side'
import OpprettUtland from './pages/opprett-utland/opprett-utland'
import Soknad from './pages/soknad/soknaden'
import Soknader from './pages/soknader/soknader'

export interface RouteParams {
    stegId: string;
    id: string;
}

const App = (): any => {

    ModalWrapper.setAppElement('#root')

    return (
        <StoreProvider>
            <DataFetcher>
                <Amplitude>
                    <main id="maincontent" role="main" tabIndex={-1}>
                        <RefreshHvisFeilState>
                            <TransitionGroup>
                                <CSSTransition
                                    timeout={{ enter: 300, exit: 300 }}
                                    classNames={'fade'}
                                >
                                    <Switch>
                                        <Route exact={true} path="/" component={Soknader} />
                                        <Route path={'/soknader/:id/:stegId'} component={Soknad} />
                                        <Route path={'/soknader/:id'} component={Soknad} />
                                        <Route path={'/soknader/'} component={RedirectTilOversikt} />
                                        <Route path={'/kvittering/:id'} component={KvitteringSide} />
                                        <Route path={'/sykepengesoknad-utland'} component={OpprettUtland} />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        </RefreshHvisFeilState>
                    </main>
                </Amplitude>
            </DataFetcher>
        </StoreProvider>
    )
}

export default App
