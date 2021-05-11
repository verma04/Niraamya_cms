import styled from 'styled-components';



export const Section = styled.nav`
display:flex;
justify-content:center;
@media (min-width: 1281px) {
  .flex {
      display:flex;
      justify-content:center;
  
          
          .flex-1 {
            width:80rem;
          background:white;
              padding-top:3rem;
           padding-bottom:3rem;
                justify-content: center;
                .head {
                    display:flex;
      justify-content:center;
      padding-bottom:2rem;
                }
              form {
                  width:100%;
                display:flex;
                justify-content: space-evenly;
                .input-field {
                    display:flex;
                 flex-direction:column;
                input {
                    height: 2rem;
                    width:10rem;
                    
                }
                span {
                    padding-top:0.5rem;
                     font-size:0.8rem;
                     color:red;
                }
                }
                select {
                    height: 2rem;
                    width:10rem;
                    background:${props => props.theme.button.grey};
                }
                .date{
                    height: 2rem;
                    width:10rem;
                    padding:none;
                    margin:none;
                }
                button {
                    height: 2.5rem;
                    width:10rem;
                    color:white;
                    background:${props => props.theme.button.brown};
                    border:none;
                    font-size:1.3rem;
                }
          }
      
          }

          .flex-2 {
            width:80rem;
            margin-top:1rem;
          background:white;
              padding-top:3rem;
           padding-bottom:3rem;
                justify-content: center;
                .head {
                    display:flex;
      justify-content:center;
      padding-bottom:2rem;
                }
                .active {
                    display:flex;
                    justify-content: space-around;
                    background:green;
                    align-items: center;
    color: white;
                       
                     .btn {
                      
                         padding:0.5rem;
                         i {
                             font-size:1.2rem;
                             color:white;

                         }
                         .fa-pencil-alt {
  color:white;
                              
 
                         }
                       
                     }
                    
                }
                .expired {
                    display:flex;
                    justify-content: space-around;
                    background:red;
                    padding-bottom:1rem;
                       
                     .btn {
                        
                         padding:0.5rem;
                         i {
                             font-size:1.2rem;

                         }
                         .fa-pencil-alt {

                       
 
                         }
                         .fa-trash-alt {
                     
                         }
                     }
                    
                }
          }
  }
}
@media (max-width: 1281px) {

    
  .flex {
      display:flex;
      justify-content:center;
      width:95%;
          .flex1 {
              width:100%;
          .flex-1 {
           
          background:white;
              padding-top:3rem;
           padding-bottom:3rem;
                justify-content: center;
                .head {
                    display:flex;
      justify-content:center;
      padding-bottom:2rem;
                }
              form {
                  width:100%;
                display:flex;
                justify-content: space-evenly;
                .input-field {
                    display:flex;
                 flex-direction:column;
                input {
                    height: 2rem;
                    width:10rem;
                    
                }
                span {
                    padding-top:0.5rem;
                     font-size:0.8rem;
                     color:red;
                }
                }
                select {
                    height: 2rem;
                    width:10rem;
                    background:${props => props.theme.button.grey};
                }
                .date{
                    height: 2rem;
                    width:10rem;
                    padding:none;
                    margin:none;
                }
                button {
                    height: 2.5rem;
                    width:10rem;
                    color:white;
                    background:${props => props.theme.button.brown};
                    border:none;
                    font-size:1.3rem;
                }
          }
      
          }
          
          .flex-2 {
            width:100%;
            margin-top:1rem;
          background:white;
              padding-top:3rem;
           padding-bottom:3rem;
                justify-content: center;
                .head {
                    display:flex;
      justify-content:center;
      padding-bottom:2rem;
                }
                .active {
                    display:flex;
                    justify-content: space-around;
                    background:green;
                  
                    align-items: center;
    color: white;
                       
                     .btn {
                      
                         padding:0.5rem;
                         i {
                             font-size:1.2rem;

                         }
                        
                         .fa-trash-alt {
                            color: white;
                         }
                     }
                    
                }
                .expired {
                    display:flex;
                    justify-content: space-around;
                    background:red;
                    padding-bottom:1rem;
                       
                     .btn {
                        
                         padding:0.5rem;
                         i {
                             font-size:1.2rem;

                         }
                         .fa-pencil-alt {

                       
 
                         }
                         .fa-trash-alt {
                     
                         }
                     }
                    
                }
          }
          }
  }
}

`