import Header from "./Header";
import Footer from "./Footer";
import { Fragment } from "react";

const MainLayout = props => {
    return (
    <Fragment>
        <Header />
        {props.children}
        <Footer />
    </Fragment>
    )
};

export default MainLayout;