import { Modal,Button } from "react-bootstrap";
import classes from './CartItem.module.css'


const CartItem = (props) => {
  
 
    const price = `$${Number(props.price).toFixed(2)}`;


  return (
      <li className={classes['cart-item']}>
        <div>
          <h5><img src={props.image} width='80rem'/> {props.item}</h5>
          <div className={classes.summary}>
            <span className={classes.price}>{price}</span>
            <span className={classes.amount}>x {props.quantity}</span>
          </div>
        </div>
        <div className={classes.actions}>
            <button>Remove</button>
          
        </div>
      </li>
      // <h1>Cart</h1>
    );
};

export default CartItem;