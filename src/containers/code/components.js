import React from 'react'
import fp from 'lodash/fp'
import { Route } from 'react-router'
import { compose, branch, renderComponent } from 'recompose'
import { connect } from 'react-redux'
import { Col } from 'components/layout'
import { Card, CardContent } from 'components/card'
import { Field, Control, Input } from 'components/form'
import { Tag } from 'components/tag'
import { Title, Subtitle } from 'components/typography'
import { Button } from 'components/button'
import { Progress } from 'components/progress'
import { Loader } from 'components/loader'
import availableChunk from './available-chunk'

import {
  getSequenceByKey,
  getPerCodeData,
  getIsSomeDataFetching,
  getMappedCodeDataWithoutComponent
} from 'selectors'

export const FilterBar = () => {
  return (
    <Field>
      <Control className="is-expanded">
        <Input className="is-medium" type="text" />
      </Control>
    </Field>
  )
}

export const AllRoutes = compose(
  connect(state => ({
    code: getMappedCodeDataWithoutComponent(state),
    isSomeDataFetching: getIsSomeDataFetching(state)
  })),
  branch(({ isSomeDataFetching }) => isSomeDataFetching, renderComponent(Loader))
)(({ code, match }) => [
  <Route key="items" exact path={match.url} component={Items} />,
  ...fp.map(
    ({ Component, to }, key) => <Route key={key} path={match.url + to} component={Component} />,
    availableChunk
  ),
  ...fp.map(
    ({}, key) => <Route key={key} path={`${match.url}/${key}`} Component={() => <div>hi</div>} />,
    code
  )
])

export const Items = compose(
  connect(state => ({
    sequence: getSequenceByKey(state, 'code')
  }))
)(({ sequence, ...props }) => sequence.map(val => <Item key={val} id={val} {...props} />))

export const Item = connect((state, { id }) => ({
  ...getPerCodeData(state, id)
}))(({ id, match, history, title, intro, tags, status, Component }) => {
  const to = fp.getOr(id, 'to', availableChunk[Component])

  return (
    <Col className="is-half-tablet is-one-third-widescreen">
      <Card onClick={() => history.push(match.url + to)}>
        <CardContent>
          <div className="media">
            <div className="media-left">
              <figure className="image is-96x96">
                <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image" />
              </figure>
            </div>
            <div className="media-content">
              <Title tag="p" className="is-4">
                {title}
              </Title>
            </div>
          </div>
          <div className="content" dangerouslySetInnerHTML={{ __html: intro }} />
          <div>
            {tags.map(({ color, text }, index) => (
              <Tag className={`is-${color}`} key={`tag-${index}`}>
                {text}
              </Tag>
            ))}
          </div>
        </CardContent>
      </Card>
    </Col>
  )
})

{
  // import { HistoryModal } from 'components/modal'
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
}
{
  /* {isLogin && (
        <Cols className="action">
          <Col>
            <Button className="is-primary is-outlined is-size-2">Add new one</Button>
          </Col>
          <Col>
            <Button className="is-danger  is-outlined is-size-2">Delete</Button>
          </Col>
        </Cols>
      )} */
}
