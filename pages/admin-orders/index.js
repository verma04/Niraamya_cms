import React from 'react'
import {connect} from 'react-redux';

import Orders from '@/component/Admin/orders/orders' 
import withAuthAdmin from '@/component/Privateroute/PrivateRoute' 

function admindashboard() {
    return (
    
       
      
            <Orders/>
    
   
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
  