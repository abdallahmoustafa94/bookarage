import {useEffect} from 'react'
import {Redirect, Route, Switch, useHistory} from 'react-router'
import Auth from '../config/auth'
import useMediaQuery from '../hooks/use-media-query'
import LoginPage from '../pages/auth/Login'
import RegisterPage from '../pages/auth/register'
import routes from '../routes'

const AuthLayout = () => {
  const history = useHistory()
  const isSmall = useMediaQuery('(max-width: 992px)')

  useEffect(() => {
    let isMounted = true
    if (!isMounted) return
    if (Auth.isAuth()) {
      history.push('/dashboard')
    }
    return () => {
      isMounted = false
    }
  }, [])
  return (
    <div className="auth-bg">
      <div
        className={`absolute overflow-y-auto left-1/2 top-1/2 bg-white max-w-4xl rounded-2xl ${
          isSmall ? 'px-5' : 'px-16'
        }`}
        style={{
          transform: 'translate(-50%, -50%)',
          height: 'auto',
          maxHeight: '800px',
          width: isSmall ? '100%' : '50%',
        }}
      >
        <Switch>
          <Route exact path={routes.login} component={LoginPage} />
          <Route path={routes.register} component={RegisterPage} />
          <Redirect to={routes.login} />
        </Switch>
      </div>
    </div>
  )
}

export default AuthLayout
