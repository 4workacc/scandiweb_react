import { Component } from "react";
import { connect } from "react-redux";
import { ActionTypes } from "../../store/rootReducer";
import { IStore } from "../../types";
import BasketCurrency from "./BasketCurrency";
import BasketIcon from "./BasketIcon";
import "./styles.css";
interface IProps {
    curCathegory?: string,
    switchCurCathegory?(a:string): void,
    routeToBasket?:()=>void
}
class NavBar extends Component<IProps>{
    render() {
        return (
            <div className = "Navbar">
                <ul className = "NavBar_Cathegories">
                    <li onClick={ () => this.props.switchCurCathegory!("women")} className={this.props.curCathegory === "women"?`navBarSelectedCathegory`:"x"}>women</li>
                    <li onClick={ () => this.props.switchCurCathegory!("men")} className={this.props.curCathegory === "men"?`navBarSelectedCathegory`:"x"}>men</li>
                    <li onClick={ () => this.props.switchCurCathegory!("kids")} className={this.props.curCathegory === "kids"?`navBarSelectedCathegory`:"x"}>kids</li>
                </ul>
                <div className = "NavBar_logo" onClick = { () => this.props.routeToBasket!()}></div>
                <div className="NavBar_GUI">
                    <BasketCurrency />
                    <BasketIcon />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: IStore) => ({
    curCathegory: state.curCathegory
})

const dispatchToProps = (dispatch: any) => {
    return {
        switchCurCathegory:( newCat: string ) => dispatch({
            type: "SELECT_CATHEGORY",
            payload: newCat
        }),
        routeToBasket:() => dispatch({
            type: ActionTypes.SHOW_BASKET
        })
    }
}

export default connect(mapStateToProps, dispatchToProps)(NavBar);