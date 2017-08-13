import React from 'react'
import _ from 'lodash'
import { Route, Switch, Redirect } from 'react-router'
import routes from './routes'
import { matchPath } from 'react-router-dom'
import { Section, Container, Cols, Col } from 'components/layout'
import { Title } from 'components/typography'
import { CustomLink } from 'components/custom'
import { FilterBar, Item } from './components'

const Random = ({ match, children }) =>
  <Cols className="is-multiline">
    <Col className="is-full">
      <FilterBar />
      <Item />
      <Item />
      <Item />
    </Col>
    <Col>
      <Switch>
        {_.map(routes, v =>
          <Route
            exact
            key={name}
            path={`${match.url}${v.path}`}
            render={() =>
              <Title tag="h2">
                {name}
              </Title>}
          />
        )}
        <Redirect to={match.url} />
      </Switch>
    </Col>
  </Cols>

export default Random
