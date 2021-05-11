import React from 'react'
import {connect} from 'react-redux';
import Navbar from '@/component/Admin/dashboard/Navbar' 
import Dashboard from '@/component/Admin/AdminPages/Pages' 
import withAuthAdmin from '@/component/Privateroute/PrivateRoute' 
import Head from 'next/head'

function admindashboard() {
    return (
    <>
      <Head>
      <title>Home</title>
   
    </Head>
      <Navbar/>
            <Dashboard/>
    </>
   
    )
}




const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
    {}
  )(withAuthAdmin(admindashboard));
  