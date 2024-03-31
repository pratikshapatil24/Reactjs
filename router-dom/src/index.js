import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from './pages/Contact';
import Products from './pages/Products';
//components
import Address from './components/Address';
import ContactUs from './components/ContactUs';
import ProductDetail from './pages/ProductDetail';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
       <Route index element={<Home/>} />
       <Route path="product" element={<Products/>} >
       <Route path=":id" element={<ProductDetail/>} />
       </Route>
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} >
        <Route path="address" element={<Address/>} />
        <Route path="contact-us" element={<ContactUs/>} />

        </Route>
        <Route path='*' element={<h2>Page no found</h2>}/>

    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <RouterProvider router={router}/>
    {/* <BrowserRouter> */}
   
    {/* </BrowserRouter> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
