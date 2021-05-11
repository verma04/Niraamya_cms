const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  phone: {
    type: String,
    required: true
  },
  role: {
    type: String,
  
  },
  sid: {
    type: String,
    required: true
      
  }
  ,

  token : {
    type: String,
    required: true
   
  }
  ,

  product_id : {
     type:Number,
     
  },
  total_order: {
    type:Number,
    
 },
  

  category: [
      {
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
      
    }
  ]
  ,



      prodoucts:[{
        product_id : {
          type:Number,
        
       },

       order_done: {
        type:Number,
        default:1
        
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
          
          
            ,  decription :   {
              type: String,
              required: true
            }
            ,

            img1 : {
              type: String,
              required: true
             
            },
            img2 : {
              type: String,
              required: true
             
            },
            img3 : {
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

           
            
       
        
      }]
,
cart : [{
  
  productName : {
    type: String,
    required: true
   
  },
  product_id : {
    type:Number,
    
 },
  prodouctCode : {
    type: String,
    required: true
   
  },
   count : {
    type: Number,
    required: true
   
  },
  category : {
    type: String,
    required: true
   
  },
 
  price : {
    type: Number,
    required: true
   
  }


  ,  decription :   {
    type: String,
    required: true
  }
  ,

  img1 : {
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
  
    
    



}]
,

  
bulkorder: [{
  userName: {
    type: String,
    required: true
   },
   email: {
    type:String,
    track_number: {
      type:String
    },
    track_service: {
      type:String
   },
   track_method: {
    type:String
   
    },
    
   },
   phone: {
    type:Number,
  
   },
   BulkData : [{
  
    productName : {
      type: String,
      required: true
     
    },
    product_id : {
      type:Number,
      
   },
    prodouctCode : {
      type: String,
      required: true
     
    },
     count : {
      type: String,
      required: true
     
    },
    category : {
      type: String,
      required: true
     
    },
   
    price : {
      type: Number,
      required: true
     
    }
  
  
    ,  decription :   {
      type: String,
      required: true
    }
    ,
  
    img1 : {
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
    
      
      
  
  
  
  }]
}]
,


Bulkcart : [{
  
  productName : {
    type: String,
    required: true
   
  },
  product_id : {
    type:Number,
    
 },
  prodouctCode : {
    type: String,
    required: true
   
  },
   count : {
    type: String,
    required: true
   
  },
  category : {
    type: String,
    required: true
   
  },
 
  price : {
    type: Number,
    required: true
   
  }


  ,  decription :   {
    type: String,
    required: true
  }
  ,

  img1 : {
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
  
    
    



}]

,


notifications: [{

  img  : {
    type: String,
    required: true
   
  },
  message : {
    type: String,
    required: true
   
  },
 
  decription : {
    type: String,
    required: true
   
  },

  seen : {
    type: String,
    required: true,
     
   
  },
  product_id: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  }

}]
,
orders : [{
  
  

   order_id: {
    type: String,
    required: true
   },
   status: {
    type:String,
    track_number: {
      type:String
    },
    track_service: {
      type:String
   },
   track_method: {
    type:String
   
    },
    
   },
   total_paid: {
    type:Number,
  
   },
  
   products : [{
  
  
    productName : {
      type: String,
      required: true
     
    },
    product_id : {
      type: String,
      required: true
     
    },
    category : {
      type: String,
      required: true
     
    },
    totalitems : {
      type: Number,
      required: true
     
    },
    price : {
      type: Number,
      required: true
     
    }
  
  
    ,  decription :   {
      type: String,
      required: true
    }
    ,
  
    img1 : {
      type: String,
      required: true
     
    },
    img2 : {
      type: String,
      required: true
     
    },
    img3 : {
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
     
    }
    
    
  
  
  
  }]

  
  



}],


wishList : [{
  
  
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


  ,  decription :   {
    type: String,
    required: true
  }
  ,

  img1 : {
    type: String,
    required: true
   
  },
  img2 : {
    type: String,
    required: true
   
  },
  img3 : {
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
   
  }
  
  



}],

coupan : [{
  
  
  coupan : {
    type: String,
    required: true
   
  },
  percent : {
    type: String,
    required: true
   
  },
 
  start : {
    type: Date,
    required: true
   
  },
  end : {
    type: Date,
    required: true
   
  },
  status: {
    type: String,
    required: true
  }
 

  
  



}]

, 
compare:[
  {
  idd : {
    type: String,
    required: true
   
  },
}
],

MerOrders : [{
  
  cos_name: {
    type: String,
    required: true
  },
  cos_email: {
    type: String,
    required: true
  },
  cos_phone: {
    type: String,
    required: true
  },
  order_id: {
   type: String,
   required: true
  },
  status: {
    type:String,
  
    
   },
   
   track_number: {
     type:String
   },
   track_service: {
    type:String
  },
  track_method: {
    type:String,
  
   },


   total_paid: {
    type:Number,
  
   },
 
  products : [{
     

 
   productName : {
     type: String,
     required: true
    
   },
   product_id : {
     type: String,
     required: true
    
   },
   category : {
     type: String,
     required: true
    
   },
   totalitems : {
     type: Number,
     required: true
    
   },
   price : {
     type: Number,
     required: true
    
   }
 
 
   ,  decription :   {
     type: String,
     required: true
   }
   ,
 
   img1 : {
     type: String,
     required: true
    
   },
   img2 : {
     type: String,
     required: true
    
   },
   img3 : {
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
    
   }
   
   
 
 
 
 }]

 
 



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
  


});




module.exports = User = mongoose.model("users", UserSchema);
