import React from 'react'
import ReactDOM from 'react-dom'

import './sass/app.sass'
import App from './App'
import './services/axiosConfig'

import { RootStateProvider } from 'store/RootStateContext'

ReactDOM.render(
  <React.StrictMode>
    <RootStateProvider>
      <App />
    </RootStateProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
