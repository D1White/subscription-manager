import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Main, Register, AfterRegister } from 'pages'

function App() {
  return (
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/after-register" component={AfterRegister} />
      <Route exact path="/" component={Main} />
    </Switch>
  )
}

export default App
