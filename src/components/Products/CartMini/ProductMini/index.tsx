import { Component } from "react";
import ColorIcon from "../../../ProductPage/ColorIcon";
import SizeIcon from "../../../ProductPage/SizeIcon";
import "./styles.css";

class ProductMini extends Component {
    render() {
        return (
            <div className = "ProductMini">
               
                <div className="ProductMini_info">
                    <p>Apollo</p>
                    <p>Running short</p>
                    <div className="ProductMini_info__price"><p>$</p><p>50</p></div>
                    <p>Size</p>
                    <div className="ProductMini_info__sizes" >
                        <SizeIcon sizeLetter="XS"/>
                        <SizeIcon sizeLetter="S"/>
                        <SizeIcon sizeLetter="M"/></div>
                    <p>Color:</p>
                    <div className="ProductMini_info__colors">
                        <ColorIcon color="#FFFFFF"/>
                        <ColorIcon color="#0FA111" />
                    </div>
                </div>
                <div className="ProductMini_counter">
                    <div>^</div>
                    <p>1</p>
                    <div>_</div>
                </div>
                <div className="ProductMini_img"></div>
               
            </div>
        )
    }
}

export default ProductMini;