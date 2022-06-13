import { Component } from "react";
import "./styles.css";

class BasketCurrency extends Component {
    render(){
        return (
            <div className="BasketCurrency">
                <select className = "NavBar_Currency">
                    <option>$</option>
                    <option>E</option>
                    <option>Y</option>
                </select>
            </div>
        )
    }
}
export default BasketCurrency;