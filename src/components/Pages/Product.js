import { useParams } from "react-router-dom";
import ColorProduct from './ProductDetails/ColorProduct';
const Product = props => {
    console.log(props)
    const params = useParams();
    const Id = params.Id;
    let product = false;
    if(params.Id === 'p1') {
        product = true;

    }
    return (
        <div>
        {product && <ColorProduct />}
        </div>
      
    )
}
export default Product;