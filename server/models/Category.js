const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CategorySchema = new Schema({
 
  


      
        category :{
          type: String,
          required: true
        },

        slug :{
          type: String,
          required: true
        },
        CategoryImg: {
          type: String,
          required: true
        },
       
        coverImg: {
          type: String,
          required: true
        },
        decription:{
          type: String,
          required: true
        }
      
  



     

 
 








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
  


});




module.exports = User = mongoose.model("catgories", CategorySchema);
