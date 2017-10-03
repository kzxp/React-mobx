import React from 'react'
import { Cols, Col } from 'components/layout'

export const Timeline = () => (
  <Cols className="timeline is-mobile">
    <Col className="left is-half-mobile  is-one-third-tablet" data-date="10 Augus 17">
      <figure className="image is-96x96">
        <img src="http://via.placeholder.com/96x96" title="" alt="11" />
      </figure>
    </Col>
    <Col className="right is-narrow">
      <h3>กินที่บ้าน</h3>
      <p className="price">
        <strong>{'2,000'}.-</strong>
      </p>
    </Col>
  </Cols>
)
