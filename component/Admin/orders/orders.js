import React, { Component } from 'react';
import { Section } from './style/order'
import { connect } from 'react-redux';
import Navbar from '../dashboard/Navbar'
import Router, { withRouter } from 'next/router'
import { fetchOrders} from '@/redux/actions/merchantActions'

import Loader from '../Loader/Loader';
  

 class orders extends Component {
    
    componentDidMount() {
        this.props.fetchOrders()
    }

    render() {
    
        const  { orders} = this.props.admin;
            if( orders === null)
            {
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
                     <li   >  <i className="fas fa-folder"></i>All Orders</li>
                     
                
                           <div >
       <li> <i className="fas fa-folder-open"></i>Processing</li>
       <li> <i className="fas fa-folder-open"></i>Shipped</li>
       <li> <i className="fas fa-folder-open"></i>Deliverd</li>
                     
       </div>
                    
                 
                    </ul>
                     </div>
                    
                     
                      <div  className="right">
                       
                       <div className="bar" >
                       <h2>#OrderId</h2>
                      
                       <h2 className="space-right"  >Price</h2>
                     
                       <h2 className="space-right" >Total Product</h2>
                       <h2 className="space-right" >Status</h2>
                       </div>
    
                       {orders.map((number) =>
       <div   key={number._id}  onClick={() => Router.push(`/admin-orders/${number.order_id}`)} className="bar1" >
        <h3 id="set" >#{number.order_id}</h3>
                       <h3 id="set4" >{number.total_paid}</h3>
                       <h3 id="set1" >{number.products.length}</h3>
                       <h3  id="set2" >{number.status}</h3>
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
    { fetchOrders }

)(orders);