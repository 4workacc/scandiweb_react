import { Component } from "react";
import { IProduct, IStore } from "../../types";
import Product from "./Product";
import CartMini from "./CartMini";
import "./styles.css";
import { gql } from "@apollo/client";
import { connect } from "react-redux";

type TProps = {
    client: any,
    curCathegory: string,
    showMiniBasket: boolean
}
type TState = {    
    products?: IProduct[],
    displayedArr: any[]   
}

class Products extends Component<TProps, TState> {
    state: TState = {
        products: [],        
        displayedArr: []        
    }   

    fetchApolloServer () {
     
        this.props.client.query({
            query:gql`    
            {       
                products {
                  id
                  category
                  title
                  subtitle                 
                  price       
                  storeCount       
                  currency   
                }              
            }
            `
        }).then( (res:any) =>  {      
                console.log( res )                  
                this.generateNewDisplayArr(res.data.products, 0)
            }
        )
    }
    componentDidMount(){       
        this.fetchApolloServer();
    }
    componentWillReceiveProps(){     
       this.generateNewDisplayArr(this.state.products!, 1);
    }
    generateNewDisplayArr( products: IProduct[], step: number){
        if (step === 0) {this.setState({products: products})};
    }

    render() {
        return (
            <div className = {this.props.showMiniBasket?"Products hideOnMiniBasket": "Products"} >
                { this.props.showMiniBasket && <CartMini />}                
                <h1 className="Products_CathegoryName">{this.props.curCathegory}</h1>               
                <div className="Products_Cards">
                    { this.state.products?.map( (product: IProduct) => {                        
                        if ( product.category === this.props.curCathegory) {
                            return (< Product 
                                        title={product.title}
                                        subtitle = {product.subtitle}
                                        price = {product.price}
                                        currency = {product.currency!}
                                        info = {product.info}                            
                                        key = {product.id}
                                        id = { product.id! }
                                        inStore = { product.storeCount > 0? "" : "noStore"}
                                />)
                        }
                    }) }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state:IStore) => ({
    curCathegory: state.curCathegory,
    showMiniBasket: state.showMiniBasket
})
const dispatchProps = () =>({});

export default connect(mapStateToProps, dispatchProps)(Products);