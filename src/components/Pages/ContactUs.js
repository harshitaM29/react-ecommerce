import { Fragment, useState } from "react";
import { Card, Container,Form,Nav, Navbar, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from './ContactUs.module.css';
import Footer from "../Layout/Footer";



const ContactUs = (props) => {
    const [enteredName,setEnteredName] = useState('');
    const [enteredEmailID, setEnteredEmailID] = useState('');
    const [enteredPhone, setEnteredPhone] = useState('');

    const updateName = (e) => {
        setEnteredName(e.target.value);
    }

    const updateEmailID = (e) => {
        setEnteredEmailID(e.target.value);
    }

    const updatePhone = (e) => {
        setEnteredPhone(e.target.value);
    }

    const contactUsHandler = (e) => {
        e.preventDefault();
        const data = {
            name: enteredName,
            emailID:enteredEmailID,
            phone:enteredPhone
        }
        props.onAddContactUs(data);
        setEnteredEmailID('');
        setEnteredName('');
        setEnteredPhone('');
    }
    return (
        <Fragment>
       
        <div className={classes.form}>
        <form onSubmit={contactUsHandler}>

        <div className={classes.name}>
            <label  htmlFor="name">Name</label>
            <input type="text" id="name" value={enteredName} onChange={updateName} />
            </div>
            <div className={classes.emailID}>
            <label htmlFor="email">Email Id</label>
            <input type="email" id="email" value={enteredEmailID} onChange={updateEmailID} />
            {/* <input type="text" id="opening text" onChange={updateOpeningText} value={enteredOpeningText} /> */}
            </div>
            <div className={classes.number}>
            <label htmlFor="number">Phone Number</label>
            <input type="number" id="number" value={enteredPhone} onChange={updatePhone}  />
            </div>
            <div>
            <button>Submit</button>
            </div>
        </form>
        </div>
        <Footer />
        </Fragment>
    )
}

export default ContactUs;