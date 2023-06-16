import { Button } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const AddButton = props =>{
    const cartCtx = useContext(CartContext)
    const addProductItem = (e) => {
        console.log('hi')
        e.preventDefault();
        let q = 0;
        q += 1;
        cartCtx.addToCart({...props.items,quantity:1})
        
    }
    return (
        <Button variant="primary" onClick={addProductItem}>Add To Cart</Button>
    )

};

export default AddButton;