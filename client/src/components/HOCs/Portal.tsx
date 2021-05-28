import { useState, useEffect, FC, ReactElement } from 'react'
import ReactDOM from 'react-dom'

interface PortalProps {
  children: ReactElement<HTMLDivElement>
}

const Portal: FC<PortalProps> = ({ children }) => {
  const [container] = useState(() => document.createElement('div'))

  useEffect(() => {
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, []) // eslint-disable-line

  return ReactDOM.createPortal(children, container)
}

export default Portal
