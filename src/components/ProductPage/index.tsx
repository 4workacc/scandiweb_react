import { Component } from "react";
import { connect } from "react-redux";
import { IStore } from "../../types";
import ColorIcon from "./ColorIcon";
import SizeIcon from "./SizeIcon";

import { IProduct } from "../../types";

import "./styles.css";
import { rmSync } from "fs";
import { gql } from "@apollo/client";
interface IProps {
    curProductId?: number| null,   
    client?: any
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
                sizes: ["XS", "S", "M", "L"],
                colors: ["#D3D2D5", "#2B2B2B", "#0F6450"],
                price: 10,
                currency: "$",
                info: "asdasdas",
                imgs:["1.jpg"],
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
                info: "asdasdas",
                imgs:["1.jpg"],
                storeCount: 10
            },
            {
                id: 3,
                category: "men",
                title: "men RRRR31",
                subtitle: "QQQ",
                sizes: ["XS", "S", "M", "L"],
                colors: ["#D3D2D5", "#2B2B2B", "#0F6450"],
                price: 10,
                currency: "$",
                info: "asdasdas",
                imgs:["1.jpg"],
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
                info: "asdasdas",
                imgs:["1.jpg"],
                storeCount: 10
            },
            {
                id: 5,
                category: "men",
                title: "men RRRR32",
                subtitle: "QQQ",
                sizes: ["XS", "S", "M", "L"],
                colors: ["#D3D2D5", "#2B2B2B", "#0F6450"],
                price: 10,
                currency: "$",
                info: "asdasdas",
                imgs:["1.jpg"],
                storeCount: 0
            }],
            curProductData: null,     
            curSelectedImg: "1.jpg"      
        }
    };
    fetchApolloServer () {     
        this.props.client.query({
            query:gql`    
            {       
                query product(id: Int){
                  id
                  category
                  title
                  subtitle                 
                  price       
                  storeCount
                  colors
                  sizes
                  currency
                  info
                  imgs      
                }              
            }
            `
        }).then( (res:any) =>  {   
            console.log( res);                     
                this.setState({
                    curProductData: res.data
                })
            }
        )
    }
    componentWillMount(){
        // this.fetchApolloServer();
        this.setState({
            ...this.state,
            curProductData: this.state.productBase[this.props.curProductId!]
        })
    }
    render() {
        return (
            <div className="ProductPage">
                {"Product page" +this.props.curProductId}
               
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
                        <div className = "ProductPage_main__colors">
                            {
                                this.state.curProductData!.colors!.map ( (color: string) => 
                                    <ColorIcon color = {color}/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: IStore) => ({
    curProductId: state.displayProductId
}) 

export default connect(mapStateToProps)(ProductPage);