import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Container } from 'semantic-ui-react'
import Todo from './random/Todo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React + Mobx</h2>
        </div>
        <p className="App-intro">
          Try out Mobx
        </p>
        <div className="App-body">
					<Container text>
          	<Todo />
					</Container>
        </div>
      </div>
    )
  }
}

export default App