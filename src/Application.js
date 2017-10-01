import React from 'react'
import _ from 'lodash'
import { Route, Link } from 'react-router-dom'
import { CODE } from 'CONSTANTS'
import availableChunk from 'containers/code/available-chunk'
import routes from './routes'
import { Hero, Container } from 'components/layout'
import { CustomLink } from 'components/custom'

import { user as UserIcon } from 'ti-icons'

import ChevronLeftIcon from 'react-icons/lib/ti/chevron-left'

const Application = ({ children }) => (
  <Hero
    key="app"
    className="app"
    header={() => (
      <Container>
        <div className="tabs is-light is-large">
          {_.map(availableChunk, ({ component }, key) => (
            <Route
              key={key}
              path={CODE + key}
              render={() => (
                <Link className="back" to={CODE}>
                  <ChevronLeftIcon className="icon is-large" />
                </Link>
              )}
            />
          ))}
          <ul className="is-right">{routes.map(v => <CustomLink {...v} key={v.name} />)}</ul>
        </div>
      </Container>
    )}
  >
    <Container>{children}</Container>
  </Hero>
)

export default Application
