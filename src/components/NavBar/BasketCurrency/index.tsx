import { Component } from "react";
import { connect } from "react-redux";
import { ActionTypes } from "../../../store/rootReducer";
import { IStore } from "../../../types";
import { returnCurrency } from "../../../utils";
import "./styles.css";

interface IProps {
    selectCurrency:(s: string) => void,
    currency?: string
}
interface IState {
    isShowDropDown: boolean
}

class BasketCurrency extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            isShowDropDown: false
        }
    }
    render(){
        return (
            <div className="BasketCurrency">
                <div className="BasketCurrency_GUI">
                    <p>{returnCurrency(this.props.currency!)}</p>
                    <button className="selectCurrencyButton" onClick = {()=>{ this.setState({...this.state, isShowDropDown: !this.state.isShowDropDown})}}>             
                        <div className="selectCurrencyButton_img"></div>           
                    </button>
                </div>
                <div className = {`NavBar_Currency ${this.state.isShowDropDown?"":"basketCurrencyDisable"}` } 
                   >
                    {/* <button className="selectCurrencyButton" onClick = {()=>{ this.setState({...this.state, isShowDropDown: !this.state.isShowDropDown})}}>             
                        <span className="selectCurrencyButton_img" />           
                    </button> */}
                    <p onClick = { ()=>{ 
                            this.props.selectCurrency("USD"); 
                            this.setState({
                                isShowDropDown: false
                            });
                        }}>$ USD</p>
                    <p onClick = { ()=>{ 
                            this.props.selectCurrency("EUR");
                            this.setState({
                                isShowDropDown: false
                            });
                        }}>E EUR</p>
                    <p onClick = { ()=>{ 
                        this.props.selectCurrency("JPY");
                        this.setState({
                            isShowDropDown: false
                            });
                        }}>Y JPY</p>
                </div>
            </div>
        )
    }
}

const mapStateTpProps = (state: IStore) => ({
    currency: state.selectedCurrency
})
const dispatchAction = (dispatch: any) => {
    return {
        selectCurrency:(s: string) => dispatch({
            type: ActionTypes.SELECT_CURRENCY,
            payload: s
        })
    }
}

export default connect(mapStateTpProps, dispatchAction)(BasketCurrency);