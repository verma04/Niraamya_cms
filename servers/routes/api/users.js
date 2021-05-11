const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const SendOtp = require('sendotp');
const sendOtp = new SendOtp('AuthKey');
const DeviceDetector = require('node-device-detector');
const accountSid = 'AC74fa5b79410daa9f581ae7368331b3db';
const authToken = 'ee5fc8592f3187025da3dc6cc792fb83';
var nodemailer = require("nodemailer");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const { v4: uuidv4 } = require('uuid');
// Load User model
const User = require("../../models/User");
const Nexmo = require('nexmo');
const Product = require("../../models/Product");
const password = require("../../config/keys").password;
const Category = require("../../models/Category");

const webpush = require("web-push");
const shortid = require('shortid')
const Razorpay = require('razorpay');
const { mapReduce } = require("../../models/User");


const razorpay = new Razorpay({
  key_id: 'rzp_test_0w53o7yWvbCgtA',
	key_secret: 'I7bLbOEJNUDLN0JXorrD2ya2'
})
const publicVapidKey ="BKOzusBpOarLmjzqkKKxFCjTnqzjZd0e5namFdbo8-H5MmRGQl1aGSLaTTUvfAlVKs4YCqnTSMfoz0Db7ATe3BA";
const privateVapidKey = "TLzp8osVmpYzug_GkfB_J16qzI4fh3gJt-axudFgYHQ";
webpush.setVapidDetails("mailto:test@test.com",publicVapidKey,privateVapidKey);


// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation

  console.log(req.body)

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email  }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      User.findOne({ phone: req.body.phone  }).then(user => {
        if (user) {
          return res.status(400).json({ phone: "phone already exists" });
        }
     
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone:req.body.phone,
        sid:'dsds',
        token:'sdd',
        role:"user"
      });
      const userAgent = 'Mozilla/5.0 (Linux; Android 5.0; NX505J Build/KVT49L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.78 Mobile Safari/537.36';
      const detector = new DeviceDetector;
      const result = detector.parseOs(userAgent);
      console.log('Result parse os', result);  
      const AliasDevice = require('node-device-detector/parser/device/alias-device');
  const uuserAgent = 'Mozilla/5.0 (Linux; Android 5.0; NX505J Build/KVT49L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.78 Mobile Safari/537.36';
  const aliasDevice = new AliasDevice;
  const reesult = aliasDevice.parse(uuserAgent);
    const rest = result.name;
    const resst = reesult.name
 
    var datetime = new Date();
    
  console.log(rest);
  console.log(resst)

  const client = require('twilio')(accountSid, authToken);
  rand=Math.floor((Math.random() * 1000000) + 54);
  client.messages
    .create({
       body: "WecClome to Niraamya",
       from: '+12184525304',
       to: "+91" + req.body.phone
     })
    .then(message =>   console.log(message.sid) )

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'vermapankaj3313@gmail.com',
          pass:  password
                }
      });
      
      var mailOptions = {
        from: 'Eatwell ',
        to: req.body.email,
        subject: 'EatWell security alert: Sign-in from new device detected',
        text: "We detected a sign-in to your account from a new device When:" + datetime + "Device" + resst + rest  
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });


      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    });

    
    }
    
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

  

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
          phone:user.phone,
          role:user.role,
          email:user.email
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
             expiresIn:  31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );

        const userAgent = 'Mozilla/5.0 (Linux; Android 5.0; NX505J Build/KVT49L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.78 Mobile Safari/537.36';
        const detector = new DeviceDetector;
        const result = detector.parseOs(userAgent);
        console.log('Result parse os', result);  
        const AliasDevice = require('node-device-detector/parser/device/alias-device');
    const uuserAgent = 'Mozilla/5.0 (Linux; Android 5.0; NX505J Build/KVT49L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.78 Mobile Safari/537.36';
    const aliasDevice = new AliasDevice;
    const reesult = aliasDevice.parse(uuserAgent);
      const rest = result.name;
      const resst = reesult.name
   
      var datetime = new Date();
      
    console.log(rest);
    console.log(resst)
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'vermapankaj3313@gmail.com',
            pass:  password
                  }
        });
        
        var mailOptions = {
          from: 'Eatwell ',
          to: user.email,
          subject: 'EatWell security alert: Sign-in from new device detected',
          text: "We detected a sign-in to your account from a new device When:" + datetime + "Device" + resst + rest  
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });

      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

const nexmo = new Nexmo({
  apiKey: '6d89ba09',
  apiSecret: 'ZANustQxMdR8v873',
});


router.post("/phonelogin", (req, res) => {
  
  let message = "login with Otp";
  const phone = req.body.phone;
  let phoneNumber =  "+91-" + req.body.phone;
  console.log(phoneNumber)
  

  // Find user by email
  User.findOne({ phone }).then(user => {
  
     
    if(user) {
     

      const from = 'Vonage APIs';
const to = '+91-700379913';
const text = 'Hello from Vonage SMS API';

nexmo.message.sendSms(from, to, text);
      nexmo.verify.request({
        number:  phoneNumber,
        brand: "sdkhdsjsdn"
      }, (err, result) => {
        if (err) {
          console.log(err)
      
        } else {
          console.log(result)
          User.findOneAndUpdate({  phone },{$set: { "token": result.request_id  }},  { new: true, upsert: false },function(err, result) {
           
            if(err){
              console.log(err)
            }
            else {
             res.json(result.token)
            }


          })
        }
      })
   
    }
    else {
      return res.status(404).json({ phone: "phone not found" });
    }
    
  });

});

router.post("/reset", (req, res) => {
  

  const email = req.body.email;
 
  
  

  // Find user by email
  User.findOne({  email }).then(user => {
  
     
    if(user) {
        const rand =  uuidv4()
    
          User.findOneAndUpdate({  email },{$set: { token: rand  }},  { new: true, upsert: false },function(err, result) {
            if (err) {
              console.log(err)
  
            }
            else {
               

              var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'vermapankaj3313@gmail.com',
                  pass:  password
                        }
              });
              
              var mailOptions = {
                from: 'Niramaya ',
                to: email,
                subject: 'resetpasssword',
                text:  "https://localhost:3000/reset/" + rand   
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });

              res.json('data')
             
            }
          })
          
   
    }
    else {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    
  });

});

router.post("/verify", (req, res) => {
  
  console.log(req.body)
  const phone = req.body.phone;
 

  

  // Find user by email
  User.findOne({ phone }).then(user => {
    // Check if user exists
  
     
    if(user) {
     
       if(user.token === req.body.Otp ){
        const payload = {
          id: user.id,
          name: user.name,
          phone:user.phone
        };
               
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
            
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
       } 
       else {
        return res.status(404).json({ phone: "Inavlid Otp" });
      }
    }
    
    
  });

});

router.get("/getCategory",

(req, res) => {
  
  Category.find({}).then( category=>{
    res.json(category)
  
  })

  

});


router.get("/getFilterCategory/:id",


(req, res) => {


  Category.findOne({slug:req.params.id}).then( category=>{
    res.json(category)
  
  })


  // console.log(req.params.id)
  
   

  // User.findOne({role: "admin" },function(err, result) {
  //   if (err) {
  //   console.log(err)
  //   } 
   
  //   let  filter  = result.category
  //   const filtered = filter.filter(element => element.slug === req.params.id);
       
  //   res.json(filtered)
  
  
    
  // });
  

});

router.get("/getallProducts",

(req, res) => {


    Product.find({}).then(result=>{
   
      let pk =  result.sort((a, b) => parseFloat(b.order_done) - parseFloat(a.order_done));
      res.json(pk.slice(0, 8))
  })


  

   
 

  

});

router.get("/getProducts/:id",
  
(req, res) => {

  console.log(req.params.id)
  Product.find({category: req.params.id}).then(prodoucts=>{
   
   
   res.json(prodoucts)

  })



// var d = new Date();
// d.setDate(d.getDate() + 50);

// console.log( d)


  // User.findOne({role: "admin" },function(err, result) {
  //   if (err) {
  //   console.loh(err)
  //   } 
     

 

  //   const filtered = result.prodoucts.filter(element => element.category === req.params.id);
 

  //   const data =  filtered;

  //   const final = data.filter(element => element.id !== req.body.product);
     
  //  res.json(final)
    
  // });



})

router.post("/getProductsDetials",

(req, res) => {
  
  const {  product } = req.body
  console.log(product)

  Product.find({_id: product}).then(prodoucts=>{
   
   
    res.json(prodoucts)

  })

 

});

;
router.post("/getProductsData",

(req, res) => {
  
  const {  product } = req.body
  console.log(product)
 

  Product.findOne({slug: product}).then(prodoucts=>{
   
   
    res.json(prodoucts)

  })

 

});

router.post("/onProducts",

(req, res) => {
  


  User.findOneAndUpdate({email: "info@niraamya.com" },  { new: true, upsert: true },function(err, result) {
    if (err) {
    console.loh(err)
    } 
  
    
       
    let  filter= result.prodoucts;

    const filtered = filter.filter(element => element.category === req.body.category);
 

    const data =  filtered;

    const final = data.filter(element => element.id !== req.body.product);
     
   res.json(final)
    
  });
  

});


router.post("/onComapre",

(req, res) => {
  
  console.log(req.body)

    const datta = {
      idd:req.body.data
    }


  User.findOneAndUpdate({email: "info@niraamya.com" } ,{$push: { "compare": datta  }},  { new: true, upsert: true },function(err, result) {
    if (err) {
    console.log(err)
    } 
  
    
    
    res.json(result.compare)
   
    
  });
  

});


// router.get("/getCompare",  passport.authenticate('jwt', { session: false }),

// (req, res) => {
  
  
//   User.findOneAndUpdate({email: "info@niraamya.com" },   { new: true, upsert: true },function(err, result) {
//     if (err) {
//     console.log(err)
//     } 
  
    
//      let data = result.compare;
//      let arr = []
//       data.forEach(function(entry) {
//         console.log(entry.idd);
       
//         User.findOneAndUpdate({email: "info@niraamya.com" },   { new: true, upsert: true },function(err, result) {
//           if (err) {
//           console.log(err)
//           } 

//           let  filter= result.prodoucts;

//           const filtered = filter.filter(element => element.id === entry.idd);
//           res.json(filtered)
        
         
         
//   });  
//   res.json(arr)
//     });

   

    
//   });
  

// });

router.get("/getCart",  passport.authenticate('jwt', { session: false }), (req, res) => {





  
    
    
    res.json(req.user.cart)
   
    



});


  router.post("/AddtoCart", passport.authenticate('jwt', { session: false }),

(req, res) => {
  
    
  const all  = req.user.cart;
  //  console.log(all)
 
   if ( all.length === 0 ) {
    const { _id,  productName, count , category, price, img1, weight ,product_id } =req.body
    const data = {
      _id:_id,
       productName,  count , category, price, img1, weight, product_id , count:1
    }
    
    console.log(data)
    User.findOneAndUpdate({_id: req.user.id } ,{$push: { "cart": data  }},  { new: true, upsert: true },function(err, result) {
      if (err) {
      console.log(err)
      } 
    
     res.json(result.cart)
      
     
      
    });

   }


  all.forEach(element => {

    const { _id,  productName, count , category, price, img1, weight ,product_id } =req.body
// console.log(req.body)
      
if(  element.productName === productName )

{

 


 
  const filtered = all.filter(element => element.productName === productName);
 
   
 
  let inc = (filtered[0].count)
 
   User.findOneAndUpdate({_id: req.user.id  , "cart.productName": productName } ,{$set: { "cart.$.count": inc +1  }},  { new: true, upsert: true },function(err, result) {
    if (err) {
    console.log(err)
    } 
  
  
    
  
    
  });



}
 else {
 const data = {
  _id:_id,
   productName,  count , category, price, img1, weight, product_id , count:1
}

console.log(data)
User.findOneAndUpdate({_id: req.user.id } ,{$push: { "cart": data  }},  { new: true, upsert: true },function(err, result) {
  if (err) {
  console.log(err)
  } 


  
 
  
});

}
res.json(req.user.cart)
    
  });



   


 

});



router.post("/cartIncrment", passport.authenticate('jwt', { session: false }),

(req, res) => {
  
  const { id, count} =req.body
console.log(req.body)
    




User.findOneAndUpdate({_id: req.user.id , "cart._id":id } ,{"cart.$.count" : count+1 },  { new: true, upsert: true },function(err, result) {
  if (err) {
  console.log(err)
  } 

  
res.json(result.cart)
  
 
  
});


 

});

router.post("/cartDcremnet", passport.authenticate('jwt', { session: false }),

(req, res) => {
  
  const { id, count} =req.body
console.log(req.body)
    

if ( count > 1) {


User.findOneAndUpdate({_id: req.user.id , "cart._id":id } ,{"cart.$.count" : count-1 },  { new: true, upsert: true },function(err, result) {
  if (err) {
  console.log(err)
  } 

  
res.json(result.cart)
  
 
  
});
}
else {
  User.findOneAndUpdate({_id: req.user.id  } ,{   $pull: {"cart": {_id:id}}  },  { new: true, upsert: true },function(err, result) {
    if (err) {
    console.log(err)
    } 
  
    
  res.json(result.cart)
    
   
    
  });
}

 

});














router.post("/applyCoupan", passport.authenticate('jwt', { session: false }),

 async  (req, res) => {
  const { coupan} = req.body;
await  User.findOneAndUpdate({email: "info@niraamya.com" },  { new: true, upsert: true },function(err, result) {
    if (err) {
    console.loh(err)
    } 
  
      

       let date = new Date();
       let coub = result.coupan;
       coub.forEach(element => {
    console.log(element.end);
        console.log(date)
    if( date > element.end  ) {
      
      User.findOneAndUpdate({  email: "info@niraamya.com"  , "coupan.end":element.end  }, {  $set: {"coupan.$.status":  "expired"  }  },{ new: true, upsert: true },function(err, result) {
        if(err) {
            console.log(err);
        }
      
   
         
    }); 



    }
   
    
  });
 

});


await    User.findOneAndUpdate({email: "info@niraamya.com" },   { new: true, upsert: true },function(err, result) {
      if (err) {
      console.log(err)
      } 
    
      
   const coub = result.coupan;

   coub.forEach(element => {
    if( element.coupan ===coupan)
        {
     
          if( element.status ==="active")
          {
            const data = {
              coupan:element.coupan,
              percent:element.percent
            }
            res.json(data)
          }
        }
        else {
        
        
        }
   });
   
     
  
     
  
      
    });




});




router.post("/searchList",

 async (  req, res) => {
  
 
  console.log(req.body.search)

   
   User.findOneAndUpdate({email: "info@niraamya.com" },   { new: true, upsert: true },function(err, result) {
    if (err) {
    console.log(err)
    } 
  
    
    let  filter= result.prodoucts;


 
    const filtered = filter.filter(element => element.productName === req.body.search);
   
     
   
    res.json(filtered)
    
  });



});




router.post("/addwishList", passport.authenticate('jwt', { session: false }),

(req, res) => {
    const  { _id , category , price , stocks,  productName ,  decription , img1 , img2 , img3 , saleprice,dimensions,
    weight, date
  } = req.body;
   


  User.findOne({ _id: req.user.id  }).then(user => {
     
   const arr=  user.wishList;
          
   if(arr.length === 0) {
    const profileFields = {
      _id:_id,
      category , price , stocks,  productName ,  decription,  img1 , img2 , img3 ,  saleprice,dimensions,
      weight,
      date:Date.now()
    }
  
   
  User.findOneAndUpdate({_id: req.user.id  } ,{ $push: {  "wishList":  profileFields }  },  { new: true, upsert: true },function(err, result) {
    if (err) {
    console.log(err)
    } 
  
    
  res.json(result.wishList)
    
   
    
  });


   }
  else {
  
    if(arr.some(arr => arr.productName === productName)){
      User.findOneAndUpdate({_id: req.user.id  } ,{   $pull: {"wishList": {_id:_id}}  },  { new: true, upsert: true },function(err, result) {
        if (err) {
        console.log(err)
        } 
      
        
      res.json(result.wishList)
        
       
        
      });
       
    }
    else {
        const profileFields = { 
          _id:_id,
    category , price , stocks,  productName ,  decription,  img1 , img2 , img3 ,  saleprice,dimensions,
    weight,
    date:Date.now()
  }

 
User.findOneAndUpdate({_id: req.user.id  } ,{ $push: {  "wishList":  profileFields }  },  { new: true, upsert: true },function(err, result) {
  if (err) {
  console.log(err)
  } 

  
res.json(result.wishList)
  
 
  
});
    }

  }


    
//    arr.forEach(element => {
   
//      if(element._id == _id)
//      {
//        console.log("matched")
//      }
//      else {
       
//   const profileFields = {
//     category , price , stocks,  productName ,  decription,  img1 , img2 , img3 ,  saleprice,dimensions,
//     weight,
//     date:Date.now()
//   }

 
// User.findOneAndUpdate({_id: req.user.id  } ,{ $push: {  "wishList":  profileFields }  },  { new: true, upsert: true },function(err, result) {
//   if (err) {
//   console.log(err)
//   } 

  
// console.log(result.wishList)
  
 
  
// });
//      }

//    });


  })
  

//   console.log(req.body)



});

router.get("/getwishList", passport.authenticate('jwt', { session: false }),

 async (  req, res) => {
  
  res.json(req.user.wishList)
  




});

router.get("/getOrders", passport.authenticate('jwt', { session: false }),

 async (  req, res) => {
  

  

  const pk = req.user.orders.reverse();

  res.json(pk)


});


router.post("/placeOrder", passport.authenticate('jwt', { session: false }),

 async  (req, res) => {
    User.findOneAndUpdate({email: "info@niraamya.com" },   { new: true, upsert: true },function(err, result) {
       
      let order  = result.total_order;
  

   User.findOneAndUpdate({ email: "info@niraamya.com"  },{ "total_order" :  order+1  },  { new: true, upsert: true },function(err, result) {
        if (err) {
           console.log(err)
            
        }
      let cart = req.user.cart;
       let order2 =result.total_order;
         
       const data = {
        order_id:order2,
        status:'Processing',
        total_paid: cart.reduce((a, b) => (a + b.price  *  b.count), 0) 
       }

       const Merdata = {
        order_id:order2,
        cos_name:req.user.name,
        cos_phone:req.user.phone,
        cos_email:req.user.email,
        status:'Processing',
        total_paid: cart.reduce((a, b) => (a + b.price  *  b.count), 0) 
      

       }

     
       
         User.findOneAndUpdate({  _id: req.user.id  },{  $push: { "orders": data }   },  { new: true, upsert: true },function(err, result) {
        if (err) {
           console.log(err)
            
        } 
        const array = req.user.cart;

        array.forEach(element => {
          
        
             
        const data2 = {
          productName: element.productName,
          product_id:element.product_id ,
          category:element.category,
          totalitems:element.count,
          price:element.price,
          img1:element.img1,
         _id:element._id,
          weight:element.weight,
        }


         
    
        const data3 = {
          _id:element._id,
          img:element.img1,
          message:"Product Orderd",
          decription:" Your Product containing "+  '  '   + element.productName  +  '  ' + element.weight +    '  ' + " ;has been order and will delivered soon",
           seen:"none"
        }
         
  User.findOneAndUpdate({  _id: req.user.id , "orders.order_id": order2 },{  $push: { "orders.$.products": data2 }   },  { new: true, upsert: true },function(err, result) {
     
   




        });

        User.findOneAndUpdate({  _id: req.user.id  },{  $push: { "notifications": data3 }   },  { new: true, upsert: true },function(err, result) {
     
       if(err){
         console.log(err)
       }

        });
      });      
});


  User.findOneAndUpdate({  email: "info@niraamya.com"  },{  $push: { "MerOrders":  Merdata }   },  { new: true, upsert: true },function(err, result) {
  if (err) {
     console.log(err)
      
  } 
  const array = req.user.cart;

  array.forEach(element => {
    
  
       
  const data2 = {
    productName: element.productName,
    product_id:element.product_id ,
    category:element.category,
    totalitems:element.count,
    price:element.price,
    img1:element.img1,
    _id:element._id,
    weight:element.weight,
  }

User.findOneAndUpdate({ email: "info@niraamya.com", "MerOrders.order_id": order2 },{  $push: { "MerOrders.$.products": data2 }   },  { new: true, upsert: true },function(err, result) {



  });

});      
});
});
});

const array = req.user.cart;
array.forEach(set => {
    


  User.findOneAndUpdate({email: "info@niraamya.com" },      { new: true, upsert: true },function(err, result) {

        
  let  filter= result.prodoucts;

  const filtered = filter.filter(element => element.productName === set.productName);
    




 const stocks = filtered[0].stocks;
 const  order_done = filtered[0].order_done
  
  

User.findOneAndUpdate({email: "info@niraamya.com" ,  "prodoucts._id":set._id}, { $set:  {"prodoucts.$.stocks":  stocks - set.count , "prodoucts.$.order_done":  order_done  + 1 }   },   { new: true, upsert: true },function(err, result) {

  User.findOneAndUpdate({_id: req.user.id } ,{   $pull: {"cart": {_id: set._id}}  } ,{ new: true, upsert: true }, function(err,obj)  {
    if(err) {
      res.json(result.cart)
    }
  });

});
});
});

res.json('sdsd')
});

  


router.post('/verification', (req, res) => {
	// do a validation
	const secret = '12345678'

	console.log(req.body)

	const crypto = require('crypto')

	const shasum = crypto.createHmac('sha256', secret)
	shasum.update(JSON.stringify(req.body))
	const digest = shasum.digest('hex')

	console.log(digest, req.headers['x-razorpay-signature'])

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit')
    // process it
    console.log('dfd')
		require('fs').writeFileSync('payment1.json', JSON.stringify(req.body, null, 4))
	} else {
		// pass it
	}
	res.json({ status: 'ok' })
})

router.get('/order',  passport.authenticate('jwt', { session: false }),  async (req, res) => {

  User.findOneAndUpdate({  _id: req.user.id  },  { new: true, upsert: true }, async function(err, result) {
    
    let cart = result.cart;

   
    const payment_capture = 1
    const amount =  (cart.reduce((a, b) => (a + b.price  *  b.count), 0));
    const currency = 'INR'
  
    const options = {
      amount: amount * 100,
      currency,
      receipt: shortid.generate(),
      payment_capture
    }
  
    try {
      const response = await razorpay.orders.create(options)
      console.log(response)
      res.json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
        order_id:shortid.generate()
      })
    } catch (error) {
      console.log(error)
    }


  });



})

var axios = require('axios');
const { Portal } = require("@material-ui/core");

router.post("/capture/:paymentId",(req,res)=>{
 
  axios.post('https://${rzp_test_0w53o7yWvbCgtA}:${I7bLbOEJNUDLN0JXorrD2ya2}@api.razorpay.com/v1/payments/${req.params.paymentId}/capturer', {
    amount :  2000 *100,
          currency: "INR"
  }).then(function (response) {
    console.log(response);
  })
      
       
    
  

})




router.get("/getNotifications", passport.authenticate('jwt', { session: false }),

 async (  req, res) => {
  
  // let seened = req.user.notifications

  // seened.forEach(element => {
        
  //  User.findOneAndUpdate({  _id: req.user.id  , "notifications._id":element._id } , { $set: { "notifications.$.seen":"done"  } } ,  { new: true, upsert: true }, async function(err, result) {
  
  //     // let pk = result.notifications.reverse()
  //     // res.json(pk)
  
  // });   
 
  // });
  

  const pk = req.user.notifications.reverse();

  res.json(pk)


});

router.get("/SeenNotifications", passport.authenticate('jwt', { session: false }),

 async (  req, res) => {
  
  let seened = req.user.notifications

  seened.forEach(element => {
        console.log(element.seen)
   User.findOneAndUpdate({  _id: req.user.id  , "notifications._id":element._id } , { $set: { "notifications.$.seen":"done"  } } ,  { new: true, upsert: true }, async function(err, result) {
  
  
  
  });   
 
  });

  const pk = req.user.notifications.reverse();

  res.json(pk)
  

 


});


router.post("/review", passport.authenticate('jwt', { session: false }),

 async (  req, res) => {
  console.log(req.body)
  const data = {
    cos_name:req.user.name,
rating:req.body.rating,
title:req.body.head,
description:req.body.review
  }
 
  User.findOneAndUpdate({email: "info@niraamya.com" , "prodoucts.productName": req.body.name },  {$push:   {  "prodoucts.$.rating":data } } , { new: true, upsert: true },function(err, result) {
if ( err){
  console.log(err)
}

  });   
 
  User.findOneAndUpdate({_id : req.user.id , "notifications._id": req.body.number  } ,{   $pull: {'notifications': {_id: req.body.number}}  }, { new: true, upsert: true },function(err, result) {
    if ( err){
      console.log(err)
    }
    res.json(result.notifications)
      
      }); 

 

    
});



router.post("/Bulkorder", passport.authenticate('jwt', { session: false }),

 async (  req, res) => {
  

     const    {  number, quant , type } = req.body;
  console.log(req.body)
  const data = {
   
    productName:number.productName,
    product_id:number.product_id,
    
    count:quant,
    category:number.category,
    price :number.price,
 
    img1 :number.img1,
    weight:type

  }


  User.findOneAndUpdate({_id: req.user.id } ,{$push: { "Bulkcart": data  }},  { new: true, upsert: true },function(err, result) {
    if (err) {
    console.log(err)
    } 
  
    let data  = result.Bulkcart.reverse()
    res.json(data)
    
   
    
  });
 

    
});


router.get("/getBulkorder", passport.authenticate('jwt', { session: false }),

 async (  req, res) => {
  

  let data  = req.user.Bulkcart;
 
  res.json(data)
 

    
});

router.get("/getBulkProducts", passport.authenticate('jwt', { session: false }),

 async (  req, res) => {
  
  Product.find({}).then( category=>{
    res.json(category)
 
 })


    
});


router.post("/deleteorder", passport.authenticate('jwt', { session: false }),

 async (  req, res) => {
   
  console.log(req.body)

  User.findOneAndUpdate({_id: req.user.id  } ,{   $pull: {"Bulkcart": {_id:req.body.number}}  },  { new: true, upsert: true },function(err, result) {
    if (err) {
    console.log(err)
    } 
  
    let data  = result.Bulkcart.reverse()
  res.json(data)
    
   
    
  });
 

    
});

router.post("/BulkallOrder", passport.authenticate('jwt', { session: false }),

 async (  req, res) => {
   
  const mongoose = require('mongoose');

// Create object Id on memory
const id = new mongoose.Types.ObjectId();
// Get timestamp
console.log(id);

 let data = {
   _id:id,
  userName:req.body.userName,
  email:req.body.email,
  phone:req.body.phone,
 }

User.findOneAndUpdate({email: "info@niraamya.com" } ,{   $push: {"bulkorder": data}  },  { new: true, upsert: true },function(err, result) {
  if (err) {
  console.log(err)
  } 

   
// console.log(rddsesult.bulkorder)
  
 
  
});
  
console.log(req.body.bulk)


req.body.bulk.forEach(element => {
  console.log(element.productName)
  
  const data1 = {
    productName:element.prodouctName,
    product_id:element.product_id,
    prodouctCode: element.prodouctCode,
    price: element.price,
    decription: element.decription,
    img1:  element.img1,
    weight: element.weight,
    date:  element.date
  }
  User.findOneAndUpdate({email: "info@niraamya.com" , "bulkorder._id": id  } ,{   $push: {"bulkorder.$.BulkData": data1}  },  { new: true, upsert: true },function(err, result) {
    if (err) {
    console.log(err)
    } 
  

    req.body.bulk.forEach(element => {
      User.findOneAndUpdate({_id: req.user.id  } ,{   $pull: {"Bulkcart": {_id:element._id}}  },  { new: true, upsert: true },function(err, result1) {
        if (err) {
        console.log(err)
        } 
      
      
      
         
       
        
      });
      });
  
    
   
    
  });

  
});




res.json('send')



});


function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

router.get('/searchProduct/:id', function(req, res) {
 console.log(req.params.id)
  if (req.params.id) {
     const regex = new RegExp(escapeRegex(req.params.id), 'gi');
     Product.find({ $or: [{prodouctName: regex},{slug: regex}] }, function(err, foundjobs) {
         if(err) {
             console.log(err);
         } else {
           res.json(foundjobs)
           console.log(foundjobs)
         }
     }); 
  }
});





module.exports = router;
