import React, { Component } from 'react';
import {FormGroup, ControlLabel, Button, FormControl } from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import {PostData} from '../Services/PostData';


class Login extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      username:'',
      password:'',
      redirectToReferrer:false
    }

    this.login = this.login.bind(this);
    this.assignValues = this.assignValues.bind(this);
  }

  assignValues(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  login(){
    if(this.state.username && this.state.password){
      PostData('login',this.state).then((result) => {
        let responseJson = result;
        if(responseJson.userData){         
          sessionStorage.setItem('userData',JSON.stringify(responseJson));
          this.setState({redirectToReferrer: true});
        }
       
      });
    }
  }




  render() {

    
    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/home'}/>)
    }
   
    if(sessionStorage.getItem('userData')){
      return (<Redirect to={'/home'}/>)
    }


    return (
      <div className="text-center">
          <h3><em>Login page</em></h3>
          <hr />
          <FormGroup>
          <ControlLabel className="text-left">User Name
            <FormControl type="text" name="username"  onChange={this.assignValues} />
          </ControlLabel><br />
          <ControlLabel className="text-left">Password
            <FormControl type="text" name="password"  onChange={this.assignValues} />
          </ControlLabel><br/>
          <Button bsStyle="primary" onClick={this.login}>Login</Button>
          </FormGroup>
          <a href="/signup">Sign Up</a>
      </div>
    );
  }
}

export default Login;
