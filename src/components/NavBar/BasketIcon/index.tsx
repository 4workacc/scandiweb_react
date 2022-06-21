import { Component } from "react";
import { connect } from "react-redux";
import { ActionTypes } from "../../../store/rootReducer";
import {  IBasketProduct, IStore } from "../../../types";
import "./styles.css";

interface IProps {
    basket?: IBasketProduct[] | [],
    switchMiniCart:()=> void,    
}

class BasketIcon extends Component<IProps> {
    render(){
        return (
            <div className="BasketIcon" 
                onClick={()=> this.props.switchMiniCart()}              
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
    }
}

export default connect(mapStateToProps, dispatchAction)(BasketIcon);