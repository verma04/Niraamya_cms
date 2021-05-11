import styled from 'styled-components'



export const Footer = styled.footer` 
 
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  background-color:white;
@media (max-width: 480px) {
    .design{
      padding-top:2rem;
      padding-bottom:2rem;
      width:100%;
      .grid {
  text-align:center;
  line-height:1.6;
      }
      .grid2 {
  text-align:center;
  line-height:1.6;
      }
     
  }
  .payment {
     img {
  width:100%;
     }
  }
}
   @media (min-width: 768px) and (max-width: 1280px) {
    .design{
      padding-top:2rem;
      padding-bottom:2rem;
      width:80%;
      display:flex;
      justify-content:space-between;
      .grid {
  padding-right:0.5rem;
  text-align:center;
      }
      .grid2 {
  text-align:center;
      }
  }
    
}
   
  
   @media (min-width: 1281px) {
        
  .design{
      padding-top:2rem;
      padding-bottom:2rem;
      width:75rem;
      display:flex;
      justify-content:space-between;
      .grid {
  padding-left:2.5rem;
      }
     
  }
   }
 
`
