import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { OtpUser } from "../../actions/authActions";

import { Loginn } from './Style/Login'

import { Input } from '../../theme/input'
import Navbar from '../layout/Navbar';
import Search from '../layout/Search';
import Footer from '../layout/Footer';
class Otp extends Component {
  constructor() {
    super();
    this.state = {
      phone: "",
      
      
      errors: {}
    };
  }

   async  componentDidMount() {

   
    // If logged in and user navigates to Otp page, should redirect them to dashboard
   if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
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
      phone: this.state.phone,
      
    };

    this.props.OtpUser(userData  , this.props.history);
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
                  value={this.state.phone}
                  error={errors.phone}
                  id="phone"
                  type="text"
                  placeholder="Enter Number"
                 
                />
                
            
                <span className="red-text">
                  {errors.phone}
                  {errors.emailnotfound}
                </span>
              </div>
          
            
              <button
                 
                 type="submit"
                 className="btn btn-large waves-effect waves-light hoverable blue accent-3"
               >
    <i class="fas fa-phone"></i>             Login With Otp 
                </button>
                
            
              
                
                
   
            </form>
            <p className="grey-text text-darken-1">
               <Link to="/Login"> Login With Password</Link>
              </p>
            </div>
      
      </Loginn>
      <Footer/>
      </React.Fragment>
    );
  }
}

Otp.propTypes = {
  OtpUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { OtpUser }
)(Otp);
