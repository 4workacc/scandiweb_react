import { IStore } from "../types";

const initState: any = {
    curPage: "products",
    curCathegory: "women",
    displayProductId: 1,
    selectedCurrenty: "JPY",
    selectedSize: null,
    selectedColor: null,
    basket: [],
    showMiniBasket: false,
    userTax: 21
}

export default initState;