import { Routes, useParams } from "react-router-dom";
import ColorProduct from './ProductDetails/ColorProduct';
import { Route } from "react-router-dom";
import { Color1,Color2 } from "../../img";

const ProductDetails = [
    {
        id: 'p1',
        title: 'Colors',
        
        price: 100,
        image : {
            img1:Color1,
            img2:Color2
        }
    },
    {
        id:'p2',
        title: 'Black and white Colors',
    
        price: 50,
    },
    {
        id:'p3',
        title: 'Yellow and Black Colors',
        
        price: 70,

    },
    {
        id:'p4',
    
    title: 'Blue Color',
    
    price: 100,
    },
]

const Product = props => {
    
    const params = useParams();
    console.log(params)
   const index= ProductDetails.find(product => product.id === params.Id )
    return (
        <div>
           
         <ColorProduct 
         title={index.title} 
         price={index.price} img={index.image}
          />
        </div>
      
    )
}
export default Product;