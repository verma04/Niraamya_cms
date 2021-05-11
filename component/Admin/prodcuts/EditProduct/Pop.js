import React , {useState, useEffect} from 'react'
import { PopUp } from './PopStyle';
import { EditorState,   convertFromRaw , convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const Editor = dynamic(
    () => {
      return import("react-draft-wysiwyg").then(mod => mod.Editor);
    },
    { ssr: false }
  );
 
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";


function Pop({data , editProduct, setActive}) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data1 => {

  data1.id = data._id
      data1.decription = convertToRaw(decription.getCurrentContent()),
      editProduct(data1 , setActive)
    } 
    const [decription, setdescription] = useState(EditorState.createEmpty())


    const [post, setPost] = useState('')
   
    useEffect(async () => {
      
     
          const contentState = convertFromRaw(data.decription)
          const editorState = EditorState.createWithContent(contentState)
          setdescription(editorState)

   
           

    
    }, [])
    
    return (
        <div>
               <PopUp>
                        <div id="myModal" class="modal">


<div class="modal-content">


<div  className="row">
         
          
         <div className="head">
         <h2>Edit Product</h2>
         
           
         </div>
         <form onSubmit={handleSubmit(onSubmit)} >

         <div className="group">      
           
         <h2>Product Name</h2>
             <input
  
  name="productName"
  {...register("productName")}
             defaultValue={data.productName}
               
                 id="productName"
              
         />
          <span className="highlight"></span>
      <span className="bar"></span>
      
</div>
<div className="group">      
           
           <h2>Product Price</h2>
               <input
       
              {...register("price")} 
             
              name="price"
              defaultValue={data.price}
                 id="price"
                
           />
            <span className="highlight"></span>
        <span className="bar"></span>
        
  </div>
  <div className="group">      
           
           <h2>Stocks</h2>
               <input
    defaultValue={data.stocks}
                 
                  name="stocks"
                 {...register("stocks")}
                 id="stocks"
                
           />
            <span className="highlight"></span>
        <span className="bar"></span>
        
  </div>
<div className="group">      
<h2>Description</h2>

  
  </div>

  <Editor                          
  editorState={decription}
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"
                        wrapperStyle={{ border: "2px solid green",  marginBottom: "20px" }}
                        editorStyle={{ height:"10rem", padding: "10px"}}
                        
                        onEditorStateChange={editorState => setdescription(editorState)}
                        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
         
        }}
                  />

             
      

            <div className="btn" >
             <button
              
               type="submit"
               className="first"
             >
          Add
             </button>
             <button
               onClick={() => setActive()}
    
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


        </div>
    )
}

export default Pop
