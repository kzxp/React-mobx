import React from 'react'
import classnames from 'classnames'
import { Route, Switch, Redirect } from 'react-router'
import { Link } from 'react-router-dom'

export const CustomLink = ({
  exact,
  name,
  path,
  component,
  icon: Icon,
  className,
  ...otherProps
}) => (
  <Route
    exact={exact}
    path={path}
    children={({ match }) => (
      <li className={classnames(className, match && 'is-active')} {...otherProps}>
        <Link to={path}>
          {' '}
          <Icon className="icon" />
          {name}
        </Link>
      </li>
    )}
  />
)

const Loader = () => (
  <div className="loader__wrapper">
    <div className="loader" />
  </div>
)

export const asyncComponent = getComponent => {
  return class AsyncComponent extends React.Component {
    static Component = Loader
    state = { Component: AsyncComponent.Component, isLoaded: false }
    componentWillMount() {
      if (!this.state.isLoaded) {
        getComponent().then(({ default: Component }) => {
          AsyncComponent.Component = Component
          this.setState({ Component, isLoaded: true })
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

export const SwitchWithRedirect = ({ children, to }) => (
  <Switch>
    {children}
    <Redirect from="/" to={to} />
  </Switch>
)
