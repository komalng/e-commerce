import React,{Component} from 'react';

const ProductContext = React.createContext();

/**createContext comes with two components are provider and consumer.*/
// provide not pass pros;

export default class ProductProvider extends Component{
    render(){
        return(
            <ProductContext.Provider value = "Hello from context">
                {this.props.children}
            </ProductContext.Provider>
        
        )
    }
}


const ProductConsumer = ProductContext.Consumer;

export {ProductConsumer,ProductProvider}