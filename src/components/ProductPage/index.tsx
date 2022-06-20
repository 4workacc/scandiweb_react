import { Component } from "react";
import { connect } from "react-redux";
import { IStore } from "../../types";
import ColorIcon from "./ColorIcon";
import SizeIcon from "./SizeIcon";

import { IProduct } from "../../types";

import "./styles.css";
import { rmSync } from "fs";
import { gql } from "@apollo/client";
import { ActionTypes } from "../../store/rootReducer";
interface IProps {
    curProductId?: number| null,      
    addProductToBasket?:(n: number, p: number) => void,
    storeSize?: string | null,
    storeColor?: string | null
}
interface IState {
    productBase: any,
    curProductData: IProduct | null,    
    curSelectedImg: string
}


class ProductPage extends Component<IProps, IState> {
    constructor (props:IProps){
        super(props);
        this.state = {
            productBase: [{
                id: 1,
                category: "kids",
                title: "kid RRRR11",
                subtitle: "QQQ",
                sizes: ["XS", "S", "M"],
                colors: ["#D3D2D5", "#2B2B2B", "#0F6450"],
                price: 10,
                currency: "$",
                info: "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
                imgs:["1.jpg","2.jpg","3.jpg"],
                storeCount: 10
            },
            {
                id: 2,
                category: "kids",
                title: "kid RRRR12",
                subtitle: "QQQ",
                sizes: ["XS", "S", "M", "L"],
                colors: ["#D3D2D5", "#2B2B2B", "#0F6450"],
                price: 10,
                currency: "$",
                info: "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
                imgs:["1.jpg","2.jpg"],
                storeCount: 10
            },
            {
                id: 3,
                category: "men",
                title: "men RRRR31",
                subtitle: "QQQ",
                sizes: ["S", "M", "L"],
                colors: ["#D3D2D5", "#2B2B2B", "#0F6450"],
                price: 10,
                currency: "$",
                info: "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
                imgs:["1.jpg","2.jpg","3.jpg"],
                storeCount: 10
            },
            {
                id: 4,
                category: "women",
                title: "women RRRR21",
                subtitle: "QQQ",
                sizes: ["XS", "S", "M", "L"],
                colors: ["#D3D2D5", "#2B2B2B", "#0F6450"],
                price: 10,
                currency: "$",
                info: "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
                imgs:["1.jpg","2.jpg"],
                storeCount: 10
            },
            {
                id: 5,
                category: "men",
                title: "men RRRR32",
                subtitle: "QQQ",
                sizes: ["S", "M", "L"],
                colors: ["#D3D2D5", "#2B2B2B", "#0F6450"],
                price: 10,
                currency: "$",
                info: "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
                imgs:["1.jpg", "2.jpg"],
                storeCount: 0
            }],
            curProductData: null,     
            curSelectedImg: "1.jpg"      
        }
    };
    componentWillMount(){        
        this.setState({
            ...this.state,
            curProductData: this.state.productBase[this.props.curProductId!]
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
                            return <img src={`../../assets/imgs/products/${this.props.curProductId}/${imgPath}`}></img>
                        })
                    }
                </div>
                    <img className="ProductPage_main__img" src={`../../assets/imgs/products/${this.props.curProductId}/${this.state.curSelectedImg}`}></img>
                    <div className="ProductPage_main__info">
                        <h1 className="ProductPage_main__title">{this.state.curProductData!.title}</h1>
                        <h2 className="ProductPage_main__subtitle">{this.state.curProductData!.subtitle}</h2>
                        <p>size:</p>
                        <div className="ProductPage_main__sizes">
                            {
                                this.state.curProductData!.sizes!.map( (size: string) => 
                                <SizeIcon sizeLetter={size} />
                                )
                            }
                        </div>
                        <p>color:</p>
                        <div className = "ProductPage_main__colors">
                            {
                                this.state.curProductData!.colors!.map ( (color: string) => 
                                    <ColorIcon color = {color}/>
                                )
                            }                        
                        </div>
                        <p>price:</p>
                        <p className="ProductPage_main__price">{this.state.curProductData?.price} {this.state.curProductData?.currency}</p>
                        <button 
                            className= {"ProductPage_main__but "+ ( (this.props.storeColor !== null) && (this.props.storeSize !== null)  ? "" : "butDisable") }
                            onClick={() => this.props.addProductToBasket!(this.props.curProductId!, 10)}
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
    storeSize: state.selectedSize,
    storeColor: state.selecterColor
}) 

const dispatchAction = (dispatch: any) => {
    return {
        addProductToBasket:(id: number, price: number) => dispatch({
            type: ActionTypes.ADD_PRODUCT_TO_CART,
            payload: {
                id: id,
                price: price
            }
        })
    }
}

export default connect(mapStateToProps, dispatchAction)(ProductPage);