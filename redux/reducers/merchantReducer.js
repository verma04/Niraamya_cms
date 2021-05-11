import { COSTOMERS , COS_DET, MER_ORDERS  ,PRODUCT, MERORDERS, CATEGORY , PRODUCTS, COUPAN} from "../actions/types";

const initialState = {
   costomers:null,
   cosDetial:  null,
   category: null,
   product:null,
   coupan:null,
   orders:null,
   merorder:null,
   product_det:null

  
  };

  export default function ss (state = initialState, action) {
    switch (action.type) {
      case COSTOMERS:
        return {
          ...state,
       
          costomers: action.payload
        };

        case  COS_DET:
          return {
            ...state,
         
            cosDetial: action.payload
          };
          case  CATEGORY:
          return {
            ...state,
         
            category: action.payload
          };
          case  PRODUCTS:
            return {
              ...state,
           
              product: action.payload
            };
            case  COUPAN:
              return {
                ...state,
             
                coupan: action.payload
              };
              
              case  MERORDERS:
                return {
                  ...state,
               
                  orders: action.payload
                };
                case  MER_ORDERS:
                  return {
                    ...state,
                 
                    merorder: action.payload
                  };
                  case PRODUCT:
                  return {
                    ...state,
                 
                    product_det: action.payload
                  };
        default:
      return state;
  
  }
}