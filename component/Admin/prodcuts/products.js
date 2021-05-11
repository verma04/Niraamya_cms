import React, { Component } from 'react';
import { Section} from './style/product'
import { connect } from 'react-redux';
import { getCategory , addCategory , filterCategory, getAllProdcuts}   from '@/redux/actions/merchantActions';
import { Input } from '@/theme/input';
import { PopUp } from '../style/style';
import Router, { withRouter } from 'next/router'
import Link from 'next/link'
import Navbar from '../dashboard/Navbar'
import Loader from '../Loader/Loader';
import Top from '@/component/backtotop/Top'
 class products extends Component {
    state = {
      
       active: true,
      Category:'',
      CategoryImg:'',
      coverImg:'',
      description:'',

    }
     async componentDidMount () {
       await  this.props.getCategory()
        await  this.props.getAllProdcuts()
   
     }
     
     toggle = ()  =>{
     
        this.setState({ active: !this.state.active});
      };
      onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };

      onUpload = async (e) => {

        this.setState({ CategoryImg:"upload" });
          const files = e.target.files;
          const data = new FormData()
          data.append('file', files[0])
          data.append('upload_preset', 'arlnf3ja')
          
          const res = await fetch('https://api.cloudinary.com/v1_1/spark3313/image/upload', {
            method: 'POST',
            body:data
          })
          const file = await res.json()
          let link = file.secure_url
           console.log(link)
        await   this.setState({ CategoryImg:link });
        }
        onUpload1 = async (e) => {

          this.setState({ coverImg:"upload" });
            const files = e.target.files;
            const data = new FormData()
            data.append('file', files[0])
            data.append('upload_preset', 'arlnf3ja')
            
            const res = await fetch('https://api.cloudinary.com/v1_1/spark3313/image/upload', {
              method: 'POST',
              body:data
            })
            const file = await res.json()
            let link = file.secure_url
             console.log(link)
          await   this.setState({ coverImg:link });
          }
      onSubmit =  async e => {
        e.preventDefault();
     
    
          const userData = {
          Category: this.state.Category,
          CategoryImg:this.state.CategoryImg,
          coverImg:this.state.coverImg,
          description:this.state.description,
           slug: this.state.Category.replace(/\s/g, '-').toLowerCase()
         
        };
        
    
     await   this.props.addCategory(userData);
  
    //  await   this.props.setAlert('Login to Access', 'danger');
      };
      filter = (category) => {
      const data  = {
          category: category
      }
      this.props.filterCategory(data)
      }
    render() {

      const {  CategoryImg , coverImg}  = this.state;

   
            const {  category ,product} = this.props.admin;
            if(category === null ||  product === null) {
                return (
                <div>
                 <Loader/>
                </div>
                )}
         
        return (
             
          <React.Fragment> 
            <Navbar/>
           
<Top/>
            <Section>
        <div className='grid' >
                 <div className="left">
                  <ul>
                 <li className="all"  >  <i className="fas fa-folder"></i> Add Category
                 <i  onClick={  () => this.toggle()} class="fas fa-plus-circle">
            
        </i>
                 
                 </li>
                 
                   {category.map((number) => 
                       <div   onClick={() => this.filter(number.category)} key={number._id}>
   <li> <i className="fas fa-folder-open"></i>{number.category}</li>
                 
   </div>
                   )  }
             
                </ul>
                 </div>
                

                  <div  className="right">
                   
                   {/* <div className="bar" >
                   <h2>Product Name</h2>
                   <h2 className="space-right" >Product Code</h2>
                   <h2 className="space-right"  >Stock</h2>
                   <h2 className="space-right" >Price</h2>
                   </div> */}

                   {product.reverse().map((number) =>
   <div onClick={() => Router.push(`/admin-products/${number._id}`)}  key ={number._id} className="bar1" >
   <div className="img-wrapper" > <img  alt="ww"  src={number.img1} /> </div>
<h3 id="set" >{number.productName}</h3>
   <h3 id="set1" >{number.stocks}</h3>
   <h3  id="set2" >₹{number.price}</h3>
   </div>
  )}
   
                   


                  </div>
                  </div>
                  
                  {(() => {
        if (category.length  === 0) {
          return (
            <div></div>
          )
        } else  {
          return (
            <div  className="add" >
          
        <i onClick={() => Router.push('/admin-addproduct') } class="fas fa-plus-circle">
            
        </i>
        <span class="tooltiptext">Add Product</span>
      
        </div>
          )
          }
      })()}
                  
                 
                  {this.state.active === false   &&   
                  <PopUp>
                        <div id="myModal" class="modal">


<div class="modal-content">


<div  className="row">
         
          
         <div className="head">
         <h2>Add Category</h2>
         
           
         </div>
         <form noValidate onSubmit={this.onSubmit}>

         <div className="group">      
           
      
             <input
               onChange={this.onChange}
            
                  value={this.state.Category}  
               placeholder="Add Catgory"
               id="Category"
              
         />
          <span className="highlight"></span>
      <span className="bar"></span>
      <label>Add Catgory</label>
</div>
<div className="group">      
<input
               onChange={this.onChange}
            
                  value={this.state.description}  
               placeholder="Meta description"
               id="description"
              
         />
           <span className="highlight"></span>
      <span className="bar"></span>
      <label>Description</label>
  
  </div>
<div  className="formData" >
    
    <div className="spinner" >
  <div  className="upload">

<label for="file" >Upload Category Image</label>
<input type="file" id="file"    style={{display:"none"}}         onChange={this.onUpload} name="myImage" class="hide_file"/>

</div>
{(() => {
if ( CategoryImg ==="upload") {
return (
<div  className="data" >Uploading...........</div>
)
} else if (  CategoryImg.length > 0 ) {
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

<label for="file2" >Upload Cover Image</label>
<input type="file" id="file2"   style={{display:"none"}}       onChange={this.onUpload1} name="myImage" class="hide_file"/>

</div>
{(() => {
if ( coverImg ==="upload") {
return (
<div  className="data" >Uploading...........</div>
)
} else if (  coverImg.length > 0 ) {
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
           
             
      

            <div className="btn" >
             <button
              
               type="submit"
               className="first"
             >
          Add
             </button>
             <button
               onClick={  () => this.toggle()}
              type="submit"
              className="second"
            >
         Cancel
            </button>
            </div>
         </form>

  
       </div>




  


</div>

</div>
</PopUp>
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
    { getCategory ,addCategory  ,filterCategory , getAllProdcuts}

)(products);




 
