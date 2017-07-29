import React from 'react'
import _ from 'lodash'
import { Route, Switch, Redirect } from 'react-router'
import routes from './routes'
import { matchPath } from 'react-router-dom'
import { Section, Container, Cols, Col } from 'components/layout'
import { H1Title } from 'components/typography'
import { CustomLink } from 'components/custom'

const renderRoute = parentPath => ({ component: Component, ...props }) => {
  const { name, path } = props

  return (
    <Route
      exact
      key={name}
      path={`${parentPath}${path}`}
      render={() =>
        <H1Title>
          {name}
        </H1Title>}
    />
  )
}

const Random = ({ match, children }) =>
  <Cols>
    <Col>
      <Switch>
        <Route
          exact={true}
          path={match.url}
          component={({ location }) =>
            <div>
              Found in {match.url} {location.pathname}
            </div>}
        />
        {_.map(routes, v => _.map(v.children, vC => renderRoute(`${match.url}${v.path}`)(vC)))}
        <Route render={() => <Redirect to={match.url} />} />
      </Switch>
    </Col>
  </Cols>

export default Random
