import React from 'react'
import _ from 'lodash'
import { Route, Redirect } from 'react-router'
import routes from './routes'
import { matchPath } from 'react-router-dom'
import { Box, List, ListItem } from 'grommet'

import { BoxWithH2 } from 'components/common'
import RandomList from './RandomList'

const renderRoute = path => ({ name, component: Component }) =>
  <Route
    exact
    key={name}
    path={path}
    render={props =>
      <BoxWithH2 heading={name}>
        <Component {...props} />
      </BoxWithH2>}
  />

const Random = ({ match, children }) =>
  <Box>
    <Route
      exact
      path={match.url}
      render={() =>
        <BoxWithH2 heading="Random">
          {_.map(routes, v =>
            <RandomList
              key={`list-${v.name}`}
              {...v}
              parentPath={`${match.path}/${v.path}`}
            />
          )}
        </BoxWithH2>}
    />
    {_.map(routes, v =>
      _.map(v.children, vC =>
        renderRoute(`${match.path}/${v.path}/${vC.path}`)(vC)
      )
    )}
  </Box>

export default Random
