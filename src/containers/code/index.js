import React from 'react'
import { CODE } from 'CONSTANTS'
import _ from 'lodash'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import availableChunk from './available-chunk'
import { Cols, Col } from 'components/layout'
import { Button } from 'components/button'
import { CustomLink, SwitchWithRedirect } from 'components/custom'

import { Item } from './components'

import cont from 'constants'

const Code = ({ location, match, children }) => {
  return (
    <Cols className="code is-multiline">
      <SwitchWithRedirect to={CODE}>
        <Route exact path={match.url} component={Item} />
        {_.map(availableChunk, ({ Component }, key) => (
          <Route key={key} path={match.url + key} component={props => <Component {...props} />} />
        ))}
      </SwitchWithRedirect>
    </Cols>
  )
}

export default Code
