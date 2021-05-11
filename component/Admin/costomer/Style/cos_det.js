import styled from 'styled-components';
import { colors } from '../../../../theme/color';


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
        
           width:28%;
           color:white;
           background:white;
           box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
           padding:2rem;
           h3 {
               color:black;
               padding-bottom:1rem;
           }
           h4 {
               color:#7E807E;
               padding-bottom:0.8rem;
              .ll {
                   color:black;
                   
               }
               .ll-1 {
              
                color:black;
               }
      
           }
           button {
               background:white;
               border:none;
               font-size:1.2rem;
               box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
              padding:0.5rem;
           }
       }
       .right {
        box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
           width: 72%;
           background:white;
           h3 {
               padding:1rem;
                
                 border:1px solid ${colors.border.grey};
               color:${colors.button.brown};
           }
           .orders {
            display:grid;
             
             grid-template-columns: 25% 25% 50%;
            padding:1rem;
                
                border:1px solid ${colors.border.grey};
                h4:nth-child(3) {
       text-align: right;
}

           }
       }
       .modal {

  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 40%;
  display:flex;
  justify-content:center;
  .flex-1 {
    width:30rem;
      .head {
        display:flex;
  justify-content:center;
  margin-top:2rem;
  margin-bottom:2rem;
  h3{
    color: ${colors.button.brown};
  }
      }
  }
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
}
}
@media (max-width: 1281px) {
.grid {
       margin-top:3rem;
       width:95%;
       display:flex;
       justify-content:space-evenly; 

       .left {
        
           width:28%;
           color:white;
           background:white;
           box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
           padding:2rem;
           h3 {
              
               padding-bottom:1rem;
               color: ${colors.button.brown};
           }
           h4 {
            color: ${colors.button.brown};
               padding-bottom:0.8rem;
              .ll {
                   color:black;
                  
               }
               .ll-1 {
               
                color:black;
               }
      
           }
           button {
               background:white;
               border:none;
               font-size:1.2rem;
               box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
              padding:0.5rem;
           }
       }
       .right {
        box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
           width: 72%;
           background:white;
           h3 {
               padding:1rem;
                
                 border:1px solid ${colors.border.grey};
               color:${colors.button.brown};
           }
           .orders {
            display:grid;
             
             grid-template-columns: 25% 25% 50%;
            padding:1rem;
                
                border:1px solid ${colors.border.grey};
                h4:nth-child(3) {
       text-align: right;
}

           }
       }
       .modal {

  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 40%;
  display:flex;
  justify-content:center;
  .flex-1 {
    width:30rem;
      .head {
        display:flex;
  justify-content:center;
  margin-top:2rem;
  margin-bottom:2rem;
  h3{
    color: ${colors.button.brown};
  }
      }
  }
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
}
}

`