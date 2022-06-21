import { Component } from "react";
import { IProduct, IStore } from "../../types";
import Product from "./Product";
import CartMini from "./CartMini";
import "./styles.css";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { connect } from "react-redux";
import { ActionTypes } from "../../store/rootReducer";

type TProps = {    
    curCathegory: string,
    showMiniBasket: boolean,
    fullProductList?: any[] | null,
    loadDataToServer:(a: any[]) => void,
    switchMiniCart:()=>void
}
type TState = {    
    products?: IProduct[],
    displayedArr: any[]   
}

// test graphql server  https://github.com/4workacc/scandiweb_node

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
                  storeCount,
                  imgs                            
                }              
            }
            `
        }).then( (res:any) =>  {
                this.props.loadDataToServer(res.data.products);
            }
        )
    }
    componentDidMount(){       
        this.fetchApolloServer();
    }

    render() {
        return (
            <div 
                className = {this.props.showMiniBasket?"Products hideOnMiniBasket": "Products"} 
                onClick = { ()=> { this.props.showMiniBasket && this.props.switchMiniCart()}} 
            >
                { this.props.showMiniBasket && <CartMini />}                
                <h1 
                    className="Products_CathegoryName">
                        {this.props.curCathegory}</h1>               
                <div className="Products_Cards">
                    { this.props.fullProductList!.map( (product: IProduct) => {                        
                        if ( product.category === this.props.curCathegory) {
                            return (< Product 
                                        title={product.title}
                                        subtitle = {product.subtitle}
                                        price = {product.price}                                        
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
        }),    
        switchMiniCart: () => dispatch({
            type: ActionTypes.SHOW_MINI_BASKET
        }),                    
    }    
};

export default connect(mapStateToProps, dispatchProps)(Products);