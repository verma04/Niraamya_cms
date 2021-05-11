import styled from 'styled-components'



export const Footerr = styled.footer` 

width:100%;
  
     
    display:flex;
    justify-content:center;
@media (max-width: 767px) {
  
width:100%;
     
     padding-top:2rem;
    display:flex;
    justify-content:center;
    .flex {
      display: grid;
      grid-template-columns: 100%;
    
      .flex-0 {
        .img-wrapper {
          position: relative;
         height:3.5rem;
          display:flex;
                 justify-content:center;
        
       
              img {
             
                width: 75%
              
              }
             }
              .para {
                display:flex;
                 justify-content:center;
             P {
                 
               
                 text-align:center;
           
                 width:20rem;
                }
              }
                .social {
                     margin-top:0.5rem;
                     margin-bottom:0.5rem;
                     display:flex;
                     justify-content:center;
                     
                    
 
                     
                      i{
                        font-size:1.5rem;
                        
                       
                       
                        border-radius:50%;
                        padding:0.5rem;
                        margin-left:0.5rem;
                         
                      }
                  
                    }
    
    
    
    
      }
     .flex-1 {
      h3 {
        padding-top:1.5rem;
         
          font-weight: 1000;
         
      }
      text-align:center;
    margin-top:0.5rem;
    margin-bottom:0.5rem;
  
    
    li {
        padding-top:0.7rem;
       
    }
 
  display: flex;
flex-direction: column;
  }
  .flex-2 {
    h3 {
      padding-top:1rem;
            
             font-weight: 1000;
           
         }
         text-align:center;
       margin-top:1rem;
       margin-bottom:1rem;
      
       ul {
         justify-content:space-evenly;
         flex-direction: column;
     display: flex; 
     li {
       padding-top:0.7rem;
      
        
     }
      
     i {
       padding-top:0.7rem;
       font-size:1.5rem;
     }
      
     .fa-twitter {
       color:#1DA1F2;
     }
     .fa-facebook {
       color:#3b5998;
     }
     .fa-instagram-square {
        color: #f09433; 
     }
      
    
    }
  }
}
}
   @media (min-width: 768px) and (max-width: 1280px) {
    position: relative;
    
     padding-top:2rem;
    display:flex;
    justify-content:center;
    
    .flex {
     width:80%;
      display: grid;
      grid-template-columns: 50% 50% ;
      margin-right: 5rem;
      margin-bottom:3rem;
      .flex-0 {
    
        .img-wrapper {
          position: relative;
         height:3.5rem;
          display:flex;
                 justify-content:center;
       
            
       
              img {
                display: block;
            margin-left: auto;
            margin-right: auto;
       
            width: 69%;
            padding-top: 0.5rem;
    padding-bottom: 0.5rem;
              }
             }
             .para {
              text-align: center;
    display: flex;
    justify-content: center;
             P {
              display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
  
    padding-top: 0.5rem;
    width: 74%;
                
                }
             }
                .social {
                     margin-top:0.5rem;
                     margin-bottom:0.5rem;
                     display:flex;
                     justify-content: center;
                     width: 68%;
    padding-left: 4rem;
                   
                     
                      i{
                        font-size:1.5rem;
                        margin-left:0.5rem;
                       
                       
                        border-radius:50%;
                        padding:0.5rem;
                         
                      }
                  
                    }
    
    
    
    
      }
     .flex-1 {
      h3 {
        padding-top:1.5rem;
         
          font-weight: 1000;
         
      }
      text-align:center;
    margin-top:0.5rem;
    margin-bottom:0.5rem;
  
    
    li {
        padding-top:0.7rem;
       
     
    }
    li:hover {
     
      font-weight:900;
    }
    
    
 
  display: flex;
flex-direction: column;
  }
  .flex-2 {
 
    h3 {
      padding-top:1rem;
            
             font-weight: 1000;
           
         }
         text-align:center;
       margin-top:1rem;
       margin-bottom:1rem;
      
       ul {
         justify-content:space-evenly;
         flex-direction: column;
     display: flex; 
     li {
       padding-top:0.7rem;
      
        
     }
     li:hover {
     
      font-weight:900;
    }
     i {
       padding-top:0.7rem;
       font-size:1.5rem;
     }
      
     .fa-twitter {
       color:#1DA1F2;
     }
     .fa-facebook {
       color:#3b5998;
     }
     .fa-instagram-square {
        color: #f09433; 
     }
      
    
    }
  }
  .flex-4 {
  position: absolute;
    bottom: 1rem;
    right: 15rem;
 }
}
   }
  
   @media (min-width: 1281px) {
     background-color:white;
    position: relative;
     padding-top:2rem;
    display:flex;
    justify-content:center;
    .flex {
    
      width:70%;
      display: flex;
      justify-content:space-between;
      .flex-0 {
        width: 25%;
      height:100%;
      display:flex;
      justify-content:space-around;
      align-items:center;
       flex-direction:column;
    

        .img-wrapper {
         position: relative;
         height:3.5rem;
   
          width:100%;
       
              img {
                display: block;
            margin-left: auto;
            margin-right: auto;
               width:80%;
              padding-bottom:1rem;
              
              }
             }
             p {
                 display:flex;
                 justify-content:center;
                 margin-left:1rem;
                 margin-top:1rem;
                 text-align:center;
                 margin-right:1rem;
                 width:100%;
                 
                }
                .social {
                     margin-top:0.5rem;
               
                     margin-bottom:0.5rem;
                     display:flex;
                     justify-content: center;
                      
                  
                 
                      i{
                        font-size:1.5rem;
                         
                        margin-left:0.5rem;
                       
                       
                        border-radius:50%;
                        padding:0.5rem;
                         
                      }
                  
                    }
    
    
    
    
      }
     .flex-1 {
      h3 {
    
         
          font-weight: 1000;
          padding-bottom:1rem;
         
      }
      text-align:center;
    margin-top:0.5rem;
    margin-bottom:0.5rem;
  
    
    li {
        padding-top:0.7rem;
       
    }
    li:hover {
     
      font-weight:900;
    }
 
  display: flex;
flex-direction: column;
  }
  .flex-2 {
    h3 {
   
            
             font-weight: 1000;
             padding-bottom:1rem;
           
         }
         text-align:center;
       margin-top:0.5rem;
       margin-bottom:1rem;
      
       ul {
         justify-content:space-evenly;
         flex-direction: column;
     display: flex; 
     li {
       padding-top:0.7rem;
      
        
     }
      
     i {
       padding-top:0.7rem;
       font-size:1.5rem;
     }
     li:hover {
     
      font-weight:900;
    }
      
     .fa-twitter {
       color:#1DA1F2;
     }
     .fa-facebook {
       color:#3b5998;
     }
     .fa-instagram-square {
        color: #f09433; 
     }
      
    
    }
 }
 .flex-4 {
  position: absolute;
    bottom: 1rem;
    right: 15rem;
 }
    }
   }
 
`







