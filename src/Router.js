import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/nav/Nav.js';
import Footer from './components/footer/Footer';

import Main from './pages/main/Main';
import List from './pages/list/List';
import Detail from './pages/detail/Detail';
import LogIn from './pages/login/LogIn';
import SignUp from './pages/signup/SignUp';
import MyPage from './pages/mypage/MyPage';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
