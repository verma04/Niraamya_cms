import React, { Component } from 'react';
 import { Footer } from './FooterStyle'; 
 import { connect } from "react-redux"; 

 class footer2 extends Component {
     
    render() {
        const { user  } = this.props.auth;

       

        
        return (
            <Footer>
              <div className="payment" >
    
    <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1608632849/hstlsh6krcgxldplq11q.png" ></img>

</div>
                 <div className="design" >

    
<div className="grid" >
Copyright © {new Date().getFullYear()} All Right reserved  Niraamya
</div>


<div className="grid2" >
Designed & Developed With ♥ By <a onClick={() => window.open('https://amakein.com/')}> Amakein Technologies </a>
</div> 
</div>
    

    

</Footer>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { }
  )(footer2);