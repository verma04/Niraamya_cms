
import styled from 'styled-components'


export const Section = styled.section`

@media (min-width: 1281px) {
   .flex {
       display:flex;
       justify-content:center;
    
        .flex1 {
            width:80rem;
       
            margin-top:5rem;
         
            padding:2rem;
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
  
    background-color: ${props => props.theme.button.darkBrown};
  color: white;

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
    width:35rem;
  }
}
.group 			  { 
  position:relative; 
  margin-bottom:45px; 
  .editor {
    margin-bottom:1rem;
  }
}
select {
    font-size:18px;
    font-family: Lato;
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
                font-size:1.2rem;
                color:white;
                border:none;
                background-color: ${props => props.theme.button.darkBrown};
  color: white;
                }
            }
        
        }

   }
}

@media (max-width: 1281px) {
   .flex {
       display:flex;
       justify-content:center;
    
        .flex1 {
            width:95%;
       
            margin-top:5rem;
         
            padding:2rem;
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
    background-color: ${props => props.theme.button.darkBrown};
  color: white;
 
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
    width: 100%;
  }
}
.group 			  { 
  position:relative; 
  margin-bottom:45px; 
}
select {
    font-size:18px;
    font-family: Lato;
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
                font-size:1.2rem;
                color:white;
                border:none;
                background-color: ${props => props.theme.button.darkBrown};
  color: white;
                }
            }
        
        }

   }
}

`