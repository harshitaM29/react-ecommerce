import { Fragment } from 'react';
import Store from './components/Pages/Store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/Pages/About';
import Home from './components/Pages/Home';
import ContactUs from './components/Pages/ContactUs';
import Product from './components/Pages/Product';
import './App.css';

const addContactUsInfo = async(data) => {
 const response = await fetch('https://contact-us-af24a-default-rtdb.firebaseio.com/contactus.json', {
  method: 'post',
  body: JSON.stringify(data),
  headers:{
    'Content-Type':'application/json'
  }
 })
}

const router = createBrowserRouter([
    {path:'/', element:<Store />},
    {path:'/about', element: <About />},
    {path:'/home', element:<Home />},
    {path:'/contactus', element:<ContactUs onAddContactUs={addContactUsInfo}/>},
    {path:'/:Id',element:<Product />}
    

  
])

function App() {


  return (
    <Fragment >
      <RouterProvider router={router} />
     
   </Fragment>
  );
}

export default App;
