import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import App from './App'
import * as stores from './stores'

describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Provider {...stores}><App {...stores} /></Provider>, div)
  })
})
