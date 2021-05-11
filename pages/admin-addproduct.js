import React from 'react'
import {connect} from 'react-redux'
import AddProducts from '@/component/Admin/prodcuts/addProducts' 
import withAuthAdmin from '@/component/Privateroute/PrivateRoute' 
function admindashboard() {
    return (
        <div>
            <AddProducts/>
        </div>
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
  