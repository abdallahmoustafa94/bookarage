import {useEffect} from 'react'
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import PrivateRoute from '../components/privateRoutes'
import {useLanguage} from '../context/languageContext'
import AuthLayout from '../layout/AuthLayout'
import DashboardLayout from '../layout/DashboardLayout'
import Home from '../pages/landingPage/Home'
import {myAccount} from '../pages/Myaccount'
import Admin from '../pages/Admin'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={AuthLayout} />
      </Switch>
    </Router>
  )
}

export default Routes
