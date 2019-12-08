import React, { useEffect, useState } from 'react'
import dateformat from 'dateformat'

import { useApi } from './api'

const BlinkVideo = ({ video }) => {
  const [playing, setPlaying] = useState(false)
  const [vid, setVid] = useState(false)
  const [img, setImg] = useState()

  const { blink } = useApi()

  useEffect(() => {
    blink.get(video.thumbnail).then(async r => setImg(`data:image/jpeg;base64,${(await r.buffer()).toString('base64')}`))
  }, [video])

  const onPlay = () => {
    setPlaying(true)
    blink.get(video.media).then(async r => setVid(`data:video/mp4;base64,${(await r.buffer()).toString('base64')}`))
  }

  return (
    <div>
      <div style={{ height: '54.5vw', textAlign: 'center' }}>
        {!playing && <img src={img} onClick={onPlay} width='100%' />}
        {playing && <video poster={img} onClick={e => { e.target.currentTime = 0; e.target.play() }} autoPlay src={vid} width='100%' />}
      </div>
      <small style={{ marginBottom: 10, display: 'block', textAlign: 'center' }}>{dateformat(video.created_at, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}</small>
    </div>
  )
}

export default BlinkVideo
