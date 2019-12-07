import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Container } from 'reactstrap'

import { notify } from './utils'

const sayHello = () => {
  notify({ title: 'HI!', message: 'Hello, there!' })
}

const App = () => (
  <Container>
    <h1>It works</h1>
    <Button color='primary' onClick={sayHello}>test notification</Button>
  </Container>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
