import React, { useEffect, useState } from 'react'
import { Container, Button, Badge } from 'reactstrap'
import WifiIndicator, { SignalStrength } from 'react-wifi-indicator'

import { useApi } from '../api'

const wifi = [SignalStrength.DISCONNECTED, SignalStrength.WEAK, SignalStrength.OKAY, SignalStrength.GREAT, SignalStrength.EXCELLENT]

const wifiText = ['Disconnected', 'Weak', 'Okay', 'Great', 'Excellent']

const Camera = ({ camera, thumb }) => (
  <div>
    <h3>{camera.name}</h3>
    <div style={{ marginTop: 10, marginBottom: 10, display: 'flex', justifyContent: 'space-between' }}>
      <Button outline color='info'><i className='fas fa-camera' /> Snapshot</Button>
      <Button outline color='success'><i className='fas fa-video' /> Live</Button>
      {camera.enabled
        ? (<Button outline color='danger'><i className='fa fa-eye-slash' /> Disarm</Button>)
        : (<Button outline color='danger'><i className='fa fa-eye' /> Arm</Button>)}

    </div>
    <img src={thumb} width='100%' />
    <small>
      {camera.enabled ? <span><i className='fa fa-eye' /> Armed</span> : <span><i className='fa fa-eye-slash' /> Disarmed</span>} &bull;
      <WifiIndicator title={wifiText[camera.signals.wifi]} strength={wifi[camera.signals.wifi]} style={{ height: '1.5em' }} /> &bull;
      Temperature: {camera.signals.temp}&deg;F &bull;
      Battery: {camera.battery} &bull;
      FW: {camera.fw_version} &bull;
      Status: {camera.status}
    </small>
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
      <Button className='float-right' color='primary' style={{ marginTop: 10 }}><i className='fas fa-cloud-download-alt' /> Clips <Badge>{summary.video_stats.storage}%</Badge></Button>
      {summary.networks.map(network => (
        <div key={network.id}>
          <h2>{network.name}</h2>
          {summary.cameras.filter(camera => camera.network_id === network.id).map((camera, c) => (<Camera key={camera.id} camera={camera} thumb={thumbs[c]} />))}
        </div>
      ))}
      {/* <pre>{JSON.stringify(summary, null, 2)}</pre> */}
    </Container>
  )
}

export default PageHome
