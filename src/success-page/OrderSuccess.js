import React, {useState, useEffect} from 'react';

import { useDispatch } from "react-redux";
import { clearCartR } from '../redux/actions';

const OrderSuccess = () => {

    const dispatch = useDispatch();
    useEffect(() => dispatch(clearCartR()), []);
    
    return (
        <div className="success-page" id="success-page">
            <h2>Your order has been placed!</h2>
        </div>
    );
};
    
export default OrderSuccess;