import React, {Component} from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './conponents/layout/Navbar';
import Dashboard from './conponents/dashboard/Dashboard';
import ProjectDetails from './conponents/projects/ProjectDetails';
import SignIn from './conponents/auth/SignIn';
import SignUp from './conponents/auth/SignUp';
import CreateProject from './conponents/projects/CreateProject';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <h3 className="center-align" id="dashboardTitle">Welcom to my channel!</h3>
          </div>
          <Switch>
            <Route exact path='/' component={Dashboard}></Route>
            <Route path='/project/:id' component={ProjectDetails}></Route>
            <Route exact path='/signin' component={SignIn}></Route>
            <Route exact path='/signup' component={SignUp}></Route>
            <Route exact path='/create' component={CreateProject}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
