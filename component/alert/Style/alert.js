
import styled from 'styled-components';

export   const Alertt = styled.div`

  display:flex;
  justify-content:center;

  @media  (max-width: 480px) {

    .center {
    width:100%;
    display:flex;
  justify-content:space-between;
  position:relative;
  .Added {
    position: absolute;
    right: 5rem;
    top: -3rem;
    background-color: #4E372A;
    border-radius: 10px;
    width: 20rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: space-around;
    -webkit-justify-content: space-around;
    -ms-flex-pack: space-around;
    justify-content: space-around
  i {
    padding-top:1rem;
    padding-bottom:1rem;
    font-size:3rem;
    color:white;
  }
  h3 {
    padding-top:1.7rem;
    font-size:1.5rem;
    color:white;
  }
  }
  }



  }
  @media (min-width: 1281px) {
  .center {
    width:80rem;
    display:flex;
  justify-content:space-between;
  position:relative;
  .Added {
     position:absolute;
     right:0;
    background-color:${props => props.theme.button.darkBrown};
  border-radius: 10px;
  width:20rem;
 
  display:flex;
  justify-content:space-around;
  i {
    padding-top:1rem;
    padding-bottom:1rem;
    font-size:3rem;
    color:white;
  }
  h3 {
    padding-top:1.7rem;
    font-size:1.5rem;
    color:white;
  }
  }
  }


 }
`