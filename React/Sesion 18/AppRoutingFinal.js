import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import TaskListComponent from './components/container/task_list';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage'
// import Dashboardpage from './pages/dashboard/Dashboard';


function AppRoutingFinal() {

  let loggedIn = false;
     
  return (
    <Router>
      {/* Route Switch */}
      <Switch>
        {/* Redirections to protect our routes */}
        <Route exact path='/'>
          {
            loggedIn ?
            (<Redirect from='/' to='/dashboard'/>)
            :
            (<Redirect from='/' to='/login'/>)
          }
        </Route>
        {/* Login Route */}
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/register' component={RegisterPage} />
        {/* <Route exact path='/task' component={TaskListComponent} /> */}
        {/* DashBoard Route */}
        {/* <Route exact path='/dashboard'>
        
          {
            loggedIn ?
            // (<Dashboardpage/>)
            (<TaskListComponent/>)
            :
            (<Redirect from='/' to='/login'/>)
          }
        </Route> */}
        <Route exact path='/task'>
        
          {
            loggedIn ?
            // (<Dashboardpage/>)
            (<TaskListComponent/>)
            :
            (<Redirect from='/' to='/login'/>)
          }
        </Route>
        <Route component={NotFoundPage}/>
      </Switch>
      
    </Router>
  
  );
}

export default AppRoutingFinal;
