import { Component } from "react";
import { connect } from "react-redux";
import { IStore } from "../../../types";
import ProductMini from "./ProductMini";
import "./styles.css";

interface IProps {
    showMiniBasket?: boolean;
    basket: any[]
}
class CartMini extends Component<IProps> {
    render() {
        return(
            <div className="CartMini">
                 <p>My bag, 3 items</p>
                    { this.props.basket.map( (el:any) => {
                        return <ProductMini />
                    })}
                 <p>Total $200</p>
                <div>
                    <div>View bag</div>
                    <div>CHECK OUT</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: IStore) => ({
    showMiniBasket: state.showMiniBasket,
    basket: state.basket
})

export default connect(mapStateToProps)(CartMini);