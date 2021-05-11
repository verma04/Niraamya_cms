
import '../styles/globals.css'
import '../styles/style.css'
import AOS from 'aos';
import React, { useState, useEffect } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import "aos/dist/aos.css";
import { ThemeProvider } from "styled-components";
 import theme from '../theme/color';
 import GlobalFonts from '../theme/theme';
 import { Provider } from "react-redux";
 import Head from 'next/head';
 import Router from 'next/router'
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
 import store from "../redux/store";
 import jwt_decode from "jwt-decode";
 import { setCurrentUser , logoutUser } from "../redux/actions/authActions";
import setAuthToken from "../redux/utils/setAuthToken";
import Alert from '@/component/alert/alert'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  if (typeof window !== "undefined") {
  
    if (localStorage.jwtToken) {
      // Set auth token header auth
      const token = localStorage.jwtToken;
      setAuthToken(token);
      // Decode token and get user info and exp
      const decoded = jwt_decode(token);
      // Set user and isAuthenticated
      store.dispatch(setCurrentUser(decoded));
      // Check for expired token
      const currentTime = Date.now() / 1000; // to get in 
      if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
    
        // Redirect to login
        window.location.href = "./login";
      }
    }

  }

  return (
<div>

<Head>




  <link rel="shortcut icon" href="https://res.cloudinary.com/pankaj-k-amakein-com/image/upload/v1602846587/Niraamya-logo_mm1ost.png"></link>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css   "/> 
<meta name="description" 
  content="Niraamya  provides quality and genuine sustainable lifestyle solutions for your everyday needs. It is said that; we should plant our own garden and decorate our own soul, instead of waiting for someone to bring us flowers. We at Niraamya firmly believe in providing products for health conscious people and the people who desire to be healthier. We offer a wide range of natural, herbal and organic earth friendly products.  “Let nature protect your Health.”
    "/>
     
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />


  

    </Head>
    <Provider store={store}>
      
  <ThemeProvider theme={theme} >
  <GlobalFonts/>
  <ToastContainer/>

    
 <Component {...pageProps} />
  </ThemeProvider>
  </Provider>

  </div>
  )
}

export default MyApp