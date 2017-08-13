import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Application from '../Application'
import * as stores from '../stores'

describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <Application {...stores} />
      </BrowserRouter>,
      div
    )
  })
})
