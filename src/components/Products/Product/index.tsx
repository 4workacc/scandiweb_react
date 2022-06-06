import { Component } from "react";
import "./styles.css";

interface IProp {
    title: string,
    subtitle: string,
    price: number,
    info: string
}

class Product extends Component<IProp>{
    render() {
        return (
            <div className = "Product">
                <div>img</div>
                <p>{this.props.title}</p>
                <p>{this.props.subtitle}</p>
                <p>{this.props.price}</p>
                <p>{this.props.info}</p>
                {/* out of stock action */}
            </div>
        )
    }
}

export default Product;