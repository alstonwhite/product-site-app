import React from 'react';
import { Link } from "react-router-dom";

import logo from '../logo.svg';

const CartTile = ({product, onUpdate, onRemove}) => {

  const validateInput = (input)  => {
    return input>=0 ? input : 1;
  }
    
    return (
      <div className="cart-tile" id="cart-tile">
        <Link className="cart-tile__content" to={`/product/${product.id}`}>  
          <img alt='logo' className='cart-tile__content__img' src={product.image1 ? product.image1.fields.file.url : logo}/>
          <div className="cart-tile__content__name">{product.title}</div>  
          <div className="cart-tile__content__price">
              <span>$</span>
              {product.price}
            </div>
        </Link>
        <div className="cart-tile__action">
            {/* check input (positive integers only, what if deleted?) */}
            <input 
                className="cart-tile__action__qty"
                type="number"
                min="0"
                step="1"
                defaultValue={product.quantity}
                onChange={e => {
                    console.log("event target val", e.target.value)
                    let validInput = validateInput(e.target.value)
                    console.log("valid input", validInput)
                    e.target.value = validInput}
                    // onUpdate(product,validInput)}
                  }
                onInputChange={e => onUpdate(product, e.target.value)}
            />
            <button
                className="cart-tile__action__remove"
                onClick={()=>onRemove(product)}
            >
            X
            </button>
        </div>
      </div>
    );
  };
  
  export default CartTile;