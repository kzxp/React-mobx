import React from 'react'
import { Route } from 'react-router'
import { Anchor } from 'grommet'

export const CustomLink = ({ exact, name, path }) =>
  <Route
    exact={exact}
    path={path}
    children={({ match }) =>
      <Anchor className={match ? 'active' : ''} path={path}>
        {name}
      </Anchor>}
  />
