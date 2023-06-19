import { Button } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import AuthContext from "../../store/auth-context";


const AddButton = props =>{
  const authCtx = useContext(AuthContext);
    const cartCtx = useContext(CartContext);
    const email = authCtx.emailId.split("@")[0]
    const addProductItem = (e) => {
        e.preventDefault();
        let q = 0;
        q += 1;
        // const response = fetch('' ,{

        // })
    
            cartCtx.addToCart({...props.items}, email)  
        
        
        
    }
    return (
        <Button variant="primary" onClick={addProductItem}>Add To Cart</Button>
    )

};

export default AddButton;