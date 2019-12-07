import React, { useEffect, useState } from 'react'
import { Container, Button } from 'reactstrap'

import { useApi } from '../api'

const PageHome = ({ summary }) => {
  const [thumbs, setThumbs] = useState([])
  const { blink } = useApi()

  useEffect(() => {
    Promise.all(summary.cameras.map(async camera => {
      const r = await blink.get(camera.thumbnail + '.jpg')
      return `data:image/jpeg;base64,${(await r.buffer()).toString('base64')}`
    }))
      .then(setThumbs)
  }, [summary, blink])

  return (
    <Container>
      <h2>cameras</h2>
      {summary.cameras.map((camera, c) => (
        <div key={c}>
          <h3>{camera.name}</h3>
          <div style={{ marginTop: 10, marginBottom: 10, display: 'flex', justifyContent: 'space-between' }}>
            <Button outline color='info'><i className='fas fa-camera' /> Snapshot</Button>
            <Button outline color='danger'><i className='fa fa-bell' /> Arm</Button>
            <Button outline color='success'><i className='fas fa-video' /> Live Video</Button>
          </div>
          <img src={thumbs[c]} width='100%' />
          <pre>{JSON.stringify(camera, null, 2)}</pre>
        </div>
      ))}
      <h2>networks</h2>
      <pre>{JSON.stringify(summary.networks, null, 2)}</pre>
    </Container>
  )
}

export default PageHome
