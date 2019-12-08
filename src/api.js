import React, { createContext, useContext, useState, useEffect } from 'react'
import { Blink } from 'blink-data'
import emitonoff from 'emitonoff'

export const blink = new Blink()

export const context = createContext()
export const useApi = () => useContext(context)
const { Provider } = context

export const pipe = emitonoff()

setInterval(() => {
  pipe.emit('update')
}, 1000)

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
    updateSummary()
    pipe.on('update', updateSummary)
    return () => pipe.off('update', updateSummary)
  }, [])

  const doLogin = async ({ email, password }) => {
    const info = await blink.login(email, password)
    window.localStorage.info = [info.authtoken.authtoken, info.account.id, Object.keys(info.region)[0]].join('|')
    updateSummary()
  }

  const doLogout = () => {
    window.localStorage.removeItem('info')
    setState(undefined)
  }

  return (<Provider {...props} value={{ summary: state, pipe, updateSummary, doLogin, doLogout, blink }} />)
}
