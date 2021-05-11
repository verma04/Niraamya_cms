const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProductSchema = new Schema({
 




        product_id : {
          type:Number,
        
       },

       order_done: {
        type:Number,
        default:1
        
       },
       slug: {
  type:String
       }
       
      
                ,
            productName : {
              type: String,
              required: true
             
            },
            prodouctCode : {
              type: String,
              required: true
             
            },
            category : {
              type: String,
              required: true
             
            },
            stocks : {
              type: Number,
              required: true
             
            },
            price : {
              type: Number,
              required: true
             
            }
          
          
            , 
            decription :   {
              type: Object,
              required: true
            }
            ,

            img1 : {
              type: String,
              required: true
             
            },
         
            saleprice: {
              type: Number,
              required: true
             
            },dimensions: {
              type: String,
              required: true
             
            },
            weight: {
              type: String,
              required: true
             
            },
            date : {
              type: Date,
              required: true
             
            },
            wishList:{
              type:Boolean,
           default:false
            },
            end: {
              type: Date,
              required: true
            }
            ,
            rating: [{
               cos_name:{
                type: String,
                required: true
               },
               rating:{
                type: Number,
                required: true
               },
               title: {
                type: String,
                required: true
               },
               description: {
                type: String,
                required: true
               }
            }],

           
            
       
        
    
















// notification:[{
//   img : {
//     type:String,
//     required: true
    
//  },

//    message: {
//    type:String,
//    required: true
   
// },
//   decription: {
//   type:String,
//   required: true
  
// },


// }]
  


},  { minimize: false });




module.exports = Product = mongoose.model("products", ProductSchema);
