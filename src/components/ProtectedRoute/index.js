// Write your JS code here
import Cookies from 'js-cookie'
import {Route} from 'react-router-dom'

const ProtectedRouter = props => {
  const token = Cookies.get('jwt_token')

  if (token === undefined) {
    const history = props
    history.replace('/login')
  }
  return <Route {...props} />
}

export default ProtectedRouter
