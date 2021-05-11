import styled from 'styled-components';
   




export const Form = styled.form` 

      

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
  color:${props => props.theme.button.brown};
}

/* BOTTOM BARS ================================= */
.bar 	{ position:relative; display:block;  width:100%; }
.bar:before, .bar:after 	{
  content:'';
  height:2px; 
  width:0;
  bottom:1px; 
  position:absolute;
  background:${props => props.theme.button.brown}; 
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
	from { background:${props => props.theme.button.brown}; }
  to 	{ width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
	from { background:${props => props.theme.button.brown}; }
  to 	{ width:0; background:transparent; }
}
@keyframes inputHighlighter {
	from { background:${props => props.theme.button.brown}; }
  to 	{ width:0; background:transparent; }
}


.button {
    display:flex;
    justify-content:flex-end;
     .btn2 {
         margin-left:1rem;
         font-size:1rem;
         padding:0.5rem;
         color: ${props => props.theme.button.brown};
         background:white;
         border:none;
         border:1px solid ${props => props.theme.button.brown};
     }
     .btn1 {
         margin-left:1rem;
         font-size:1rem;
         padding:0.5rem;
       background: ${props => props.theme.button.brown};
        color:white;
         border:none;
     }
}


`