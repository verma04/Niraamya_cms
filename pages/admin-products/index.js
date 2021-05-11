import React from 'react'
import {connect} from 'react-redux'
import Products from '@/component/Admin/prodcuts/products' 
import withAuthAdmin from '@/component/Privateroute/PrivateRoute' 
function admindashboard() {
    return (
     
            <Products/>
    
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
  