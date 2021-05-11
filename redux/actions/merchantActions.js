import { COSTOMERS , COS_DET , PRODUCT, MER_ORDERS, MERORDERS, GET_ERRORS, COUPAN, PRODUCTS, CATEGORY } from "./types";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export const getallCostomers = (userData, history) => dispatch => {
    axios
      .get("/admin/allCostomer", userData)
      .then(res => 
        dispatch({
            type: COSTOMERS,
            payload: res.data
          }))
      .catch(err =>
        console.log(err)
      );
  };

  export const getCostomersDetials = (userData) => dispatch => {
    axios
      .post("/admin/CostomerDetials", userData)
      .then(res => 
        dispatch({
          type: COS_DET ,
          payload:  res.data
        }))
      .catch(err =>
        console.log(err)
      );
  };

  export const addCategory = (userData) => dispatch => {
    axios
      .post("/admin/addCategory", userData)
      .then(res => 
        dispatch({
          type: CATEGORY ,
          payload:  res.data
        }))
      .catch(err =>
        console.log(err)
      );
  };
  export const getCategory = () => dispatch => {
    axios
      .get("/admin/getCategory")
      .then(res => 
        dispatch({
          type: CATEGORY ,
          payload:  res.data
        }))
      .catch(err =>
        console.log(err)
      );
  };

  export const addProduct = (userData , Router) => async dispatch => {
  
    try {
    const des  = axios.post("/admin/addProducts" , userData )
     
  
    await Router.push("/admin-products")

    await toast.success("Product Added")
  }

      catch(err) {
        console.log(err)
      }
  };

  export const getAllProdcuts = (userData) => dispatch => {
    axios
      .get("/admin/getAllProdcuts" , userData )
      .then(res => 
        dispatch({
          type: PRODUCTS ,
          payload:  res.data
        }))
      .catch(err =>
        console.log(err)
      );
  };

  export const filterCategory = (userData) => dispatch => {
    axios
      .post("/admin/category" , userData )
      .then(res => 
        dispatch({
          type: PRODUCTS ,
          payload:  res.data
        }))
      .catch(err =>
        console.log(err)
      );
  };


  export const category = (userData) => dispatch => {
    axios
      .post("/admin/categories" , userData )
      .then(res => 
        dispatch({
          type: CATEGORY ,
          payload:  res.data
        }))
      .catch(err =>
        console.log(err)
      );
  };


  export const coupan = (userData) => dispatch => {
    axios
      .post("/admin/coupan" , userData )
      .then(res => 
        dispatch({
          type: COUPAN,
          payload:  res.data
        }))
        .catch(err =>
          dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          })
        );
  };

  export const getcoupan = (userData) => dispatch => {
    axios
      .get("/admin/getcoupan" , userData )
      .then(res => 
        dispatch({
          type: COUPAN,
          payload:  res.data
        }))
      .catch(err =>
        console.log(err)
      );
  };
  export const  checkcoupan = (userData) => dispatch => {
    axios
      .get("/admin/checkcoupan" , userData )
      .then(res => 
        dispatch({
          type: COUPAN,
          payload:  res.data
        }))
      .catch(err =>
        console.log(err)
      );
  };

  export const  deletecoupan = (userData) => dispatch => {
    axios
      .post("/admin/deletecoupan" , userData )
      .then(res => 
        dispatch({
          type: COUPAN,
          payload:  res.data
        }))
      .catch(err =>
        console.log(err)
      );
  };


  export const  addcover = (userData) => dispatch => {
 
    console.log(userData)
    // axios
    //   .post("/admin/addcover" , userData )
    //   .then(res => 
    //     dispatch({
    //       type:  CATEGORY ,
    //       payload:  res.data
    //     }))
    //   .catch(err =>
    //     console.log(err)
    //   );
  };


  export const  fetchOrders = () => dispatch => {
 
    axios
    .get("/admin/fetchOrders"  )
    .then(res => 
      dispatch({
        type: MERORDERS,
        payload:  res.data
      }))
    .catch(err =>
      console.log(err)
    );
  };

  export const  fetchOrders_id = (data) => dispatch => {
 
    axios
    .post("/admin/fetchOrder_id"  , data)
    .then(res => 
      dispatch({
        type: MER_ORDERS,
        payload:  res.data
      }))
    .catch(err =>
      console.log(err)
    );
  };

  export const  orderStatus = (data) => dispatch => {
 
    axios
    .post("/admin/orderStatus"  , data)
    .then(res => 
      dispatch({
        type: MER_ORDERS,
        payload:  res.data
      }))
    .catch(err =>
      console.log(err)
    );
  };

  export const  shipped = (data) => dispatch => {
 
    axios
    .post("/admin/shipped"  , data)
    .then(res => 
      dispatch({
        type: MERORDERS,
        payload:  res.data
      }))
    .catch(err =>
      console.log(err)
    );
  };

  export const  onDelivered = (data) => dispatch => {
 
    axios
    .post("/admin/onDelivered"  , data)
    .then(res => 
      dispatch({
        type: MERORDERS,
        payload:  res.data
      }))
    .catch(err =>
      console.log(err)
    );
  };

  export const  getProduct = (data) => dispatch => {
 
    axios
    .post("/admin/getProduct"  , data)
    .then(res => 
      dispatch({
        type: PRODUCT,
        payload:  res.data
      }))
    .catch(err =>
      console.log(err)
    );
  };


  export const  deleteProduct = (data , history) => async dispatch => {
  try {

  
 const res =  await  axios.post("/admin/deleteProduct"  , data)

      history.push('/admin-products/')
    

  }

    catch(err){

         console.log(err)
    }
  };


  export const  img1Change = (data ) => async dispatch => {
   try {
    const res = await  axios.post("/admin/img1Change"  , data)

     await  dispatch({
        type: PRODUCT,
        payload:  res.data
      })
      await toast.success("Image Changed")
   }
    catch(err) {
      console.log(err)
    }
  };

  export const  img2Change = (data ) => dispatch => {
 
    axios
    .post("/admin/img2Change"  , data)
    .then(res => 
      dispatch({
        type: PRODUCT,
        payload:  res.data
      }))
    .catch(err =>
      console.log(err)
    );
  };
  export const  img3Change = (data ) => dispatch => {
 
    axios
    .post("/admin/img3Change"  , data)
    .then(res => 
      dispatch({
        type: PRODUCT,
        payload:  res.data
      }))
    .catch(err =>
      console.log(err)
    );
  };

  export const  editProduct = (data , setActive ) => async  dispatch => {
  try {
 const res =  await  axios .post("/admin/editProduct"  , data)
   
 await  dispatch({
        type: PRODUCT,
        payload:  res.data
      })
      await toast.success("Product Edited")
      await setActive()
  }
catch(err) {
      console.log(err)
}
  };