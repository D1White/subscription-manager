import React from 'react'
import { useParams } from 'react-router-dom'

interface ParamTypes {
  step: string
}

const AfterRegister = () => {
  const { step } = useParams<ParamTypes>()

  return (
    <div>
      <h1>{step}</h1>
    </div>
  )
}

export default AfterRegister
