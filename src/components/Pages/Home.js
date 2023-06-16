import Footer from "../Layout/Footer";
import { Nav, Navbar, Container, Button, Card, Stack,} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from './Home.module.css';
import { Fragment } from "react";
const Home = () => {
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
          <div>
          <button className={classes.latest}>Get Our Latest Album</button>
          </div>
          <div>
          <button className={classes.play}>►</button>
          </div>
         </div>
         <Container>
            <h2 className={classes.heading}>Tours</h2>
            <Stack gap={4}>
                <div className={classes.items}>
                <span className={classes.date}>JULY16</span>
                <span className={classes.place}>DETROIT, MI</span>
                <span className={classes.info}>DTE ENERGY MUSIC THEATRE</span>
                <button className={classes.ticketBtn}>Buy Tickets</button>
                </div>
                <div className={classes.items}>
                <span className={classes.date}>JUL19</span>
                <span className={classes.place}>TORONTO,ON</span>
                <span className={classes.info}>BUDWEISER STAGE</span>
                <button className={classes.ticketBtn}>Buy Tickets</button>
                </div>
                <div className={classes.items}>
                <span className={classes.date}>JUL 22</span>
                <span className={classes.place}>BRISTOW, VA</span>
                <span className={classes.info}>JIGGY LUBE LIVE</span>
                <button className={classes.ticketBtn}>Buy Tickets</button>
                </div>
                <div className={classes.items}>
                <span className={classes.date}>JUL 29</span>
                <span className={classes.place}>PHOENIX, AZ</span>
                <span className={classes.info}>AK-CHIN PAVILION</span>
                <button className={classes.ticketBtn}>Buy Tickets</button>
                </div>
                <div className={classes.items}>
                <span className={classes.date}>AUG 2</span>
                <span className={classes.place}>LAS VEGAS, NV</span>
                <span className={classes.info}>T-MOBILE ARENA</span>
                <button className={classes.ticketBtn}>Buy Tickets</button>
                </div>
                <div className={classes.items}>
                <span className={classes.date}>AUG 7</span>
                <span className={classes.place}>CONCORD, CA</span>
                <span className={classes.info}>CONCORD PAVILION</span>
                <button className={classes.ticketBtn}>Buy Tickets</button>
                </div>
            </Stack>
         </Container>
         <Footer />
          </Fragment>
    )
    
};

export default Home;