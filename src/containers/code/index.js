import React from 'react'
import _ from 'lodash'
import { Route, Switch, Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import availableChunk from './available-chunk'
import { Cols, Col } from 'components/layout'
import { Button } from 'components/button'
import { CustomLink } from 'components/custom'

import { Item } from './components'

import cont from 'constants'

const Code = ({ location, match, children, isLogin = true }) => {
  return (
    <Cols className="code is-multiline">
      <Switch>
        <Route exact path={match.url} component={Item} />
        {_.map(availableChunk, ({ Component }, key) => (
          <Route
            key={key}
            path={match.url + key}
            component={props => (
              <Col>
                <Component {...props} />
              </Col>
            )}
          />
        ))}
      </Switch>
    </Cols>
  )
}

export default Code
