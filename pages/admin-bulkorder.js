import React from 'react'
import {connect} from 'react-redux';

import BulkOrder from '@/component/Admin/bulk/BulkOrder' 
import withAuthAdmin from '@/component/Privateroute/PrivateRoute' 

function admindashboard() {
    return (
    
       
      
            <BulkOrder/>
    
   
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
  