import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import store from './store'
import routes from './routes'
import Profile from './components/profile'
import Join from './components/join'

import {Router, browserHistory} from 'react-router'


const Greeting = React.createClass({
  render(){
    return (<div>
      <div>Hello World</div>
      {this.props.children}
    </div>)
  }
})

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
)