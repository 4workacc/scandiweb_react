import initState from "./initState";

export enum ActionTypes {
    // app
    SELECT_CATHEGORY = "SELECT_CATHEGORY",
    SWITCH_PAGE = "SWITCH_PAGE",
    SHOW_PRODUCT = "SHOW_PRODUCT",
    SHOW_MINI_BASKET = "SHOW_MINI_BASKET",
    SELECT_SIZE = "SELECT_SIZE",
    SELECT_COLOR = "SELECT_COLOR",
    ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART"
}

const rootReducer = (state = initState, action: any) => {
    switch ( action.type ) {
        case ActionTypes.SELECT_CATHEGORY : 
            return {
                ...state,
                curCathegory: action.payload,
                curPage: "products"
            };       
        case ActionTypes.SHOW_PRODUCT :
            
            return {
                ...state,
                curPage: "product",
                displayProductId: action.payload-1
            };       
        case ActionTypes.SELECT_COLOR :            
            return {
                ...state,
                selectedColor: action.payload
            };
        case ActionTypes.SELECT_SIZE : {            
            return {
                ...state,
                selectedSize: action.payload
            };
        }
        case ActionTypes.ADD_PRODUCT_TO_CART: {
            let newBasketState = [];
            state.basket.map( (el:any) => {
                newBasketState.push( el )
            });
            newBasketState.push({
                productId: action.payload,
                size: state.selectedSize,
                color: state.selectedColor,
                count: 1
            });            
            return {
                ...state,
                basket: newBasketState
            }
        }        
        default: 
            return state
    }
}

export default rootReducer;