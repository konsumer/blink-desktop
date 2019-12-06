import React from 'react'
import ReactDOM from 'react-dom'

import { notify } from './utils'

const sayHello = () => {
  notify({ title: 'HI!', message: 'Hello, there!' })
}

const App = () => (
  <div>
    <h1>It works</h1>
    <button onClick={sayHello}>test notification</button>
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
