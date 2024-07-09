import React from 'react';
import  "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Navbar';
import Product from './components/productForm';

import Login from './components/Login';
import Toast from './components/Alart';
import SearchProducts from './components/search';

const App = () => {
  return (
    <>
      <Toast /> {/* Include the Toast component */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path='/home' element={<Product />} />
            <Route path='/search' element={<SearchProducts />} />
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;