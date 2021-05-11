import styled from 'styled-components';
import  {colors } from './../../../../theme/color'


export const Section = styled.section`
display:flex;
justify-content:center;
@media (min-width: 1281px) {
    .flex {
    
        width:110rem;
   
    .head {
        position:relative;
        margin-top:1rem;
        display:flex;
justify-content:center;
display:flex;
justify-content:center;
border-radius:10px;
height:20rem;
width:110rem;
    background-color:#C0C0C0;
       .empty {
           width:100%;
           height:30rem;
      img {
          width:100%;
          border-radius:10px;
          height:20rem;
          
      }
}
   
    

    .img-wrap {
        position:absolute;
        top:3rem;
        left:2rem;
        width:15rem;
     border-radius:10px;
        img {
            width:100%;
           
        }
    }
   .btn {
       position:absolute;
       left:7rem;
       top:7rem;
       i {
           font-size:1.5rem;
       }
   }
}
  
.flex-2 {
    display:flex;
justify-content:center;
    .product {
        margin-top:3rem;
        width:80rem;
         .product-1 {
            border: 1px solid grey;
            
        display:grid;
        grid-template-columns: 25% 25% 25% 25%;
       
            h2 {
                padding-top:2rem;
                padding-bottom:2rem;
            }
        
         }
         .product-2 {
            border: 1px solid grey;
            position:relative;
        display:grid;
        grid-template-columns: 25% 25% 25% 25%;
        .img-wrapper{
            width:8rem;
            img {
                width:100%;
            }
        }
        h3 {
            padding-top:2rem;
        }
        button{
          position:absolute;
          right:3rem;
          top:2rem;
          border: none;
    color: white;
    background-color: #1a76d2;
    font-size: 1rem;
    padding: 1rem;
        }
         }
    }
}
 
 .add {
     position:absolute;
     bottom: 3rem ;
     right:2rem;
     i {
         font-size:4rem;
         color:#1A76D2;

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
  width:70rem;
background-color: #fefefe;
margin: auto;
padding: 20px;
border: 1px solid #888;
margin-bottom:10rem;
display:flex;
justify-content:center;
.flex {
       display:flex;
       justify-content:center;
       width:70rem;
        .flex1 {
            width:60rem;
            .flex-1 {
                .head {
                    margin-bottom:1rem;
                    margin-top:1.5rem;

                }
               .formData {
                
                    background:white;
                    padding:2rem;
                    box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
                    * { box-sizing:border-box; }
           .spinner {
             display:flex;
             justify-content:space-between;
              .data {
            
           
              
                img {
                  width:100%;
                }
              }
           }

/*formData starting stylings ------------------------------- */
  .upload {
    padding:5px 10px;
  
  background:${colors.button.brown};
  border:1px solid #00ad2d;
  position:relative;
  color:#fff;
  border-radius:2px;
  text-align:center;
  float:left;
  cursor:pointer;
  .hide_file {
    position: absolute;
    z-index: 1000;
    opacity: 0;
    cursor: pointer;
    right: 0;
    top: 0;
    height: 100%;
    font-size: 24px;
    width: 100%;
}
  }

.parent {
  display:flex;
  justify-content:space-evenly;
  input {
    width:27rem;
  }
}
.group 			  { 
  position:relative; 
  margin-bottom:45px; 
}
select {
    font-size:18px;
    font-family: Comfortaa; 
  padding:10px 10px 10px 5px;
  display:block;
  width:100%;
  border:none;
  border-bottom:1px solid #757575;
}
input 		
{
  font-size:18px;
  
  padding:10px 10px 10px 5px;
  display:block;
  width:100%;
  border:none;
  border-bottom:1px solid #757575;
}
input:focus 		{ outline:none; }

/* LABEL ======================================= */
label 				 {
  color:#999; 
  font-size:1rem;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:10px;
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}

/* active state */
input:focus ~ label, input:valid ~ label 		{
  top:-20px;
  font-size:14px;
  color:#5264AE;
}

/* BOTTOM BARS ================================= */
.bar 	{ position:relative; display:block;  width:100%; }
.bar:before, .bar:after 	{
  content:'';
  height:2px; 
  width:0;
  bottom:1px; 
  position:absolute;
  background:#5264AE; 
  transition:1s ease all; 
  -moz-transition:1s ease all; 
  -webkit-transition:1s ease all;
}
.bar:before {
    
  left:50%;
}
.bar:after {
    
  right:50%; 
}

/* active state */
input:focus ~ .bar:before, input:focus ~ .bar:after {
  width:50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
  position:absolute;
  height:60%; 
 
  top:25%; 
  left:0;
  pointer-events:none;
  opacity:0.5;
}

/* active state */
input:focus ~ .highlight {
  -webkit-animation:inputHighlighter 0.3s ease;
  -moz-animation:inputHighlighter 0.3s ease;
  animation:inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}

                
                 }
            }

            .button {
                display:flex;
                justify-content:flex-end;
                margin-top:1.5rem;
                button {
                padding:0.9rem;
                margin-left:1rem;
                font-size:1.2rem;
                color:white;
                border:none;
                background: ${colors.button.brown};
                }
            }
        
        }

   }



}
}


`