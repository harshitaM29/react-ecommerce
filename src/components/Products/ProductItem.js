import { Card,Button,Container, Row, Col, CardGroup } from "react-bootstrap";

const ProductItem = props => {
    return (
    
    <Card
    style={{ width: '18rem', justifyContent:'center',marginTop:'1rem', alignItems:'center'}}>
    <Card.Img variant="top" src={`${props.image}/100px160`} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.price}
      </Card.Text>
      <Button variant="primary">Add To Cart</Button>
    </Card.Body>
  </Card>
  

    )
};

export default ProductItem;