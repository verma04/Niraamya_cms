import {  CATEGORYS , BULKORDER,  FILTERCAT, NOTIF,  PRODUCT , BULK, DETIALS , COMPARE, ORDERS, ALLPRODUCTS , WISHLIST, SEARCH} from "../actions/types";

const initialState = {
  allproducts:null,
   category: null,
   product:null,
   product_detials:null,
   compare:null,
   wishlist:null,
   search:null,
   orders:null,
   notifications: null,
   bulk:null,
   bulkorder:null,
   filtercat:null
  };

  export default function dd (state = initialState, action) {
    switch (action.type) {
   

       
          case  CATEGORYS:
          return {
            ...state,
         
            category: action.payload
          };
          case  PRODUCT:
            return {
              ...state,
           
              product: action.payload
            };
            case  DETIALS:
              return {
                ...state,
             
                product_detials: action.payload
              };
              case  COMPARE:
                return {
                  ...state,
               
                  compare: action.payload
                };
                case  ALLPRODUCTS:
                  return {
                    ...state,
                 
                    allproducts: action.payload
                  };
                  case  WISHLIST:
                    return {
                      ...state,
                   
                      wishlist: action.payload
                    };

                    case  SEARCH:
                      return {
                        ...state,
                     
                        search: action.payload
                      };
                      case ORDERS:
                      return {
                        ...state,
                     
                        orders: action.payload
                      };
                      case NOTIF:
                      return {
                        ...state,
                     
                        notifications: action.payload
                      };
                      case BULK:
                        return {
                          ...state,
                       
                           bulk: action.payload
                        };
                        case BULKORDER:
                          return {
                            ...state,
                         
                             bulkorder: action.payload
                          };
                          case  FILTERCAT:
                            return {
                              ...state,
                           
                              filtercat: action.payload
                            };
           
        default:
      return state;
  
  }
}