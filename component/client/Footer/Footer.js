import React, { Component } from 'react'
import P from '@/theme/P';
import { Footerr } from './Style';
import { connect } from "react-redux";
import { logoutUser } from "@/redux/actions/authActions";
import PropTypes from "prop-types";


import  Footer2 from './Footer2';

import Router, { withRouter } from 'next/router'
import Image from 'next/image';

 class Footer extends Component {

  ppp = (send) => {
    window.open(`https://niraamya.herokuapp.com/${send}`);
  }
    render() {

        const { user , isAuthenticated } = this.props.auth;

       
        return (
          <React.Fragment>
            <Footerr>
  <div  className="flex" >
  
  <div  className="flex-0" >
             <div className="img-wrapper" >
             <Image  layout="fill" objectFit="contain" alt="sdd" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1607502631/NIRAAMYA_NEW_LOGO_rbtysw.png'} ></Image>
             </div>
<div  className="para">
             <p>Natural and herbal products have made a name for themselves in modern lifestyle. Adding health to your life naturally; Niraamya uses a holistic approach to enhance and adorn your health with herbal!</p>
             </div>
            <div className="social" > 
       
            <a href='https://www.facebook.com/niraamyanaturals/' > <i class="fab fa-facebook"></i></a>   
            <a href='https://www.instagram.com/niraamyanaturals/' > <i class="fab fa-instagram"></i></a>  
           
            </div>

            </div>
            <div  className="flex-1" >
            
             <h3>Customer Service</h3>

<ul>
<li>Payment Method</li>
             
           
             <li>Shipping Policy</li>
             <li>Cancellation Policy</li>
             <li>Terms and Conditions</li>
             <li>Track My order</li>
             <li onClick={() => this.ppp("PrivacyPolicy")} >Privacy Policy</li>

</ul>

            </div>

            <div  className="flex-2" >
      
            <h3>Useful Links</h3>
            

<ul>
<li  onClick={() => this.ppp("AboutUs")} >About Niraamya</li>


 <li>FAQ</li>
   <li> Contact Us </li>
{(() => {
        if (isAuthenticated === true) {
          return (
            <li  onClick={() => this.props.logoutUser()} >Logout</li>
          )
           } else {
          return (
            <li onClick={() => Router.push("/login") } > Login </li>
          ) 
        }
      })()}

</ul>
</div>

<div  className="flex-1" >
<h3>My Account</h3>

<ul>
<li>SignIn</li>
<li>View Cart</li>
<li>My WishList</li>

<li>Help</li>

</ul>

                
</div>

{/* <div  className="flex-4" >
Designed & Developed With ♥ By Amakein Technologies
                
</div> */}
</div>  

   

            </Footerr>
            <Footer2 />
            </React.Fragment>
        )
    }
}


Footer.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Footer);