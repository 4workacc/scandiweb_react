import { Component } from "react";
import { connect } from "react-redux";
import { IStore } from "../../types";
import ProductMini from "../ProductMini";

import "./styles.css";

interface IProps {
    basket?: any[],
    tax?: number,
    currency?: "USD" | "EUR" | "JPY"
}

interface IState {
    fullProductPrice: number,
    userTaxSum: number,
}

class BasketPage extends Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            fullProductPrice: 0,
            userTaxSum: 0
        }
    }

    componentWillReceiveProps(){
        let fprice: number = 0;
        this.props.basket?.map( (el: any) => {
            fprice += el.price;
        })
        this.setState({
            fullProductPrice: fprice,
            userTaxSum: fprice*this.props.tax!
        })
    }
    sumCountOfProducts(){
        let sum = 0;
        this.props.basket?.map((el: any) => {
            sum += el.count;
        })
        return sum;
    }
    sumPriceOfProducts(){
        let sum = 0;
        this.props.basket?.map((el: any) => {
            sum += el.count*el.price;
        })
        return sum;
    }
    sumPriceOfProductsWithTax(){
        let sum = 0;
        this.props.basket?.map((el: any) => {
            sum += el.count*el.price;
        })
        return sum*this.props.tax!/100;
    };
    returnCurrency(cur: string): string{    
        switch ( cur ) {
            case "USD": 
                return "$";
            case "JPY" : 
                return "¥";
            case "EUR" : 
                return "€";
            default: return "$"
        }       
    }
    render() {
        return (
            <div className="BasketPage">                
                { this.props.basket!.length > 0 && 
                <>
                    <h1>Cart</h1>
                    {
                        this.props.basket!.map( (el: any) => {
                            return <ProductMini size="big" basketElement={el}/>
                        })
                    }
                    <h2>Tax: {this.props.tax}% : <b>{this.returnCurrency(this.props.currency!)}{this.sumPriceOfProductsWithTax()}</b></h2>
                    <h2>Quantity: <b>{this.sumCountOfProducts()}</b></h2>
                    <h2>Total:  {this.returnCurrency(this.props.currency!)} <b>{this.sumPriceOfProducts()}</b></h2>
                    <h2>To pay:  {this.returnCurrency(this.props.currency!)}<b>{this.sumPriceOfProducts() - this.sumPriceOfProductsWithTax()}</b></h2>
                    </>
                }              
                {
                    this.props.basket!.length === 0 && "No selected product yet"
                }                
            </div>
        )
    }
}

const mapStateToProps = ( state: IStore ) => ({
    currency: state.selectedCurrency,
    basket: state.basket,
    tax: state.userTax
})

export default connect(mapStateToProps)(BasketPage);