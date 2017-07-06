import React from 'react'
import _ from 'lodash'
import { Route, Redirect } from 'react-router'
import routes from './routes'
import { matchPath } from 'react-router-dom'

const Random = ({ match, children }) =>
  <div>
    <Route exact path={match.url} render={() => <h3>Random</h3>} />
    {_.map(routes, v =>
      <Route
        exact
        key={v.name}
        path={`${match.url}/${v.path}`}
        render={props => <v.component {...props} />}
      />
    )}
  </div>

export default Random
