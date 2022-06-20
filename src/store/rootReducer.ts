import initState from "./initState";

export enum ActionTypes {
    // app
    SELECT_CATHEGORY = "SELECT_CATHEGORY",
    SWITCH_PAGE = "SWITCH_PAGE",
    SHOW_PRODUCT = "SHOW_PRODUCT",
    SHOW_MINI_BASKET = "SHOW_MINI_BASKET",
    SELECT_SIZE = "SELECT_SIZE",
    SELECT_COLOR = "SELECT_COLOR",
    ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
    SHOW_BASKET = "SHOW_BASKET",
    CHANGE_BASKET_COUNT = "CHANGE_BASKET_COUNT",
    SELECT_CURRENCY = "SELECT_CURRENCY"
}

const rootReducer = (state = initState, action: any) => {
    switch ( action.type ) {
        case "LOAD_DATA" :            
            return {
            ...state,
            fullProductList: action.payload
        };
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
            console.log( action.payload);
            let newBasketState: any[] = [];
            state.basket.map( (el:any) => {
                newBasketState.push( el )
            });
            if ( newBasketState.length === 0 ) {
                newBasketState.push({
                    productId: action.payload.id,
                    size: action.payload.selectedSize,
                    color: action.payload.selectedColor,
                    price: action.payload.price,
                    count: 1
                }); 
            }
            else {
                let a: number = -1;
                newBasketState.map( (el: any, ind: number) => {
                    if (
                        (el.productId === action.payload.id ) &&
                        (el.color === state.selectedColor ) && 
                        (el.size === state.selectedSize)
                    ) {
                        a = ind;
                    }
                });
                if (a === -1) {
                        newBasketState.push({
                            productId: action.payload.id,
                            size: action.payload.selectedSize,
                            color: action.payload.selectedColor,
                            price: action.payload.price,
                            count: 1
                        }); 
                    }                
                else {
                    newBasketState[a].count += 1;
                }
            }    
           
            return {
                ...state,
                basket: newBasketState
            }
        };
        case ActionTypes.SHOW_MINI_BASKET :
            return {
                ...state,
                showMiniBasket: !state.showMiniBasket
            };    
        case ActionTypes.SHOW_BASKET :
            return {
                ...state,
                curPage: "basket"
            }    
        case ActionTypes.CHANGE_BASKET_COUNT:
            alert(action.payload.val)
            let newBasket:any[] = [];
            state.basket.map( (el: any) => {
                if ( el.productId === action.payload.basketElementId) {
                    let newCoutn = el.count + action.payload.val;
                    el.count = newCoutn;
                    if ( newCoutn > 0 ) {
                        newBasket.push(el);
                    }
                };                
            })
            return {
                ...state,
                basket: newBasket
            }
        case ActionTypes.SELECT_CURRENCY:
            let newCoef = 0;
            switch( action.payload ) {
                case "USD" : newCoef = 1; break;
                case "EUR" : newCoef = 1.05; break;
                case "JPY" : newCoef = 0.007419; break; 
            }       
            return {
                ...state,
                currencyCoef: newCoef,
                selectedCurrency: action.payload
            }
            
        default: 
            return state
    }
}

export default rootReducer;