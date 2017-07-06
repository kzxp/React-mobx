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

export const asyncComponent = getComponent => {
  return class AsyncComponent extends React.Component {
    static Component = null
    state = { Component: AsyncComponent.Component }
    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(({ default: Component }) => {
          AsyncComponent.Component = Component
          this.setState({ Component })
        })
      }
    }
    render() {
      const { Component } = this.state
      if (Component) {
        return <Component {...this.props} />
      }
      return null
    }
  }
}
