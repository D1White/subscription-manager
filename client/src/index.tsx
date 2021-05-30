import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './sass/app.sass'
import App from './App'
import './services/axiosConfig'

import { RootStateProvider } from 'store/RootStateContext'

ReactDOM.render(
  <BrowserRouter>
    <RootStateProvider>
      <App />
    </RootStateProvider>
  </BrowserRouter>,
  document.getElementById('root'),
)
