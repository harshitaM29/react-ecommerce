import { Card,Nav,Navbar,Container, Button } from "react-bootstrap";
import classes from './Footer.module.css';
import { SocialIcon } from "react-social-icons";
const Footer = props => {
    return (
        <div className={classes.footer}> 
        <Container>
        <Navbar >
        <div>
        <h2>The Generics</h2>
        </div>
        <div className={classes.social}>
         <SocialIcon url="https://youtube.com" />
         <SocialIcon url="https://facebook.com" />
         </div>
         </Navbar>
         </Container>
        </div>

    )
};

export default Footer;