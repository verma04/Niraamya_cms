import React from 'react'
import { connect } from 'react-redux'
import Orders from '@/component/Admin/orders/orderDetial'

function index({query}){

   
    return (
         <Orders id={query.order} />
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