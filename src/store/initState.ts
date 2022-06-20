import { IStore } from "../types";

const initState: any = {
    curPage: "products",
    curCathegory: "women",

    fullProductList: [],

    displayProductId: 1,
    selectedCurrency: "USD",
    selectedSize: null,
    selectedColor: null,
    basket: [],
    showMiniBasket: false,
    userTax: 21
}

export default initState;