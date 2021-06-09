import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Puzzle } from 'assets/img/puzzle.svg'

const Error = () => {
  return (
    <div className="error-page">
      <Puzzle className="error-page__puzzle" />
      <h1 className="error-page__title text-xl">Error!</h1>
      <Link to="/" className="error-page__link text-l">
        Quickly! Go Home!
      </Link>
    </div>
  )
}

export default Error
