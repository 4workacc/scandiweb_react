import { Component } from "react";
import { connect } from "react-redux";
import { IStore } from "../../types";
import ColorIcon from "./ColorIcon";
import SizeIcon from "./SizeIcon";

import { IProduct } from "../../types";

import "./styles.css";
import { ActionTypes } from "../../store/rootReducer";
import { returnCurrency } from "../../utils";

interface IProps {
    curProductId?: number| null,      
    addProductToBasket?:(n: number, p: number, s: string, c: string) => void,
    storeSize?: string | null,
    storeColor?: string | null,
    fullProductlist?: IProduct[] | null,
    currencyCoef?: number,
    currency?: string | null
}
interface IState {   
    curProductData: IProduct | null,    
    curSelectedImg: string,
    size: string,
    color: string
}


class ProductPage extends Component<IProps, IState> {
    constructor (props:IProps){
        super(props);
        this.state = {           
            curProductData: null,     
            curSelectedImg: "1.jpg",
            size: "none",
            color: "none"     
        }
        this.selectColorInChild =this.selectColorInChild.bind(this);
        this.selectSizeInChild = this.selectSizeInChild.bind(this);
    };
    componentWillMount(){              
        this.setState({
            ...this.state,
            curProductData: this.props.fullProductlist![this.props.curProductId!]
        })
    }
    selectColorInChild(c: string){
        this.setState({
            ...this.state,
            color: c
        })
    }
    selectSizeInChild(s: string){
       this.setState({
            ...this.state,
            size: s
       })
    }
    render() {
        return (
            <div className="ProductPage">
                {/* {"Product page" +this.props.curProductId} */}
               
                <div className="ProductPage_main">
                <div className="ProductPage_imgs">
                    {
                        this.state.curProductData!.imgs!.map ( (imgPath: string) => {
                            return <img src={`../../assets/imgs/products/${this.props.curProductId}/${imgPath}`} key={Math.random()*20}></img>
                        })
                    }
                </div>
                    <img 
                        className="ProductPage_main__img" 
                        src={`../../assets/imgs/products/${this.props.curProductId}/${this.state.curSelectedImg}`}></img>
                    <div className="ProductPage_main__info">
                        <h1 
                            className="ProductPage_main__title">
                            {this.state.curProductData!.title}</h1>
                        <h2 
                            className="ProductPage_main__subtitle">
                            {this.state.curProductData!.subtitle}</h2>
                        <p>size:</p>
                        <div className="ProductPage_main__sizes">
                            {
                                this.state.curProductData!.sizes!.map( (size: string) => 
                                <SizeIcon 
                                    sizeLetter={size} 
                                    key={Math.random()*20+30} 
                                    setSizeAtStore = {this.selectSizeInChild}
                                    isSelected = {this.state.size === size}/>
                                )
                            }
                        </div>
                        <p>color:</p>
                        <div className = "ProductPage_main__colors">
                            {
                                this.state.curProductData!.colors!.map ( (color: string) => 
                                    <ColorIcon 
                                        color = {color} 
                                        key={Math.random()+"1"}
                                        setColorAtStore = {this.selectColorInChild} 
                                        isSelected = {this.state.color === color}/>
                                )
                            }                        
                        </div>
                        <p>price:</p>
                        <p className="ProductPage_main__price">{returnCurrency(this.props.currency!)+""+ this.state.curProductData?.price!*this.props.currencyCoef!} {this.state.curProductData?.currency}</p>
                        <button 
                            className= {"ProductPage_main__but "+ ( (this.props.storeColor !== null) && (this.props.storeSize !== null)  ? "" : "butDisable") }
                            onClick={() => 
                                this.props.addProductToBasket!(
                                    this.props.curProductId!, 
                                    this.state.curProductData?.price!,
                                    this.state.size!,
                                    this.state.color!)}
                            >ADD TO CART</button>
                        <div className="ProductPage_main__textInfo">{this.state.curProductData!.info}</div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: IStore) => ({
    curProductId: state.displayProductId,
    fullProductlist: state.fullProductList,
    currencyCoef: state.currencyCoef,
    currency: state.selectedCurrency
}) 

const dispatchAction = (dispatch: any) => {
    return {
        addProductToBasket:(id: number, price: number, size: string, color: string) => dispatch({
            type: ActionTypes.ADD_PRODUCT_TO_CART,
            payload: {
                id: id,
                price: price,
                selectedSize: size,
                selectedColor: color
            }
        })
    }
}

export default connect(mapStateToProps, dispatchAction)(ProductPage);