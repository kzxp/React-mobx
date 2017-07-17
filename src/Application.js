import React, { Component } from 'react'
import logo from './logo.svg'
import routes from './routes'
import { Hero } from 'components/layout'
import { CustomLink } from 'components/custom'

const Application = ({ children }) =>
  <Hero className="App is-medium is-light is-fullheight is-bold">
    <div className="tabs is-centered is-large">
      <ul>
        {_.map(routes, v => <CustomLink {...v} key={v.name} />)}
      </ul>
    </div>
    {children}
  </Hero>

export default Application
