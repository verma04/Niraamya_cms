import styled from 'styled-components'


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
    
      width: 30rem;
           ul {
               li {
                   padding:1rem;
                   font-size:1.5rem;
                  
                   i {
                       padding-right:1rem;
                       font-size:1.5rem;
                    color: #757575;
                   }
               }
           }

       }
  
       .right {
        
      display:flex;
      justify-content:space-evenly; 
      box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
       flex-direction:column; 
           .bar {
           background:white;
           
           border:1px solid #F1F1F1;
            display:flex;
       justify-content:space-evenly; 
        padding:1rem;
       padding-top:1rem;
       padding-bottom:1rem;
       h2 {
        
       }
         .space-right {
             padding-left:12rem;
         }
           }
           .bar1 {
         
            display:grid;
            grid-template-columns: 25% 35% 15% 25%;
            background:white;
            border:1px solid #F1F1F1;

padding-top:1rem;
padding-bottom:1rem;

h3:nth-child(1) {
 
  padding-left:2rem;
}
h3:nth-child(2) {
 
  padding-left:4rem;
}
h3:nth-child(3) {
 
  padding-left:4rem;
}
h3:nth-child(4) {
 
  padding-left:12rem;
}
   }
           
       }
       .left-1 {

       }
   }


/* loading */


.card{ 
        background-color: #fff; 
        height: auto; 
        width: auto; 
        overflow: hidden; 
        margin: 12px; 
        border-radius: 5px; 
        box-shadow: 9px 17px 45px -29px
                    rgba(0, 0, 0, 0.44); 
    } 
   
    /* Card image loading */
    .card__image img { 
        width: 100%; 
        height: 100%; 
    } 
      
    .card__image.loading { 
        height: 300px; 
        width: 400px; 
    } 
    .card__titl.loading { 
         width: 60rem;
         height:2rem;
    } 
   
   
    /* Card title */
    .card__title { 
        padding: 8px; 
        font-size: 22px; 
        font-weight: 700; 
    } 
      
    .card__title.loading { 
        height: 1rem; 
        width: 50%; 
        margin: 1rem; 
        border-radius: 3px; 
    } 
   
    /* Card description */
    .card__description { 
        padding: 8px; 
        font-size: 16px; 
    } 
      
    .card__description.loading { 
        height: 3rem; 
        margin: 1rem; 
        border-radius: 3px; 
    } 
   
    /* The loading Class */
    .loading { 
        position: relative; 
        background-color: #e2e2e2; 
    } 
   
    /* The moving element */
    .loading::after { 
        display: block; 
        content: ""; 
        position: absolute; 
        width: 100%; 
        height: 100%; 
        transform: translateX(-100%); 
        background: -webkit-gradient(linear, left top, 
                    right top, from(transparent),  
                    color-stop(rgba(255, 255, 255, 0.2)), 
                    to(transparent)); 
                      
        background: linear-gradient(90deg, transparent, 
                rgba(255, 255, 255, 0.2), transparent); 
   
        /* Adding animation */
        animation: loading 0.8s infinite; 
    } 
   
    /* Loading Animation */
    @keyframes loading { 
        100% { 
            transform: translateX(100%); 
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
    
      width: 25%;
           ul {
               li {
                   padding:1rem;
                   font-size:1.5rem;
                  
                   i {
                       padding-right:1rem;
                       font-size:1.5rem;
                    color: #757575;
                   }
               }
           }

       }
  
       .right {
        width:75%;
      display:flex;
      justify-content:space-evenly; 
      box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
       flex-direction:column; 
           .bar {
           background:white;
           
           border:1px solid #F1F1F1;
            display:flex;
       justify-content:space-evenly; 
        padding:1rem;
       padding-top:1rem;
       padding-bottom:1rem;
       h2 {
        
       }
         .space-right {
             padding-left:12%;
         }
           }
           .bar1 {
         
            display:grid;
            grid-template-columns: 25% 35% 15% 25%;
            background:white;
            border:1px solid #F1F1F1;

padding-top:1rem;
padding-bottom:1rem;

h3:nth-child(1) {
 
    padding-left: 8%;
}
h3:nth-child(2) {
 
    padding-left:14%;
}
h3:nth-child(3) {
 
  padding-left:4rem;
}
h3:nth-child(4) {
    padding-left: 51%
}
   }
           
       }
       .left-1 {

       }
   }


/* loading */


.card{ 
        background-color: #fff; 
        height: auto; 
        width: auto; 
        overflow: hidden; 
        margin: 12px; 
        border-radius: 5px; 
        box-shadow: 9px 17px 45px -29px
                    rgba(0, 0, 0, 0.44); 
    } 
   
    /* Card image loading */
    .card__image img { 
        width: 100%; 
        height: 100%; 
    } 
      
    .card__image.loading { 
        height: 300px; 
        width: 400px; 
    } 
    .card__titl.loading { 
         width: 60rem;
         height:2rem;
    } 
   
   
    /* Card title */
    .card__title { 
        padding: 8px; 
        font-size: 22px; 
        font-weight: 700; 
    } 
      
    .card__title.loading { 
        height: 1rem; 
        width: 50%; 
        margin: 1rem; 
        border-radius: 3px; 
    } 
   
    /* Card description */
    .card__description { 
        padding: 8px; 
        font-size: 16px; 
    } 
      
    .card__description.loading { 
        height: 3rem; 
        margin: 1rem; 
        border-radius: 3px; 
    } 
   
    /* The loading Class */
    .loading { 
        position: relative; 
        background-color: #e2e2e2; 
    } 
   
    /* The moving element */
    .loading::after { 
        display: block; 
        content: ""; 
        position: absolute; 
        width: 100%; 
        height: 100%; 
        transform: translateX(-100%); 
        background: -webkit-gradient(linear, left top, 
                    right top, from(transparent),  
                    color-stop(rgba(255, 255, 255, 0.2)), 
                    to(transparent)); 
                      
        background: linear-gradient(90deg, transparent, 
                rgba(255, 255, 255, 0.2), transparent); 
   
        /* Adding animation */
        animation: loading 0.8s infinite; 
    } 
   
    /* Loading Animation */
    @keyframes loading { 
        100% { 
            transform: translateX(100%); 
        } 
    } 
}

`

