import React from 'react'

import PageHome from './pages/PageHome'
import PageLogin from './pages/PageLogin'
import { ApiProvider, useApi } from './api'

const Main = () => {
  const { doLogin, summary } = useApi()

  return summary
    ? <PageHome summary={summary} />
    : <PageLogin onLogin={doLogin} />
}

const App = () => (<ApiProvider><Main /></ApiProvider>)

export default App
