import React from 'react'

// Simple wifi indicator strength = 0 - 3

// TODO: if strength == 0 do red-x, if 5 do green

const SvgComponent = (props) => {
  const offColor = props.offColor || '#333'
  const onColor = props.onColor || '#fff'
  return (
    <svg viewBox='0 0 2048 1792' {...props}>
      <path fill={props.strength >= 1 ? onColor : offColor} d='M1024 1523q-20 0-93-73.5t-73-93.5q0-32 62.5-54t103.5-22q41 0 103.5 22t62.5 54q0 20-73 93.5t-93 73.5zm270-271q-2 0-40-25t-101.5-50q-63.5-25-128.5-25t-128.5 25q-63.5 25-101 50t-40.5 25q-18 0-93.5-75t-75.5-93q0-13 10-23 78-77 196-121t233-44q115 0 233 44t196 121q10 10 10 23 0 18-75.5 93t-93.5 75z' />
      <path fill={props.strength >= 2 ? onColor : offColor} d='M1567 980q-11 0-23-8-136-105-252-154.5T1024 768q-85 0-170.5 22t-149 53Q641 874 591 905t-79 53q-29 22-31 22-17 0-92-75t-75-93q0-12 10-22 132-132 320-205t380-73q192 0 380 73t320 205q10 10 10 22 0 18-75 93t-92 75z' />
      <path fill={props.strength >= 3 ? onColor : offColor} d='M1838 709q-11 0-22-9-179-157-371.5-236.5T1024 384q-228 0-420.5 79.5T232 700q-11 9-22 9-17 0-92.5-75T42 541q0-13 10-23 187-186 445-288t527-102q269 0 527 102t445 288q10 10 10 23 0 18-75.5 93t-92.5 75z' />
    </svg>
  )
}

export default SvgComponent
