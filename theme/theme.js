import {  createGlobalStyle } from "styled-components";







 export default   createGlobalStyle`


a { 
  text-decoration: none; 
  font-weight:1000;
   font-family: Rockwell;
   cursor: pointer;
} 





  body {
     
    background-color:#F1F1F1;
      overflow-x: hidden;
      
      ::-webkit-scrollbar {
  width: 10px;
}

/* Track */

 
/* Handle */
::-webkit-scrollbar-thumb {

  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
 
}
      
  }
  ul {
    list-style: none;
    li {
     font-family: Lato;
    cursor: pointer;


  }
  }
  img {
  cursor: pointer;
}

button {
  cursor: pointer;
}
 
p {
  
  color: ${props => props.theme.button.darkBrown};
}
span {
  color: ${props => props.theme.button.darkBrown};
}
a {
  
  color: ${props => props.theme.button.brown}; 
}
button {

  font-family: Lato;

}
  h1 {
    font-size: 1.65rem;
    
 
  }

  h2 {
    font-size: 1.4rem;
    
    color: ${props => props.theme.button.darkBrown};
    
  }

  h3 {
    font-size: 1.2rem;
    
    
    color: ${props => props.theme.button.darkBrown};
  }


  h4 {
    font-size: 1rem;
    line-height: var(--line-height-md);
  }
  h5 {
    font-size: 0.75;
    line-height: var(--line-height-md);
    
  }

  

  h6 {
    font-size: 0.6rem;
    line-height: var(--line-height-md);
    
  }

  p {
    font-size: 1.2rem;
    line-height:1.3;
  word-spacing:0.2rem;
    
    line-height: var(--line-height-md);
   
  }
  select {
     
  }
  
  .date {
     
  }
  .card {
    border-radius:10px;
  }

  button {
border-radius:5px;
font-family: Lato;
 
  }
  input {
   
    border:1px solid #EFEAE4;
    background-color:#FFFFFF;
    font-family: Lato;
  }
  span {
     
  }
  select {
    font-family: Lato;
  }
  i {
    color: ${props => props.theme.button.brown};
    cursor: pointer;
  }
 

  @media only screen and (min-width: 768px) {
    a { 
  text-decoration: none; 

   
   cursor: pointer;
} 
    body {
      overflow-x: hidden;
    }
    h1 {
      font-size: 1.75rem;
       word-spacing:0.3rem;
      letter-spacing:0.1rem;
      color: ${props => props.theme.button.darkBrown};
    }

    h2 {
   
      color: ${props => props.theme.button.darkBrown};
      
    }

    h3 {
      font-size: 1.25rem;
      
    }
  
  a { 
    text-decoration: none; 
  
     
} 
button {
  
  
}

li {
  cursor: pointer;
}
img {
  cursor: pointer;
}

  }

`









