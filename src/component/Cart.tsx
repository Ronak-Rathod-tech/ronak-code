import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "../actions/cartAction";


const Cart = () => {
    const state:any = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log("store", state);
    return (
        <div className="cart">
            <h2>Number Of items in Cart:{state.numOfItems}</h2>
            <button onClick={() => { dispatch(addItem()); }} className="green">Add item to Cart</button>
            <button disabled={state.numOfItems > 0 ? false : true} onClick={() => { dispatch(deleteItem()); }} className="red">Remove item from Cart</button>
        </div>
    );
};

export default Cart;