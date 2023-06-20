import { Fragment, useContext, useState } from "react";
import { Button,Badge } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import AuthContext from "../../store/auth-context";
import { useCallback } from "react";
import { useEffect } from "react";


const HeaderCart = props => {
    const [items,setItems] = useState([]);
    const cartCtx = useContext(CartContext);
    const authCtx = useContext(AuthContext);
    const email = authCtx.isLoggedIn ? authCtx.emailId.split('@')[0] : '';
    let quantity = 0;
  

    const fetchData = useCallback(async() => {
       const res = await fetch(`https://crudcrud.com/api/4f7a3a07378e416794826d0c4d9d1eab/cart${email}`)
       const data = await res.json();
       setItems(data)
    },[])
   
    useEffect(() => {
        fetchData();
    },[fetchData])

  
    // cartCtx.items.forEach(item => {
    //     console.log(item.quantity)
    //    items.length = items.length + item.quantity;
    // })
    
    return (
        <Fragment>
    <Button variant="outline-primary"  onClick={props.onClick}>
    <span>Your Cart</span>
    <span><Badge bg="secondary">{items.length}</Badge></span>
     </Button>{' '}
       </Fragment>
    )

};

export default HeaderCart;