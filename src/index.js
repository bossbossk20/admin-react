import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'

import { Router, Route, browserHistory } from 'react-router'
import Page1 from './Page/Page1'
import Page2 from './Page/Page2'
import Page3 from './Page/Page3'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='student' component={Page1} />
      <Route path='class' component={Page2} />
      <Route path='exam' component={Page3} />
      <Route path='*' component={Page1} />
    </Route>
  </Router>,
  document.getElementById('root')
)
