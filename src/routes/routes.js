import {useEffect} from 'react'
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import PrivateRoute from '../components/privateRoutes'
import {useLanguage} from '../context/languageContext'
import AuthLayout from '../layout/AuthLayout'
import DashboardLayout from '../layout/DashboardLayout'
import Home from '../pages/landingPage/Home'
import {myAccount} from '../pages/Myaccount'

const Routes = () => {
  const [lang] = useLanguage()

  useEffect(() => {
    let isMounted = true
    if (!isMounted) return
    const directionTag = document
      .getElementsByTagName('html')[0]
      .getAttribute('dir')
    const style = document.getElementById('semanticStyle')

    if (directionTag === 'ltr') {
      style.href = '/assets/css/semantic.min.css'
    } else {
      style.href = '/assets/css/semantic.rtl.min.css'
    }
    return () => {
      isMounted = false
    }
  }, [lang])

  return (
    <Router>
      <Switch>
        <Route path="/auth" component={AuthLayout} />
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/dashboard" component={DashboardLayout} />
      </Switch>
    </Router>
  )
}

export default Routes
