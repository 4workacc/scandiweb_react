import { Component } from "react";
import { IProduct } from "../../types";
import Product from "../Product";
import CartMini from "./CartMini";
import "./styles.css";

type TProps = {

}
type TState = {
    isShowCartMini: boolean,
    products: IProduct[]
}

class Products extends Component<TProps, TState> {
    state: TState = {
        isShowCartMini: false,
        products: [{
            id: 1,
            category: "kids",
            title: "RRRR",
            subtitle: "QQQ",
            size: ["S"],
            color: ["black"],
            price: 10,
            currency: "$",
            info: "asdasdas",
            imgs:[]
        },
        {
            id: 1,
            category: "kids",
            title: "RRRR",
            subtitle: "QQQ",
            size: ["S"],
            color: ["black"],
            price: 10,
            currency: "$",
            info: "asdasdas",
            imgs:[]
        }]
    };
    render() {
        return (
            <div className = "Products">
                { this.state.isShowCartMini && <CartMini />}
                <h1 className="Products_CathegoryName">name</h1>               
                <div className="Products_Cards">
                    { this.state.products.length>0 && this.state.products.map ( 
                        (product: IProduct) => 
                        (<Product />)
                    )}
                </div>
            </div>
        )
    }
}

export default Products;