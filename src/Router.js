import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>{/* <Route path="/" element={<Login />} /> */}</Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default Router;
