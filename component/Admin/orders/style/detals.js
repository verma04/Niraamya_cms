import styled from 'styled-components'


export const Section = styled.section`


display:flex;
justify-content:center; 
@media (min-width: 1281px) {
.flex{
    margin-top:2rem;
 width:80rem;

 .flex-1 {
    display:grid;
grid-template-columns: 35% 65%;
grid-gap:2rem;
.flex-11 {
  
    .inner {
   box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2), 0 3px 3px 0 rgba(0,0,0,0.19);
   background-color:white;
  margin-bottom:1rem;
  height:25rem;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 33%  33% 33%;
  grid-gap: 10px;
  button {
        padding:0.5rem;
        background:white;
        border:none;
     font-size:1.1rem;
 
        box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2), 0 3px 3px 0 rgba(0,0,0,0.19);
    }
  .inner-1 {
    border-bottom:1px solid #E0E0E0; 
    margin:1rem;
    line-height:1.6;

    button {
        padding:0.5rem;
        background:white;
        border:none;
     font-size:1.1rem;
        box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2), 0 3px 3px 0 rgba(0,0,0,0.19);
    }
    span {
        color: #888888;
        font-size:1.2rem;
    }
    li {
        list-style:none;
        display:flex;
        justify-content:space-between;
      
    }
    .edit {
        margin-left:2rem;
    }
  }


    }
}
.flex-12 {
   box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2), 0 3px 3px 0 rgba(0,0,0,0.19);
    background:white;
   height:40rem;
    .head {
        height:6rem;
        border-bottom:1px solid #E0E0E0;
        display:flex;
        justify-content:space-around;
   img {
       height:100%;
   }
   .count {
    padding-top:2.5rem;
    display:flex;
        justify-content:center;
        span {
 
 font-size:1.2rem;

        }
   }
   .total {
    padding-top:2rem;
    margin-left:4rem;

   }
   
    }
    .bottom {
        margin-top:2rem;
        display:grid;
grid-template-columns: 65% 35%;
margin-right:2rem;
.total {
    border-bottom:1px solid #E0E0E0;
    li {
        list-style:none;
        display:flex;
        justify-content:space-between;
        line-height:1.6rem;
        span {
            color: #888888;
        }
    }
}

    }
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
box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2), 0 3px 3px 0 rgba(0,0,0,0.19);
width: 40%;
box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2), 0 3px 3px 0 rgba(0,0,0,0.19);
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
  color:  ${props => props.theme.button.brown};
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

@media (max-width: 1281px) {
.flex{
    margin-top:2rem;
 width:95%;

 .flex-1 {
    display:grid;
grid-template-columns: 35% 65%;
grid-gap:2rem;
.flex-11 {
  
    .inner {
   box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2), 0 3px 3px 0 rgba(0,0,0,0.19);
   background-color:white;
  margin-bottom:1rem;
  height:25rem;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 33%  33% 33%;
  grid-gap: 10px;
  button {
        padding:0.5rem;
        background:white;
        border:none;
     font-size:1.1rem;
 
        box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2), 0 3px 3px 0 rgba(0,0,0,0.19);
    }
  .inner-1 {
    border-bottom:1px solid #E0E0E0; 
    margin:1rem;
    line-height:1.6;

    button {
        padding:0.5rem;
        background:white;
        border:none;
     font-size:1.1rem;
        box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2), 0 3px 3px 0 rgba(0,0,0,0.19);
    }
    span {
        color: #888888;
        font-size:1.2rem;
    }
    li {
        list-style:none;
        display:flex;
        justify-content:space-between;
        
    }
    .edit {
        margin-left:2rem;
    }
  }


    }
}
.flex-12 {
   box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2), 0 3px 3px 0 rgba(0,0,0,0.19);
    background:white;
    width: 95%;
   height:40rem;
    .head {
        height:6rem;
        border-bottom:1px solid #E0E0E0;
        display:flex;
        justify-content:space-around;
   img {
       height:100%;
   }
   .count {
    padding-top:2.5rem;
    display:flex;
        justify-content:center;
        span {
 
 font-size:1.2rem;

        }
   }
   .total {
    padding-top:2rem;
    margin-left:4rem;

   }
   
    }
    .bottom {
        margin-top:2rem;
        display:grid;
grid-template-columns: 65% 35%;
margin-right:2rem;
.total {
    border-bottom:1px solid #E0E0E0;
    li {
        list-style:none;
        display:flex;
        justify-content:space-between;
        line-height:1.6rem;
        span {
            color: #888888;
        }
    }
}

    }
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
box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2), 0 3px 3px 0 rgba(0,0,0,0.19);
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
  color:  ${props => props.theme.button.brown};
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
`