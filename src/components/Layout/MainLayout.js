import Header from "./Header";
import Footer from "./Footer";
import { Fragment, useState}from "react";
import Cart from "../Cart/Cart";
import CartContextProvider from "../../store/CartContextProvider";


const MainLayout = props => {

    const [isOpen, setISOpen] = useState(false);

    const openCart = () => {
      setISOpen(true);
    }
  
    const closeCart = () => {
      setISOpen(false);
    }
    return (
    <CartContextProvider>
         {isOpen && <Cart onOpen={openCart} onClose={closeCart} /> }
        <Header onOpen={openCart} />
        {props.children}
        <Footer />
    </CartContextProvider>
    )
};

export default MainLayout;