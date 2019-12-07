import React, { useEffect, useState } from 'react'

import { useApi } from './api'

const BlinkImg = (props) => {
  const [img, setImg] = useState()
  const { blink } = useApi()
  useEffect(() => {
    blink.get(props.src).then(async r => setImg(`data:${props.type || 'image/jpeg'};base64,${(await r.buffer()).toString('base64')}`))
  }, [props])
  return img ? <img {...props} src={img} /> : null
}

export default BlinkImg
