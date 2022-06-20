export const returnCurrency = (cur: string): string =>{    
    switch ( cur ) {
        case "USD": 
            return "$";
        case "JPY" : 
            return "¥";
        case "EUR" : 
            return "€";
        default: return "$"
    }       
}