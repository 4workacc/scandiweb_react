import { Component } from "react";
import { connect } from "react-redux";
import { ActionTypes } from "../../../store/rootReducer";
import { IStore } from "../../../types";
import "./styles.css";

interface IProps {
    selectCurrency:(s: string) => void
}

class BasketCurrency extends Component<IProps>{
    returnCurrency(s: string){
        switch (s) {
            case "$" : return "USD"; 
            case "E" : return "EUR"; 
            case "Y" : return "JPY";
        }
    }
    render(){
        return (
            <div className="BasketCurrency">
                <select className = "NavBar_Currency" onChange={(e: any)=>{ this.props.selectCurrency(this.returnCurrency(e.target.value)!)}}>
                    <option>$</option>
                    <option>E</option>
                    <option>Y</option>
                </select>
            </div>
        )
    }
}

const mapStateTpProps = (state: IStore) => ({})
const dispatchAction = (dispatch: any) => {
    return {
        selectCurrency:(s: string) => dispatch({
            type: ActionTypes.SELECT_CURRENCY,
            payload: s
        })
    }
}

export default connect(mapStateTpProps, dispatchAction)(BasketCurrency);