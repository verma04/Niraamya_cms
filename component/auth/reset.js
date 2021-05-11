import React, { Component } from "react";

import { connect } from "react-redux";
import { reset } from "../../actions/authActions";

import { Loginn } from './Style/Login'

import { Input } from '../../theme/input';
import Navbar from '../layout/Navbar';
import Search from '../layout/Search';
import Footer from '../layout/Footer';

class Reset extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      
      
      errors: {}
    };
  }

   async  componentDidMount() {

   
    // If logged in and user navigates to Otp page, should redirect them to dashboard
   if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
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

  onSubmit = e => {
    e.preventDefault();

    const userData = {
     email: this.state.email,
      
    };

    this.props.reset(userData  , this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <React.Fragment>
      <Navbar />
  <Search/>
      <Loginn>
      <div  className="row">
 
      <div className="head">
            <img  alt="sdd" id="show" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1607502631/NIRAAMYA_NEW_LOGO_2_gzvlze.png'} ></img>
            
              
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <Input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="text"
                  placeholder="Enter Email"
                 
                />
            
                <span className="red-text">
                  
                  {errors.emailnotfound}
                </span>
              </div>
          
            
              <button
                 
                 type="submit"
                 className="btn btn-large waves-effect waves-light hoverable blue accent-3"
               >
    <i class="fas fa-phone"></i>             Reset Password
                </button>
                
            
              
                
                
   
            </form>
            
            </div>
      
      </Loginn>
      <Footer/>
      </React.Fragment>
    );
  }
}



const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { reset }
)(Reset);
