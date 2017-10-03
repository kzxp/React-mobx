import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'

import createSagaMiddleware from 'redux-saga'

import { Cols, Col, Container } from 'components/layout'
import { Button } from 'components/button'
import { Timeline } from 'components/modified/timeline'

const FunFridayMemo = () => (
  <Col>
    <Timeline />
    <Timeline />
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
