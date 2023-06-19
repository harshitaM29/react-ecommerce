import { useState } from "react";
import CartContext from "./cart-context";


const CartContextProvider = props => {
    const [cartItems,setCartItems] = useState([]);
   

    const addItemToCartHandler = (item, email) => {
        
    
        fetch(`https://crudcrud.com/api/d75bfc683776424ebb15728e910b5cfa/cart${email}`).then(res =>
         res.json().then(res => {
           setCartItems(res);
         })
         )
         const index = cartItems.findIndex(ct => ct.id === item.id);
       console.log(index)
        fetch(`https://crudcrud.com/api/d75bfc683776424ebb15728e910b5cfa/cart${email}`, {
            method: 'POST',
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
            
            body : JSON.stringify({
               ...item,
               quantity:1
            })
        })
   
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