import './app.less'

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { Amplitude } from './components/amplitude/amplitudeProvider'
import LandvelgerComponent from './components/sporsmal/landvelger/landvelger'
import { DataFetcher } from './data/data-fetcher'
import StoreProvider from './data/stores/store-provider'
import KvitteringSide from './pages/kvittering/kvittering-side'
import OpprettUtland from './pages/opprett-utland/opprett-utland'
import Soknad from './pages/soknad/soknaden'
import Soknader from './pages/soknader/soknader'

const App = (): any => {
    return (
        <StoreProvider>
            <DataFetcher>
                <Amplitude>
                    <main id="maincontent" role="main" tabIndex={-1}>
                        <TransitionGroup>
                            <CSSTransition
                                timeout={{ enter: 300, exit: 300 }}
                                classNames={'fade'}
                            >
                                <Switch>
                                    <Route exact={true} path="/" component={Soknader} />
                                    <Route path={'/soknader/:id/:stegId'} component={Soknad} />
                                    <Route path={'/soknader/:id'} component={Soknad} />
                                    <Route path={'/kvittering/:id'} component={KvitteringSide} />
                                    <Route path={'/sykepengesoknad-utland'} component={OpprettUtland} />
                                    <Route path={'/land'} component={LandvelgerComponent} />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    </main>
                </Amplitude>
            </DataFetcher>
        </StoreProvider>
    )
}

export default App
