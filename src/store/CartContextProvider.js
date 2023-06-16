import { useState } from "react";
import CartContext from "./cart-context";


const CartContextProvider = props => {
    const [cartItems,setCartItems] = useState([]);

    const addItemToCartHandler = (item) => {
        const index = cartItems.findIndex(ct => ct.id === item.id);
        if(index === -1) {
            const updateCart = cartItems.push({
                ...item
              });
              setCartItems(updateCart)
        } else {
            cartItems[index].quantity += 1;
            const updateCart = [...cartItems];
            setCartItems(updateCart);  
        }
        
        setCartItems([...cartItems])
    }
    
    console.log(cartItems)


    const cartContext ={
        items:cartItems,
        addToCart:addItemToCartHandler,
        removeFromCart:0
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;