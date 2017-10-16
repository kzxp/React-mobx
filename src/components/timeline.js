import React from 'react'
import moment from 'moment'
import { Cols, Col, Title } from 'components/layout'

export const Timeline = ({ image, title, price, date }) => (
  <Cols className="timeline is-mobile">
    <Col
      className="left is-one-third-desktop"
      data-date={moment(date)
        .format('DD MMM GG')
        .toUpperCase()}
    >
      <figure className="image is-128x128">
        <img src="https://via.placeholder.com/128x128" title="no image" alt="no image" />
      </figure>
    </Col>
    <Col className="right is-half-mobile is-one-third-desktop">
      <h3>{title}</h3>
      <p className="is-size-3-touch is-size-1-desktop">
        <strong>{price}.-</strong>
      </p>
    </Col>
  </Cols>
)
