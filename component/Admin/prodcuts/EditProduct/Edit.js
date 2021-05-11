import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getProduct  , deleteProduct , img1Change , img2Change , img3Change , editProduct}  from '@/redux/actions/merchantActions';
import  { Section } from './Style';
import Loader from '../../Loader/Loader';
import Navbar from '../../dashboard/Navbar'
import {  convertFromRaw } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import Pop from './Pop'
import Router, { withRouter } from 'next/router'
import { setAlert , } from '@/redux/actions/alertAction';
const Editor = dynamic(
  () => {
    return import("react-draft-wysiwyg").then(mod => mod.Editor);
  },
  { ssr: false }
);
import { EditorState,   convertToRaw } from 'draft-js';
import dynamic from "next/dynamic";

const convertFromJSONToHTML = (text) => {
  
  console.log( typeof text)
    try{
        return { __html: stateToHTML(convertFromRaw(text))}
      } catch(exp) {
        console.log(exp)
        return { __html: 'Error' }
      }
}
class Category extends Component {
  
   async  componentDidMount() {

        const userData = {
        id:this.props.id
        }

        this.props.getProduct(userData);

    }
   

      onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  setActive = () => {
    this.setState({active:true})
  }

    state = {
      
       active: true,
      
          img1:"",
          img2:"",
          img3:"",
          productName:'',
          price:'',
          stocks:'',
          description:""
         
     }

     onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            id:this.props.id,
            productName: this.state.productName,
            price:this.state.price,
            stocks:this.state.stocks,
            description:this.state.description
        }
          
    await   this.props.editProduct(data)
    await   this.setState({ active: !this.state.active});

     }
     toggle =  async ()  =>{
     
    await  this.setState({ active: !this.state.active});
    await this.setState({ productName: this.props.admin.product_det.productName ,   price: this.props.admin.product_det.price,  stocks:this.props.admin.product_det.stocks , description:this.props.admin.product_det.decription })
    };
    onDelete = () => {
       
        const data = {
            id:this.props.id
        }
        this.props.deleteProduct(data , Router)

        setTimeout(
            () =>  this.props.setAlert("Product Deleted ", "Added"), 
            3000
          );

    }

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
   
        const userData = {
            id:this.props.id,
            img1:link
            }
      await   this.props.img1Change(userData)

        }


    

              onChange1 = e => {
                this.setState({ productName: e.target.value });
              };
            
    

    render() {
          
     const { product_det} = this.props.admin;

     if(  product_det === null ) {
         return (
             <Loader/>
         )
     }

        
        return (
           

   <React.Fragment>
<Navbar/>
            <Section>
                
               <div className='flex' >

                   <div className='flex-1' >

                       <div className="top" >
                           
                           <div className="img" >
                               <img src={product_det.img1} /> 
                         <label  for="file" > <i   className="fas fa-edit"></i></label> 
                            <input onChange={this.onUpload1} type="file" name="myImage" class="hide_file" id="file" style={{display:"none"}}  ></input>
                           </div>
          
                       </div>
                      

                   </div>

                   <div className='flex-2' >

                       <div className="grid-1" >
                          
                       <div className="data">
                       <h2>ProductName:</h2>       <h3>{product_det.productName}</h3>
                           </div>
                           <div className="data">
                           <h2>ProductPrice:</h2>    <h3>{product_det.price}</h3>
                           </div>
                           <div className="data">
                           <h2>Category:</h2>     <h3>{product_det.category}</h3>
                           </div>
                           <div className="data">
                           <h2>Stocks:</h2>     <h3>{product_det.stocks}</h3>
                           </div>

                       </div>
                       <div className="grid-2" >

                       <div className="data">
                      <h2>Order_Done:</h2>  <h3> {product_det.order_done}</h3>
                           </div>
                           <div className="data">
                         <h2>Weight:</h2>  <h3>{product_det.weight}</h3>
                           </div>
                           <div className="data">
                         <h2>Product_id:</h2> <h3>{product_det.product_id}</h3>
                           </div>
                           <div className="data">
                           <h2>Total Order:</h2>   <h3>{product_det.order_done}</h3>
                           </div>
                       </div>
                       <div className="grid-3" >
                           <h2>
                           Decription


                           <h2  dangerouslySetInnerHTML={convertFromJSONToHTML(product_det.decription)}></h2>
                           </h2>
 <p>

 </p>

                       </div>
                       </div>
             
             <div className="btn" >
                 <button className="first"  onClick={this.toggle} >Edit</button>
                 <button className='second' onClick={() => this.onDelete(product_det._id)}  >Delete</button>
             </div>

</div>
    

            </Section>
            
            
            
            {this.state.active === false   &&   
               <Pop  setActive={this.setActive}  editProduct={this.props.editProduct} data = {product_det} />

}
            
            
            
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
    { getProduct ,deleteProduct , setAlert , img1Change , img2Change , img3Change  , editProduct}

)(Category);