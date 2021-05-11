import styled from 'styled-components';



export const Section = styled.section`


display:flex;
justify-content:center;

@media (min-width: 1281px) {
    padding-top:13%;
    .flex {
       
        width:70%;
        height:17rem;
        
   display:grid;
     grid-template-columns: auto auto auto;
     grid-gap:2rem;
     .flex-1{
         width:100%;
          height:100%;
          background-color:white;
          display:flex;
          justify-content:center;
          align-items:center;
          align-items:center;
          box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
          border-radius:10px;
          cursor: pointer;
          
          .img {
              height:50%;
              width:20%;
              display:flex;
          justify-content:center;
          flex-direction:column;
          i {
            font-size: 2rem;
          }

          }
          .data {
            height:50%;
              width:70%;
              display:flex;
          justify-content:center;
          flex-direction:column;
          h2 {
            font-size: 2rem; 
            font-weight: 1000;
          }
             
          }
     }

    }
    .cover {
        position: absolute;
        z-index:-1;
        top:20%;
      
        img {
             
            width: 100vh;
    opacity: 0.1;
        }
    }


}


@media (max-width: 1281px) {
    padding-top:13%;
    .flex {
        
        width:70%;
        height:17rem;
        
   display:grid;
     grid-template-columns: auto auto auto;
     grid-gap:2rem;
     .flex-1{
         width:100%;
          height:100%;
          background-color:white;
          display:flex;
          justify-content:center;
          align-items:center;
          align-items:center;
          box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
          border-radius:10px;
          cursor: pointer;
          
          .img {
              height:50%;
              width:20%;
              display:flex;
          justify-content:center;
          flex-direction:column;
          i {
            font-size: 2rem;
          }

          }
          .data {
            height:50%;
              width:70%;
              display:flex;
          justify-content:center;
          flex-direction:column;
          h2 {
            font-size: 1.8rem;
            font-weight: 1000;
          }
             
          }
     }

    }
    .cover {
        position: absolute;
        z-index:-1;
        top:10%;
      
        img {
           
            width: 100vh;
    opacity: 0.1;
        }
    }

}

`




