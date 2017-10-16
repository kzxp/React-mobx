import React from 'react'
import _ from 'lodash'
import { Route, Link } from 'react-router-dom'
import { CODE } from 'CONSTANTS'
import availableChunk from 'containers/code/available-chunk'
import routes from './routes'
import { Hero, Container, Cols, Col } from 'components/layout'
import { CustomLink } from 'components/custom'
import { Button } from 'components/button'

import { user as UserIcon, star as StarIcon } from 'ti-icons'
import ChevronLeftIcon from 'react-icons/lib/ti/chevron-left'

const Application = ({ children }) => (
  <Hero
    key="app"
    className="app"
    header={() => (
      <Container>
        <Cols className="is-mobile is-gapless">
          <Col>
            {_.map(availableChunk, ({ name }, key) => (
              <Route
                key={key}
                path={CODE + key}
                render={({ match }) => (
                  <Link className="back" to={CODE}>
                    <ChevronLeftIcon className="icon" />
                  </Link>
                )}
              />
            ))}
          </Col>
          <Col className="is-narrow">
            <div className="tabs is-light">
              <ul className="is-size-5-mobile is-size-3-tablet">
                {routes.map(v => <CustomLink {...v} key={v.name} />)}
              </ul>
            </div>
          </Col>
        </Cols>
      </Container>
    )}
  >
    <Container>{children}</Container>
  </Hero>
)

export default Application
