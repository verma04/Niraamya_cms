
    import styled from 'styled-components';
   




    export const PopUp = styled.div` 

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
box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2), 0 3px 3px 0 rgba(0,0,0,0.19);

}

/* Modal Content */
.modal-content {
   
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 58%;
    box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2), 0 3px 3px 0 rgba(0,0,0,0.19);
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

.modal-content {
    box-shadow: 0 6px 6px 0 rgba(0,0,0,0.2), 0 6px 6px 0 rgba(0,0,0,0.19);
    border-radius:10px;
    display:flex;
    justify-content:center;
    .row { 
    
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 30rem;
    width: 100%;
   


    .head {
        
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    
    height: 20%;
    align-items: center;
    font-weight: 1000;
    h2 {
        padding:1rem;
    }
    }
    form {
      
        display:flex;
        justify-content:space-between;
        flex-direction:column;
        height:100%;
             
        .input {
            width: 100%;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25%;
    input {  
        width: 69%;
    height: 3rem
    }
    
          
        }
        .group {
            .group  { 
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
  font-family: Comfortaa; 
  
}
input:focus 		{ outline:none; }

/* LABEL ======================================= */
label {
  
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
  
  font-weight:900;
}

/* BOTTOM BARS ================================= */
.bar 	{ position:relative; display:block;  width:100%; }
.bar:before, .bar:after 	{
  content:'';
  height:2px; 
  width:0;
  bottom:1px; 
  position:absolute;
  
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
	from { }
  to 	{ width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
	from { }
  to 	{ width:0; background:transparent; }
}
@keyframes inputHighlighter {
	from { }
  to 	{ width:0; background:transparent; }
}

        }
 
    
    .formData {
        width:100%;
            
     
            display:flex;
            justify-content:center;
            align-items:center;

            
            .spinner {
                display:flex;
                justify-content:center;
                width:100%;
            align-items:center;
            height:100%;
            .upload {
                display:flex;
                justify-content:center;
                width:100%;
            align-items:center;
            height:100%;
            label {
                padding:5px 10px;

      border: 1px solid ${props => props.theme.button.darkBrown};
              color:${props => props.theme.button.darkBrown};
                background-color:white;

  position:relative;

  border-radius:2px;
  text-align:center;
  float:left;
  cursor:pointer;
  padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
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

            }
            
    }
         
    .btn {
        width: 70%;
    height: 30%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    justify-content:center;
    
    align-items: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 3.2rem;
    font-size: 1.3rem;
    margin-top: 1rem;
    margin-left: 7rem;
    button {
        padding:0.7rem;
        margin-left:0.5rem;
  
    }
    button:nth-child(2) {
background: white;
 
}
button:nth-child(1) {

  border:none;
  color:white;

}
    }
    } 

    .btn {
        width:100%;
        height:20%;
        display: flex;
    justify-content: space-around;
    align-items: center; 
    button {
                font-size: 1.2rem;
    border: none;
    width: 48%;
    height: 3rem;
    color:white;
            }
            .second {
                border: 1px solid ${props => props.theme.button.darkBrown};
              color:${props => props.theme.button.darkBrown};
                background-color:white;

            }
            .first {
                
               
          

            }
    }


    }
    
}


}

    `