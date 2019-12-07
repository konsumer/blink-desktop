import React, { useState } from 'react'
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button
} from 'reactstrap'

const style = {
  form: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const PageLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Container className='PageLogin' style={style.form}>
      <h2>Sign In</h2>
      <Form onSubmit={e => { e.preventDefault(); onLogin({ email, password }) }}>
        <Col>
          <FormGroup>
            <Label>Email</Label>
            <Input autoFocus value={email} type='email' placeholder='myemail@email.com' onChange={e => setEmail(e.target.value)} />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for='examplePassword'>Password</Label>
            <Input value={password} type='password' onChange={e => setPassword(e.target.value)} />
          </FormGroup>
        </Col>
        <center>
          <Button block color='primary' type='submit'>login</Button>
        </center>
      </Form>
      <small>Use your Blink credentials to login.</small>
    </Container>
  )
}

export default PageLogin
