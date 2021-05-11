import { CATEGORYS, PRODUCT , SET_ALERT , FILTERCAT, BULKORDER,  BULK, NOTIF,  COMPARE, DETIALS , ALLPRODUCTS , WISHLIST, SEARCH , ORDERS} from "./types";
import axios from 'axios';

  



  
  export const getCategory = () => dispatch => {
    axios
      .get("/api/getCategory")
      .then(res => 
        dispatch({
          type: CATEGORYS ,
          payload:  res.data
        }))
      .catch(err =>
        console.log(err)
      );
  };


  export const getFilterCategory = ( data ) => dispatch => {
    axios
      .get(`/api/getFilterCategory/${data} `  )
      .then(res => 
        dispatch({
          type: FILTERCAT,
          payload:  res.data
        }))
      .catch(err =>
        console.log(err)
      );
  };

  export const getallProducts = ( ) => dispatch => {
  
    axios
    .get("/api/getallProducts")
    .then(res => 
      dispatch({
        type: ALLPRODUCTS ,
        payload:  res.data
      }))
    .catch(err =>
      console.log(err)
    );
  };

  export const getProducts = ( userData) => dispatch => {
  
    axios
    .get(`/api/getProducts/${userData}` )
    .then(res => 
      dispatch({
        type: PRODUCT ,
        payload:  res.data
      }))
    .catch(err =>
      console.log(err)
    );
  };


  export const getProductsDetials = ( userData) => dispatch => {
 
    axios
    .post("/api/getProductsDetials" , userData)
    .then(res => 
      dispatch({
        type: DETIALS ,
        payload:  res.data
      }))
    .catch(err =>
      console.log(err)
    );
  };

  export const getProductsData = ( userData) => dispatch => {
 console.log(userData)
    axios
    .post("/api/getProductsData" , userData)
    .then(res => 
      dispatch({
        type: DETIALS ,
        payload:  res.data
      }))
    .catch(err =>
      console.log(err)
    );
  };


 


  export const onProducts = ( userData) => dispatch => {
 
    axios
    .post("/api/onProducts" , userData)
    .then(res => 
      dispatch({
        type: PRODUCT ,
        payload:  res.data
      }))
    .catch(err =>
      console.log(err)
    );
  };

  export const onComapre = ( userData) => dispatch => {
 
    axios
    .post("/api/onComapre" , userData)
    .then(res => 
      dispatch({
        type: COMPARE ,
        payload:  res.data
      }))
    .catch(err =>
      console.log(err)
    );
  };




  export const getCompare = ( ) => dispatch => {
 
    axios
    .get("/api/getCompare" , )
    .then(res => 
      dispatch({
        type: COMPARE ,
        payload:  res.data
      }))
    .catch(err =>
      console.log(err)
    );
  };


  export const sortBy = (sort , data) => dispatch => {

   
     console.log(data)
 

    if( sort === "Low" ){
     
     let pk =  data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
     console.log(pk)

     dispatch({
      type: PRODUCT ,
      payload:  pk
    })

    }
    else if( sort === "Popular" ){
      let pk =  data.sort();
      console.log(pk)
 
      dispatch({
       type: PRODUCT ,
       payload:  pk
     })

    }
    else if( sort === "High" ){
      let pk =  data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      console.log(pk)
 
      dispatch({
       type: PRODUCT ,
       payload:  pk
     })

    }
    else if( sort === "New" ){
      const pk = data.reverse();
 
      dispatch({
       type: PRODUCT ,
       payload:  pk
     })

    }

  };

  export const addwishList = (userData ) => dispatch => {
 
    axios
    .post("/api/addwishList" , userData )
    .then(res => 
      dispatch({
        type: WISHLIST ,
        payload:  res.data
      }))
    .catch(err =>
      console.log(err)
    );
  };


  export const getwishList = ( ) => dispatch => {
 
    axios
    .get("/api/getwishList" )
    .then(res => 
      dispatch({
        type: WISHLIST ,
        payload:  res.data
      }))
    .catch(err =>
      console.log(err)
    );
  };


  export const searchList = ( data ) => dispatch => {
 
    axios
    .post("/api/searchList"  , data )
    .then(res => 
      dispatch({
        type: SEARCH,
        payload:  res.data
      }))
    .catch(err =>
      console.log(err)
    );
  };
  export const getOrders = (  ) => dispatch => {
 
    axios
    .get("/api/getOrders"  )
    .then(res => 
      dispatch({
        type:ORDERS ,
        payload:  res.data
      }))
    .catch(err =>
      console.log(err)
    );
  };
  export const getNotifications = (  ) => dispatch => {
 
    axios
    .get("/api/getNotifications"  )
    .then(res => 
      dispatch({
        type:NOTIF ,
        payload:  res.data
      }))
    .catch(err =>
      console.log(err)
    );
  };

  export const SeenNotifications = (  ) => dispatch => {
 
    axios
    .get("/api/SeenNotifications"  )
    .then(res => 
      dispatch({
        type:NOTIF,
        payload:  res.data
      }))
     
    .catch(err =>
      console.log(err)
    );
  };
  export const review = ( data  ) => dispatch => {
 
    axios
    .post("/api/review" , data  )
    .then(res => 
      dispatch({
        type:NOTIF,
        payload:  res.data
      }))
     
    .catch(err =>
      console.log(err)
    );
  };

  export const  bulkorders = (data) => (dispatch) => {
   console.log(data)
    axios
    .post("/api/getProductsDetials" , data)
    .then(res => 
      dispatch({
        type: BULK ,
        payload:  res.data
      }))
    .catch(err =>
      console.log(err)
    );
  };

  export const addBulkOrder = (data ) => (dispatch) => {
    console.log(data)
    axios
    .post("/api/Bulkorder" , data)
    .then(res => 
      dispatch({
        type: BULKORDER,
        payload:  res.data
      }))
    .catch(err =>
      console.log(err)
    );
    dispatch({
      type: BULK,
      payload: []
    })
    
   };

   export const getBulkorder = () => (dispatch) => {

    axios
    .get("/api/getBulkorder" )
    .then(res => 
      dispatch({
        type:BULKORDER,
        payload:  res.data
      }))
    .catch(err =>
      console.log(err)
    );
    
   };

   export const deleteorder = (data) => (dispatch) => {
console.log(data)
    axios
    .post("/api/deleteorder"  , data)
    .then(res => 
      dispatch({
        type:BULKORDER,
        payload:  res.data
      }))
    .catch(err =>
      console.log(err)
    );
    
   };

   export const BulkallOrder = (data , history) => (dispatch) => {
    console.log(data)
        axios
        .post("/api/BulkallOrder"  , data)
        .then(res => 
           history.push('/')
          )
        .catch(err =>
          console.log(err)
        );
        
       };


       export const  searchProduct = (id) => (dispatch) => {
        console.log(id)
            axios
            .get(`/api/searchProduct/${id}`)
            .then(res => 
              dispatch({
                type:SEARCH,
                payload:  res.data
              }))
              
            .catch(err =>
              console.log(err)
            );
            
          };

          export const  getBulkProducts = (id) => (dispatch) => {
            console.log(id)
                axios
                .get(`/api/getBulkProducts`)
                .then(res => 
                  dispatch({
                    type:PRODUCT ,
                    payload:  res.data
                  }))
                  
                .catch(err =>
                  console.log(err)
                );
                
              };