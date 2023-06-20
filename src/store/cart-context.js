import React from "react";

const CartContext = React.createContext({
    items: [],
    receivedItems:[],
    addToCart: () => {},
    receivedItems:() => {},
    removeFromCart: () => {}
});

export default CartContext;