import React from 'react'

import moment from 'moment'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { Cols, Col, Container } from 'components/layout'
import { Button } from 'components/button'
import { Timeline } from 'components/timeline'

import { withCamera } from 'components/hoc/camera'
import { Select } from 'components/select'
import { HistoryModal } from 'components/modal'

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

const mock = [
  {
    title: 'Sizzler',
    date: '2017-08-25',
    price: '867'
  },
  {
    title: 'Pepper lunch',
    date: '2017-09-15',
    price: '765'
  },
  {
    title: 'Sizzler',
    date: '2017-09-22',
    price: '937'
  },
  {
    title: 'The Pizza company',
    date: '2017-09-29',
    price: '881'
  }
]

const getFunFridayMemoState = createSelector(
  state => state.memoSequence,
  state => state.memos,
  (memoSequence, memos) => ({ memoSequence, memos })
)

// const isModal = !!(location.state && location.state.modal && this.previousLocation !== location)
/* {isModal && (
        <Route
          path={`${match.url}/i/:id`}
          component={props => (
            <HistoryModal closeBtn={true} to={match.url} {...props}>
              <Card params={props.params}>
                <CardContent>
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <Title tag="p" className="is-4">
                        555555
                      </Title>
                      <Subtitle tag="p" className="is-6">
                        555555
                      </Subtitle>
                    </div>
                  </div>
                  <div className="content">lorem</div>
                </CardContent>
              </Card>
            </HistoryModal>
          )}
        />
      )} */

const FunFridayMemo = () => (
  <Col>
    {mock.map((props, index) => <Timeline key={index} {...props} />)}
    {/* <Camera /> */}
    {/* <Container className="action">
      <Cols className="is-flex is-right">
        <Col className="is-narrow">
          <Button className="is-primary is-outlined is-size-2">Add new one</Button>
          <Button className="is-danger is-outlined is-size-2">Delete</Button>
        </Col>
      </Cols>
    </Container> */}
  </Col>
)

export default connect(getFunFridayMemoState)(FunFridayMemo)
