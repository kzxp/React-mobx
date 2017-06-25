import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import * as stores from './stores'

ReactDOM.render(
  <Provider {...stores}><App {...stores} /></Provider>,
  document.getElementById('root')
)
registerServiceWorker()
