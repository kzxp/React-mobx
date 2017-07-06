import React from 'react'

const s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
}

export const guid = () => {
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`
}

export const asyncComponent = getComponent => {
  return class AsyncComponent extends React.Component {
    static Component = null
    state = { Component: AsyncComponent.Component }
    y
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
