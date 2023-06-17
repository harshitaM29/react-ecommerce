import { Fragment } from "react";
import { ButtonGroup, Button, Card } from "react-bootstrap";
import classes from './ColorProduct.module.css'
const ColorProduct = () => {
    return (
        <Fragment>
            <h1 style={{textAlign:'center'}}>Color Product</h1>
       <Card >
        <div class={classes.container}>
            
 <img src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png" width="2%" alt="Snow" />
 <img src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png" width="2%" alt="Snow" />
    
</div>

<div className={classes.info}> 
<h1>Reviews</h1>
<ul style={{listStyle:'none'}}>
    <li>
       nice
    </li>
    <li>very bad</li>
</ul>
</div>
</Card>
      </Fragment>
    )
}

export default ColorProduct;