import React from 'react';
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { upDateQtyCartR, removeItemCartR } from '../../redux/actions';

import logo from '../../assets/particle-logo2.jpeg';

const CartTile = ({product}) => {

  const dispatch = useDispatch();
  const onUpdate = (product, qty) => dispatch(upDateQtyCartR(product, qty));
  const onRemove = product => dispatch(removeItemCartR(product));

  const validateInput = (input)  => {
    if (input <=0 ) {
      onRemove(product);
    } else {
      onUpdate(product, input);
    }
  }

  // note: src={product.image1 ? product.image1.fields.file.url : logo} renders 'logo' as placeholder if Contentful product does not have image

  return (
    <div className="cart-tile" id="cart-tile" data-testid="cart-tile">
      <Link className="cart-tile__content" to={`/product/${product.id}`}>  
        <img alt='logo' className='cart-tile__content__img' src={product.image1 ? product.image1.fields.file.url : logo}/>
        <div className="cart-tile__content__name">{product.title}</div>  
        <div className="cart-tile__content__price">
            <span>$</span>
            {product.price}
          </div>
      </Link>
      <div className="cart-tile__action">
          <input 
              className="cart-tile__action__qty"
              type="number"
              min="0"
              step="1"
              defaultValue={product.quantity}
              onBlur={e => validateInput(e.target.value)}
          />
          <button
              className="cart-tile__action__remove btn"
              onClick={()=>onRemove(product)}
          >
          X
          </button>
      </div>
    </div>
  );
};
  
export default CartTile;