import React, { createContext, useContext, useState, useEffect } from 'react'

import { Blink } from './blink'

export const blink = new Blink()

export const context = createContext()
export const useApi = () => useContext(context)
const { Provider } = context

export const ApiProvider = props => {
  const [state, setState] = useState()

  useEffect(() => {
    if (window.localStorage.info) {
      const [token, account, tier] = window.localStorage.info.split('|')
      blink.hydrate(token, account, tier)
      blink.summary().then(setState)
    }
    // TODO: set interval here for keeping summary fresh?
  })

  const doLogin = async ({ email, password }) => {
    const info = await blink.login(email, password)
    window.localStorage.info = [info.authtoken.authtoken, info.account.id, Object.keys(info.region)[0]].join('|')
    blink.summary().then(setState)
  }

  const doLogout = () => {
    window.localStorage.removeItem('info')
    setState(undefined)
  }

  return (<Provider {...props} value={{ summary: state, doLogin, doLogout, blink }} />)
}
