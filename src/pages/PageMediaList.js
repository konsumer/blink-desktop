import React, { useEffect, useState } from 'react'
import { A } from 'hookrouter'

import { useApi } from '../api'
import BlinkVideo from '../BlinkVideo'

const PageMediaList = () => {
  const { blink } = useApi()
  const [media, setMedia] = useState()

  useEffect(() => { blink.videos().then(setMedia) }, [])

  return (
    <div style={{ padding: 10 }}>
      <A href='/' style={{ fontSize: 30, position: 'fixed', top: 0, left: 20, zIndex: 1000 }}><i className='fas fa-times' /></A>
      {media && media.media.map(v => <BlinkVideo key={v.id} video={v} />)}
    </div>
  )
}

export default PageMediaList
