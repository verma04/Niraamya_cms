import React, { useState , useEffect} from 'react';

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



function Login({loginUser , errors , auth:{isAuthenticated , user}}) {
   
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

 
 

  if(isAuthenticated && user.role==="admin"){
    Router.push("/admin-dashboard")
  }
 else if(isAuthenticated ) {
    Router.push("/")
  }
  const   onSubmit =  async e => {
    e.preventDefault();
   

      const userData = {
      email,
      password
    };
    await   loginUser(userData);
  }

 const  onChange = e => {
     setemail( e.target.value );
  };
  const onChange1 = e => {
    setpassword( e.target.value );
 };
  return (
    <div>
       <React.Fragment>
   
   <Loginn>
   <ToastContainer/>
     <div  className="row">
      
       
         <div className="head">
         <Image  layout="fill" objectFit="contain" id="show" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1607502631/NIRAAMYA_NEW_LOGO_2_gzvlze.png'} ></Image>
         
           
         </div>
         <form noValidate onSubmit={onSubmit}>
           <div className="input-field">
             <Input
               onChange={onChange}
               value={email}
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
               onChange={onChange1}
               value={password}
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


    </div>
  )

}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser ,setAlert }
)(Login);

