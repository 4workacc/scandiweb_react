import { Component } from "react";
import { connect } from "react-redux";
import { ActionTypes } from "../../../store/rootReducer";
import {  IBasketProduct, IStore } from "../../../types";
import "./styles.css";

interface IProps {
    basket?: IBasketProduct[] | [],
    switchMiniCart:()=> void,
    routeToBasket:() => void
}
class BasketIcon extends Component<IProps> {
    render(){
        return (
            <div className="BasketIcon" 
                onMouseOver={()=> this.props.switchMiniCart()}
                // onMouseLeave={()=> this.props.switchMiniCart()}
                onClick = { () => this.props.routeToBasket()}
                >               
                <div className="BasketIcon_img"></div>
                {this.props.basket!.length >0 &&<p className="BasketIcon_Counter">{this.props.basket!.length}</p>}
            </div>
        )
    }
}

const mapStateToProps = (state: IStore) => ({
    basket: state.basket
})

const dispatchAction = ( dispatch: any) => {
    return {
        switchMiniCart: () => dispatch({
            type: ActionTypes.SHOW_MINI_BASKET
        }),
        routeToBasket:() => dispatch({
            type: ActionTypes.SHOW_BASKET
        })
    }
}

export default connect(mapStateToProps, dispatchAction)(BasketIcon);