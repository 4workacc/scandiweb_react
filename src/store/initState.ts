import { IStore } from "../types";

const initState: any = {
    curPage: "products",
    curCathegory: "women",
    displayProductId: 1,
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