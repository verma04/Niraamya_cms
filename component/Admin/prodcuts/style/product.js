import styled from 'styled-components'


export const Section = styled.section`

display:flex;
justify-content:center; 
@media (min-width: 1281px) {
.grid {
       margin-top:3rem;
       width:90%;
       display:flex;
       justify-content:space-evenly; 
       .left {
    
      width: 30%;
         
                ul {
                  .all {
                   
                  
                   
                    .fa-plus-circle {
                     
                      padding-left: 3rem
                    }
              
                  }
                  
               li {
                   padding:1rem;
                   font-size:1.5rem;
                  
                   i {
                       padding-right:1rem;
                       font-size:1.5rem;
                    color: #757575;
                   }
               }
           }

       }
       .right {
        width:70%;
     
        display:flex;
        justify-content:flex-start; 
        
         flex-direction:column; 
             .bar {
               display:flex;
                height:3rem;
               justify-content:center;
               align-items:center;
               padding-left:2rem;
               box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
               h2 {
                 width:25%;
                 height:100%;
                 text-align:center;
                 align-items:center;
                 padding-top: 1.3rem;
             

               }

             }
             .bar1 {
           
              display:grid;
              grid-template-columns: 25% 35% 15% 25%;
              background:white;
              border:1px solid #F1F1F1;
  
  padding-top:1rem;
  padding-bottom:1rem;
  
  .img-wrapper {
    padding-left:1rem;
    img {
     
      width:50%;

    }
  }
  
  #set {
     padding-left:2rem;
     text-align:center;
  }
  #set1 {
     padding-left:6rem;
     text-align:center;
  }
  #set2 {
     padding-left:8rem;
     text-align:center;
  }

  h3 {
    padding-top:2.5rem;
  }
 

     }
             
         }
   }


   .add {
    position: absolute;
    top:90%;
left: 23%;
left: 23%;
  i {
   
      font-size:3rem;
  }
  .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}
  
   }




.add:hover .tooltiptext {
  visibility: visible;
}


}


@media (max-width: 1281px) {
.grid {
       margin-top:3rem;
       width:90%;
       display:flex;
       justify-content:space-evenly; 
       .left {
    
      width: 30%;
         
                ul {
                  .all {
                   
                  
                   
                    .fa-plus-circle {
                     
                      padding-left: 4%;
                    }
              
                  }
                  
               li {
                   padding:1rem;
                   font-size: 1.2rem;

                  
                   i {
                    padding-right: 3%;
                       font-size:1.5rem;
                    color: #757575;
                   }
               }
           }

       }
       .right {
        width:70%;
     
        display:flex;
        justify-content:flex-start; 
        
         flex-direction:column; 
             .bar {
               display:flex;
                height:3rem;
               justify-content:center;
               align-items:center;
               padding-left:2rem;
               box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
               h2 {
                 width:25%;
                 height:100%;
                 text-align:center;
                 align-items:center;
                 padding-top: 1.3rem;
             

               }

             }
             .bar1 {
           
              display:grid;
              grid-template-columns: 25% 35% 15% 25%;
              background:white;
              border:1px solid #F1F1F1;
  
  padding-top:1rem;
  padding-bottom:1rem;
  
  .img-wrapper {
  
    img {
      padding-left: 10%;
      width:50%;

    }
  }
  
  #set {
  
     text-align:center;
  }
  #set1 {
     
     text-align:center;
  }
  #set2 {
    
     text-align:center;
  }

  h3 {
    padding-top:2.5rem;
  }
 

     }
             
         }
   }


   .add {
    position: absolute;
    left: 10%;
    top: 90%;
  i {
      
      font-size:3rem;
  }
  .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}
  
   }




.add:hover .tooltiptext {
  visibility: visible;
}


}

`