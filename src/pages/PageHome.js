import React, { useEffect, useState } from 'react'
import { Container, Button } from 'reactstrap'

import { useApi } from '../api'

const Camera = ({ camera, thumb }) => (
  <div>
    <h3>{camera.name}</h3>
    <div style={{ marginTop: 10, marginBottom: 10, display: 'flex', justifyContent: 'space-between' }}>
      <Button outline color='info'><i className='fas fa-camera' /> Snapshot</Button>
      <Button outline color='success'><i className='fas fa-video' /> Live Video</Button>
      <Button outline color='primary'><i className='fas fa-cloud-download-alt' /> Saved Videos</Button>
      <Button outline color='danger'><i className='fa fa-bell' /> Arm</Button>
    </div>
    <img src={thumb} width='100%' />
    <pre>{JSON.stringify(camera, null, 2)}</pre>
  </div>
)

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
      {summary.networks.map(network => (
        <div key={network.id}>
          <h2>My House</h2>
          {summary.cameras.filter(camera => camera.network_id === network.id).map((camera, c) => (<Camera key={camera.id} camera={camera} thumb={thumbs[c]} />))}
        </div>
      ))}
    </Container>
  )
}

export default PageHome
