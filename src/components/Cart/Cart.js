import { Modal,Button, Toast } from "react-bootstrap";
import CartItem from "./CartItem";
import { useContext, useState } from "react";
import classes from './Cart.module.css';
import CartContext from "../../store/cart-context";


const Cart = props => {


    const cartCtx = useContext(CartContext);
    console.log("items",cartCtx.items)
    const cartItems = <ul>{
        cartCtx.items.map((item => 
            <CartItem item={item.title} price={item.price} quantity={item.quantity} image={item.image}/>
            ))
    }</ul>
    let totalAmount = 0;
    cartCtx.items.forEach(item => {
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