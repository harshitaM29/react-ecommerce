import { Fragment } from "react-bootstrap/dist/react-bootstrap";
import ProductItem from "./ProductItem";
import { Card,Row,Col, ListGroup, Button } from "react-bootstrap";
const dummy_list = [
    {

        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        },

]
const ProductList = props => {
    const productList = dummy_list.map(item => <ProductItem
        title={item.title}
        price={item.price}
        image={item.imageUrl} />
    );

    return (
        
       <ul>
        {productList }
       </ul>
       
     
        
    )
    

}

export default ProductList;