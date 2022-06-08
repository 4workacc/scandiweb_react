import { Component } from "react";
import { connect } from "react-redux";
import { IStore } from "../../../types";
import "./styles.css";

interface IProp {
    title: string,
    subtitle: string,
    price: number,
    info: string,
    id: number,
    inStore: string,
    showProduct?:(id: number) => void;
}

class Product extends Component<IProp>{
    render() {
        return (
            <div className = {"Product " + this.props.inStore}>
                <div>img</div>
                <p>{this.props.title}</p>
                <p>{this.props.subtitle}</p>
                <p>{this.props.price}</p>
                <p>{this.props.info}</p>
                {this.props.inStore.length===0 && <div className = "ProductBuyButton" onClick = { ()=> this.props.showProduct!(this.props.id)}>

                </div>}
                {/* out of stock action */}
            </div>
        )
    }
}

const mapStateToProps = (state: IStore ) => ({})
const dispatchProps = (dispatch: any) => {
    return {
        showProduct:(id: number) => dispatch({
            type: "SHOW_PRODUCT",
            payload: id
        })
    }
}

export default connect(mapStateToProps, dispatchProps)(Product);