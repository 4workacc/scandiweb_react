import initState from "./initState";

const rootReducer = (state = initState, action: any) => {
    switch ( action.type ) {
        case "SELECT_CATHEGORY" : 
            return {
                ...state,
                curCathegory: action.payload
            };           
        default: 
            return state
    }
}

export default rootReducer;