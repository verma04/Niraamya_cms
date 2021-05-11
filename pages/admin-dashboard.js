import React from 'react'
import {connect} from 'react-redux';
import Navbar from '@/component/Admin/dashboard/Navbar' 
import Dashboard from '@/component/Admin/dashboard/dashboard' 
import withAuthAdmin from '@/component/Privateroute/PrivateRoute' 

function admindashboard() {
    return (
    
       
      
            <Dashboard/>
    
   
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
  