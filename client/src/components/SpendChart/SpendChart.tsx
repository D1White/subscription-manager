import React from 'react'

const data = [
  { name: 'spent', value: 400 },
  { name: 'left', value: 100 },
]

const SpendChart = () => {
  return (
    <div className="pie-chart">
      <span className="pie-chart__text">on subscriptions, you spend:</span>
    </div>
  )
}

export default SpendChart
