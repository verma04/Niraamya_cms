import React, { Component } from "react";
import Link from 'next/link'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "@/redux/actions/authActions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loginn } from './Style/Login'
import { setAlert} from '@/redux/actions/alertAction'
import { Input } from '../../theme/input'
import Router from 'next/router'

import Image from 'next/image'
class Login extends Component {

 state = {
      email: "",
      password: "",
      errors: {},
      loading: false,
    
    };
  

  componentDidMount() {
    // If logged in and user navigatess to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated === true) {
     Router.push("/admin-dashboard");
    }
    window.scrollTo(0, 0);

   
  }

  componentWillReceiveProps(nextProps) {
  
    if (this.props.auth.isAuthenticated  ) {
      Router.push("/");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

   onSubmit =  async e => {
    e.preventDefault();
    await this.setState({loading: true})

      const userData = {
      email: this.state.email,
      password: this.state.password
    };
    

 await   this.props.loginUser(userData);
//  await   this.props.setAlert('Login to Access', 'danger');
  };

  render() {
    const { errors } = this.state;

    return (
      <React.Fragment>
   
      <Loginn>
      <ToastContainer/>

      <div className="admin" >
          <h1>Admin Login</h1>
      </div>
        <div  className="row">
         
          
            <div className="head">
            <Image  layout="fill" objectFit="contain" id="show" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1607502631/NIRAAMYA_NEW_LOGO_2_gzvlze.png'} ></Image>
            
              
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field">
                <Input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                 
                />
              
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field">
                <Input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                 
                />
             
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
             
                <button
                 
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                 Login
                </button>
        
            </form>

           
          </div>
      
      </Loginn>
    
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser ,setAlert }
)(Login);
