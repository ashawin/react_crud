
import React, { Component } from "react";
import { useParams } from 'react-router-dom';

const params = useParams();
function Product() {
    const {id} = useParams();
    console.log('id',id)
    return (
      <div className="App">
            
          <p>
            Test product
          </p>
        
      </div>
    );
  }
  export default Product;