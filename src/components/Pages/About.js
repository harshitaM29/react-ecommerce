import { Container, Image, Row, Col } from "react-bootstrap";
import MainLayout from "../Layout/MainLayout";
import classes from './About.module.css';
import { Fragment } from "react";


const About = () => {
    return (
       <Fragment>
        <h2 className={classes.heading}>About</h2>
       
               
            <div>
        <Image src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png" width="15%" height="20%" roundedCircle style={{
            float:'left', padding:'3px', margin:'2%'
        }}/>
        </div>
        <p className={classes.para}>Lorem ipsum carrots enhanced rebates. 
            Excellent sayings of a man of sorrows, hates no prosecutors will unfold in the enduring of which were born in it? 
            Often leads smallest mistake some pain main responsibilities are to stand for the right builder of pleasure, 
            accepted explain up to now. ,
             The things we are accusing of these in the explication of the truth receives from the flattery of her will never be the 
             trouble and they are refused to the pleasures and the pleasures of the pain,
              explain the treatment of excepturi of the blessed sufferings. 
              I never said will unfold in him receives at another time he may please the one that those works, we are less than they,
               this refused to the pleasures of deleniti? Those are! Will unfold in times of pleasure, this pain will be a right enjoyed by corrupt, 
            are accusing him of all pleasures, and seek his own, or, to the needs of the agony of the choice. We hate the fellow.</p>
            
            </Fragment>
         
       
    );
}

export default About;