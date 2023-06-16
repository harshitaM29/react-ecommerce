import { Fragment } from 'react';
import Store from './components/Pages/Store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/Pages/About';

import './App.css';

const router = createBrowserRouter([
    {path:'/', element:<Store />},
    {path:'/about', element: <About />}
    

  
])

function App() {


  return (
    <Fragment >
      <RouterProvider router={router} />
     
   </Fragment>
  );
}

export default App;
