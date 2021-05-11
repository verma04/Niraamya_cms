import {  CART , CART_COUPAN} from "../actions/types";

const initialState = {
   cart:'',
   coupan:null
  };

  export default function ss (state = initialState, action) {
    switch (action.type) {
   

       
          case  CART:
          return {
            ...state,
         
            cart: action.payload
          };

          case  CART_COUPAN:
            return {
              ...state,
           
              coupan: action.payload
            };
        
        default:
      return state;
  
  }
}