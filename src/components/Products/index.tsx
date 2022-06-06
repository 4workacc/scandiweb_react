import { Component } from "react";
import { IProduct } from "../../types";
import Product from "./Product";
import CartMini from "./CartMini";
import "./styles.css";
import { gql } from "@apollo/client";

type TProps = {
    client: any
}
type TState = {
    isShowCartMini?: boolean,
    products?: IProduct[],
    displayedArr: any[]
}

class Products extends Component<TProps, TState> {
    state: TState = {
        displayedArr: []
    }
    // state: TState = {
    //     isShowCartMini: false,
    //     products: [{
    //         id: 1,
    //         category: "kids",
    //         title: "RRRR",
    //         subtitle: "QQQ",
    //         size: ["S"],
    //         color: ["black"],
    //         price: 10,
    //         currency: "$",
    //         info: "asdasdas",
    //         imgs:[]
    //     },
    //     {
    //         id: 1,
    //         category: "kids",
    //         title: "RRRR",
    //         subtitle: "QQQ",
    //         size: ["S"],
    //         color: ["black"],
    //         price: 10,
    //         currency: "$",
    //         info: "asdasdas",
    //         imgs:[]
    //     }]
    // };

    fetchApolloServer () {
        this.props.client.query({
            query:gql`    
            {       
                products {
                  id
                  category
                  title
                  subtitle
                  size
                  color
                  price
                  currency
                  info
                  imgs
                }              
            }
            `
        }).then( (res:any) =>                    
            this.setState({
                isShowCartMini: false,
                products: res.data.products,
                displayedArr: res.data.products.map ( 
                    (product: IProduct) => 
                        <Product
                            title = {product.title}
                            subtitle = {product.subtitle}
                            price = {product.price}
                            info = {product.info}
                            />
                    )        
            })
        )
    }

    componentDidMount(){
        this.fetchApolloServer();
    }

    componentDidUpdate(){
        console.log( this.state.products )
    }

    render() {
        return (
            <div className = "Products">
                { this.state.isShowCartMini && <CartMini />}
                <h1 className="Products_CathegoryName">name</h1>               
                <div className="Products_Cards">
                    { this.state.displayedArr  }
                </div>
            </div>
        )
    }
}

export default Products;