import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data';
import {ProductConsumer} from '../context/Context';

export default class ProductList extends Component {
  state = {
    products:storeProducts
  }
  render() {
    console.log(this.state.products);
    return (
      <React.Fragment>
        <div className='py-5'>
          <div className='container'>
            <Title  title="product" />
            <div className='row'>
<ProductConsumer>
  {(yes)=>{
    return <h1>{yes}</h1>

  }}
</ProductConsumer>
            </div>

          </div>
        </div>
      </React.Fragment>
      // {/* <Product/> */}
    )
  }
}