import React, { createContext, useContext, useState, useEffect } from 'react'

import { Blink } from './blink'

export const blink = new Blink()

export const context = createContext()
export const useApi = () => useContext(context)
const { Provider } = context

export const ApiProvider = props => {
  const [state, setState] = useState()

  const updateSummary = () => {
    if (window.localStorage.info) {
      console.log('updating')
      const [token, account, tier] = window.localStorage.info.split('|')
      if (token && account && tier) {
        blink.hydrate(token, account, tier)
        blink.summary().then((summary) => {
          if (window.localStorage.info) {
            setState(summary)
          }
        })
      }
    }
  }

  useEffect(() => {
    // get summary if available, every 10 seconds
    updateSummary()
    const interval = setInterval(updateSummary, 100000)
    return () => clearInterval(interval)
  }, [state])

  const doLogin = async ({ email, password }) => {
    const info = await blink.login(email, password)
    window.localStorage.info = [info.authtoken.authtoken, info.account.id, Object.keys(info.region)[0]].join('|')
    updateSummary()
  }

  const doLogout = () => {
    window.localStorage.removeItem('info')
    setState(undefined)
  }

  return (<Provider {...props} value={{ summary: state, updateSummary, doLogin, doLogout, blink }} />)
}
