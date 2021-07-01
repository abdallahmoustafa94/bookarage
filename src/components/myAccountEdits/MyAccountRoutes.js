import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import EditFullName from './EditFullName'


const MyAccountroutes = () => {

    <Switch>
          <Route exact path={/editfullname} component={EditFullName} />
    </Switch>
}

export default MyAccountroutes