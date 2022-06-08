export interface IProduct {
    id?: number;
    category?: "women" | "men" | "kids";
    title: string;
    subtitle: string;
    size?: string[];
    color?: string[];
    price: number;
    currency?: "$" | "&";
    info: string;
    imgs?: [];
    storeCount: number;
}

export interface IBuyItem {
    product: IProduct;
    count: number;
}

export interface IUserBuyList {
    tax: number;
    items: IBuyItem[] | null;
}

export interface IStore {
    curPage: "products" | "product" | "basket";
    fullProductList: IProduct[] | null;
    curCathegory: "women" | "men" | "kids";
    displayProductList: IProduct[] | null;
    displayProductId: number | null;
    showMiniBasket: boolean;
}

export enum ActionTypes {
    // app
    SELECT_CATHEGORY = "SELECT_CATHEGORY",
    SWITCH_PAGE = "SWITCH_PAGE",
    SHOW_PRODUCT = "SHOW_PRODUCT",
    SHOW_MINI_BASKET = "SHOW_MINI_BASKET"
    // saga
}

// store: 
// curPage: products | product | buyList
// fullProductList: IProduct[]
// curCathegory: "women"
// displayProductList: IProduct[]
// displayProduct: IProduct
// showMiniBasket


//load from server products list to store -> fullProductList ( IProduct[] )
//select products by curCathegory to displayProductList ()
//onClick by any fullProductList get it id and set store -> displayProduct and switch store -> curPage
//by closing product card generate store -> displayProductList by current store -> curCathegory and switch store -> curPage
//by addting product to buyList action to add-> buyList

//on hover navbar basketicon set showMiniBasket -> blur main screen and show