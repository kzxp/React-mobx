import React from 'react'
import _ from 'lodash'
import { Route, Redirect } from 'react-router'
import routes from './routes'
import { matchPath } from 'react-router-dom'
import { Columns, Box, List, ListItem } from 'grommet'

import { BoxWithH2 } from 'components/common'
import { CustomLink } from 'components/custom'
import RandomList from './random-list'

const renderRoute = parentPath => ({ name, path, component: Component }) =>
  <Route
    exact
    key={name}
    path={`${parentPath}/${path}`}
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
          <Columns justify="center" size="large">
            {_.map(routes, v =>
              <RandomList
                key={`list-${v.name}`}
                {...v}
                parentPath={`${match.path}/${v.path}`}
              />
            )}
          </Columns>
        </BoxWithH2>}
    />
    {_.map(routes, v =>
      _.map(v.children, vC => renderRoute(`${match.path}/${v.path}`)(vC))
    )}
  </Box>

export default Random
