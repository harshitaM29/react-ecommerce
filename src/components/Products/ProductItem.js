import { Card,Button,Container, Row, Col, CardGroup } from "react-bootstrap";
import { Fragment } from "react-bootstrap/dist/react-bootstrap";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import AddButton from "./AddButton";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import Product from "../Pages/Product";

const ProductItem = props => {
 
    return (
    
        <Container>
        <Row>
        <Col style={{justifyContent:'center',marginLeft:'30rem', width:"50%"}}>
        <Card
        style={{ width: '18rem',marginTop:'1rem'}}>
        
        <Card.Body>
    
        <Link to={`/${props.id}`}>
          <Card.Title>{props.title}</Card.Title></Link>
        <Card.Img variant="top" src={props.image} />
        <Card.Footer>
           <Card.Text>{props.price}</Card.Text> 
           <AddButton items={props} />
        </Card.Footer>
        
        </Card.Body>
    </Card>
    </Col>
    </Row>
       
  </Container>


    )
};

export default ProductItem;