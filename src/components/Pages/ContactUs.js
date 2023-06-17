import { Fragment } from "react";
import { Container,Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from './ContactUs.module.css';
import Footer from "../Layout/Footer";


const ContactUs = () => {
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

          </Nav>
        </Container>
        </Navbar>
        <div className={classes.generics}>
          <p>The Generics</p>
        </div>
        <form>
            <div className={classes.contact} >
            <label>Name</label>
            <input type="text" />
            <label>Email Id</label>
            <input type="emailId" />
            <label>Phone Number</label>
            <input type="number" />
            <button>Submit</button>
            </div>

        </form>
        <Footer />
        </Fragment>
    )
}

export default ContactUs;