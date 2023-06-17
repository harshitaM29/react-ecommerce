import HeaderCart from "./HeaderCart";
import { Fragment } from "react";
import { Nav, Navbar, Container,} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from './Header.module.css'
const Header = props => {
    return (
        <Fragment>
      <Navbar bg="black" variant="dark">
        <Container>
          <Nav className="me-auto">
          <Nav.Link><NavLink to="/home" style={({ 
                            textDecoration: 'none', color: 'white'})}>
                            Home
                        </NavLink></Nav.Link>
          <Nav.Link><NavLink to="/" style={ ({ 
                       textDecoration: 'none', color: 'white'})}>
                            Store
                        </NavLink></Nav.Link>
            <Nav.Link><NavLink to="/about" style={ ({ 
                       textDecoration: 'none', color: 'white'})}>
                            About
                        </NavLink></Nav.Link>
           <Nav.Link><NavLink to="/contactus" style={ ({ 
                       textDecoration: 'none', color: 'white'})}>
                            Contact Us
                        </NavLink></Nav.Link>

          </Nav>
        <HeaderCart onClick={props.onOpen}/>
        </Container>
        </Navbar>
       <div className={classes.generics}>
        The Generics
       </div>
        </Fragment>
    )
    
}

export default Header;
