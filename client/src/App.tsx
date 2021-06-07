import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Main, Register, Login } from 'pages'
import { PrivateRoute } from 'components'

function App() {
  return (
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/" component={Main} />
    </Switch>
  )
}

export default App
