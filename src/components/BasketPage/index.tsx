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
    render() {
        return (
            <div className="BasketPage">                
                { this.props.basket!.length > 0 && 
                <>
                    <h1>Cart</h1>
                    {
                        this.props.basket!.map( (el: any) => {
                            return <ProductMini size="big"/>
                        })
                    }
                    <h2>Tax: {this.props.tax}% : <b>{this.props.currency!}{this.state.userTaxSum!}</b></h2>
                    <h2>Quantity: <b>{this.props.basket!.length}</b></h2>
                    <h2>Total:  {this.props.currency!} <b>{this.state.fullProductPrice}</b></h2>
                    <h2>To pay:  {this.props.currency!}<b>{this.state.fullProductPrice - this.state.userTaxSum}</b></h2>
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