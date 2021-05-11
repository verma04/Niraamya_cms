import styled from 'styled-components';



export const Draw = styled.section`



@media (min-width: 1281px) {
  display:flex;
justify-content:center;
background-color: ${props => props.theme.button.darkBrown};
   .flex {
    width:95%; 
    display:flex;
  justify-content:space-between;
 
.left {
  margin:1rem;
  padding-top:1rem;
 
  display:flex;
  justify-content:space-between;
 
 i {
  display:flex;
  color:white;

  font-size:1.5rem;

  span {
     padding-left:1rem;
     padding-bottom:1rem;
     font-family: Comfortaa  ;
  }
 }  
 h1 {
  color:white;
 }

}

.right {
  display:flex;
  margin:1rem;
  padding-top:1rem;
  color:white;
  margin-right:3rem;
  i {
    font-size:1.5rem;
    padding-left:1rem;
    color: white;
  }
  span {
    padding-left:1rem;
    padding-bottom:1rem;
    font-size:1.5rem;
    font-family: Comfortaa  ;
 }
}

   }

.Drawer {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 300px;
  height: 100vh;
  transform: translate(-300px, 0);
  will-change: transform, visibility;
  transition: transform 0.3s linear;
 
  color: white;
}

.Drawer[aria-hidden="false"] {
  transform: translate(0, 0);
  transition: transform 0.3s linear;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  .popUp {
    width: 25%;
    background-color: white;
  height: 100%; /* Full height */
 #menu {
   i{

    color:#C8C8C8;
       }   
       a {

    color:#C8C8C8;
       }
 }
 #up {
  padding-top:1rem;
   border-bottom:1px solid #C8C8C8;
   padding-bottom:1rem;
 }
  li {
    width:100%;
    padding:1rem;
    display:flex;
    font-size:1.3rem;
    justify-content:start;
   
    i {
      color:black;
      padding-right:1rem;
    }
    a {
      color: ${props => props.theme.button.darkBrown};
    }
  }
    
  }
}

.Drawer[aria-hidden="true"] {
  transition: visibility 0s linear 0.3s, transform 0.3s linear;
}

}


@media (max-width: 1281px) {
  display:flex;
justify-content:center;
background-color: ${props => props.theme.button.darkBrown};
   .flex {
    width:95%; 
    display:flex;
  justify-content:space-between;
.left {
  margin:1rem;
  padding-top:1rem;

  display:flex;
  justify-content:space-between;
 
 i {
  display:flex;
  color:white;

  font-size:1.5rem;

  span {
     padding-left:1rem;
     padding-bottom:1rem;
     font-family: Comfortaa  ;
  }
 }  
 h1 {
  color:white;
 }

}

.right {
  display:flex;
  margin:1rem;
  padding-top:1rem;
  color:white;
  margin-right:3rem;
  i {
    font-size:1.5rem;
    padding-left:1rem;
    color: white;
  }
  span {
    padding-left:1rem;
    padding-bottom:1rem;
    font-size:1.5rem;
    font-family: Comfortaa  ;
 }
}

   }

.Drawer {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 300px;
  height: 100vh;
  transform: translate(-300px, 0);
  will-change: transform, visibility;
  transition: transform 0.3s linear;
 
  color: white;
}

.Drawer[aria-hidden="false"] {
  transform: translate(0, 0);
  transition: transform 0.3s linear;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  .popUp {
    width: 25%;
    background-color: white;
  height: 100%; /* Full height */
 #menu {
   i{

    color:#C8C8C8;
       }   
       a {

    color:#C8C8C8;
       }
 }
 #up {
  padding-top:1rem;
   border-bottom:1px solid #C8C8C8;
   padding-bottom:1rem;
 }
  li {
    width:100%;
    padding:1rem;
    display:flex;
    font-size:1.3rem;
    justify-content:start;
    i {
      color:black;
      padding-right:1rem;
    }
  }
    
  }
}

.Drawer[aria-hidden="true"] {
  transition: visibility 0s linear 0.3s, transform 0.3s linear;
}

}

`




