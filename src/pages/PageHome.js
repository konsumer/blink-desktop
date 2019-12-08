import React from 'react'
import { Button, Badge } from 'reactstrap'
import { A } from 'hookrouter'

import Wifi from '../Wifi'
import BlinkImg from '../BlinkImg'
import { useApi } from '../api'

const wifiText = ['Disconnected', 'Unusable', 'Weak', 'Okay', 'Great', 'Excellent']

const Camera = ({ camera, thumb }) => {
  const { blink } = useApi()

  const onSnapshot = (network, camera) => {
    blink.thumbnail(network, camera)
  }

  return (
    <div>
      <h3>{camera.name}</h3>
      <div style={{ marginTop: 10, marginBottom: 10, display: 'flex', justifyContent: 'space-between' }}>
        <Button onClick={() => onSnapshot(camera.network_id, camera.id)} color='info'><i className='fas fa-camera' /> Snapshot</Button>
        <Button color='success'><i className='fas fa-video' /> Live</Button>
      </div>
      <div style={{ height: '56vw' }}>
        <BlinkImg src={camera.thumbnail + '.jpg'} width='100%' />
      </div>
      <small style={{ textAlign: 'center', display: 'block' }}>
        <Wifi title={wifiText[camera.signals.wifi] + ' wifi signal'} strength={camera.signals.wifi} height='1em' /> &nbsp;
        {camera.enabled ? <span><i className='fa fa-eye' /> Enabled</span> : <span><i className='fa fa-eye-slash' /> Disabled</span>} &bull;
      Temperature: {camera.signals.temp}&deg;F &bull;
      Battery: {camera.battery} &bull;
      FW: {camera.fw_version} &bull;
      Status: {camera.status}
      </small>
    </div>
  )
}

const PageHome = ({ summary }) => {
  const { blink, doLogout, updateSummary } = useApi()

  return (
    <div style={{ padding: 10 }}>
      <div style={{ position: 'fixed', top: 10, right: 10 }}>
        <A href='/media-list' style={{ marginRight: 10 }}><Button color='primary'><i className='fas fa-cloud-download-alt' /> Clips <Badge>{summary.video_stats.storage}%</Badge></Button></A>
        <Button onClick={doLogout} outline color='danger'><i className='fas fa-sign-out-alt' /> Logout</Button>
      </div>
      {summary.networks.map(network => (
        <div key={network.id}>
          <h2>{network.name}</h2>
          {network.armed
            ? (<Button className='float-right' onClick={() => blink.disarm(network.id).then(updateSummary)} color='danger'><i className='fa fa-eye-slash' /> Disarm</Button>)
            : (<Button className='float-right' onClick={() => blink.arm(network.id).then(updateSummary)} color='danger'><i className='fa fa-eye' /> Arm</Button>)}
          {summary.cameras.filter(camera => camera.network_id === network.id).map((camera, c) => (<Camera key={camera.id} camera={camera} />))}

        </div>
      ))}
    </div>
  )
}

export default PageHome
