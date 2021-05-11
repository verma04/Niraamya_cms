import styled from 'styled-components'


export const Section = styled.section`

display:flex;
        justify-content:center;
@media (max-width: 480px) {

  .flex {
   
   width:100%;
   margin-top:4rem;
   margin-bottom:10rem;
   .flex-1 {
       
    .head {
      display:flex;
      justify-content:center;
      i {
      
          font-size:6rem;
         
     
      }
      h1 {
          padding-top:0.6rem;
          font-size:6.5rem;
          
       
      }
    }
    .para  {
      
      .haed {
          display:flex;
        justify-content:center;
        margin-top:1.5rem;
        margin-bottom:1.5rem;
      }
      P {
          display:flex;
        justify-content:center;
       font-size:1.3rem;
       text-align:center;
       line-height:1.6;

      }
    }
 .button {
     display:flex;
     justify-content:center;
     margin-top:1.8rem;
     button {
         font-size:1.3rem;
    
         color:white;
         padding:0.8rem;
         border:none;
     }
 }
}
}

}

@media (min-width: 768px) and (max-width: 1024px) {

  .flex {
   
   width:80%;
   margin-top:4rem;
   margin-bottom:10rem;
   .flex-1 {
       
    .head {
      display:flex;
      justify-content:center;
      i {
      
          font-size:6rem;
         
     
      }
      h1 {
          padding-top:0.6rem;
          font-size:6.5rem;
          
       
      }
    }
    .para  {
      
      .haed {
          display:flex;
        justify-content:center;
        margin-top:1.5rem;
        margin-bottom:1.5rem;
      }
      P {
          display:flex;
        justify-content:center;
       font-size:1.3rem;
       text-align:center;
       line-height:1.6;

      }
    }
 .button {
     display:flex;
     justify-content:center;
     margin-top:1.8rem;
     button {
         font-size:1.3rem;
    
         color:white;
         padding:0.8rem;
         border:none;
     }
 }
}
}
  

  
}
@media (min-width: 1035px) {
  
  .flex {
   
     width:70%;
     margin-top:4rem;
     margin-bottom:10rem;
     .flex-1 {
         
      .head {
        display:flex;
        justify-content:center;
        i {
        
            font-size:6rem;
           
       
        }
        h1 {
            padding-top:0.6rem;
            font-size:6.5rem;
            
         
        }
      }
      .para  {
        
        .haed {
            display:flex;
          justify-content:center;
          margin-top:1.5rem;
          margin-bottom:1.5rem;
        }
        P {
            display:flex;
          justify-content:center;
         font-size:1.3rem;
         text-align:center;
         line-height:1.6;

        }
      }
   .button {
       display:flex;
       justify-content:center;
       margin-top:1.8rem;
       button {
           font-size:1.3rem;
      
           color:white;
           padding:0.8rem;
           border:none;
       }
   }
  }
  }
 
}
`