import { Fragment } from "react-bootstrap/dist/react-bootstrap";
import ProductItem from "./ProductItem";
import { Card,Row,Col, ListGroup, Button } from "react-bootstrap";
const dummy_list = [
    {
        id: 'p1',
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
       
        
        },
        
        {
        
        id:'p2',
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
        id:'p3',
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
            id:'p4',
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        },

]
const ProductList = props => {
   
    const productList = dummy_list.map(item => <ProductItem
        key={item.id}
        id={item.id}
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