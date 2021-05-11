import styled from 'styled-components'



export  const Loginn  = styled.div`

margin-top:4rem;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
margin-bottom:1rem;

.row {
    background:white;
    width:87%; 
.head {

    text-align:center;

    padding-bottom:1rem;
position: relative;
height:5rem;
    img{
        width:60%;
    }
}

   
   
form {
     
    
    display: flex;
    flex-direction: column;

    .input-field {
        display: flex;
    flex-direction: column;
    margin-right:1rem;
    Input {
        width:100%;
        height:3rem;  
    }  
    span { 
        padding-top:0.3rem;
        padding-bottom:0.3rem;
        color:red;
        font-size:0.8rem;
    }


    }

    button {

        width:100%;
        height:3rem;
        font-size: 1.3rem;
       font-family: Lato;
        color:white;
        border:none;
        background:#9B643B;


    }



}
p {
   

text-align:center;
margin-top:1rem;
font-size:1rem;
a {
    
}
.resend {
   
}
}
}

@media (max-width: 767px) {

    .row {
        padding-top:1rem;
        padding-bottom:1rem;
    background:white;
    width:87%; 
.head {

    text-align:center;
    margin-top:1rem;
        margin-bottom:1rem;
    padding-bottom:1rem;
    img{
        width:60%;
        
    }
}

   
   
form {
     
    
    display: flex;
    flex-direction: column;

    .input-field {
        display: flex;
    flex-direction: column;
    margin-right:1rem;
    Input {
        width:80%;
        height:3rem;  
        margin-left:2rem;
    }  
    span { 
        padding-top:0.3rem;
        padding-bottom:0.3rem;
        color:red;
        font-size:0.8rem;
    }


    }

    button {
        margin-left:2rem;
        width:82%;
        height:3rem;
        font-size: 1.3rem;
       font-family: Lato;
        color:white;
        border:none;
        background:#9B643B;


    }



}
p {
   

text-align:center;
margin-top:1rem;
font-size:1rem;
a {
   
}
.resend {
   
}
}
}

}
@media (min-width: 768px) and (max-width: 1280px) {
    .row {

  margin-bottom:3rem;
  
width:30rem; 
padding:2rem;
.head {
  margin-bottom:1rem;
text-align:center;

padding-bottom:1rem;

}



form {
 

display: flex;
flex-direction: column;

.input-field {
    display: flex;
flex-direction: column;

Input {
    width:100%;
    height:4rem;  
}  
span { 
    padding-top:0.5rem;
    padding-bottom:0.5rem;
    color:red;
    font-size:1rem;
}


}

button {

    width:100%;
    height:3rem;
    font-size: 1.2rem;
   font-family: Lato;
    color:white;
    border:none;
    background:#9B643B;


}



}
p {


text-align:center;
margin-top:2rem;

a {
   
}
}
}

}

@media (min-width: 1281px) {

    .admin {
        height:10rem;
        display:flex;
        justify-content:center;
       
        align-items:center;
        h1 {
            font-size:4rem;
        }
        
    }
    .row {
        box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2), 0 3px 3px 0 rgba(0,0,0,0.19);
  margin-bottom:3rem;
 
width:40rem; 
padding:2rem;
.head {
  margin-bottom:1rem;
text-align:center;

position:relative;
height:10rem;
padding-bottom:1rem;

}



form {
 

display: flex;
flex-direction: column;

.input-field {
    display: flex;
flex-direction: column;

Input {
    width:100%;
    height:4rem;  
}  
span { 
    padding-top:0.5rem;
    padding-bottom:0.5rem;
    color:red;
    font-size:1rem;
}


}

button {

    width:100%;
    height:4rem;
    font-size: 1.3rem;
   font-family: Lato;
    color:white;
    border:none;
    background:#9B643B;


}



}

.input-fieldd{
    display: flex;
    justify-content: space-evenly;
    input {
        outline: none;
    width: 3rem;
    height: 3rem;
    margin-bottom: 2rem;
    border:none;
    
    font-family: Comfortaa;
    padding-left: 3rem;
  
    /* border: 1px solid #EFEAE4; */
    background-color: #FFFFFF;
    }
}

p {


text-align:center;
margin-top:2rem;


}
}

}



`