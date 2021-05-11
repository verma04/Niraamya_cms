import React, { Component } from 'react';
import { Section } from './style/detals'

import { connect } from 'react-redux';
import { Form } from '../comman/Form';
import { fetchOrders_id , orderStatus , shipped , onDelivered} from '@/redux/actions/merchantActions'
import Navbar from '../dashboard/Navbar'
import Loader from '../Loader/Loader';


 class orderDetial extends Component {

    state = {
        active: true,
        number:"",
        method:"",
        service:""
      

    }
   
   
    componentDidMount() {
      console.log(this.props.id)
        const data = {
            id:this.props.id
        }
        console.log(data)
        this.props.fetchOrders_id(data)
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
    onChanged = (data) => {
         this.props.orderStatus(data)
    }
    toggle = ()  =>{
     
        this.setState({ active: !this.state.active});
      };
     onShipped =  async ( dataa ) => {
          const data  = {
            number:this.state.number,
            method:this.state.method,
            service:this.state.service,
            data: dataa

          }
           await   this.props.shipped(data);
           await this.setState({active:!this.state.active})

      }
    render() {
       const { merorder} = this.props.admin;

       if(merorder=== null)
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
               {merorder.map((number) =>
          <div className="flex" >

          <div className="flex-1" >

          <div className="flex-11" >

          <div className="inner" >

          <div className="inner-1" >
               <li><h3>Order Status:</h3> <span>{number.status}</span> </li>
               <li><h3>Order Id:</h3> <span>#{number.order_id}</span> </li>
               <li><h3>Amount paid</h3> <span>₹{number.total_paid}</span> </li>
     </div>

      {(() => {
        if (number.status === "Processing") {
          return (
            <div className="inner-1" >
            <button onClick={() =>this.onChanged(number)} >Accpet Order</button>
       </div>
          )
          }
          else  if( number.status === "Accepted" ) {
             return (
                 <>
                <div className="inner-1" >
                    <li><h3>Tracking number:</h3> <span>
                    {(() => {
        if ( !number.track_number ) {
          return (
              <>
              Not Assignned
              </>
          )
          }

          else {
            return (
                number.track_number
            )
        }
               
      })()} 
                          
                        </span> </li>
               <li><h3>Shipping method:</h3> <span>
                   
               {(() => {
        if ( !number.track_method ) {
          return (
              <>
              Not Assignned
              </>
          )
          }
        else {
            return (
                number.track_method 
            )
        }
               
      })()}        
                   </span> </li>
               <li><h3>Shipping Service:</h3> <span>
               {(() => {
        if ( !number.track_service ) {
          return (
              <>
              Not Assignned
              </>
          )
          }
          else {
            return (
                number.track_service
            )
        }
          
               
      })()}        </span> </li>
               
           </div>
           <div className="inner-1" >
            <button  onClick={this.toggle} >Shipped Order</button>
            
       </div>
             </>
             )
          }
          else {
              return (
                  <>
                <div className="inner-1" >
                <li><h3>Tracking number::</h3> <span>{ number.track_number}</span> </li>
                <li><h3>Order Service:</h3> <span>#{ number.track_service}</span> </li>
                <li><h3>Shipping method:</h3> <span>₹{  number.track_method }</span> </li>
      </div>
                  <div className='inner'>
                  <div className="inner-1" >
            <button  onClick={()  =>this.props.onDelivered(number) } >Deliverd</button>
            
       </div>
                      </div>
                      </>
              )
          }
           
      })()}
          

</div>


<div className="inner" >


<div className="inner-1" >

<h3>{number.cos_name}</h3>
    <h3>{number.cos_email}</h3>
               <h3>{number.cos_phone}</h3>      

</div>
<div className="inner-1" >
<h3>Shipping address</h3> 

               <h2>{number.address}</h2>
<button>Edit</button>

</div>
<div className="inner-1" >
<h3>Billing address</h3> 

       <span>
Same as shipping address</span>          

</div>

                 

</div>
              </div>

              <div className="flex-12" >
              {number.products.map((number1) =>
              <div className="head" >
                 
                 <img alt="dssd" src={number1.img1} ></img>
                
                <div className="count" >
                ₹ <h3>{number1.price}     </h3>
                    
              <span> x {number1.totalitems}</span>
                </div>

                <div className="total" >
                    <h3>
                    ₹ {(() => {
        if (number1.price) {
          return (
         number1.price * number1.totalitems
          )
          }
           
      })()}
                    </h3>
                   
                </div>

              </div>
              )}
   <div  className="bottom" >
  
  <div></div>
  <div className="total" >

<li><span>Subtotal</span> <h3>₹{number.total_paid}</h3> </li>
<li><span>Shipping</span> <h3>₹0</h3> </li>
<li><span>Tax</span> <h3>₹0</h3> </li>
<li><span>Disscount</span> <h3>₹0</h3> </li>

<li><span>Grand Total</span> <h3>₹{number.total_paid}</h3> </li>


  </div>
  
   </div>
   <div  className="bottom" >
  
  <div></div>
  <div className="total" >
  <li><span>Total Amount</span> <h3>₹{number.total_paid}</h3> </li>



  </div>
  
   </div>

</div>
   </div>


          </div>
 )}
       










       {this.state.active === false   &&   
                        <div id="myModal" class="modal">


<div class="modal-content">

    




<div className="flex-1" >
               <div className="head" >
                       <h3>Edit Profile</h3>
                       </div>
                       <div  className="formData" >
                    
                       <Form   noValidate onSubmit={this.onSubmit} >
    <div className="group">      
      <input 
         onChange={this.onChange}
       value={this.state.number}
         id="number"
      type="text"
   
      required/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Tracking number*</label>
    </div>
      
    <div className="group">      
      <input 
        onChange={this.onChange}
            
      value={this.state.method}
        id="method"
    
      type="text"
       required/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Shipping method</label>
    </div>
    <div className="group">      
      <input 
        onChange={this.onChange}
    
     
   
value={this.state.service}
id="service"
      type="text" required/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Shipping Service</label>
    </div>
      
      <div className="button" >
         <Button className="btn1" onClick={ async () => await this.onShipped(merorder)} >Save</Button>
         <Button onClick={this.toggle} className="btn2" >Cancel</Button>
      </div>

      </Form>
       
    </div>



                   </div>
  

</div>

</div>
    }


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
    { fetchOrders_id , orderStatus , shipped , onDelivered}

)(orderDetial );