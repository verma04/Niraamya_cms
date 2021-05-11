import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "@/redux/actions/authActions";

import Link from 'next/link'
import Router from 'next/router'
import Image from 'next/image'

import { Loginn } from './Style/Login'

import { Input } from '@/theme/input'


class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      phone:"",
      errors: {},
      loading: false,
    };
  }

  componentDidMount() {
    // If logged in and user navigatess to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      Router.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {

    if ( nextProps.auth.isAuthenticated){
      Router.push("/login");
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

  onSubmit = async e => {
    e.preventDefault();
    await this.setState({loading: true})

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      phone:this.state.phone
    };

    await this.props.registerUser(newUser, Router);
  };

  render() {
    const { errors } = this.state;

    return (
      <React.Fragment>
 
      <Loginn>
        <div className="row">

        <div className="head">
        <Image  layout="fill" objectFit="contain"   id="show" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1607502631/NIRAAMYA_NEW_LOGO_2_gzvlze.png'} ></Image>
              
            </div>
         
        
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field">
                <Input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  placeholder="Enter Name"
                  
                />
               
                <span className="red-text">{errors.name}</span>
              </div>
              <div className="input-field">
                <Input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                />
             
                <span className="red-text">{errors.email}</span>
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
                
                <span className="red-text">{errors.password}</span>
              </div>
              <div className="input-field col s12">
                <Input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  placeholder="Confirm Password"
                
                />
             
                <span className="red-text">{errors.password2}</span>
              </div>
              <div className="input-field">
                <Input
                  onChange={this.onChange}
                  value={this.state.phone}
                  error={errors.phone}
                  id="phone"
                  type="text"
                  placeholder="Enter Phone"
                 
                />
              
                <span className="red-text">{errors.phone}</span>
              </div>
             
                <button
                 
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Register
                </button>
           
            </form>

            <p className="grey-text text-darken-1">
                Already have an account? 
              </p>
          </div>
  
        </Loginn>
       
      </React.Fragment>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
