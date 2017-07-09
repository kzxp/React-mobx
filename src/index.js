import React from 'react'
import _ from 'lodash'
import ReactDOM from 'react-dom'
import { Switch, Route } from 'react-router'
import { BrowserRouter, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import Application from './Application'
import registerServiceWorker from './registerServiceWorker'
import './styles/main.css'
import routes from './routes'
import configureStore from './stores'

const initialState = {}
const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Application>
        <Switch>
          {_.map(routes, v => <Route {...v} key={v.name} />)}
          <Route
            component={({ location }) =>
              <div>
                404 {location.pathname}
              </div>}
          />
        </Switch>
      </Application>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
