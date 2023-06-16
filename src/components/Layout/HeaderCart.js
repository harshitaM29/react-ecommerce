import { Fragment, useContext } from "react";
import { Button,Badge } from "react-bootstrap";
import CartContext from "../../store/cart-context";


const HeaderCart = props => {
    const cartCtx = useContext(CartContext);
    let quantity = 0;
    cartCtx.items.forEach(item => {
        quantity = quantity + Number(item.quantity);
    })
    return (
        <Fragment>
    <Button variant="outline-primary"  onClick={props.onClick}>
    <span>Your Cart</span>
    <span><Badge bg="secondary">{quantity}</Badge></span>
     </Button>{' '}
       </Fragment>
    )

};

export default HeaderCart;