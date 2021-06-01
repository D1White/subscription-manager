import { FC } from 'react'
import getDashValue from 'services/getDashValue'

interface SpendChartProps {
  percent: number
}

const SpendChart: FC<SpendChartProps> = ({ percent }) => {
  return (
    <div className="spend-chart">
      <div className="spend-chart__container">
        <span className="spend-chart__text">on subscriptions, you spend:</span>
        <div className="spend-chart__chart">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }}>
            <defs>
              <radialGradient id="grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="70%" style={{ stopColor: '#FF953B' }} />
                <stop offset="100%" style={{ stopColor: '#FFD873' }} />
              </radialGradient>
            </defs>
            <circle className="spend-chart__circle-bg" cx="100" cy="100" r="90" />
            <circle
              className="spend-chart__circle"
              cx="100"
              cy="100"
              r="90"
              stroke="url(#grad)"
              strokeDashoffset={getDashValue(90, percent)}
            />
          </svg>
          <div className="chart__text-block">
            <span className="chart__text-percent">{`${percent}%`}</span>
            <span className="chart__text">of income</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpendChart
