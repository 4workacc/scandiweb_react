import { Component } from "react";
import { connect } from "react-redux";
import {  IBasketProduct, IStore } from "../../../types";
import "./styles.css";

interface IProps {
    basket?: IBasketProduct[] | []
}
class BasketIcon extends Component<IProps> {
    render(){
        return (
            <div className="BasketIcon">
                <div className="BasketIcon_img"></div>
                {this.props.basket!.length >0 &&<p className="BasketIcon_Counter">{this.props.basket!.length}</p>}
            </div>
        )
    }
}

const mapStateToProps = (state: IStore) => ({
    basket: state.basket
})

export default connect(mapStateToProps)(BasketIcon);