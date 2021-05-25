import {useEffect} from 'react'
import {Redirect, Route, Switch, useHistory} from 'react-router'
import Auth from '../config/auth'
import LoginPage from '../pages/auth/Login'
import routes from '../routes'

const AuthLayout = () => {
  const history = useHistory()

  useEffect(() => {
    let isMounted = true
    if (!isMounted) return
    if (Auth.isAuth()) {
      history.push('/')
    }
    return () => {
      isMounted = false
    }
  }, [])
  return (
    <div className="auth-bg">
      <div
        className="absolute left-1/2 top-1/2 bg-white max-w-2xl rounded-2xl px-16"
        style={{
          transform: 'translate(-50%, -50%)',
          height: 'auto',
          width: '50%',
        }}
      >
        <Switch>
          <Route exact path={routes.login} component={LoginPage} />
          <Redirect to={routes.login} />
        </Switch>
      </div>
    </div>
  )
}

export default AuthLayout
