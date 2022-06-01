import { Component } from "react";
import BasketCurrency from "../Basket/BasketCurrency";
import BasketIcon from "../Basket/BasketIcon";
import "./styles.css";

class NavBar extends Component{
    render() {
        return (
            <div className = "Navbar">
                <ul className = "NavBar_Cathegories">
                    <li>women</li>
                    <li>men</li>
                    <li>kids</li>
                </ul>
                <div>logo</div>
                <div className="NavBar_GUI">
                    <BasketCurrency />
                    <BasketIcon />
                </div>
            </div>
        )
    }
}

export default NavBar;