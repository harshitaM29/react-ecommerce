import { useState, useCallback, useContext, useEffect } from "react";
import CartContext from "./cart-context";
import AuthContext from "./auth-context";


const CartContextProvider = props => {
    const authCtx = useContext(AuthContext);
    const email = authCtx.isLoggedIn ? authCtx.emailId.split('@')[0] : ''
    const [cartItems,setCartItems] = useState([]);
   const [items, setItems] = useState([]);

    const addItemToCartHandler = (item, email) => {
        
       
       
        fetch(`https://crudcrud.com/api/4f7a3a07378e416794826d0c4d9d1eab/cart${email}`, {
            method: 'POST',
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
            
            body : JSON.stringify({
               ...item,
               
            })
        }).then(res => res.json())
        .then(json => {
            const index = cartItems.findIndex(ct => ct.id === json.id);
            if(index === -1){
                const updateCart = cartItems.push({...json});
                setCartItems(updateCart)
            }else{
                cartItems[index].quantity += 1;
                const updateCart = [...cartItems];
                setCartItems(updateCart); 
            }
            setCartItems([...cartItems])
        })
       
 
        // const index = cartItems.findIndex(ct => ct.id === item.id);
        // if(index === -1) {
        //     const updateCart = cartItems.push({
        //         ...item
        //       });
        //       setCartItems(updateCart)
        // } else {
        //     cartItems[index].quantity += 1;
        //     const updateCart = [...cartItems];
        //     setCartItems(updateCart);  
        // }
        // console.log(cartItems)

        // setCartItems([...cartItems])
    }

    
    const receivedItems = useCallback(() => {
       fetch(`https://crudcrud.com/api/4f7a3a07378e416794826d0c4d9d1eab/cart${email}`)
       .then(res=> res.json())
       .then(data => 
        setItems(data))
     
      
    },[])
    useEffect(() => {
        receivedItems();
    },[receivedItems])
    console.log(items)



    const cartContext ={
        items:cartItems,
        receivedItems:items,
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