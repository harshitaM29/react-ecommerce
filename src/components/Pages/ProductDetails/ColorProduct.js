import { Fragment } from "react";
import { Tab,Tabs } from "react-bootstrap";
import classes from './ColorProduct.module.css';
const ColorProduct = props => {
    console.log(props)
   
    return (
        <Fragment>
    <Tabs justify className="mb-3">
      <Tab eventKey="home" title="Home">
        Tab 1 content
      </Tab>
      <Tab eventKey="profile" title="Profile and Status longer">
        Tab 2 Content
      </Tab>
      <Tab eventKey="contact" title="Contact">
        Tab 3 content tabs plugin
      </Tab>
     




     
    </Tabs>
    </Fragment>
    )
}

export default ColorProduct;