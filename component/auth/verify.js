import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { verifyOtp } from "../../actions/authActions";


import { Loginn } from './Style/Login'

import { Input } from '../../theme/input'
import Navbar from '../layout/Navbar';
import Search from '../layout/Search';
import Footer from '../layout/Footer';

class verify extends Component {
  
state = {
      phone: this.props.match.params.id,
      Otp1:'',
      Otp2:'',
      Otp3:'',
      Otp4:'',
      seconds:30,
      
      
}

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState(({ seconds }) => ({
        seconds: seconds - 1
      }))
    }, 1000)
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
      phone: this.state.phone,
      Otp:this.state.Otp
      
    };

    this.props.verifyOtp(userData  , this.props.history);
  };

  render() {


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
            <div className="input-fieldd">
                <Input
                  onChange={this.onChange}
                 
                  value={this.state.Otp}
                  placeholder="1"
                  id="Otp1"
                  type="text"
                 
                />
                 <Input
                  onChange={this.onChange}
                 
                  value={this.state.Otp}
                  placeholder="2"
                  id="Otp2"
                  type="text"
                 
                />
                 <Input
                  onChange={this.onChange}
                 
                  value={this.state.Otp}
                  placeholder="3"
                  id="Otp3"
                  type="text"
                 
                />
                 <Input
                  onChange={this.onChange}
                 
                  value={this.state.Otp}
                  placeholder="4"
                  id="Otp4"
                  type="text"
                 
                />
              
               
              </div>
          
              <span className="red-text">
                
                </span>
              <button
                 
                 type="submit"
                 className="btn btn-large waves-effect waves-light hoverable blue accent-3"
               >
              
              <i class="fas fa-phone"></i>     Verify Otp
                </button>
             
            </form>
            <p className="grey-text text-darken-1">
            {(() => {
        if (this.state.seconds >0) {
          return (
            <div className="resend" >
               Resend in   {this.state.seconds}
            </div>
           
          )
        }  else {
          return (
            <div>Resend Otp</div>
          )
        }
      })()}
    

      
              </p>
            </div>
      
      </Loginn>
       <Footer/>
       </React.Fragment>
    );
  }
}

verify.propTypes = {
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
  { verifyOtp }
)(verify);
