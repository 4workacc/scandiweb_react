import { Component } from "react";
import { connect } from "react-redux";
import { IStore } from "../../types";
import ProductMini from "../ProductMini";

interface IProps {
    basket?: any[]
}

class BasketPage extends Component<IProps> {
    render() {
        return (
            <div className="BasketPage">
                { this.props.basket!.length > 0 &&this.props.basket!.map( (el: any) => {
                    return <ProductMini size="big"/>
                })}
                {
                    this.props.basket!.length === 0 && "No selected product yet"
                }
            </div>
        )
    }
}

const mapStateToProps = ( state: IStore ) => ({
    basket: state.basket
})

export default connect(mapStateToProps)(BasketPage);