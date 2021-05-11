import { CART, CART_COUPAN, WISHLIST} from "./types";
import axios from 'axios';


export const getCart = () => dispatch => {
    axios
      .get("http://localhost:5000/api/users/getCart")
      .then(res => 
        dispatch({
            type: CART,
            payload: res.data
          }))
      .catch(err =>
        console.log(err)
      );
  };

  export const AddtoCart = (data) => dispatch => {
    axios
      .post("http://localhost:5000/api/users/AddtoCart" , data)
      .then(res => 
        dispatch({
            type: CART,
            payload: res.data
          }))
      .catch(err =>
        console.log(err)
      );
  };

  export const cartIncrment = (data) => dispatch => {
    axios
      .post("http://localhost:5000/api/users/cartIncrment" , data)
      .then(res => 
        dispatch({
            type: CART,
            payload: res.data
          }))
      .catch(err =>
        console.log(err)
      );
  };

  export const cartDcremnet = (data) => dispatch => {
    axios
      .post("http://localhost:5000/api/users/cartDcremnet" , data)
      .then(res => 
        dispatch({
            type: CART,
            payload: res.data
          }))
      .catch(err =>
        console.log(err)
      );
  };
 
  export const applyCoupan = (data) => dispatch => {
    axios
      .post("http://localhost:5000/api/users/applyCoupan" , data)
      .then(res => 
        dispatch({
            type: CART_COUPAN,
            payload: res.data
          }))
      .catch(err =>
        console.log(err)
      );
  };
 

  export const placeOrder = (data , history) => dispatch => {
    axios
      .post("http://localhost:5000/api/users/placeOrder" , data)
      .then(res => 
         history.push('/orders')
        )
      .catch(err =>
        console.log(err)
      );
  };

  export const getwishlist = (data , history) => dispatch => {
    axios
      .post("http://localhost:5000/api/users/getwishList" , data)
      .then(res => 
        dispatch({
          type: WISHLIST,
          payload: res.data
        }))
        
      .catch(err =>
        console.log(err)
      );
  };