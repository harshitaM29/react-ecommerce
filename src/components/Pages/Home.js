import Footer from "../Layout/Footer";
import { Nav, Navbar, Container, Button, Card, Stack,} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from './Home.module.css';
import { Fragment } from "react";
const Home = () => {
    return (
        <Fragment>
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
          </Fragment>
    )
    
};

export default Home;