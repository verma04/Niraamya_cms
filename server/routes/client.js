const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Category = require("../models/Category");
const Product = require("../models/Product");
const bcrypt = require("bcryptjs");
const moment = require('moment')
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

const auth = require('../middleware/auth');

const { check, validationResult } = require('express-validator');



function routes(app) {

  
  
  
  router.get("/allCostomer", (req, res) => {
 
    User.find({ role:"user" }).then( category=>{
      res.json(category)
   
   })
    
  
  
  
  });
  
  router.post("/CostomerDetials", (req, res) => {
    let id =  req.body.idd
    console.log(req.body.idd)
  
    User.find({  _id:req.body.idd  }, function(err, foundjobs) {
        if(err) {
            console.log(err);
        } else {
          res.json(foundjobs)
          console.log(foundjobs)
       
  
  
        }
    }); 
  
    
  
  
  
  });
  
  
  router.get("/getCategory",   passport.authenticate('jwt', { session: false }),
  
  (req, res) => {
    
  
    Category.find({}).then( category=>{
      res.json(category)
    
    })
  
  
  });
  
  
  
  router.post("/addCategory",  
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
  
   
    
    const data = {
      category : req.body.Category,
      CategoryImg:req.body.CategoryImg,
      coverImg:req.body.coverImg,
      decription:req.body.description,
      slug:req.body.slug
    }
  console.log(data)
  
  
  Category.create(data).then( category=>{
    console.log(category)
  
  })
    // User.findOneAndUpdate({_id: req.user.id },{ $push: {"category":  data  } },  { new: true, upsert: true },function(err, result) {
    //   if (err) {
    //   console.loh(err)
    //   } 
    
      
    
    //   res.json(result.category)
    
    
      
    // });
    
   
    
    
    
  
  
  });
  
  router.get("/getAllProdcuts",   passport.authenticate('jwt', { session: false }),
  
  (req, res) => {
    
    Product.find({}).then( category=>{
       res.json(category)
    
    })
   
  
  
  });
  
  
  router.post("/addProducts",   passport.authenticate('jwt', { session: false }), (req, res) => {
  
      let count = req.user.product_id;
      console.log(count)
    User.findOneAndUpdate({  _id: req.user.id  }, { product_id: req.user.product_id + 1   },   { new: true, upsert: true },function(err, result) {
  
       let count2 = result.product_id;
  
       console.log(count2)
  
    var n = Date.now();
    var d = new Date();
  d.setDate(d.getDate() + 14);
    const  {  category , price , stocks,  productName ,  decription , img1 , img2 , img3 , saleprice,dimensions,
      weight, date , end ,  product_id , slug
    } = req.body;
    console.log(req.body)
  
    const profileFields = {
      category , price , stocks,  productName ,  decription :JSON.parse(req.body.decription),  img1 ,  saleprice,dimensions,
      weight,
      slug,
      date:Date.now() , end:d,
      product_id: count2,
      prodouctCode:count
    }
     
    console.log(stocks)
    Product.create(profileFields).then(prodoucts=>{
     
      if (err) {
      console.log(err)
      } 
    
      
    
  
    
  console.log(prodoucts)
      
    });
   
    Product.find({}).then( category=>{
      res.json(category)
   
   })

  });
  });
  
  // @route POST api/users/login
  // @desc Login user and return JWT token
  // @access Public
  
  
  router.post('/category',   passport.authenticate('jwt', { session: false }),  function(req, res) {
    console.log(req.body.category)
  
     
    User.findOneAndUpdate({  _id: req.user.id   },  { new: true, upsert: true },function(err, result) {
            if(err) {
                console.log(err);
            }
              
              let  filter= result.prodoucts;
              const filtered = filter.filter(element => element.category === req.body.category);
              console.log(filtered)
              res.json(filtered)
        }); 
     
   });
  
   router.post('/categories',   passport.authenticate('jwt', { session: false }),  function(req, res) {
    console.log(req.body.category)
  
     
    User.findOneAndUpdate({  _id: req.user.id   },  { new: true, upsert: true },function(err, result) {
            if(err) {
                console.log(err);
            }
              
              let  filter= result.category;
              const filtered = filter.filter(element => element.category === req.body.category);
              console.log(filtered)
              res.json(filtered)
        }); 
     
   });
   
  
   router.post('/coupan',   passport.authenticate('jwt', { session: false }),  function(req, res) {
      
    const { errors, isValid } = validateCoupanInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const {  coupan  , percent ,  start , end} = req.body;
  
    User.findOne({"coupan.coupan":coupan }, {'coupan.$': 1},
      function (err, coupon) {
          if (coupon) {
            return res.status(400).json({ coupan: "Coupan already exists" });
          } else {
                   
            
  
              const profileFields = {
      coupan  , percent ,  start , end , status:"active"
     }
  
      if ( start> end  ) {
        return res.status(400).json({ date: "End date must ahead of stat date" });
      }
    
    User.findOneAndUpdate({  _id: req.user.id   }, {  $push: {"coupan":  profileFields  }  },{ new: true, upsert: true },function(err, result) {
            if(err) {
                console.log(err);
            }
             res.json(result.coupan)
             
        }); 
          }
      }
  );
    // console.log(req.body)
  
    //  
  
    //  const profileFields = {
    //   coupan  , percent ,  start , end , status:"active"
    //  }
  
    
    
    // User.findOneAndUpdate({  _id: req.user.id   }, {  $push: {"coupan":  profileFields  }  },{ new: true, upsert: true },function(err, result) {
    //         if(err) {
    //             console.log(err);
    //         }
    //          res.json(result.coupan)
             
    //     }); 
     
   });
   
  
   router.get('/getcoupan',   passport.authenticate('jwt', { session: false }),  function(req, res) {
   
             res.json(req.user.coupan)
      
     
   });
  
   router.get('/checkcoupan',   passport.authenticate('jwt', { session: false }),  function(req, res) {
   let date = new Date();
    let coupan = req.user.coupan;
    coupan.forEach(element => {
      console.log(element.end);
          console.log(date)
      if( date > element.end  ) {
        
        User.findOneAndUpdate({  _id: req.user.id  , "coupan.end":element.end  }, {  $set: {"coupan.$.status":  "expired"  }  },{ new: true, upsert: true },function(err, result) {
          if(err) {
              console.log(err);
          }
        
           
      }); 
  
  
  
      }
     
  
  
         
   
  
  
    });
  
    res.json(req.user.coupan)
  
  
  });
  
  router.post('/deletecoupan',   passport.authenticate('jwt', { session: false }),  function(req, res) {
   
            console.log(req.body.idd)
  
         
         User.findOneAndUpdate({  _id: req.user.id   }, { $pull:  {"coupan": {_id:req.body.idd}} },{ new: true, upsert: true },function(err, result) {
           if(err) {
               console.log(err);
           }
          
            
       }); 
       
  
       User.findOneAndUpdate({  _id: req.user.id   },function(err, result) {
        if(err) {
            console.log(err);
        }
        res.json(result.coupan)
       
         
    }); 
    
   
   
      });
      
   
      router.post('/addcover',   passport.authenticate('jwt', { session: false }),  function(req, res) {
   
        console.log(req.body)
  
     
  //    User.findOneAndUpdate({  _id: req.user.id   }, { $pull:  {"coupan": {_id:req.body.idd}} },{ new: true, upsert: true },function(err, result) {
  //      if(err) {
  //          console.log(err);
  //      }
      
        
  //  }); 
   
  
  //  res.json(req.user.coupan)
  
  
  });
          
    
  //  AWS.config.update({
  //   AWSAccessKeyId="AKIAJ3ESZEPBREHSY5OQ",
  //   AWSSecretKey="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"
  // });
   
    
  // const s3 = new AWS.S3();
  
  // const uploadFile = (buffer, name, type) => {
  //   const params = {
  //     ACL: 'public-read',
  //     Body: buffer,
  //     Bucket: process.env.S3_BUCKET,
  //     ContentType: type.mime,
  //     Key: `${name}.${type.ext}`,
  //   };
  //   return s3.upload(params).promise();
  // };
  
  // // Define POST route
  // app.post('/test-upload', (request, response) => {
  //   const form = new multiparty.Form();
  //   form.parse(request, async (error, fields, files) => {
  //     if (error) {
  //       return response.status(500).send(error);
  //     };
  //     try {
  //       const path = files.file[0].path;
  //       const buffer = fs.readFileSync(path);
  //       const type = await FileType.fromBuffer(buffer);
  //       const fileName = `bucketFolder/${Date.now().toString()}`;
  //       const data = await uploadFile(buffer, fileName, type);
  //       return response.status(200).send(data);
  //     } catch (err) {
  //       return response.status(500).send(err);
  //     }
  //   });
  // });
  
  
  router.get('/fetchOrders',   passport.authenticate('jwt', { session: false }),  function(req, res) {
     
    
     
    let data  =  req.user.MerOrders.reverse()
  
   res.json(data)
     
  })
     
  
  router.post('/fetchOrder_id',   passport.authenticate('jwt', { session: false }),  function(req, res) {
      
    console.log(req.body.id)
  
     let order = req.user.MerOrders
     const filtered = order.filter(element => element.order_id === req.body.id);
  
     res.json(filtered)
   })
      
  
   router.post('/orderStatus',   passport.authenticate('jwt', { session: false }),  function(req, res) {
    
  
  
  User.findOneAndUpdate({  _id: req.user.id  , "MerOrders._id":req.body._id  }, {$set:{ "MerOrders.$.status": "Accepted" } },{ new: true, upsert: true },function(err, result) {
    let order = result.MerOrders
    const filtered = order.filter(element => element.order_id === req.body.order_id);
    
     res.json(filtered)
    
        
     })
  
     User.findOneAndUpdate({  email: req.body.cos_email  , "orders.order_id":req.body.order_id    } , {$set:{ "orders.$.status": "Accepted" } } ,{ new: true, upsert: true },function(err, result1) {
        
      const arr = req.body.products;
  
        arr.forEach(element => {
          
       
  
      const data3 = {
        
        img:element.img1,
        message:"Product Accpeted",
        decription:" Your Product containing "+  '  '   + element.productName  +  '  ' + element.weight +    '  ' + " ;has been accepted by seller and will Delivered soon",
         seen:"none"
      }
  
      User.findOneAndUpdate({  email: req.body.cos_email    } , {$push: { "notifications": data3 }   } ,{ new: true, upsert: true },function(err, result2) {
  
  
       console.log(result2)
  
         })
          
       })
      });
  
  
  
  })
  
  router.post('/shipped',   passport.authenticate('jwt', { session: false }),  function(req, res) {
    
       
    const data =  (req.body.data)
  
  data.forEach(element => {
    console.log(element.order_id)
    User.findOneAndUpdate({  email: element.cos_email  , "orders.order_id":element.order_id    } , {$set:{ "orders.$.status": "Shipped" , "orders.$.track_number": req.body.number,  "orders.$.track_service": req.body.service,  "orders.$.track_method": req.body.method, } } ,{ new: true, upsert: true },function(err, result1) {
        
    
  
      User.findOneAndUpdate({  _id: req.user.id  , "MerOrders.order_id":element.order_id   }, {$set:{ "MerOrders.$.status": "Shipped" , "MerOrders.$.track_number": req.body.number,  "MerOrders.$.track_service": req.body.service,  "MerOrders.$.track_method": req.body.method} },{ new: true, upsert: true },function(err, result) {
         if(err){
           console.log(err)
         }
         let order = result.MerOrders
         const filtered = order.filter(element => element.order_id === element.order_id);
         
         res.json(filtered)
    
            
         })
         const arr = element.products;
        arr.forEach(element1 => {
          
       
  
      const data3 = {
        
        img:element1.img1,
        message:"Product Shipped",
        decription:" Your Product containing "+  '  '   + element1.productName  +  '  ' + element1.weight +    '  ' + " ;has been Shipped by seller and will delivered soon by " + '   ' + req.body.service,
         seen:"none"
      }
  
      User.findOneAndUpdate({  email: element.cos_email    } , {$push: { "notifications": data3 }   } ,{ new: true, upsert: true },function(err, result2) {
  
  
      console.log(result2.notifications)
  
         })
          
       })
      }); 
  
  
  
  });
  
    
    })
    
  
  
   router.post('/onDelivered',   passport.authenticate('jwt', { session: false }),  function(req, res) {
    
  console.log(req.body);
  
    User.findOneAndUpdate({  _id: req.user.id  , "MerOrders._id":req.body._id  }, {$set:{ "MerOrders.$.status": "Delivered" } },{ new: true, upsert: true },function(err, result) {
     
      
          
     
    
       User.findOneAndUpdate({  email: req.body.cos_email  , "orders.order_id":req.body.order_id    } , {$set:{ "orders.$.status": "Delivered" } } ,{ new: true, upsert: true },function(err, result1) {
          
        const arr = req.body.products;
    
          arr.forEach(element => {
            
         
    
        const data3 = {
          
          img:element.img1,
          message:"Product Delivered,",
          decription:" Your Product containing "+  '  '   + element.productName  +  '  ' + element.weight +    '  ' + " ;has been Delivered,  suceesFully",
           seen:"none"
        }
    
        User.findOneAndUpdate({  email: req.body.cos_email    } , {$push: { "notifications": data3 }   } ,{ new: true, upsert: true },function(err, result2) {
    
    
         console.log(result2)
    
           })
  
  
        const data4 = {
          
          img:element.img1,
          message:"Rating",
        
           seen:"none",
           productName: element.productName
        }
    
        User.findOneAndUpdate({  email: req.body.cos_email    } , {$push: { "notifications": data4 }   } ,{ new: true, upsert: true },function(err, result2) {
    
    
         console.log(result2)
    
           })
            
         })
        });
    
        let order = result.MerOrders
        const filtered = order.filter(element => element.order_id === req.body.order_id);
        
         res.json(filtered)
      })
    })
  
      
  
    router.post('/getProduct',   passport.authenticate('jwt', { session: false }),  function(req, res) {
      
   
     
      Product.findOne({_id:req.body.id}).then(result=>{
       
      res.json(result)
       
    })
  
          
              
         
        
        })
  
        router.post('/deleteProduct',   passport.authenticate('jwt', { session: false }),  function(req, res) {
    
     
          Product.findOneAndRemove({_id:req.body.id}).then(result=>{
       
            res.json(result)
             
          })
           
               
          
      
         })
       
  
         router.post('/img1Change',   passport.authenticate('jwt', { session: false }), async  function(req, res) {
    
         console.log(req.body)
        
     await     Product.findOneAndUpdate({  _id:req.body.id  } , {$set: { "img1": req.body.img1  }},function(err, user) {
               
    
             
           
        
               
          })
  
          Product.findOne({_id:req.body.id}).then(result=>{
       
            res.json(result)
             
          })
        
   
       
     
         
         })
       
  
         router.post('/img2Change',   passport.authenticate('jwt', { session: false }), async  function(req, res) {
    
          console.log(req.body)
         
          await     Product.findOneAndUpdate({  _id:req.body.id  } , {$set: { "img2": req.body.img2  }},function(err, user) {
               
    
             
           
        
               
          })
  
          Product.findOne({_id:req.body.id}).then(result=>{
       
            res.json(result)
             
          })
      
          
          })
  
          router.post('/img3Change',   passport.authenticate('jwt', { session: false }), async  function(req, res) {
    
            await     Product.findOneAndUpdate({  _id:req.body.id  } , {$set: { "img3": req.body.img3  }},function(err, user) {
               
    
             
           
        
               
            })
    
            Product.findOne({_id:req.body.id}).then(result=>{
         
              res.json(result)
               
            })
        
            
            })
  
            router.post('/editProduct',   passport.authenticate('jwt', { session: false }), async  function(req, res) {
    
              console.log(req.body)
             
          await     Product.findOneAndUpdate({  _id: req.body.id ,} , {$set:  req.body},function(err, user) {
                    
         
                  
                
             
                    
               })
       
               Product.findOne({_id:req.body.id}).then(result=>{
         
                res.json(result)
                 
              })
            
          
              
              })
  
  
  
  
  
  
  
  
  

  
  
  
  return router;
};

module.exports = routes;