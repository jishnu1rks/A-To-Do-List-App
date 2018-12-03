import React  from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Registration from './Components/Registration';
import Notfound from './Components/Notfound';
import Firstpage from './Components/Firstpage';


const Routes = () => (
    <Router>
        <Switch>
          <Route exact path="/" component={Firstpage}/>
          <Route path="/login" component={Login}/>
          <Route path="/home" component={Home}/>
          <Route path="/signup" component={Registration}/>
          <Route path="*" component={Notfound}/>
        </Switch>
    </Router>
  );

export default Routes ;