import { Component } from "react";
import "./styles.css";

class Product extends Component{
    render() {
        return (
            <div className = "Product">
                <div>img</div>
                <p>title</p>
                <p>price</p>
                {/* out of stock action */}
            </div>
        )
    }
}

export default Product;