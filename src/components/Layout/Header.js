import HeaderCart from "./HeaderCart";
import { Fragment } from "react";
import { Nav, Navbar, Container,} from "react-bootstrap";
import classes from './Header.module.css'
const Header = props => {
    return (
        <Fragment>
      <Navbar bg="black" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Store</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>

          </Nav>
        <HeaderCart />
        </Container>
        </Navbar>
       <div className={classes.generics}>
        The Generics
       </div>
        </Fragment>
    )
    
}

export default Header;
