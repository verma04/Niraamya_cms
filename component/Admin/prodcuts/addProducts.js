import React, { Component } from 'react';
import { getCategory , addProduct}  from '@/redux/actions/merchantActions';
import { convertFromRaw } from 'draft-js';
import { Section } from './style/addProdcuts';
import Loader from '../Loader/Loader';
import Navbar from '../dashboard/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setAlert} from '@/redux/actions/alertAction';
import { connect } from 'react-redux';
import dynamic from "next/dynamic";
import Router, { withRouter } from 'next/router'
const Editor = dynamic(
  () => {
    return import("react-draft-wysiwyg").then(mod => mod.Editor);
  },
  { ssr: false }
);


const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};
 

class addProducts extends Component {
  constructor(props) {
    super(props);
    const decription = convertFromRaw(content);
    this.state = {
       decription,
        active: true,
   
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
    
   

  }
      componentDidMount () {
         this.props.getCategory()
     }
  
     onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };

      onUpload1 = async (e) => {

      this.setState({ img1:"upload" });
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
      await   this.setState({ img1:link });
      }

     

      onSubmit =  async e => {
        e.preventDefault();  
        if(this.state.category === '' ||  this.state.productName === '' ||  this.state.price   === ''  ||  this.state.stocks  === ''  ||  this.state.saleprice  === ''  || this.state.dimensions  === ''  ||this.state.weight  === ''   ) {
       await   toast.error("Enter All Required Value" , "Error")

        }
      else  if(this.state.img1 === '' ) {
          await   toast.error("Upload Image" , "Error")
   
           }
           else  if(this.state.img1 === 'upload'   ) {
            await   toast.error("Image Uploading" , "Error")
     
             }
           
       else {
      
        const Data = {
            category: this.state.category,
             decription:JSON.stringify(this.state.decription, null, 4),
            productName:this.state.productName,
             price:this.state.price,
            stocks: this.state.stocks,
            img1:this.state.img1,
            img2:this.state.img2,
            img3:this.state.img3,
            saleprice:this.state.saleprice,
            dimensions:this.state.dimensions,
    weight:this.state.weight,
    slug: this.state.productName.replace(/\s/g, '-').toLowerCase()
 
           
          };
        await  this.props.addProduct(Data , Router)
          //  await this.props.history.push('/admin/products')
        }
    };


  ondecriptionChange = (decription) => {

    console.log(decription)
    this.setState({
      decription
    });

  };
    render() {
      const { img1, img2 , img3} = this.state;
        const {  category} = this.props.admin;
                  
      

        if(category === null) {
            return (
            <div>
             <Loader/>
            </div>
            )}
            
            if ( category.length  === 0 ) {
              return (
                <Redirect to="/admin/products" />
                )
    
            }
            const { decription } = this.state;
        return (
          <React.Fragment> 
   <Navbar/>
   <ToastContainer />
            <Section>
                
               <div  className='flex' >
                      <div className='flex1' >
                          <form   noValidate onSubmit={this.onSubmit} >
                   <div className="flex-1" >
               <div className="head" >
                       <h3>Description</h3>
                       </div>
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
 
      <span  className="editor" >Description*</span>

      
        <Editor
          wrapperClassName="demo-wrapper"
          customStyleMap={this.styleMap}
          editorClassName="demo-editor"
          onContentStateChange={this.ondecriptionChange}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          wrapperStyle={{  marginTop:'1.5rem', border: "2px solid ",  borderShadow:"rgb(0 0 0 / 10%) 0px 3px 30px, rgb(0 0 0 / 10%) 0px 3px 20px;" , borderRadius: "0.5rem" ,backgroundColor:'rgb(255,255,255)'  ,  marginBottom: "20px" }}
          editorStyle={{ height: "300px", padding: "10px"}}
          toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        
        }}
        />
    </div>
    
    </div>



                   </div>
  
                   <div className="flex-1" >
               <div className="head" >
                       <h3>InvenTory</h3>
                       </div>
                       <div  className="formData" >
    

    <div className="parent" >
    <div className="group">      
      <input
         onChange={this.onChange}
            
         value={this.state.price}  
         id="price"
      type="number" pattern="[0-9]*" required/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Product Price</label>
    </div>
    <div className="group">      
      <input
         onChange={this.onChange}
            
         value={this.state.saleprice}  
         id="saleprice"
      type="number" pattern="[0-9]*" required/>
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
      <label>Product Dimensions</label>
    </div>
    </div>
    <div className="group">      
      <input
     
        onChange={this.onChange}
           
        value={this.state.stocks}  
        id="stocks"
     type="number" pattern="[0-9]*" required/>
     
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Total Stocks</label>
    </div>
   
    <select onChange={this.onChange}
           
           value={this.state.Category}   id="category" name="cars">
                 
    <option value=''>---Category-----</option>
    {category.map((number) => 
  
    <option value={number.slug}>{number.category}</option>
 
    )  }
  </select>
   
    </div>



                   </div>
                   <div className="flex-1" >
               <div className="head" >
                       <h3>InvenTory</h3>
                       </div>
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
 


                   </div>
                <div className="button" >
     <button>Save</button>

                </div>
</form>
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
    { getCategory  , addProduct , setAlert }

)(addProducts);
