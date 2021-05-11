import React from 'react'



import { Section } from './Style'
import Router, { withRouter } from 'next/router'
  class dashboard extends React.Component {
  
   
  
    render() {
     
  
      return (
         <>

          <Section>
            <div className="flex" >
                
                <div onClick={ () => Router.push('/admin-products')} className="flex-1" >
                    
                    <div  className="img" >
                    <i className="fas fa-tasks"></i>
                    </div>
                    <div className="data" >
              <h2>Philosophy</h2>
                    </div>

                </div>
                <div  onClick={ () => Router.push('/admin-products')} className="flex-1" >
                <div className="img" >
                <i className="fas fa-clipboard-list"></i>
                    </div>
                    <div className="data" >
                    <h2>Prodoucts</h2>
                    </div>
                </div>
                <div onClick={ () => Router.push('/admin-orders')} className="flex-1" >
                <div className="img" >
                <i className="fas fa-sort-amount-up-alt"></i>
                    </div>
                    <div className="data" >
                    <h2>Orders</h2>
                    </div>
                </div>
                <div onClick={ () => Router.push('/admin-costomer')} className="flex-1" >
                <div className="img" >
                <i className=" fas fa-users"></i>
                    </div>
                    <div className="data" >
                    <h2>Costomers</h2>
                    </div>
                </div>
                <div onClick={ () => Router.push('/admin-coupan')} className="flex-1" >
                <div className="img" >
                    <i className="fas fa-tags"></i>
                    </div>
                    <div className="data" >
                    <h2>Coupan</h2>
                    </div>
                </div>
                <div onClick={ () => Router.push('/admin-bulkorder')} className="flex-1" >
                <div className="img" >
                <i className="fas fa-cart-plus"></i>
                    </div>
                    <div className="data" >
                    <h2>BulkOrder</h2>
                    </div>
                </div>

                <div onClick={ () => Router.push('/admin-pages')} className="flex-1" >
                <div className="img" >
                <i className="fas fa-file"></i>
                    </div>
                    <div className="data" >
                    <h2>Pages</h2>
                    </div>
                </div>

                
               
            </div>


<div className="cover" >

<img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1620378844/niraamya/g2rsf3vwbxp7ke9m1u4f.png'} ></img>

</div>

          </Section>
        
   </>
      );
    }
  }

  export default dashboard;
  

  