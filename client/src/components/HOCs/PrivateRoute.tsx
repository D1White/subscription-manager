import { FC } from 'react'
import { Route, Redirect } from 'react-router-dom'

interface PrivateRouteProps {
  component: FC
  path: string
  exact: boolean
}

const PrivateRoute: FC<PrivateRouteProps> = ({ component, path, exact }) => {
  const token = localStorage.getItem('token')

  return token ? <Route path={path} exact={exact} component={component} /> : <Redirect to="/login" />
}
export default PrivateRoute
