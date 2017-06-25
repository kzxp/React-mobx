import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route } from 'react-router'
import { BrowserRouter, Link } from 'react-router-dom'
import { Provider } from 'mobx-react'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import * as stores from './stores'
import { Menu } from 'semantic-ui-react'

import Todo from './random/Todo'

const CustomLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <Menu.Item className={match ? 'active' : ''} as={Link} to={to}>
        {label}
      </Menu.Item>
    )}
  />
)

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
      <App>
        <Menu pointing secondary size="massive">
          <CustomLink to="/" activeOnlyWhenExact={true} label="Todo" />
					<CustomLink to="/not-yet" activeOnlyWhenExact={true} label="..." />
        </Menu>
        <Switch>
          <Route exact path="/" component={Todo} />
					 <Route component={() => <div>404</div>} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
