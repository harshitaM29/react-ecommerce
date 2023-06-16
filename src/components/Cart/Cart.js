import { Modal,Button, Toast } from "react-bootstrap";
import CartItem from "./CartItem";
import { useState } from "react";
import classes from './Cart.module.css';

const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    },
    {
    
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
        
    
    ]

const Cart = props => {
    console.log(props)
    const [fullscreen, setFullscreen] = useState(true);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
      }
    const cartItems = <ul>{
        cartElements.map((item => 
            <CartItem item={item.title} price={item.price} quantity={item.quantity} image={item.imageUrl}/>
            ))
    }</ul>
    let totalAmount = 0;
    cartElements.forEach(item => {
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