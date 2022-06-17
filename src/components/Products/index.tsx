import { Component } from "react";
import { IProduct, IStore } from "../../types";
import Product from "./Product";
import CartMini from "./CartMini";
import "./styles.css";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { connect } from "react-redux";

type TProps = {    
    curCathegory: string,
    showMiniBasket: boolean,
    fullProductList?: any[] | null,
    loadDataToServer:(a: any[]) => void
}
type TState = {    
    products?: IProduct[],
    displayedArr: any[]   
}

const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache()
  })

class Products extends Component<TProps, TState> {
    state: TState = {              
        displayedArr: []        
    }   
    fetchApolloServer () {     
        client.query({
            query:gql`    
            {       
                products {
                  id
                  category
                  sizes
                  colors
                  title
                  subtitle         
                  info        
                  price       
                  storeCount                            
                }              
            }
            `
        }).then( (res:any) =>  {                         
                // this.generateNewDisplayArr(res.data.products, 0);
                this.props.loadDataToServer(res.data.products);
            }
        )
    }
    componentDidMount(){       
        this.fetchApolloServer();
    }

    render() {
        return (
            <div className = {this.props.showMiniBasket?"Products hideOnMiniBasket": "Products"} >
                { this.props.showMiniBasket && <CartMini />}                
                <h1 className="Products_CathegoryName">{this.props.curCathegory}</h1>               
                <div className="Products_Cards">
                    { this.props.fullProductList!.map( (product: IProduct) => {                        
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
    fullProductList: state.fullProductList,
    showMiniBasket: state.showMiniBasket
})
const dispatchProps = ( dispatch: any) =>{
    return {
        loadDataToServer:(products: any[]) => dispatch({
            type: "LOAD_DATA",
            payload: products
        })
    }
    
};

export default connect(mapStateToProps, dispatchProps)(Products);