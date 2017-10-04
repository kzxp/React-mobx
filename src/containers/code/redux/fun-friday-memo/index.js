import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'

import createSagaMiddleware from 'redux-saga'

import { Cols, Col, Container } from 'components/layout'
import { Button } from 'components/button'
import { Timeline } from 'components/modified/timeline'

import { withCamera } from 'components/hoc/camera'
import { Select } from 'components/select'

const Camera = withCamera(
  ({
    selectedDevice,
    devicesInfo,
    mediaStreamSrc,
    getStream,
    takePhoto,
    imageSrc,
    ...otherProps
  }) => (
    <Cols className="is-multiline">
      <Col className="is-full">
        <Select
          value={selectedDevice}
          options={devicesInfo.map(({ label, deviceId }, index) => ({
            text: `Camera ${index + 1} ${label}`,
            value: deviceId
          }))}
          onChange={event => getStream(null, event.target.value)}
        />
        <Button onClick={takePhoto}>Capture</Button>
      </Col>
      <Col className="is-6">
        <video autoPlay src={mediaStreamSrc} />
      </Col>

      <Col className="is-6">
        {imageSrc.map((src, index) => (
          <figure key={src} className="image is-pulled-left m-5 is-128x128">
            <img src={src} />
          </figure>
        ))}
      </Col>
    </Cols>
  )
)

const FunFridayMemo = () => (
  <Col>
    <Timeline />
    <Timeline />
    <Camera />
    <Container className="action">
      <Cols className="is-flex is-right">
        <Col className="is-narrow">
          <Button className="is-primary is-outlined is-size-2">Add new one</Button>
          <Button className="is-danger is-outlined is-size-2">Delete</Button>
        </Col>
      </Cols>
    </Container>
  </Col>
)

export default FunFridayMemo
