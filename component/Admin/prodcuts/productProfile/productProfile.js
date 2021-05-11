import React, { Component } from 'react'
import { connect } from 'react-redux';
import { filterCategory , category , addcover }  from '../../../../actions/merchantActions';
import  { Section } from './style';
import Loader from '../../Loader/Loader';
class Category extends Component {
   async  componentDidMount() {

        const userData = {
            category:this.props.match.params.id
        }
        await this.props.filterCategory(userData);
       await  this.props.category(userData)
      



    }


    state = {
      
    
         coverImg:"",
         active: true,
         decription:'',
         productName:'',
         price:'',
         saleprice:'',
         dimensions:'',
         weight:'',
         stocks:'',
          category:'',
          img1:"",
          img2:"",
          img3:""
         
     }
     toggle = ()  =>{
     
      this.setState({ active: !this.state.active});
    };


    render() {
          
        const {  category ,product} = this.props.admin;
             const {  img1 , img2 , img3 } = this.state;
        if ( category === null || product === null)

        {
            return (
                <Loader/>
            )
        }

        
        return (
           

   

            <Section>
                
               <div className='flex' >
               {category.map((number) => 
             <div className="head"  >
                 
                 <div  className="empty" >
                
                  
                    <img alt="sd"  src={'https://res.cloudinary.com/pankaj-k-amakein-com/image/upload/v1602587967/Ashwagandhanew_tvcaw5.jpg'} ></img>

  {/* <label for="files"   class="btn"> <h2>
      
  {(() => {
        if (coverImg ==="upload") {
          return (
            <div  className="data" >Uploading...........</div>
          )
          } else if ( coverImg.length > 0 ) {
            return (
              <div className="data" >  <i  style={{color:'blue'}} className="fas fa-check-circle"></i> Uplaod</div>
            )
            }  
        
        else {
          return (
            <div>Upload Cover Image</div>
          )
        }
      })()}
        
      </h2></label>
  <input id="files" onChange={this.onUpload} style={{visibility:"hidden"}} type="file"/> */}

                 </div>

            

                 <div className="img-wrap" >
                     <img alt="sd"  src={number.CategoryImg} ></img>
                 </div>
                 <div className="btn" >
  <label for="files" class="btn"><i class="fas fa-pencil-alt"></i></label>
  <input id="files" style={{visibility:"hidden"}} type="file"/>
</div>

                   </div>
              
              )  }

              <div className="flex-2" >
                 
                 <div class="product" >
                 
                 <div className="product-1" >
           <h2 style={{paddingLeft:"1rem"}} >Product</h2>
           <h2> ProductName </h2>

           <h2>Stocks</h2>


                   
                <h2> Price </h2>   

                

                </div>
                {product.map((number) => 
                <div className="product-2" >
           <div className="img-wrapper" >
           <img  alt="sd"  src={number.img1} ></img>

           </div>
           <h3> {number.productName} </h3>  
                <h3>{number.stocks}</h3>


               
                <h3>  {number.price} </h3>   

                <button>Edit</button>

                </div>
                )}

                 </div>


              </div>


<div onClick={this.toggle}  className="add" >
<i class="fas fa-plus-circle"></i>
  </div> 

</div>

{this.state.active === false   &&   
                        <div id="myModal" class="modal">


<div class="modal-content">

<div  className='flex' >
                      <div className='flex1' >
                          <form   noValidate onSubmit={this.onSubmit} >
                   <div className="flex-1" >
               
                       <div  className="formData" >
    
    <div className="group">      
      <input 
         onChange={this.onChange}
            
         value={this.state.productName}  
         id="productName"
      type="text" required/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Product Name*</label>
    </div>
      
    <div className="group">      
      <input 
        onChange={this.onChange}
            
        value={this.state.decription}  
        id="decription"
      type="text" required/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Description</label>
    </div>
    
    </div>



                   </div>
  
                   <div className="flex-1" >
               
                       <div  className="formData" >
    

    <div className="parent" >
    <div className="group">      
      <input
         onChange={this.onChange}
            
         value={this.state.price}  
         id="price"
      type="text" pattern="[0-9]*" required/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Product Price</label>
    </div>
    <div className="group">      
      <input
         onChange={this.onChange}
            
         value={this.state.saleprice}  
         id="saleprice"
      type="text" pattern="[0-9]*" required/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Sale Price</label>
    </div>
    </div>
    <div className="parent" >
    <div className="group">      
      <input
         onChange={this.onChange}
            
         value={this.state.weight}  
         id="weight"
      type="text" pattern="[0-9]*" required/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Product Weight</label>
    </div>
    <div className="group">      
      <input
         onChange={this.onChange}
            
         value={this.state.dimensions}  
         id="dimensions"
      type="text" pattern="[0-9]*" required/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Product Deminsions</label>
    </div>
    </div>
    <div className="group">      
      <input
     
        onChange={this.onChange}
           
        value={this.state.stocks}  
        id="stocks"
     type="text" pattern="[0-9]*" required/>
     
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Total Stocks</label>
    </div>
   
    <select onChange={this.onChange}
           
           value={this.state.Category}   id="category" name="cars">
                 
    <option value=''>---CAtegory-----</option>
    {category.map((number) => 
  
    <option value={number.category}>{number.category}</option>
 
    )  }
  </select>
   
    </div>



                   </div>
                   <div className="flex-1" >
               
                       <div  className="formData" >
    
                         <div className="spinner" >
                       <div  className="upload">
   Upload Image - 1
 <input type="file" id="file"          onChange={this.onUpload1} name="myImage" class="hide_file"/>

</div>
{(() => {
        if (img1 ==="upload") {
          return (
            <div  className="data" >Uploading...........</div>
          )
          } else if ( img1.length > 0 ) {
            return (
              <div className="data" >  <i  style={{color:'blue'}} className="fas fa-check-circle"></i> Uplaod</div>
            )
            }  
        
        else {
          return (
            <div></div>
          )
        }
      })()}

   </div>
    </div>
    <div  className="formData" >
    
    <div className="spinner" >
  <div  className="upload">
Upload Image - 2
<input type="file" id="file"          onChange={this.onUpload2} name="myImage" class="hide_file"/>

</div>
{(() => {
if (img2 ==="upload") {
return (
<div  className="data" >Uploading...........</div>
)
} else if ( img2.length > 0 ) {
return (
<div className="data" >  <i  style={{color:'blue'}} className="fas fa-check-circle"></i> Uplaod</div>
)
}  

else {
return (
<div></div>
)
}
})()}

</div>
</div>
<div  className="formData" >
    
    <div className="spinner" >
  <div  className="upload">
Upload Image - 3
<input type="file" id="file"          onChange={this.onUpload3} name="myImage" class="hide_file"/>

</div>
{(() => {
if (img3 ==="upload") {
return (
<div  className="data" >Uploading...........</div>
)
} else if ( img3.length > 0 ) {
return (
<div className="data" >  <i  style={{color:'blue'}} className="fas fa-check-circle"></i> Uplaod</div>
)
}  

else {
return (
<div></div>
)
}
})()}

</div>
</div>
  


                   </div>
                <div className="button" >
     <button>Save</button>
     <button onClick={this.toggle} >Cancel</button>
                </div>
</form>
               </div>
               </div>
          
</div>

</div>
    }

            </Section>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    admin:state.admin
  });

export default connect(
    mapStateToProps,
    { filterCategory , category , addcover}

)(Category);