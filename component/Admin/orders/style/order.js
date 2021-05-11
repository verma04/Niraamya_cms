import styled from 'styled-components'


export const Section = styled.section`


display:flex;
justify-content:center; 
@media (min-width: 1281px) {
.grid {
       margin-top:3rem;
       width:80rem;
       display:flex;
       justify-content:space-evenly; 
       .left {
    
      width: 30rem;
           ul {
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
        
        display:flex;
        justify-content:space-evenly; 
        box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
         flex-direction:column; 
             .bar {
             background:white;
             border:1px solid #F1F1F1;
              display:flex;
         justify-content:space-evenly; 
          padding:1rem;
         padding-top:1rem;
         padding-bottom:1rem;
         h2 {
          color: ${props => props.theme.button.brown};
         }
           .space-right {
               padding-left:12rem;
           }
             }
             .bar1 {
           
              display:grid;
              grid-template-columns: 25% 35% 15% 25%;
              background:white;
              border:1px solid #F1F1F1;
  
  padding-top:1rem;
  padding-bottom:1rem;
  
 
  
  #set {
     padding-left:1rem;
     text-align:left;
  }
  #set4{
   padding-left:5rem;
   text-align:left;
  }
  #set1 {
   
     text-align:center;
     padding-right:3rem;
  }
  #set2 {
   text-align:right;
   padding-right:1.5rem;
  }

 
 

     }
             
         }
   }


   .add {
    position: absolute;
  left: 10rem;;
  bottom: 10rem;;
  i {
      color: ${props => props.theme.button.brown};
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
       width:95%;
       display:flex;
       justify-content:space-evenly; 
       .left {
    
      width: 30%;
           ul {
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
        justify-content:space-evenly; 
        box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
         flex-direction:column; 
             .bar {
             background:white;
             border:1px solid #F1F1F1;
              display:flex;
         justify-content:space-evenly; 
          padding:1rem;
         padding-top:1rem;
         padding-bottom:1rem;
         h2 {
          color: ${props => props.theme.button.brown};
         }
           .space-right {
               padding-left:12%;
           }
             }
             .bar1 {
           
              display:grid;
              grid-template-columns: 25% 35% 15% 25%;
              background:white;
              border:1px solid #F1F1F1;
  
  padding-top:1rem;
  padding-bottom:1rem;
  
 
  
  #set {
     padding-left:1rem;
     text-align:left;
  }
  #set4{
   padding-left:5rem;
   text-align:left;
  }
  #set1 {
   
     text-align:center;
     padding-right:3rem;
  }
  #set2 {
   text-align:right;
   padding-right:1.5rem;
  }

 
 

     }
             
         }
   }


   .add {
    position: absolute;
  left: 10rem;;
  bottom: 10rem;;
  i {
      color: ${props => props.theme.button.brown};
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