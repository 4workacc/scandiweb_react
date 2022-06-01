import { Component } from "react";
import Product from "../Product";
import "./styles.css";

class Products extends Component{
    render() {
        return (
            <div className = "Products">
                <h1 className="Products_CathegoryName">name</h1>
                {/* product.map to flex table */}
                <div className="Products_Cards">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        )
    }
}

export default Products;