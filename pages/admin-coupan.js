import React from 'react'
import {connect} from 'react-redux';

import Coupan from '@/component/Admin/Coupan/coupan' 
import withAuthAdmin from '@/component/Privateroute/PrivateRoute' 

function admindashboard() {
    return (
    
       
      
            <Coupan/>
    
   
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
  