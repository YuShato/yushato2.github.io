import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Page } from './components/pages/Page';
import ProductPage from './pages/products';
import ProfilePage from './pages/profile';
import CartPage from './pages/cart';
import ModalPage from './pages/modal';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/modal" element={<ModalPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
