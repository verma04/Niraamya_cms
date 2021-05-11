import React from 'react'
import { connect } from 'react-redux'
import Edit from '@/component/Admin/prodcuts/EditProduct/Edit'

function index({query}){

   
    return (
         <Edit id={query.id} />
    )
}



index.getInitialProps = async ({query}) => {
    return {query};
  }


  const mapStateToProps = state => ({
    auth: state.auth,
     users:state.users
  });
  
  export default  connect(
    mapStateToProps,
    
  
  )(index);