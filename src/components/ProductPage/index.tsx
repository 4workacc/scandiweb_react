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
    curProductData: IProduct | null
}


class ProductPage extends Component<IProps, IState> {
    constructor (props:IProps){
        super(props);
        this.state = {
            curProductData: {
                id: 1,
                title: "Apollo",
                subtitle: "Running Short",
                sizes: ["XS", "S", "M", "L"],
                colors: ["#D3D2D5", "#2B2B2B", "#0F6450"],
                price: 50,
                currency: "USD",
                info: "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
                storeCount: 1,
                imgs: ["1.jpg"]
            }
        }
    };
    fetchApolloServer () {
     
        this.props.client.query({
            query:gql`    
            {       
                products{
                  id
                  category
                  title
                  subtitle                 
                  price       
                  storeCount          
                }              
            }
            `
        }).then( (res:any) =>  {                        
                this.setState({
                    curProductData: res.data
                })
            }
        )
    }
    componentDidMount(){

    }
    render() {
        return (
            <div className="ProductPage">
                {"Product page" +this.props.curProductId}
                <div className="ProductPage_imgs">
                    {
                        this.state.curProductData!.imgs!.map ( (imgPath: string) => {
                            return <img src={`../../assets/imgs/products/${this.props.curProductId}/${imgPath}`}></img>
                        })
                    }
                </div>
                <div className="ProductPage_main">
                    <img className="ProductPage_main__img"></img>
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