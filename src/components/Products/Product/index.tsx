import { Component } from "react";
import { connect } from "react-redux";
import { IStore } from "../../../types";
import { returnCurrency } from "../../../utils";
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
    currencyCoef?: number
}

class Product extends Component<IProp>{
    render() {
        return (
            <div className = {"ProductCard " + this.props.inStore}>  
                <div className = "ProductCard_wrapper">              
                    <div className="ProductCard_img">
                        <img src={`../../../assets/imgs/products/${this.props.id}/1.jpg`}></img>
                    </div>
                    <div className="ProductCard_title">
                        <p>{this.props.title}</p>
                        <p>{this.props.subtitle}</p>
                    </div>
                    <p 
                        className="ProductCard_price">{returnCurrency(this.props.selectedCurrency!)}
                        {this.props.price*this.props.currencyCoef!}</p>                 
                        {
                            this.props.inStore.length===0 && <div className = "ProductCardBuyButton" id="b"
                                onClick = { ()=> this.props.showProduct!(this.props.id)}> 
                                <img src="../../../assets/imgs/basket.svg"></img>                                       
                              </div>
                        }                
                </div>       
                {
                    (this.props.inStore.length != 0) && 
                    <div className="ProductCard_overlay">
                        <p>OUT OF STOCK</p>
                    </div>
                    }          
            </div>
        )
    }
}

const mapStateToProps = (state: IStore ) => ({
    selectedCurrency: state.selectedCurrency,
    currencyCoef: state.currencyCoef
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