import React from 'react'
import {connect} from 'react-redux';

import Costomer from '@/component/Admin/costomer/costomer' 
import withAuthAdmin from '@/component/Privateroute/PrivateRoute' 

function admindashboard() {
    return (
    
       
      
            <Costomer/>
    
   
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
  