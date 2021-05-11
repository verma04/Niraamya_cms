import styled from 'styled-components';



export const Section = styled.section`
display:flex;
justify-content:center;
@media (min-width: 1281px) {

    .flex {
        width:95%;
        background-color:white;
        position: relative;
       
        margin-top:3%;
      
        display:flex;

        .flex-1 {
            display:flex;
            justify-content:center;
            align-items:center;
             flex-direction:column;
             box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
             width:40%;
             height:40rem;
             .top {
                 position:relative;
                 width:100%;
                 height:100%;
              
                 display:flex;
                 justify-content:center;
                 align-items:center;
                 .img{
                     width:70%;
                     height: 70%;
                   
                     img {
                   width:100%;
                height:100%;
               }
                 }
                 .fas {
                     position:absolute;
                    
                     bottom: 15%;
    right: 21%;
    font-size: 2rem;
                 }
                 
             }
             .bottom {
                width:100%;
                 height:35%;
                
                 display:flex;
            justify-content:space-evenly;
            align-items:center;
            .img1 {
                height: 61%;
               border:1px solid;
               width:27%;
               position: relative;
               img {
                   width:100%;
                   height: 100%;
               }
               .fas {
                     position:absolute;
                    
                     bottom: 7%;
    right: 6%;
    font-size: 2rem;
                 }
            }
         
             }

        }
        .flex-2 {
            box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
            display:flex;
            justify-content:flex-start;
            align-items:center;
             flex-direction:column;
            
             width:60%;
             height:100%;
             .grid-1 {
                 width:100%;
                 height:15rem;
                 
                 display:flex;
                 justify-content:center;
                 flex-direction:column;
                 border-bottom: 1px dotted;
                 .data {
                    height: 21%;
    width: 50%;
    padding-left: 1.5rem;
    display:flex;
    justify-content:space-between;
    h2 {
        font-weight:1000;
        font-size:1.2rem;
    }
    h3 {
        font-size:1rem; 
    }
                 }
             }
             .grid-2 {
                 width:100%;
                 height:15rem;
                 
                 display:flex;
                 justify-content:center;
                 flex-direction:column;
                 border-bottom: 1px dotted;
                 .data {
                    height: 21%;
    width: 50%;
    padding-left: 1.5rem;
    display:flex;
    justify-content:space-between;
    h2 {
        font-weight:1000;
        font-size:1.2rem;
    }
    h3 {
        font-size:1rem; 
    }
                 }
             }
             .grid-3 {
                 width:100%;
                 height:35%;
                 
                 display:flex;
                 justify-content:center;
                 flex-direction:column;
                 h2 {
                     height:20%;
                     width:100%;
                    padding:1.5rem;
              
        font-weight:1000;
        font-size:1.2rem;
    

                 }
                 p {
                    height:80%;
                    width: 91%;
                     padding:1.5rem;
                     line-height:1.6;
 
                 }
             }
             
             
        }

        .btn {
            position: absolute;
            right: 1%;
    top: 1%;
    width: 20%;
    display: flex;
    justify-content: space-around;
            button {
                font-size: 1.2rem;
    border: none;
    width: 48%;
 
    color:white;
            }
            .second {
                color:${props => props.theme.button.brown};
                border: 2px solid ${props => props.theme.button.brown};
                background-color:white;

            }
            .first {
                
                background-color:  ${props => props.theme.button.brown};
          

            }
        }
    }


}
@media (max-width: 1281px) {

.flex {
    width:95%;
    background-color:white;
    position: relative;
    height:80vh;
    margin-top:3%;
    box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
    display:flex;

    .flex-1 {
        display:flex;
        justify-content:center;
        align-items:center;
         flex-direction:column;
         box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
         width:40%;
         height:100%;
         .top {
             position:relative;
             width:100%;
             height:65%;
            
             display:flex;
             justify-content:center;
             align-items:center;
             .img{
                 width:60%;
                 height: 72%;
                
                 img {
               width:100%;
               height:100%;
           }
             }
             .fas {
                 position:absolute;
                
                 bottom: 15%;
right: 21%;
font-size: 2rem;
             }
             
         }
         .bottom {
            width:100%;
             height:35%;
            
             display:flex;
        justify-content:space-evenly;
        align-items:center;
        .img1 {
            height: 61%;
           border:1px solid;
           width:27%;
           position: relative;
           img {
               width:100%;
               height: 100%;
           }
           .fas {
                 position:absolute;
                
                 bottom: 7%;
right: 6%;
font-size: 2rem;
             }
        }
     
         }

    }
    .flex-2 {
        box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
        display:flex;
        justify-content:center;
        align-items:center;
         flex-direction:column;
        
         width:60%;
         height:100%;
         .grid-1 {
             width:100%;
             height:30%;
             
             display:flex;
             justify-content:center;
             flex-direction:column;
             border-bottom: 1px dotted;
             .data {
                height: 21%;
width: 50%;
padding-left: 1.5rem;
display:flex;
justify-content:space-between;
h2 {
    font-weight:1000;
    font-size:1.2rem;
}
h3 {
    font-size:1rem; 
}
             }
         }
         .grid-2 {
             width:100%;
             height:35%;
             
             display:flex;
             justify-content:center;
             flex-direction:column;
             border-bottom: 1px dotted;
             .data {
                height: 21%;
width: 50%;
padding-left: 1.5rem;
display:flex;
justify-content:space-between;
h2 {
    font-weight:1000;
    font-size:1.2rem;
}
h3 {
    font-size:1rem; 
}
             }
         }
         .grid-3 {
             width:100%;
             height:35%;
             
             display:flex;
             justify-content:center;
             flex-direction:column;
             h2 {
                 height:20%;
                 width:100%;
                padding:1.5rem;
                padding-top: 3%;
    font-weight:1000;
    font-size:1.2rem;


             }
             p {
                height:80%;
                width: 91%;
                 padding:1.5rem;
                 line-height:1.6;

             }
         }
         
         
    }

    .btn {
        position: absolute;
        right: 1%;
top: 1%;
width: 20%;
display: flex;
justify-content: space-around;
        button {
            font-size: 1.2rem;
border: none;
width: 48%;
height: 2rem;
color:white;
        }
        .second {
            color:${props => props.theme.button.brown};
            border: 2px solid ${props => props.theme.button.brown};
            background-color:white;

        }
        .first {
            
            background-color:  ${props => props.theme.button.brown};
      

        }
    }
}


}

`