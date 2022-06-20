import { Component } from "react";
import { connect } from "react-redux";
import { IBasketProduct, IProduct, IStore } from "../../types";
import ColorIcon from "../ProductPage/ColorIcon";
import SizeIcon from "../ProductPage/SizeIcon";

import "./styles.css";

interface IProps {
    size: "big" | "small",
    basketElement?: IBasketProduct,
    fullProductList?: any
}

class ProductMini extends Component<IProps> {
    render() {
        return (
            <div className = {"ProductMini_" + this.props.size}>               
                <div className={"ProductMini_info_" + this.props.size}>
                    <p className={"ProductMini_info_title_" + this.props.size}>{}</p>
                    <p className={"ProductMini_info_subtitle_" + this.props.size}>Running short</p>
                    <p className={"ProductMini_info__price_"+this.props.size}>{`$${50}`}</p>
                    <p className={"ProductMini_info_label_" + this.props.size}>Size</p>
                    <div className={"ProductMini_info__sizes_" +this.props.size} >                       
                        {this.props.fullProductList![this.props.basketElement!.productId].sizes.map( (el: any) => {
                            return <SizeIcon sizeLetter={el}/>
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
                        <div>^</div>
                        <p>1</p>
                        <div>_</div>
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
    fullProductList: state.fullProductList
})

export default connect(mapStateToProps)(ProductMini);