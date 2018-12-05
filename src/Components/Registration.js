import React, { Component } from 'react';
import {PostData} from '../Services/PostData';
import {Redirect} from 'react-router-dom';
import {FormGroup, ControlLabel, Button, FormControl } from 'react-bootstrap';
import '../App.css';



class Registration extends Component {

  constructor(props){
    super(props);
   
    this.state = {
     username: '',
     password: '',
     email: '',
     name: '',
     redirectToReferrer: false
    };

    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);

  }
 

  signup() {
    
    if(this.state.username && this.state.password && this.state.email && this.state.name){
    PostData('signup',this.state).then((result) => {
      let responseJson = result;
      if(responseJson.userData){         
        sessionStorage.setItem('userData',JSON.stringify(responseJson));
        this.setState({redirectToReferrer: true});
      }
      
     });
    }
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value});
   }
  
  render() {

    if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
      return (<Redirect to={'/home'}/>)
    }


    return (    
      <div className="signup">
        <h4>Signup</h4>
        <FormGroup>
        <ControlLabel>Email</ControlLabel>
        <FormControl type="text" name="email"  placeholder="Email" onChange={this.onChange}/>
        <ControlLabel>Name</ControlLabel><br />
        <FormControl type="text" name="name"  placeholder="Name" onChange={this.onChange}/>
        <ControlLabel>Username</ControlLabel><br />
        <FormControl type="text" name="username" placeholder="Username" onChange={this.onChange}/>
        <ControlLabel>Password</ControlLabel><br />
        <FormControl type="password" name="password"  placeholder="Password" onChange={this.onChange}/>
        <br />
        <Button className="btn btn-success" onClick={this.signup}>Sign Up</Button><br/>
        <a href="/login"><em>Got to Login page</em></a>
        </FormGroup>
       
      </div>
    );
  }
}

export default Registration;
