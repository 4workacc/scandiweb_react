import { Component } from "react";
import { connect } from "react-redux";
import { IStore } from "../../../types";
import "./styles.css";

interface IProp {
    title: string,
    subtitle: string,
    price: number,
    info: string,
    id: number,
    inStore: string,
    selectedCurrency?: string,
    showProduct?:(id: number) => void;
}

class Product extends Component<IProp>{
    render() {
        return (
            <div className = {"ProductCard " + this.props.inStore}>                
                <div className="ProductCard_img"><img src={`../../../assets/imgs/products/${this.props.id}/1.jpg`}></img></div>
                <div className="ProductCard_title">
                    <p>{this.props.title}</p>
                    <p>{this.props.subtitle}</p>
                </div>
                <p className="ProductCard_price">{this.props.selectedCurrency}{this.props.price}</p>                
                {/* {this.props.inStore.length===0 &&  */}
                    <div className = "ProductCardBuyButton" 
                        onClick = { ()=> this.props.showProduct!(this.props.id)}> 
                        <img src="../../../assets/imgs/basket.svg"></img>                                       
                </div>
                {/* } */}
                {/* out of stock action */}
            </div>
        )
    }
}

const mapStateToProps = (state: IStore ) => ({
    selectedCurrency: state.selectedCurrency
})
const dispatchProps = (dispatch: any) => {
    return {
        showProduct:(id: number) => dispatch({
            type: "SHOW_PRODUCT",
            payload: id
        })
    }
}

export default connect(mapStateToProps, dispatchProps)(Product);