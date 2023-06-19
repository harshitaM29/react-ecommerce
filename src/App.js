import { Fragment, useContext } from 'react';
import Store from './components/Pages/Store';
import { createBrowserRouter, RouterProvider, Routes, Route, Navigate } from 'react-router-dom';
import About from './components/Pages/About';
import Home from './components/Pages/Home';
import ContactUs from './components/Pages/ContactUs';
import Product from './components/Pages/Product';
import './App.css';
import AuthForm from './components/Pages/AuthForm';
import AuthContext from './store/auth-context';
import WelcomePage from './components/Pages/WelcomePage';
import MainLayout from './components/Layout/MainLayout';
import { useNavigate } from 'react-router-dom'

const addContactUsInfo = async(data) => {
 const response = await fetch('https://contact-us-af24a-default-rtdb.firebaseio.com/contactus.json', {
  method: 'post',
  body: JSON.stringify(data),
  headers:{
    'Content-Type':'application/json'
  }
 })
}
// const authCtx = useContext(AuthContext);

// const router = createBrowserRouter([
//     {path:'/', element:<Store />},
//     {path:'/about', element: <About />},
//     {path:'/home', element:<Home />},
//     {path:'/contactus', element:<ContactUs onAddContactUs={addContactUsInfo}/>},
//     {path:'/:Id',element:<Product />},
//      {path:'/auth', element:<AuthForm />} 
    

  
// ])

function App() {

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(authCtx.isLoggedIn)
  return (
    <MainLayout >
      <Routes>
     <Route path='/' element={<WelcomePage />} /> 
     <Route path='/store'  element={authCtx.isLoggedIn ? <Store /> : <Navigate replace to={"/auth"} />} />
        <Route path='/about' element={<About />} />
        <Route path='/home' element={<Home />} />
        <Route path ='/:Id'element={<Product />} />
        <Route path='/contactus' element={<ContactUs onAddContactUs={addContactUsInfo}/>} />
        {!authCtx.isLoggedIn && <Route path='/auth' element={<AuthForm />} /> }
      </Routes>
     
   </MainLayout>
  );
}

export default App;
