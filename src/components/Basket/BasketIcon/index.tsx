import { Component } from "react";
import "./styles.css";

class BasketIcon extends Component {
    render(){
        return (
            <div className="BasketIcon">
                <div className="BasketIcon_img"></div>
                <p className="BasketIcon_Counter">1</p>
            </div>
        )
    }
}

export default BasketIcon;