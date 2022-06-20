import { Component } from "react";
import { connect } from "react-redux";
import { ActionTypes } from "../../store/rootReducer";
import { IBasketProduct, IProduct, IStore } from "../../types";
import { returnCurrency } from "../../utils";
import ColorIcon from "../ProductPage/ColorIcon";
import SizeIcon from "../ProductPage/SizeIcon";

import "./styles.css";

interface IProps {
    size: "big" | "small",
    basketElement?: IBasketProduct,
    fullProductList?: any,
    changeCount?:(n: number, q: number) => void,
    currencyCoef?: number,
    currency?: string
}

class ProductMini extends Component<IProps> {
    render() {
        return (
            <div className = {"ProductMini_" + this.props.size}>               
                <div className={"ProductMini_info_" + this.props.size}>
                    <p className={"ProductMini_info_title_" + this.props.size}>{this.props.fullProductList![this.props.basketElement!.productId]!.title}</p>
                    <p className={"ProductMini_info_subtitle_" + this.props.size}>{this.props.fullProductList![this.props.basketElement!.productId]!.subtitle}</p>
                    <p className={"ProductMini_info__price_"+this.props.size}>{`${returnCurrency(this.props.currency!)}${this.props.fullProductList[this.props.basketElement!.productId].price*this.props.currencyCoef!}`}</p>
                    <p className={"ProductMini_info_label_" + this.props.size}>Size:</p>
                    <div className={"ProductMini_info__sizes_" +this.props.size} >                       
                        {this.props.fullProductList![this.props.basketElement!.productId].sizes.map( (el: any) => {
                            return <SizeIcon sizeLetter={el} isSelected={true}/>
                        })} 
                    </div>
                    <p className={"ProductMini_info_label_" + this.props.size}>Color:</p>
                    <div className={"ProductMini_info__colors_"+this.props.size}>                        
                        {this.props.fullProductList![this.props.basketElement!.productId].colors.map( (el: any) => {
                            return  <ColorIcon color={el} />
                        })} 
                    </div>
                </div>
                <div className={"ProductMini_panel_"+this.props.size}>
                    <div className={"ProductMini_counter_"+this.props.size}>
                        <div onClick = { () => { this.props.changeCount!(this.props.basketElement?.productId!, 1)}}>+</div>
                        <p>{this.props.basketElement?.count}</p>
                        <div onClick = { () => { this.props.changeCount!(this.props.basketElement?.productId!, -1)}}>-</div>
                    </div>
                    <div className={"ProductMini_img_"+this.props.size}>
                        <img src={`../assets/imgs/products/${this.props.basketElement!.productId}/1.jpg`}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: IStore ) => ({
    fullProductList: state.fullProductList,
    currencyCoef: state.currencyCoef,
    currency: state.selectedCurrency
})

const dispatchAction = (dispatch: any) => {
    return {
        changeCount:(id: number, val: number) => dispatch({
            type: ActionTypes.CHANGE_BASKET_COUNT,
            payload: {
                basketElementId: id,
                val: val
            }
        })
    }
}

export default connect(mapStateToProps, dispatchAction)(ProductMini);