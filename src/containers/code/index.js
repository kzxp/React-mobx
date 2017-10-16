import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CODE } from 'CONSTANTS'

import fp from 'lodash'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import { Cols, Col } from 'components/layout'
import { Button } from 'components/button'
import { CustomLink, SwitchWithRedirect } from 'components/custom'

import { AllRoutes } from './components'

import cont from 'constants'

const Code = ({ location, match, children, sequence }) => {
  return (
    <Cols className="code is-multiline">
      <SwitchWithRedirect to={CODE}>
        <AllRoutes match={match} />
      </SwitchWithRedirect>
    </Cols>
  )
}

export default Code
