import React, { Component } from 'react';

import Loader from '../Loader/Loader';

import Navbar from '../dashboard/Navbar'
import { Form} from '../comman/Form'
import {getCostomersDetials } from '../../../actions/merchantActions'

import { Section} from './Style/cos_det'


import { connect } from "react-redux";
import { Button } from 'reactstrap';

 class cosDetials extends Component {

     state = {
         id:this.props.match.params.id,
        active: true,
       
        name:'',
        email:'',
        phone:''

     }
    
      
      
     
     componentDidMount () {
        const data = {
            idd:this.state.id
        }
         
        this.props.getCostomersDetials(data)
         
     

     }
  
      
     toggle = ()  =>{
     
        this.setState({ active: !this.state.active});
      };
      onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
      onSubmit =  async e => {
        e.preventDefault();
        const Data = {
            id: this.state.id,
             name: this.state.name,
             email: this.state.email,
             phone: this.state.phoen,
       


           
          };
        console.log(Data)
    };
    render() {
        const { cosDetial } = this.props.admin;
        

        if (  cosDetial === null) {
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
                {/* <div className='grid' >

                {cosDetial.map((number) =>
              
                <div key className="left">
                     
                <h3>{number.name}</h3>

                     <h4> Email <span  className="ll" >{number.email}</span> </h4>
                <h4> Mobile<span className="ll">{number.phone}</span> </h4>
                     <h4>Total Spent
                  <span className="ll-1" >$0.00</span> </h4>
                     <h4>Note <span></span> </h4>
                   

                     <button   onClick={  () => this.toggle()}>Edit</button>
                    </div>
                  
                )}

       
                    <div  className="right">
                        <h3>Orders</h3>

                        <div  className="orders" >
                       <h4>11021029120129</h4>

                       <h4>June,9,2020</h4>
  

                        <h4>$22,000</h4>
                        </div>

                        </div>
                        {this.state.active === false   &&   
                        <div id="myModal" class="modal">


<div class="modal-content">

    




<div className="flex-1" >
               <div className="head" >
                       <h3>Edit Profile</h3>
                       </div>
                       <div  className="formData" >
                       {cosDetial.map((number) =>
                       <Form   noValidate onSubmit={this.onSubmit} >
    <div className="group">      
      <input 
         onChange={this.onChange}
         value={this.state.name || number.name} 
         id="name"
      type="text"
   
      required/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Name*</label>
    </div>
      
    <div className="group">      
      <input 
        onChange={this.onChange}
            
        value={this.state.email || number.email} 
        id="email"
    
      type="text"
       required/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Email</label>
    </div>
    <div className="group">      
      <input 
        onChange={this.onChange}
    
        value={this.state.phone || number.phone} 
        id="phone"
   

      type="text" required/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Phone</label>
    </div>
      
      <div className="button" >
         <Button className="btn1" >Save</Button>
         <Button onClick={this.toggle} className="btn2" >Cancel</Button>
      </div>

      </Form>
        )}
    </div>



                   </div>
  

</div>

</div>
    }

                </div>

             */}
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
    { getCostomersDetials }
  )(cosDetials);
