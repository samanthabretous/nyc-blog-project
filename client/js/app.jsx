import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import store from './store'
import routes from './routes'

import {Router, browserHistory} from 'react-router'

import '../scss/app.scss';


render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
  </Provider>,
  document.getElementById('root')
)