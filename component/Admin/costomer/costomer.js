import React, { Component } from 'react';
 
import { connect } from "react-redux";
import { Section } from './Style/costomer';

import Navbar from '../dashboard/Navbar'
import Loader from '../Loader/Loader';
import { getallCostomers } from '@/redux/actions/merchantActions';
import Loading  from './Loading';
import Router, { withRouter } from 'next/router'
 class costomer extends Component {
        

 

     componentDidMount(){
           this.props.getallCostomers()
     }

       detials = (id) => {
           Router.push(`/admin/costomer/${id}`)

       }
     
    render() {
        const {costomers } = this.props.admin;

          if(costomers === null) {
      
   return (
       <div>
          <Loader/>
       </div>
   )

          }   

        return (
            

          <React.Fragment> 
          <Navbar/>
            <Section>
                  <div className='grid' >
                 <div className="left">
                  <ul>
                 <li>  <i class="fas fa-folder"></i>All Customers</li>
                <li> <i class="fas fa-cog"></i>Setting</li>
                </ul>
                 </div>
                  <div  className="right">
                   
                   <div className="bar" >
                   <h2>Customer name</h2>
                   <h2  className="space-right" >Location</h2>
                   <h2 className="space-right" >Orders</h2>
                   <h2 className="space-right">Total Spent</h2>
                   </div>


                   {costomers.map((number) =>
   <div onClick={() => this.detials(number._id)} key ={number._id} className="bar1" >
   <h3>{number.name}</h3>
                   <h3 >{number.email}</h3>
                   <h3>{number.orders.length}</h3>
   <h3>0</h3>
   </div>
  )}
                   


                  </div>
                  </div>
            </Section>
                </React.Fragment>
        )
    }
}


const mapStateToProps = state => ({
    auth: state.auth,
    admin:state.admin
  });

export default connect(
    mapStateToProps,
    { getallCostomers  }
  )(costomer );