import { IStore } from "../types";

const initState: any = {
    curPage: "products",
    curCathegory: "women",
    displayProductId: 1,
    selectedCurrenty: "JPY",
    selectedSize: null,
    selectedColor: null,
    basket: [{
        productId: 1,
        size: "S",
        color: "#DDD",
        img: "",
        count: 2
    },
    {
        productId: 1,
        size: "S",
        color: "#DDD",
        img: "",
        count: 2
    }]
}

export default initState;