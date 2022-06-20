import { Component } from "react";
import { connect } from "react-redux";
import { IStore } from "../../../types";
import ProductMini from "../../ProductMini";
import "./styles.css";

interface IProps {
    showMiniBasket?: boolean;
    basket: any[]
}
class CartMini extends Component<IProps> {
    calcCountOfItems(){
        let sum = 0;
        this.props.basket.map( (el: any) => {
            sum += el.count
        });
        return sum;
    }
    calcUSDPriceOfItems(){
        let sum = 0;
        this.props.basket.map( (el: any) => {
            sum += el.price*el.count
        });
        return sum;
    }
    render() {
        return(
            <div className="CartMini">
                <div className = "CartMini_Wrapper">
                 <p>{`My bag, ${this.calcCountOfItems()} items`}</p>
                    { this.props.basket.length >0 && this.props.basket.map( (el:any) => {
                        return <ProductMini size="small" basketElement={el}/>
                    })}
                 <p>{`Total $${this.calcUSDPriceOfItems()}`}</p>               
                    <div className = "CartMini_GUI">
                        <p>View bag</p>
                        <p>CHECK OUT</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: IStore) => ({
    showMiniBasket: state.showMiniBasket,
    basket: state.basket
})

export default connect(mapStateToProps)(CartMini);