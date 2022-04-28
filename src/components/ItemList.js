import React, { useEffect, useState } from 'react';
import Item from './Item';
import {productList} from '../data/data';

const ItemList = () => {
    
    const [products, setProducts] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productList);
        }, 2000);
      });
    
      return (
          <div>
             <>
            {
              products.map((product) => {
                return (
                  <div key={product.id}>
                    <Item
                      name={product.name}
                      thumbnail={product.thumbnail}
                      price={product.price}
                      stock={product.stock}
                      id={product.id}
                    />
                  </div>
                );
              })
            }
          </>                                
          </div>




      )
}
export default ItemList;