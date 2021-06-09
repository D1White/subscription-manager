import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { AuthInput } from 'components'
import { AuthApi } from 'api/auth.api'
import checkWarnings from 'services/checkWarnings'

import { ReactComponent as Lines1 } from 'assets/img/lines-1.svg'
import { ReactComponent as Lines2 } from 'assets/img/lines-2.svg'
import { ReactComponent as Bubble } from 'assets/img/bubble.svg'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [warning, setWarning] = useState({
    email: false,
    password: false,
  })

  useEffect(() => {
    if (email && (email.length < 3 || email.length > 50)) {
      setWarning({ ...warning, email: true })
    } else {
      setWarning({ ...warning, email: false })
    }
  }, [email])

  useEffect(() => {
    if (password && (password.length < 3 || password.length > 50)) {
      setWarning({ ...warning, password: true })
    } else {
      setWarning({ ...warning, password: false })
    }
  }, [password])

  const submit = () => {
    if (!checkWarnings(warning) && email && password) {
      AuthApi.login(email, password)
        .then((user) => {
          localStorage.setItem('token', user.token)
          window.location.href = '/'
        })
        .catch((_) => {
          window.location.href = '/404'
        })
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-page__main">
        <h1 className="auth-page__title">Login</h1>

        <AuthInput title="Email or username" warning={warning.email} setText={setEmail} />
        <AuthInput title="Password" type="password" warning={warning.password} setText={setPassword} />

        <button className="auth-page__btn" onClick={submit}>
          Sign in
        </button>
        <div className="auth-page__text-block">
          <span className="auth-page__text">No account?&nbsp;</span>
          <Link to="/register" className="auth-page__link">
            Sign up
          </Link>
        </div>
      </div>
      <div className="auth-page__poster">
        <div className="poster__sprites">
          <Lines1 className="poster__lines" />
          <Lines2 className="poster__lines poster__lines_bottom" />
          <Bubble className="poster__bubble" />
        </div>
        <div className="poster__content">
          <span className="poster__text">
            Start monitoring your subscriptions <br /> just in one click
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
