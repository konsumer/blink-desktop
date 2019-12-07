import React from 'react'
import { useRoutes } from 'hookrouter'

import { ApiProvider, useApi } from './api'
import PageHome from './pages/PageHome'
import PageLogin from './pages/PageLogin'
import PageMediaList from './pages/PageMediaList'
import PageMedia from './pages/PageMedia'
import PageLive from './pages/PageLive'

const Main = () => {
  const { doLogin, summary } = useApi()
  const routeResult = useRoutes({
    [`${__dirname}/index.html`]: () => <PageHome summary={summary} />,
    '/': () => <PageHome summary={summary} />,
    '/media-list': () => <PageMediaList />,
    '/media/:id': ({ id }) => <PageMedia id={id} />,
    '/live/:network/:camera': ({ network, camera }) => <PageLive network={network} camera={camera} />
  })

  return summary
    ? routeResult
    : <PageLogin onLogin={doLogin} />
}

const App = () => (<ApiProvider><Main /></ApiProvider>)

export default App
