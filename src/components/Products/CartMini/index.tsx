import { Component } from "react";
import { connect } from "react-redux";
import { IStore } from "../../../types";
import "./styles.css";

interface IProps {
    showMiniBasket?: boolean;
    basket: any[]
}
class CartMini extends Component<IProps> {
    render() {
        return(
            <div className="CartMini">
                mini cart
            </div>
        )
    }
}

const mapStateToProps = (state: IStore) => ({
    showMiniBasket: state.showMiniBasket,
    basket: state.basket
})

export default connect(mapStateToProps)(CartMini);