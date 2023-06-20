import { Modal,Button, Toast } from "react-bootstrap";
import CartItem from "./CartItem";
import { useContext, useState, useCallback } from "react";
import classes from './Cart.module.css';
import CartContext from "../../store/cart-context";
import AuthContext from "../../store/auth-context";
import { useEffect } from "react";


const Cart = props => {
    const auth = useContext(AuthContext);
    const email = auth.isLoggedIn ? auth.emailId.split('@')[0] : ''
    const [items, setItems] = useState([]);
    const cartCtx = useContext(CartContext);
    
    const fetchData = useCallback(async() => {

        cartCtx.receivedItems.forEach((object) => {
            const index = items.findIndex(item => item.id === object.id);
            const count = cartCtx.receivedItems.filter((obj) => obj.id === object.id).length;
            console.log(index);
            if (index === -1) {
               const updateCart = items.push({...object})
               setItems(updateCart)
            } else {
               items[index].quantity = 1 * count;
               const updateCart = [...items]
              setItems(updateCart)
               
            }
        })
     },[])
     
     useEffect(() => {
         fetchData();
     },[fetchData])
  

    //  const result = [];

    //  useEffect(() => {
    //     items.forEach((object) => {
    //      const index = items.findIndex(item => item.id === object.id);
    //      const count = items.filter((obj) => obj.id === object.id).length;
    //      console.log(index);
    //      if (index === -1) {
    //         items.push({...object});
    //      } else {
    //         items[index].quantity = 1 * count;
    //         const updateCart = [...items]
    //        setItems(updateCart)
            
    //      }
 
      
    //  })
    // },[])

    console.log(items)
    // useEffect(() => {
    //     func();
    // },[func])

     

  
     
    //  console.log(result);
    
    const cartItems = <ul>{
       items.map((item => 
            <CartItem id={item.id} item={item.title} price={item.price} image={item.image} quantity={item.quantity}/>
            ))
    }</ul>
    let totalAmount = 0;
    items.forEach(item => {
        totalAmount = totalAmount + Number(item.price)
    })
    return (
      <Modal show={props.onOpen} onHide={props.onClose}  size='lg'>
            
                 <Modal.Header closeButton>
                <Modal.Title>CART</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {cartItems}
                <div className={classes.total}>
            <h4>Total Amount: </h4> 
            <h4> ${totalAmount}</h4>
        </div>
        </Modal.Body>
                <Modal.Footer>
                   
                    <Button variant="secondary" onClick={props.onClose}>Close</Button>  
                    <Button variant="primary">Purchase</Button>  
                    </Modal.Footer>
            
            </Modal>
     
    )

};

export default Cart;