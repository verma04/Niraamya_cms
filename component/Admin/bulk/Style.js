import styled from 'styled-components';



export const Section = styled.section`
display:flex;
justify-content:center; 
@media (min-width: 1281px) {

.flex {
    margin-top:3rem;
    display:flex;
    justify-content:center;
    width:95%;
    height:40rem;
     background-color:white;
 
.data {
    display:flex;
    justify-content:center;
    flex-direction:column;
    h1 {
        font-weight:1000;
    }
}
}


}
@media (max-width: 1281px) {
    .flex {

    margin-top:3rem;
    display:flex;
    justify-content:center;
    width:95%;
    height:40rem;
     background-color:white;
   
    .data {
    display:flex;
    justify-content:center;
    flex-direction:column;
    h1 {
        font-weight:1000;
    }
}

    }
}

`