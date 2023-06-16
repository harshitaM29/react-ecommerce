import { Fragment } from "react";
import { Button,Badge } from "react-bootstrap";


const HeaderCart = props => {
    return (
        <Fragment>
    <Button variant="outline-primary"  onClick={props.onClick}>
    <span>Your Cart</span>
    <span><Badge bg="secondary">0</Badge></span>
     </Button>{' '}
       </Fragment>
    )

};

export default HeaderCart;