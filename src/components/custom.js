import React from 'react'
import classnames from 'classnames'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

export const CustomLink = ({ exact, name, path, component, className, ...otherProps }) =>
  <Route
    exact={exact}
    path={path}
    children={({ match }) =>
      <li className={classnames(className, match && 'is-active')} {...otherProps}>
        <Link to={path}>
          {name}
        </Link>
      </li>}
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
